import type { TriviaResponse } from "@/type/trivia";
import type { TriviaField } from "@/type/question";

import { TRIVIA_TYPE } from "@/constant/trivia-type";
import { TRIVIA_AMOUNT } from "@/constant/trivia-amount";
import { TRIVIA_DIFFICULTY } from "@/constant/trivia-difficulty";
import { TRIVIA_CATEGORY } from "@/constant/trivia-category";

import { useEffect } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { delay } from "@/lib/utils";
import { startQuiz } from "@/service/quiz/start-quiz";

import { Button } from "@/component/ui/button";
import { Form } from "@/component/ui/form";

import { formSchema } from "./form-schema";
import FieldSelect from "./field-select";

type Props = {
  onStart: (data: TriviaResponse) => void;
};

const QuizSetupForm = ({ onStart }: Props) => {
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
    try {
      const data = await startQuiz(values);
      onStart(data);
    } catch (error: any) {
      form.setError("root.serverError", {
        message: error.message,
      });
    }
  };

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

  const disabled = form.formState.isSubmitting || form.formState.isSubmitted;

  const serverError = form.formState.errors.root?.serverError;

  useEffect(() => {
    /**
     * Trivia API는 각 IP가 5초에 한 번만 API에 액세스할 수 있다.
     * 5초 뒤 form을 reset하여 다시 액세스를 가능하게한다.
     */
    const formReset = async () => {
      await delay(5000);
      form.reset();
    };

    if (serverError) {
      formReset();
    }
  }, [form, serverError]);

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
      {serverError && (
        <div className="text-red-700 text-center">{serverError.message}</div>
      )}
    </Form>
  );
};

export default QuizSetupForm;
