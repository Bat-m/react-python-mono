"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// graphql.ts
var graphql_exports = {};
__export(graphql_exports, {
  AddBrandingDocument: () => AddBrandingDocument,
  AddProjectDocument: () => AddProjectDocument,
  BrandingFieldsFragmentDoc: () => BrandingFieldsFragmentDoc,
  BrandingsDocument: () => BrandingsDocument,
  ProjectFieldsFragmentDoc: () => ProjectFieldsFragmentDoc,
  ProjectsDocument: () => ProjectsDocument,
  useAddBrandingMutation: () => useAddBrandingMutation,
  useAddProjectMutation: () => useAddProjectMutation,
  useBrandingsLazyQuery: () => useBrandingsLazyQuery,
  useBrandingsQuery: () => useBrandingsQuery,
  useBrandingsSuspenseQuery: () => useBrandingsSuspenseQuery,
  useProjectsLazyQuery: () => useProjectsLazyQuery,
  useProjectsQuery: () => useProjectsQuery,
  useProjectsSuspenseQuery: () => useProjectsSuspenseQuery
});
module.exports = __toCommonJS(graphql_exports);
var import_client = require("@apollo/client");
var Apollo = __toESM(require("@apollo/client"));
var defaultOptions = {};
var BrandingFieldsFragmentDoc = import_client.gql`
    fragment BrandingFields on Branding {
  id
  favicon
}
    `;
var ProjectFieldsFragmentDoc = import_client.gql`
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
var BrandingsDocument = import_client.gql`
    query Brandings {
  brandings {
    ...BrandingFields
  }
}
    ${BrandingFieldsFragmentDoc}`;
function useBrandingsQuery(baseOptions) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery(BrandingsDocument, options);
}
function useBrandingsLazyQuery(baseOptions) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery(BrandingsDocument, options);
}
function useBrandingsSuspenseQuery(baseOptions) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery(BrandingsDocument, options);
}
var ProjectsDocument = import_client.gql`
    query Projects {
  projects {
    ...ProjectFields
  }
}
    ${ProjectFieldsFragmentDoc}`;
function useProjectsQuery(baseOptions) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery(ProjectsDocument, options);
}
function useProjectsLazyQuery(baseOptions) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery(ProjectsDocument, options);
}
function useProjectsSuspenseQuery(baseOptions) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery(ProjectsDocument, options);
}
var AddBrandingDocument = import_client.gql`
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
function useAddBrandingMutation(baseOptions) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation(AddBrandingDocument, options);
}
var AddProjectDocument = import_client.gql`
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
function useAddProjectMutation(baseOptions) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation(AddProjectDocument, options);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AddBrandingDocument,
  AddProjectDocument,
  BrandingFieldsFragmentDoc,
  BrandingsDocument,
  ProjectFieldsFragmentDoc,
  ProjectsDocument,
  useAddBrandingMutation,
  useAddProjectMutation,
  useBrandingsLazyQuery,
  useBrandingsQuery,
  useBrandingsSuspenseQuery,
  useProjectsLazyQuery,
  useProjectsQuery,
  useProjectsSuspenseQuery
});
