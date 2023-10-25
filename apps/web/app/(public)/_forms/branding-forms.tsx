"use client";
import AutoForm, { AutoFormSubmit } from "@/components/ui/auto-form";
import * as z from "zod";

// Define your form schema using zod
const brandingFormSchema = z.object({
  favicon: z
    .string({
      required_error: "favicon is required.",
    }),
  photos: z.any(),
  colors: z.any(),
  fonts:z.any(),
  oldDataBaseFile: z.string(),
});

export const BrandingForm=() =>{
  return (
    <AutoForm
      // Pass the schema to the form
      formSchema={brandingFormSchema}
      // You can add additional config for each field
      // to customize the UI
      
    >
      {/* 
      Pass in a AutoFormSubmit or a button with type="submit".
      Alternatively, you can not pass a submit button
      to create auto-saving forms etc.
      */}
      <AutoFormSubmit>Valider</AutoFormSubmit>

     
     
    </AutoForm>
  );
}