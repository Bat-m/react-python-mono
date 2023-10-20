from typing import Optional

import strawberry
from sqlalchemy import select
from starlette.applications import Starlette
from starlette.responses import JSONResponse
from starlette.routing import Route
from strawberry.asgi import GraphQL

# schema = strawberry.Schema(query=Query, mutation=Mutation)
# graphql_app = GraphQL(schema)
async def homepage(request):
    return JSONResponse({'hello': 'world'})

routes = [
    Route("/", endpoint=homepage)
]

app = Starlette(debug=True, routes=routes)
# app.add_route("/graphql", graphql_app)