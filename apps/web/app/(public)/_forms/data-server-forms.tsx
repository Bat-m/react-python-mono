"use client";
import AutoForm, { AutoFormSubmit } from "@/components/ui/auto-form";
import { Button } from "@/components/ui/button";
import { Project } from "@packages/codegen";
import { useAddProjectMutation } from "@packages/codegen";

import { toast } from "sonner";
import * as z from "zod";

// Define your form schema using zod
const dataServerFormSchema = z.object({
  projectName: z
    .string({
      required_error: "project name is required.",
    }),
  description: z.string({
    required_error: "description is required.",
  }),
  isCompany: z.boolean(),
  companyName:z.string(),
  companyEmail: z.string().email(),
  companyAddress: z.object({
    companyStreetAdress: z.string().optional(),
    companyCity: z.string().optional(),
    companyZipCode: z.string().optional(),
    companyCountry: z.string().optional(),//check list api clevercloud
  }),

});



export const DataServerForm=() =>{

  const [addProject, { data, loading, error }] = useAddProjectMutation();
  const onSubmit = (data:z.infer<typeof dataServerFormSchema>) => {
    console.log(data);
  
    addProject({
      variables:{
        projectName:data.projectName, 
        description:data.description, 
        isCompany:data.isCompany, 
        companyName:data.companyName, 
        companyEmail:data.companyEmail, 
        companyStreetAddress:data.companyAddress?.companyStreetAdress, 
        companyCity:data.companyAddress?.companyCity, 
        companyZipCode:data.companyAddress.companyZipCode, 
        companyCountry:data.companyAddress.companyCountry
      }});
  }
  return (
    <AutoForm
    onSubmit={onSubmit}
      // Pass the schema to the form
      formSchema={dataServerFormSchema}
      // You can add additional config for each field
      // to customize the UI
      
    >
      {/* 
      Pass in a AutoFormSubmit or a button with type="submit".
      Alternatively, you can not pass a submit button
      to create auto-saving forms etc.
      */}
      <AutoFormSubmit>Valider</AutoFormSubmit>
      <Button onClick={() => toast('test')}>
  Give me a toast
</Button>
     
     
    </AutoForm>
  );
}