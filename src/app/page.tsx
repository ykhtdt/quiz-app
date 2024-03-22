"use client";

import type { TriviaResponse } from "@/type/trivia";
import type { CreateQuestion } from "@/type/question";

import { useState } from "react";

import { shuffle } from "@/lib/utils";
import { useQuizStore } from "@/store/use-quiz-store";

import QuizSetupForm from "@/domain/quiz/setup/form";
import QuizPlayForm from "@/domain/quiz/play/form";

export default function Home({ params }: { params: { hash: string } }) {
  const save = useQuizStore((state) => state.save);

  const [isStarted, setIsStarted] = useState(false);

  const handleStart = (data: TriviaResponse) => {
    const { results } = data;

    const createQuestion: CreateQuestion = (input) => ({
      ...input,
      answers: shuffle([...input.incorrect_answers, input.correct_answer]),
    });

    const questions = results.map(createQuestion);

    save(questions);
    setIsStarted(true);
  };

  return (
    <div className="w-full max-w-tablet border-x border-b py-2 px-4 space-y-2">
      <h1 className="text-4xl font-bold tracking-tight">The Trivia Quiz</h1>
      {!isStarted && <QuizSetupForm onStart={handleStart} />}
      {isStarted && <QuizPlayForm />}
    </div>
  );
}
