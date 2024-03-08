import { TriviaResponseResult } from "@/types/trivia";

/**
 * answers는 정답과 오답을 섞어 만든 문제의 문항을 담는 프로퍼티
 */
export interface Question extends TriviaResponseResult {
  answers: string[];
}

/**
 * Trivia API의 응답으로 받은 정답과 오답을 섞어 문제의 문항으로 만드는 함수
 */
export type CreateQuestion = (input: TriviaResponseResult) => Question;
