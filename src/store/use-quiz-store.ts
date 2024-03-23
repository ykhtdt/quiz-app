import type { Question } from "@/type/question";

import { create } from "zustand";

type QuizStore = {
  questions: Question[];
  userAnswers: string[];
  saveQuestions: (nextState: Question[]) => void;
  saveUserAnswers: (answer: string) => void;
};

export const useQuizStore = create<QuizStore>((set) => ({
  questions: [],
  userAnswers: [],
  saveQuestions: (nextState) => {
    set({
      questions: nextState,
    });
  },
  saveUserAnswers: (answer) => {
    set((state) => ({
      userAnswers: state.userAnswers.concat([answer]),
    }));
  },
}));
