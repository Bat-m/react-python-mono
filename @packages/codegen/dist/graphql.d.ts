import * as Apollo from '@apollo/client';

type Maybe<T> = T | null;
type InputMaybe<T> = Maybe<T>;
type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
type MakeEmpty<T extends {
    [key: string]: unknown;
}, K extends keyof T> = {
    [_ in K]?: never;
};
type Incremental<T> = T | {
    [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
};
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
    ID: {
        input: string;
        output: string;
    };
    String: {
        input: string;
        output: string;
    };
    Boolean: {
        input: boolean;
        output: boolean;
    };
    Int: {
        input: number;
        output: number;
    };
    Float: {
        input: number;
        output: number;
    };
};
type AddBrandingResponse = Branding;
type AddProjectResponse = Project | ProjectExists;
type Branding = {
    __typename?: 'Branding';
    favicon: Scalars['String']['output'];
    id: Scalars['ID']['output'];
};
type Mutation = {
    __typename?: 'Mutation';
    addBranding: AddBrandingResponse;
    addProject: AddProjectResponse;
};
type MutationAddBrandingArgs = {
    favicon: Scalars['String']['input'];
};
type MutationAddProjectArgs = {
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
type Project = {
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
type ProjectExists = {
    __typename?: 'ProjectExists';
    message: Scalars['String']['output'];
};
type Query = {
    __typename?: 'Query';
    brandings: Array<Branding>;
    projects: Array<Project>;
};
type BrandingsQueryVariables = Exact<{
    [key: string]: never;
}>;
type BrandingsQuery = {
    __typename?: 'Query';
    brandings: Array<{
        __typename?: 'Branding';
        id: string;
        favicon: string;
    }>;
};
type ProjectsQueryVariables = Exact<{
    [key: string]: never;
}>;
type ProjectsQuery = {
    __typename?: 'Query';
    projects: Array<{
        __typename?: 'Project';
        id: string;
        projectName: string;
        companyCity: string;
        companyCountry: string;
        companyEmail: string;
        companyName: string;
        companyStreetAddress: string;
        companyZipCode: string;
        description: string;
        isCompany: boolean;
    }>;
};
type BrandingFieldsFragment = {
    __typename?: 'Branding';
    id: string;
    favicon: string;
};
type ProjectFieldsFragment = {
    __typename?: 'Project';
    id: string;
    projectName: string;
    companyCity: string;
    companyCountry: string;
    companyEmail: string;
    companyName: string;
    companyStreetAddress: string;
    companyZipCode: string;
    description: string;
    isCompany: boolean;
};
type AddBrandingMutationVariables = Exact<{
    favicon: Scalars['String']['input'];
}>;
type AddBrandingMutation = {
    __typename?: 'Mutation';
    addBranding: {
        __typename: 'Branding';
        id: string;
        favicon: string;
    };
};
type AddProjectMutationVariables = Exact<{
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
type AddProjectMutation = {
    __typename?: 'Mutation';
    addProject: {
        __typename: 'Project';
        id: string;
        projectName: string;
        companyCity: string;
        companyCountry: string;
        companyEmail: string;
        companyName: string;
        companyStreetAddress: string;
        companyZipCode: string;
        description: string;
        isCompany: boolean;
    } | {
        __typename: 'ProjectExists';
        message: string;
    };
};
declare const BrandingFieldsFragmentDoc: Apollo.DocumentNode;
declare const ProjectFieldsFragmentDoc: Apollo.DocumentNode;
declare const BrandingsDocument: Apollo.DocumentNode;
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
declare function useBrandingsQuery(baseOptions?: Apollo.QueryHookOptions<BrandingsQuery, BrandingsQueryVariables>): Apollo.QueryResult<BrandingsQuery, Exact<{
    [key: string]: never;
}>>;
declare function useBrandingsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BrandingsQuery, BrandingsQueryVariables>): Apollo.LazyQueryResultTuple<BrandingsQuery, Exact<{
    [key: string]: never;
}>>;
declare function useBrandingsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<BrandingsQuery, BrandingsQueryVariables>): Apollo.UseSuspenseQueryResult<BrandingsQuery, Exact<{
    [key: string]: never;
}>>;
type BrandingsQueryHookResult = ReturnType<typeof useBrandingsQuery>;
type BrandingsLazyQueryHookResult = ReturnType<typeof useBrandingsLazyQuery>;
type BrandingsSuspenseQueryHookResult = ReturnType<typeof useBrandingsSuspenseQuery>;
type BrandingsQueryResult = Apollo.QueryResult<BrandingsQuery, BrandingsQueryVariables>;
declare const ProjectsDocument: Apollo.DocumentNode;
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
declare function useProjectsQuery(baseOptions?: Apollo.QueryHookOptions<ProjectsQuery, ProjectsQueryVariables>): Apollo.QueryResult<ProjectsQuery, Exact<{
    [key: string]: never;
}>>;
declare function useProjectsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProjectsQuery, ProjectsQueryVariables>): Apollo.LazyQueryResultTuple<ProjectsQuery, Exact<{
    [key: string]: never;
}>>;
declare function useProjectsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ProjectsQuery, ProjectsQueryVariables>): Apollo.UseSuspenseQueryResult<ProjectsQuery, Exact<{
    [key: string]: never;
}>>;
type ProjectsQueryHookResult = ReturnType<typeof useProjectsQuery>;
type ProjectsLazyQueryHookResult = ReturnType<typeof useProjectsLazyQuery>;
type ProjectsSuspenseQueryHookResult = ReturnType<typeof useProjectsSuspenseQuery>;
type ProjectsQueryResult = Apollo.QueryResult<ProjectsQuery, ProjectsQueryVariables>;
declare const AddBrandingDocument: Apollo.DocumentNode;
type AddBrandingMutationFn = Apollo.MutationFunction<AddBrandingMutation, AddBrandingMutationVariables>;
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
declare function useAddBrandingMutation(baseOptions?: Apollo.MutationHookOptions<AddBrandingMutation, AddBrandingMutationVariables>): Apollo.MutationTuple<AddBrandingMutation, Exact<{
    favicon: string;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
type AddBrandingMutationHookResult = ReturnType<typeof useAddBrandingMutation>;
type AddBrandingMutationResult = Apollo.MutationResult<AddBrandingMutation>;
type AddBrandingMutationOptions = Apollo.BaseMutationOptions<AddBrandingMutation, AddBrandingMutationVariables>;
declare const AddProjectDocument: Apollo.DocumentNode;
type AddProjectMutationFn = Apollo.MutationFunction<AddProjectMutation, AddProjectMutationVariables>;
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
declare function useAddProjectMutation(baseOptions?: Apollo.MutationHookOptions<AddProjectMutation, AddProjectMutationVariables>): Apollo.MutationTuple<AddProjectMutation, Exact<{
    companyCity: string;
    companyCountry: string;
    companyEmail: string;
    companyName: string;
    companyStreetAddress: string;
    companyZipCode: string;
    description: string;
    isCompany: boolean;
    projectName: string;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
type AddProjectMutationHookResult = ReturnType<typeof useAddProjectMutation>;
type AddProjectMutationResult = Apollo.MutationResult<AddProjectMutation>;
type AddProjectMutationOptions = Apollo.BaseMutationOptions<AddProjectMutation, AddProjectMutationVariables>;

export { AddBrandingDocument, AddBrandingMutation, AddBrandingMutationFn, AddBrandingMutationHookResult, AddBrandingMutationOptions, AddBrandingMutationResult, AddBrandingMutationVariables, AddBrandingResponse, AddProjectDocument, AddProjectMutation, AddProjectMutationFn, AddProjectMutationHookResult, AddProjectMutationOptions, AddProjectMutationResult, AddProjectMutationVariables, AddProjectResponse, Branding, BrandingFieldsFragment, BrandingFieldsFragmentDoc, BrandingsDocument, BrandingsLazyQueryHookResult, BrandingsQuery, BrandingsQueryHookResult, BrandingsQueryResult, BrandingsQueryVariables, BrandingsSuspenseQueryHookResult, Exact, Incremental, InputMaybe, MakeEmpty, MakeMaybe, MakeOptional, Maybe, Mutation, MutationAddBrandingArgs, MutationAddProjectArgs, Project, ProjectExists, ProjectFieldsFragment, ProjectFieldsFragmentDoc, ProjectsDocument, ProjectsLazyQueryHookResult, ProjectsQuery, ProjectsQueryHookResult, ProjectsQueryResult, ProjectsQueryVariables, ProjectsSuspenseQueryHookResult, Query, Scalars, useAddBrandingMutation, useAddProjectMutation, useBrandingsLazyQuery, useBrandingsQuery, useBrandingsSuspenseQuery, useProjectsLazyQuery, useProjectsQuery, useProjectsSuspenseQuery };
