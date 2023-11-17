"use client";
import AutoForm, { AutoFormSubmit } from "@/components/ui/auto-form";
import { Button } from "@/components/ui/button";

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
  
  return (
    <AutoForm
    onSubmit={(data) => toast(JSON.stringify(data))}
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