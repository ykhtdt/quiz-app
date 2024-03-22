import type { UseFormReturn } from "react-hook-form";
import type {
  TriviaFieldName,
  TriviaFieldItem,
  TriviaFieldValues,
} from "@/type/question";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/component/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/component/ui/select";

type Props = {
  form: UseFormReturn<TriviaFieldValues>;
  name: TriviaFieldName;
  label: string;
  placeholder: string;
  content: TriviaFieldItem[];
};

const FieldSelect = ({ form, name, label, placeholder, content }: Props) => {
  const disabled = form.formState.isSubmitting || form.formState.isSubmitted;

  return (
    <FormField
      control={form.control}
      name={name}
      disabled={disabled}
      render={({ field }) => (
        <FormItem className="space-y-2">
          <FormLabel>{label}</FormLabel>
          <Select
            onValueChange={field.onChange}
            defaultValue={field.value}
            disabled={field.disabled}
          >
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {content.map((element) => (
                <SelectItem
                  key={`${name}-${element.key}`}
                  value={element.value}
                >
                  {element.text}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </FormItem>
      )}
    />
  );
};

export default FieldSelect;
