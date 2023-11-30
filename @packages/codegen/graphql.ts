import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AddBrandingResponse = Branding;

export type AddProjectResponse = Project | ProjectExists;

export type Branding = {
  __typename?: 'Branding';
  favicon: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addBranding: AddBrandingResponse;
  addProject: AddProjectResponse;
};


export type MutationAddBrandingArgs = {
  favicon: Scalars['String']['input'];
};


export type MutationAddProjectArgs = {
  companyCity: Scalars['String']['input'];
  companyCountry: Scalars['String']['input'];
  companyEmail: Scalars['String']['input'];
  companyName: Scalars['String']['input'];
  companyStreetAddress: Scalars['String']['input'];
  companyZipCode: Scalars['String']['input'];
  description: Scalars['String']['input'];
  isCompany: Scalars['Boolean']['input'];
  projectName: Scalars['String']['input'];
};

export type Project = {
  __typename?: 'Project';
  branding?: Maybe<Branding>;
  companyCity: Scalars['String']['output'];
  companyCountry: Scalars['String']['output'];
  companyEmail: Scalars['String']['output'];
  companyName: Scalars['String']['output'];
  companyStreetAddress: Scalars['String']['output'];
  companyZipCode: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isCompany: Scalars['Boolean']['output'];
  projectName: Scalars['String']['output'];
};

export type ProjectExists = {
  __typename?: 'ProjectExists';
  message: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  brandings: Array<Branding>;
  projects: Array<Project>;
};

export type BrandingsQueryVariables = Exact<{ [key: string]: never; }>;


export type BrandingsQuery = { __typename?: 'Query', brandings: Array<{ __typename?: 'Branding', id: string, favicon: string }> };

export type ProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProjectsQuery = { __typename?: 'Query', projects: Array<{ __typename?: 'Project', id: string, projectName: string, companyCity: string, companyCountry: string, companyEmail: string, companyName: string, companyStreetAddress: string, companyZipCode: string, description: string, isCompany: boolean }> };

export type BrandingFieldsFragment = { __typename?: 'Branding', id: string, favicon: string };

export type ProjectFieldsFragment = { __typename?: 'Project', id: string, projectName: string, companyCity: string, companyCountry: string, companyEmail: string, companyName: string, companyStreetAddress: string, companyZipCode: string, description: string, isCompany: boolean };

export type AddBrandingMutationVariables = Exact<{
  favicon: Scalars['String']['input'];
}>;


export type AddBrandingMutation = { __typename?: 'Mutation', addBranding: { __typename: 'Branding', id: string, favicon: string } };

export type AddProjectMutationVariables = Exact<{
  companyCity: Scalars['String']['input'];
  companyCountry: Scalars['String']['input'];
  companyEmail: Scalars['String']['input'];
  companyName: Scalars['String']['input'];
  companyStreetAddress: Scalars['String']['input'];
  companyZipCode: Scalars['String']['input'];
  description: Scalars['String']['input'];
  isCompany: Scalars['Boolean']['input'];
  projectName: Scalars['String']['input'];
}>;


export type AddProjectMutation = { __typename?: 'Mutation', addProject: { __typename: 'Project', id: string, projectName: string, companyCity: string, companyCountry: string, companyEmail: string, companyName: string, companyStreetAddress: string, companyZipCode: string, description: string, isCompany: boolean } | { __typename: 'ProjectExists', message: string } };

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
  companyCity
  companyCountry
  companyEmail
  companyName
  companyStreetAddress
  companyZipCode
  description
  isCompany
}
    `;
export const BrandingsDocument = gql`
    query Brandings {
  brandings {
    ...BrandingFields
  }
}
    ${BrandingFieldsFragmentDoc}`;

/**
 * __useBrandingsQuery__
 *
 * To run a query within a React component, call `useBrandingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBrandingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBrandingsQuery({
 *   variables: {
 *   },
 * });
 */
export function useBrandingsQuery(baseOptions?: Apollo.QueryHookOptions<BrandingsQuery, BrandingsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BrandingsQuery, BrandingsQueryVariables>(BrandingsDocument, options);
      }
export function useBrandingsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BrandingsQuery, BrandingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BrandingsQuery, BrandingsQueryVariables>(BrandingsDocument, options);
        }
export function useBrandingsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<BrandingsQuery, BrandingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<BrandingsQuery, BrandingsQueryVariables>(BrandingsDocument, options);
        }
export type BrandingsQueryHookResult = ReturnType<typeof useBrandingsQuery>;
export type BrandingsLazyQueryHookResult = ReturnType<typeof useBrandingsLazyQuery>;
export type BrandingsSuspenseQueryHookResult = ReturnType<typeof useBrandingsSuspenseQuery>;
export type BrandingsQueryResult = Apollo.QueryResult<BrandingsQuery, BrandingsQueryVariables>;
export const ProjectsDocument = gql`
    query Projects {
  projects {
    ...ProjectFields
  }
}
    ${ProjectFieldsFragmentDoc}`;

/**
 * __useProjectsQuery__
 *
 * To run a query within a React component, call `useProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProjectsQuery({
 *   variables: {
 *   },
 * });
 */
export function useProjectsQuery(baseOptions?: Apollo.QueryHookOptions<ProjectsQuery, ProjectsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProjectsQuery, ProjectsQueryVariables>(ProjectsDocument, options);
      }
export function useProjectsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProjectsQuery, ProjectsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProjectsQuery, ProjectsQueryVariables>(ProjectsDocument, options);
        }
export function useProjectsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ProjectsQuery, ProjectsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProjectsQuery, ProjectsQueryVariables>(ProjectsDocument, options);
        }
export type ProjectsQueryHookResult = ReturnType<typeof useProjectsQuery>;
export type ProjectsLazyQueryHookResult = ReturnType<typeof useProjectsLazyQuery>;
export type ProjectsSuspenseQueryHookResult = ReturnType<typeof useProjectsSuspenseQuery>;
export type ProjectsQueryResult = Apollo.QueryResult<ProjectsQuery, ProjectsQueryVariables>;
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
export type AddBrandingMutationFn = Apollo.MutationFunction<AddBrandingMutation, AddBrandingMutationVariables>;

/**
 * __useAddBrandingMutation__
 *
 * To run a mutation, you first call `useAddBrandingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddBrandingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addBrandingMutation, { data, loading, error }] = useAddBrandingMutation({
 *   variables: {
 *      favicon: // value for 'favicon'
 *   },
 * });
 */
export function useAddBrandingMutation(baseOptions?: Apollo.MutationHookOptions<AddBrandingMutation, AddBrandingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddBrandingMutation, AddBrandingMutationVariables>(AddBrandingDocument, options);
      }
export type AddBrandingMutationHookResult = ReturnType<typeof useAddBrandingMutation>;
export type AddBrandingMutationResult = Apollo.MutationResult<AddBrandingMutation>;
export type AddBrandingMutationOptions = Apollo.BaseMutationOptions<AddBrandingMutation, AddBrandingMutationVariables>;
export const AddProjectDocument = gql`
    mutation AddProject($companyCity: String!, $companyCountry: String!, $companyEmail: String!, $companyName: String!, $companyStreetAddress: String!, $companyZipCode: String!, $description: String!, $isCompany: Boolean!, $projectName: String!) {
  addProject(
    projectName: $projectName
    companyCity: $companyCity
    companyCountry: $companyCountry
    companyEmail: $companyEmail
    companyName: $companyName
    companyStreetAddress: $companyStreetAddress
    companyZipCode: $companyZipCode
    description: $description
    isCompany: $isCompany
  ) {
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
export type AddProjectMutationFn = Apollo.MutationFunction<AddProjectMutation, AddProjectMutationVariables>;

/**
 * __useAddProjectMutation__
 *
 * To run a mutation, you first call `useAddProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addProjectMutation, { data, loading, error }] = useAddProjectMutation({
 *   variables: {
 *      companyCity: // value for 'companyCity'
 *      companyCountry: // value for 'companyCountry'
 *      companyEmail: // value for 'companyEmail'
 *      companyName: // value for 'companyName'
 *      companyStreetAddress: // value for 'companyStreetAddress'
 *      companyZipCode: // value for 'companyZipCode'
 *      description: // value for 'description'
 *      isCompany: // value for 'isCompany'
 *      projectName: // value for 'projectName'
 *   },
 * });
 */
export function useAddProjectMutation(baseOptions?: Apollo.MutationHookOptions<AddProjectMutation, AddProjectMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddProjectMutation, AddProjectMutationVariables>(AddProjectDocument, options);
      }
export type AddProjectMutationHookResult = ReturnType<typeof useAddProjectMutation>;
export type AddProjectMutationResult = Apollo.MutationResult<AddProjectMutation>;
export type AddProjectMutationOptions = Apollo.BaseMutationOptions<AddProjectMutation, AddProjectMutationVariables>;