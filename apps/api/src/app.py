
from typing import Optional

import strawberry
from sqlalchemy import select
from starlette.applications import Starlette
from strawberry.asgi import GraphQL

from models import models


@strawberry.type
class Project:
    id: strawberry.ID
    project_name: str
    branding:Optional["Branding"] = None
    @classmethod
    def marshal(cls, model: models.Project) -> "Project":
        return cls(
            id=strawberry.ID(str(model.id)), 
            project_name=model.project_name,
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
    async def add_Project(self, project_name: str) -> AddProjectResponse:
        async with models.get_session() as s:
            sql = select(models.Project).where(models.Project.project_name == project_name)
            existing_db_project = (await s.execute(sql)).first()
            if existing_db_project is not None:
                return ProjectExists()
            db_project = models.Project(project_name=project_name)
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
            sql = select(models.Project).order_by(models.Project.project_name)
            db_projects = (await s.execute(sql)).scalars().unique().all()
        return [Project.marshal(loc) for loc in db_projects]


schema = strawberry.Schema(query=Query, mutation=Mutation)
graphql_app = GraphQL(schema)
app = Starlette()
app.add_route("/graphql", graphql_app)