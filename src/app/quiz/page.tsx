"use client";

import type { TriviaResponse } from "@/types/trivia";

import { useState } from "react";

import QuizForm from "@/components/domain/quiz/form";

export default function Page({ params }: { params: { hash: string } }) {
  const [data, setData] = useState<TriviaResponse | undefined>(undefined);

  const handleStart = (data: TriviaResponse) => {
    setData(data);
  };

  return (
    <div className="w-full max-w-tablet border py-2 px-4 space-y-2">
      <h1 className="text-4xl font-bold tracking-tight">The Trivia Quiz</h1>
      <QuizForm onStart={handleStart} />
    </div>
  );
}
