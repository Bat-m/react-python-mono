
from typing import Optional

import strawberry
from sqlalchemy import select
from starlette.applications import Starlette
from strawberry.asgi import GraphQL
from starlette.middleware.cors import CORSMiddleware
from sqlalchemy.orm import joinedload
from models import models


@strawberry.type
class Project:
    id: strawberry.ID
    project_name: str
    description: str
    is_company: bool
    company_name: str
    company_email: str
    company_street_address: str
    company_city: str
    company_zip_code: str
    company_country: str
    branding:Optional["Branding"] = None
    @classmethod
    def marshal(cls, model: models.Project) -> "Project":
        return cls(
            id=strawberry.ID(str(model.id)), 
            project_name=model.project_name,
            description=model.description,
            is_company=model.is_company,
            company_name=model.company_name,
            company_email=model.company_email,
            company_street_address=model.company_street_address,
            company_city=model.company_city,
            company_zip_code=model.company_zip_code,
            company_country=model.company_country,
            branding=Branding.marshal(model.branding) if model.branding else None
            )


@strawberry.type
class Branding:
    id: strawberry.ID
    favicon: str

    @classmethod
    def marshal(cls, model: models.Branding) -> "Branding":
        return cls(
            id=strawberry.ID(str(model.id)),
            name=model.name
        )


@strawberry.type
class BrandingNotFound:
    message: str = "Branding with this name does not exist"
@strawberry.type
class ProjectExists:
    message: str = "Project with this name already exist"

AddProjectResponse = strawberry.union("AddProjectResponse", (Project,ProjectExists))

AddBrandingResponse = strawberry.union("AddBrandingResponse", (Branding,))


@strawberry.type
class Mutation:
    @strawberry.mutation
    async def add_Branding(self, favicon: str) -> AddBrandingResponse:
        async with models.get_session() as s:
            # if location_name:
            #     sql = select(models.Location).where(models.Location.name == location_name)
            #     db_location = (await s.execute(sql)).scalars().first()
            #     # if db_location is None:
            #     #     return BrandingNotFound()
            db_branding = models.Branding(favicon=favicon)
            s.add(db_branding)
            await s.commit()
        return Branding.marshal(db_branding)

    @strawberry.mutation
    async def add_Project(self, project_name: str,
    description: str,
    is_company: bool,
    company_name: str,
    company_email: str,
    company_street_address: str,
    company_city: str,
    company_zip_code: str,
    company_country: str ) -> AddProjectResponse:
        async with models.get_session() as s:
            sql = select(models.Project).where(models.Project.project_name == project_name)
            existing_db_project = (await s.execute(sql)).first()
            if existing_db_project is not None:
                return ProjectExists()
            db_project = models.Project(project_name=project_name, description=description, is_company=is_company, company_name=company_name, company_email=company_email, company_street_address=company_street_address, company_city=company_city, company_zip_code=company_zip_code, company_country=company_country)
            s.add(db_project)
            await s.commit()
        return Project.marshal(db_project)


@strawberry.type
class Query:
    @strawberry.field
    async def brandings(self) -> list[Branding]:
        async with models.get_session() as s:
            sql = select(models.Branding).order_by(models.Branding.id)
            db_brandings = (await s.execute(sql)).scalars().unique().all()
        return [Branding.marshal(branding) for branding in db_brandings]

    @strawberry.field
    async def projects(self) -> list[Project]:
        async with models.get_session() as s:
            sql = select(models.Project).options(joinedload(models.Project.branding)).order_by(models.Project.project_name)
            db_projects = (await s.execute(sql)).scalars().unique().all()
        return [Project.marshal(loc) for loc in db_projects]


schema = strawberry.Schema(query=Query, mutation=Mutation)
graphql_app = GraphQL(schema)
app = Starlette()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Permet à toutes les origines
    allow_credentials=True,
    allow_methods=["*"],  # Permet toutes les méthodes
    allow_headers=["*"],  # Permet tous les headers
)
app.add_route("/graphql", graphql_app)