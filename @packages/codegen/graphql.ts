import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AddBrandingResponse = Branding;

export type AddProjectResponse = Project | ProjectExists;

export type Branding = {
  __typename?: 'Branding';
  favicon: Scalars['String'];
  id: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addBranding: AddBrandingResponse;
  addProject: AddProjectResponse;
};


export type MutationAddBrandingArgs = {
  favicon: Scalars['String'];
};


export type MutationAddProjectArgs = {
  projectName: Scalars['String'];
};

export type Project = {
  __typename?: 'Project';
  branding?: Maybe<Branding>;
  id: Scalars['ID'];
  projectName: Scalars['String'];
};

export type ProjectExists = {
  __typename?: 'ProjectExists';
  message: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  brandings: Array<Branding>;
  projects: Array<Project>;
};

export type BrandingsQueryVariables = Exact<{ [key: string]: never; }>;


export type BrandingsQuery = { __typename?: 'Query', brandings: Array<{ __typename?: 'Branding', id: string, favicon: string }> };

export type ProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProjectsQuery = { __typename?: 'Query', projects: Array<{ __typename?: 'Project', id: string, projectName: string }> };

export type BrandingFieldsFragment = { __typename?: 'Branding', id: string, favicon: string };

export type ProjectFieldsFragment = { __typename?: 'Project', id: string, projectName: string };

export type AddBrandingMutationVariables = Exact<{
  favicon: Scalars['String'];
}>;


export type AddBrandingMutation = { __typename?: 'Mutation', addBranding: { __typename: 'Branding', id: string, favicon: string } };

export type AddProjectMutationVariables = Exact<{
  projectName: Scalars['String'];
}>;


export type AddProjectMutation = { __typename?: 'Mutation', addProject: { __typename: 'Project', id: string, projectName: string } | { __typename: 'ProjectExists', message: string } };

export const BrandingFieldsFragmentDoc = gql`
    fragment BrandingFields on Branding {
  id
  favicon
}
    `;
export const ProjectFieldsFragmentDoc = gql`
    fragment ProjectFields on Project {
  id
  projectName
}
    `;
export const BrandingsDocument = gql`
    query Brandings {
  brandings {
    ...BrandingFields
  }
}
    ${BrandingFieldsFragmentDoc}`;

export function useBrandingsQuery(options?: Omit<Urql.UseQueryArgs<BrandingsQueryVariables>, 'query'>) {
  return Urql.useQuery<BrandingsQuery, BrandingsQueryVariables>({ query: BrandingsDocument, ...options });
};
export const ProjectsDocument = gql`
    query Projects {
  projects {
    ...ProjectFields
  }
}
    ${ProjectFieldsFragmentDoc}`;

export function useProjectsQuery(options?: Omit<Urql.UseQueryArgs<ProjectsQueryVariables>, 'query'>) {
  return Urql.useQuery<ProjectsQuery, ProjectsQueryVariables>({ query: ProjectsDocument, ...options });
};
export const AddBrandingDocument = gql`
    mutation AddBranding($favicon: String!) {
  addBranding(favicon: $favicon) {
    __typename
    ... on Branding {
      __typename
      ...BrandingFields
    }
  }
}
    ${BrandingFieldsFragmentDoc}`;

export function useAddBrandingMutation() {
  return Urql.useMutation<AddBrandingMutation, AddBrandingMutationVariables>(AddBrandingDocument);
};
export const AddProjectDocument = gql`
    mutation AddProject($projectName: String!) {
  addProject(projectName: $projectName) {
    __typename
    ... on ProjectExists {
      __typename
      message
    }
    ... on Project {
      __typename
      ...ProjectFields
    }
  }
}
    ${ProjectFieldsFragmentDoc}`;

export function useAddProjectMutation() {
  return Urql.useMutation<AddProjectMutation, AddProjectMutationVariables>(AddProjectDocument);
};