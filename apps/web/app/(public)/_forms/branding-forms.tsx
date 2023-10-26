"use client";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@radix-ui/react-label";
import { MinusCircle, PlusCircle, Star, Image, Palette, Type, Database } from "lucide-react";
import { Fragment } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import * as z from "zod";

// Define your form schema using zod
const brandingFormSchema = z.object({
  favicon: z.custom<FileList>((val: FileList) => {
    return ["ico"].includes(val[0]?.name?.split('.').pop()) || val?.length === 0 ? true : false;
  }, { message: "Format accepté uniquement (.ico)" }),
  photos: z.custom<FileList>(),
  colors: z
    .array(
      z.object({
        value: z.string(),
      }),
    ).nonempty({ message: "Au moins une couleur est requise." }),
  fonts: z.string().optional(),
  oldDataBaseFile: z.custom<FileList>((val: FileList) => {
    return ["sql", "dump", "xml", "csv"].includes(val[0]?.name?.split('.').pop()) || val?.length === 0 ? true : false;
  }, { message: "Format accepté uniquement (.sql, .dump, .xml, .csv)" })

});

export const BrandingForm = () => {
  const { control, handleSubmit, register, formState: { errors }, } = useForm<z.infer<typeof brandingFormSchema>>({
    resolver: zodResolver(brandingFormSchema),
    defaultValues: {
      colors: [{ value: "#a43d3d" }, { value: "#1c27c4" }],
    }
  });
  const {
    fields,
    append,
    remove,
  } = useFieldArray({
    control,
    name: "colors"
  });
  const onSubmit = (data: z.infer<typeof brandingFormSchema>) => console.log("data: ", data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mt-6 space-y-6">
      <div className="space-y-2">
        <Label className="flex space-x-4"><Star color="orange" /> <p>Favicon</p></Label>
        <Input type="file" placeholder="favicon" {...register("favicon")} />
        {errors.favicon && <p className="mt-0 text-red-400">{errors.favicon.message}</p>}
      </div>

      <div className="space-y-2">
        <Label className="flex space-x-4"><Image color="blue" /> <p>Images / Photos</p></Label>
        <Input
          type={"file"}
          multiple={true}
          placeholder={"mes photos"}
          onChange={(event) => { console.log("event: ", event.target.files), register("photos", { required: true, value: event.target.files }) }}
        />
        {errors.photos && <p className="text-red-400">{errors.photos.message}</p>}
      </div>

      <div className="space-y-2">
        <Label className="flex space-x-4"><Palette color="indigo" /> <p>Couleurs</p></Label>
        <div className="flex flex-wrap ">
          {fields.map((field, index) => {
            return (<Fragment key={`colors.${index}.value`}>

              <div className="flex items-center justify-center pb-2 pl-4 space-x-4">
                <Input type="color" placeholder={`couleurs ${index + 1}`} {...register(`colors.${index}.value`)} {...field[index]} />
                <MinusCircle color="indigo" className="w-10 h-10" onClick={() => remove(index)} />
                {errors.colors && <p className="text-red-400">{errors.colors[index].message}</p>}

              </div>
            </Fragment>)
          })}
        </div>
        <div onClick={() => {
          append([{ value: "" }]);
        }} className="flex items-center justify-start w-[30%] p-2 space-x-2 bg-stone-100 hover:bg-opacity-70 border rounded-md hover:cursor-pointer">
          <PlusCircle className="w-5 h-5" color="indigo" />
          <p>Ajouter une couleur</p>
        </div>
      </div>


      <div className="space-y-2">
        <Label className="flex space-x-4"><Type /> <p>Polices</p></Label>
        <Input type="text" placeholder="fonts" {...register("fonts")} />
        {errors.fonts && <p className="text-red-400">{errors.fonts.message}</p>}
      </div>

      <div className="space-y-2">
        <Label className="flex space-x-4"><Database color="gray" /> <p>Base de données</p></Label>
        <Input type="file" placeholder="fichier ancienne bdd si existe" {...register("oldDataBaseFile")} />
        {errors.oldDataBaseFile && <p className="text-red-400">{errors.oldDataBaseFile.message}</p>}
      </div>

      <Button type="submit">Valider</Button>
    </form>
  );
}