"use strict";var S=Object.create;var p=Object.defineProperty;var j=Object.getOwnPropertyDescriptor;var A=Object.getOwnPropertyNames;var B=Object.getPrototypeOf,P=Object.prototype.hasOwnProperty;var x=(t,e)=>{for(var r in e)p(t,r,{get:e[r],enumerable:!0})},g=(t,e,r,c)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of A(e))!P.call(t,i)&&i!==r&&p(t,i,{get:()=>e[i],enumerable:!(c=j(e,i))||c.enumerable});return t};var Q=(t,e,r)=>(r=t!=null?S(B(t)):{},g(e||!t||!t.__esModule?p(r,"default",{value:t,enumerable:!0}):r,t)),M=t=>g(p({},"__esModule",{value:!0}),t);var $={};x($,{AddBrandingDocument:()=>l,AddProjectDocument:()=>m,BrandingFieldsFragmentDoc:()=>y,BrandingsDocument:()=>s,ProjectFieldsFragmentDoc:()=>d,ProjectsDocument:()=>u,useAddBrandingMutation:()=>R,useAddProjectMutation:()=>V,useBrandingsLazyQuery:()=>_,useBrandingsQuery:()=>b,useBrandingsSuspenseQuery:()=>C,useProjectsLazyQuery:()=>k,useProjectsQuery:()=>f,useProjectsSuspenseQuery:()=>T});module.exports=M($);var a=require("@apollo/client"),n=Q(require("@apollo/client")),o={},y=a.gql`
    fragment BrandingFields on Branding {
  id
  favicon
}
    `,d=a.gql`
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
    `,s=a.gql`
    query Brandings {
  brandings {
    ...BrandingFields
  }
}
    ${y}`;function b(t){let e={...o,...t};return n.useQuery(s,e)}function _(t){let e={...o,...t};return n.useLazyQuery(s,e)}function C(t){let e={...o,...t};return n.useSuspenseQuery(s,e)}var u=a.gql`
    query Projects {
  projects {
    ...ProjectFields
  }
}
    ${d}`;function f(t){let e={...o,...t};return n.useQuery(u,e)}function k(t){let e={...o,...t};return n.useLazyQuery(u,e)}function T(t){let e={...o,...t};return n.useSuspenseQuery(u,e)}var l=a.gql`
    mutation AddBranding($favicon: String!) {
  addBranding(favicon: $favicon) {
    __typename
    ... on Branding {
      __typename
      ...BrandingFields
    }
  }
}
    ${y}`;function R(t){let e={...o,...t};return n.useMutation(l,e)}var m=a.gql`
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
    ${d}`;function V(t){let e={...o,...t};return n.useMutation(m,e)}0&&(module.exports={AddBrandingDocument,AddProjectDocument,BrandingFieldsFragmentDoc,BrandingsDocument,ProjectFieldsFragmentDoc,ProjectsDocument,useAddBrandingMutation,useAddProjectMutation,useBrandingsLazyQuery,useBrandingsQuery,useBrandingsSuspenseQuery,useProjectsLazyQuery,useProjectsQuery,useProjectsSuspenseQuery});
