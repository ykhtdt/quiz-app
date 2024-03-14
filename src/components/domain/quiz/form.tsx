import type { TriviaResponse } from "@/types/trivia";

import { TRIVIA_TYPE } from "@/constants/trivia-type";
import { TRIVIA_DIFFICULTY } from "@/constants/trivia-difficulty";
import { TRIVIA_CATEGORY } from "@/constants/trivia-category";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { toArrayTuple } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  onStart: (data: TriviaResponse) => void;
};

const formSchema = z.object({
  amount: z.number().min(10).max(50),
  type: z.enum(toArrayTuple(TRIVIA_TYPE.map((element) => element.value))),
  difficulty: z.enum(
    toArrayTuple(TRIVIA_DIFFICULTY.map((element) => element.value)),
  ),
  category: z.enum(
    toArrayTuple(TRIVIA_CATEGORY.map((element) => element.value)),
  ),
});

export default function QuizForm({ onStart }: Props) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: 10,
      type: TRIVIA_TYPE[0].value,
      difficulty: TRIVIA_DIFFICULTY[0].value,
      category: TRIVIA_CATEGORY[0].value,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const { amount, type, difficulty, category } = values;

    const res = await fetch(
      `https://opentdb.com/api.php?amount=${amount}&type=${type}&difficulty=${difficulty}&category=${category}`,
    );

    const data: TriviaResponse = await res.json();
    onStart(data);
  };

  const disabled = form.formState.isSubmitting || form.formState.isSubmitted;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel className="">Select Question Type</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  disabled={disabled}
                  className="flex flex-col space-y-1"
                >
                  {TRIVIA_TYPE.map((element, i) => (
                    <FormItem
                      key={`trivia-type-${element.key}`}
                      className="flex items-center space-x-3 space-y-0"
                    >
                      <FormControl>
                        <RadioGroupItem value={element.value} />
                      </FormControl>
                      <FormLabel className="font-normal">
                        {element.text}
                      </FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="difficulty"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Select Question Difficulty</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  disabled={disabled}
                  className="flex flex-col space-y-1"
                >
                  {TRIVIA_DIFFICULTY.map((element, i) => (
                    <FormItem
                      key={`trivia-difficulty-${element.key}`}
                      className="flex items-center space-x-3 space-y-0"
                    >
                      <FormControl>
                        <RadioGroupItem value={element.value} />
                      </FormControl>
                      <FormLabel className="font-normal">
                        {element.text}
                      </FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Select Question Category</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified email to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {TRIVIA_CATEGORY.map((element, i) => (
                    <SelectItem
                      key={`trivia-category-${element.key}`}
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
        <Button type="submit" disabled={disabled}>
          Submit
        </Button>
      </form>
    </Form>
  );
}
