import type { TriviaResponse } from "@/types/trivia";

import { TRIVIA_TYPE } from "@/constants/trivia-type";
import { TRIVIA_AMOUNT } from "@/constants/trivia-amount";
import { TRIVIA_DIFFICULTY } from "@/constants/trivia-difficulty";
import { TRIVIA_CATEGORY } from "@/constants/trivia-category";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { toArrayTuple } from "@/lib/utils";
import { startQuiz } from "@/service/quiz/start-quiz";

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

import {
  TRIVIA_FORM_AMOUNT,
  TRIVIA_FORM_TYPE,
  TRIVIA_FORM_DIFFICULTY,
  TRIVIA_FORM_CATEGORY,
} from "./form.schema";

type Props = {
  onStart: (data: TriviaResponse) => void;
};

const formSchema = z.object({
  amount: z.enum(TRIVIA_FORM_AMOUNT),
  type: z.enum(TRIVIA_FORM_TYPE),
  difficulty: z.enum(TRIVIA_FORM_DIFFICULTY),
  category: z.enum(TRIVIA_FORM_CATEGORY),
});

export default function QuizForm({ onStart }: Props) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: "10",
      type: "multiple",
      difficulty: "0",
      category: "0",
    },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    const data = await startQuiz(values);
    console.log(data);
  };

  const disabled = form.formState.isSubmitting || form.formState.isSubmitted;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="amount"
          disabled={disabled}
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>How many questions?</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                disabled={field.disabled}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="How many questions?" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {TRIVIA_AMOUNT.map((element, i) => (
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
        <FormField
          control={form.control}
          name="type"
          disabled={disabled}
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Select Question Type</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                disabled={field.disabled}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Question Type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {TRIVIA_TYPE.map((element, i) => (
                    <SelectItem
                      key={`trivia-type-${element.key}`}
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
        <FormField
          control={form.control}
          name="difficulty"
          disabled={disabled}
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Select Question Difficulty</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                disabled={field.disabled}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Question Difficulty" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {TRIVIA_DIFFICULTY.map((element, i) => (
                    <SelectItem
                      key={`trivia-difficulty-${element.key}`}
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
        <FormField
          control={form.control}
          name="category"
          disabled={disabled}
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Select Question Category</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                disabled={field.disabled}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Question Category" />
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
        <Button type="submit" size="lg" disabled={disabled}>
          Start
        </Button>
      </form>
    </Form>
  );
}
