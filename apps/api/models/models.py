import asyncio
from contextlib import asynccontextmanager
from typing import AsyncGenerator, Optional
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.dialects.postgresql import ARRAY
from sqlalchemy.dialects.postgresql import BOOLEAN
from xmlrpc.client import Boolean

from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship, sessionmaker
from sqlalchemy import text

Base = declarative_base()

#Je voudrais générér une table projets avec un id uuid autogénérée qui est relié à une table users avec un id uuid autogénérée et une table branding avec un id uuid autogénérée et une table  data-servers


class User(Base):
    __tablename__ = 'users'

    id = Column(UUID(as_uuid=True), primary_key=True, server_default=text('gen_random_uuid()'))
    first_name = Column(String)
    last_name = Column(String)
    email = Column(String)

class Branding(Base):
    __tablename__ = 'brandings'

    id = Column(UUID(as_uuid=True), primary_key=True, server_default=text('gen_random_uuid()'))
    favicon = Column(String)
    photo = Column(ARRAY(String))
    colors = Column(ARRAY(String))
    fonts = Column(String)
    old_database_file = Column(String)

class Project(Base):
    __tablename__ = 'projects'

    id = Column(UUID(as_uuid=True), primary_key=True, server_default=text('gen_random_uuid()'),)
    project_name = Column(String)
    description = Column(String)
    is_company = Column(BOOLEAN)
    company_name = Column(String)
    company_email = Column(String)
    company_street_address = Column(String)
    company_city = Column(String)
    company_zip_code = Column(String)
    company_country = Column(String)
    
    user_id = Column(UUID(as_uuid=True), ForeignKey('users.id'))
    user = relationship('User', back_populates='projects')

    branding_id = Column(UUID(as_uuid=True), ForeignKey('brandings.id'))
    branding = relationship('Branding', back_populates='projects')

User.projects = relationship('Project', back_populates='user')
Branding.projects = relationship('Project', back_populates='branding')


engine = create_async_engine(
    "postgresql+asyncpg://bat@localhost:5432/deploy", echo=True,
)

async_session = sessionmaker(
    bind=engine,
    class_=AsyncSession,
    expire_on_commit=False,
    autocommit=False,
    autoflush=False,
)


@asynccontextmanager
async def get_session() -> AsyncGenerator[AsyncSession, None]:
    async with async_session() as session:
        async with session.begin():
            try:
                yield session
            finally:
                await session.close()


async def _async_main():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.drop_all)
        await conn.run_sync(Base.metadata.create_all)
    await engine.dispose()


if __name__ == "__main__":
    print("Dropping and creating tables")
    asyncio.run(_async_main())
    print("Done.")