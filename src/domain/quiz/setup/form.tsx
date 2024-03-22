import type { TriviaResponse } from "@/type/trivia";
import type { TriviaField } from "@/type/question";

import { TRIVIA_TYPE } from "@/constant/trivia-type";
import { TRIVIA_AMOUNT } from "@/constant/trivia-amount";
import { TRIVIA_DIFFICULTY } from "@/constant/trivia-difficulty";
import { TRIVIA_CATEGORY } from "@/constant/trivia-category";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { startQuiz } from "@/service/quiz/start-quiz";

import { Button } from "@/component/ui/button";
import { Form } from "@/component/ui/form";

import { formSchema } from "./form-schema";
import FieldSelect from "./field-select";

type Props = {
  onStart: (data: TriviaResponse) => void;
};

const QuizForm = ({ onStart }: Props) => {
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

  const fields: TriviaField[] = [
    {
      name: "amount",
      label: "How many questions?",
      placeholder: "How many questions?",
      content: [...TRIVIA_AMOUNT],
    },
    {
      name: "type",
      label: "Select Question Type",
      placeholder: "Select Question Type",
      content: [...TRIVIA_TYPE],
    },
    {
      name: "difficulty",
      label: "Select Question Difficulty",
      placeholder: "Select Question Difficulty",
      content: [...TRIVIA_DIFFICULTY],
    },
    {
      name: "category",
      label: "How many questions?",
      placeholder: "How many questions?",
      content: [...TRIVIA_CATEGORY],
    },
  ];

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        {fields.map((field) => (
          <FieldSelect key={field.name} form={form} {...field} />
        ))}
        <Button type="submit" size="lg" disabled={disabled}>
          Start
        </Button>
      </form>
    </Form>
  );
};

export default QuizForm;
