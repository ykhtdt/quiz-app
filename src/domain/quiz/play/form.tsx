import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { decode } from "he";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { delay } from "@/lib/utils";
import { useQuizStore } from "@/store/use-quiz-store";

import { Button } from "@/component/ui/button";
import { Form, FormMessage } from "@/component/ui/form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/component/ui/form";
import { RadioGroup, RadioGroupItem } from "@/component/ui/radio-group";

import { formSchema } from "./form-schema";

type Props = {};

const QuizPlayForm = ({}: Props) => {
  const router = useRouter();

  const questions = useQuizStore((state) => state.questions);
  const userAnswers = useQuizStore((state) => state.userAnswers);
  const saveUserAnswers = useQuizStore((state) => state.saveUserAnswers);

  const [stepIndex, setStepIndex] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const { isSubmitting, isSubmitSuccessful } = form.formState;

  const isLastStep = questions.length === stepIndex + 1;

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    saveUserAnswers(values.answer);

    const isCorrectAnswer =
      questions[stepIndex].correct_answer === values.answer;

    if (isCorrectAnswer) {
      setIsCorrect(true);
    }

    await delay(3000);

    if (!isLastStep) {
      setStepIndex((prevStep) => prevStep + 1);
    }

    if (isLastStep) {
      router.push("/result");
    }
  };

  useEffect(() => {
    const handleFormReset = () => {
      form.reset();
      setIsCorrect(false);
    };

    if (form.formState.isSubmitSuccessful) {
      handleFormReset();
    }

    /**
     * react-hook-form에서 formState는 일괄 업데이트
     * 따라서, formState 전체를 useEffect deps에 배치해야한다
     */
  }, [stepIndex, form.formState, form]);

  const disabled = isSubmitting || isSubmitSuccessful;

  return (
    <>
      <h2 className="font-bold text-2xl mb-4">Question {stepIndex + 1}</h2>
      <h3 className="font-medium text-lg mb-1">
        Q. {decode(questions[stepIndex].question)}
      </h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="answer"
            disabled={disabled}
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Choose an answer</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    disabled={field.disabled}
                    className="flex flex-col space-y-1"
                  >
                    {questions[stepIndex].answers.map((answer) => (
                      <FormItem
                        key={answer}
                        className="flex items-center space-x-3 space-y-0"
                      >
                        <FormControl>
                          <RadioGroupItem value={answer} />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {decode(answer)}
                        </FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" size="lg" disabled={disabled}>
            {isLastStep ? "Submit" : "Next"}
          </Button>
        </form>
      </Form>
    </>
  );
};

export default QuizPlayForm;
