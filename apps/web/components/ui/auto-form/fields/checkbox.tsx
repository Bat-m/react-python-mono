import { Checkbox } from "../../checkbox";
import { FormControl, FormDescription, FormItem, FormLabel } from "../../form";
import { AutoFormInputComponentProps } from "../types";

export default function AutoFormCheckbox({
  label,
  isRequired,
  field,
  fieldConfigItem,
  fieldProps,
}: AutoFormInputComponentProps) {
  return (
    <FormItem className="flex flex-row items-start p-4 space-x-3 space-y-0 border rounded-md">
      <FormControl>
        <Checkbox
          checked={field.value}
          onCheckedChange={field.onChange}
          {...fieldProps}
        />
      </FormControl>
      <div className="space-y-1 leading-none">
        <FormLabel>
          {label}
          {isRequired && <span className="text-destructive"> *</span>}
        </FormLabel>
        {fieldConfigItem.description && (
          <FormDescription>{fieldConfigItem.description}</FormDescription>
        )}
      </div>
    </FormItem>
  );
}