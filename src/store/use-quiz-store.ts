import type { Question } from "@/type/question";

import { create } from "zustand";

type QuizStore = {
  questions: Question[];
  save: (nextState: Question[]) => void;
};

export const useQuizStore = create<QuizStore>((set) => ({
  questions: [],
  save: (nextState) => {
    set({
      questions: nextState,
    });
  },
}));
