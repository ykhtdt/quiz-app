"use client";

import type { TriviaResponse } from "@/type/trivia";

import { useState } from "react";

import QuizForm from "@/domain/quiz/setup/form";

export default function Home({ params }: { params: { hash: string } }) {
  return (
    <div className="w-full max-w-tablet border-x border-b py-2 px-4 space-y-2">
      <h1 className="text-4xl font-bold tracking-tight">The Trivia Quiz</h1>
      <QuizForm />
    </div>
  );
}
