import type {
  TriviaRequestAmount,
  TriviaRequestType,
  TriviaRequestDifficulty,
  TriviaRequestCategory,
  TriviaResponseResult,
} from "@/type/trivia";
import type { NumberToString } from "@/type/utils";

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

/**
 * Trivia API의 요청 Form에서 각 Field의 name
 */
export type TriviaFieldName = "amount" | "type" | "difficulty" | "category";

/**
 * Trivia API의 요청 Form에서 각 Field의 타입
 */
export type TriviaField = {
  name: TriviaFieldName;
  label: string;
  placeholder: string;
  content: TriviaFieldItem[];
};

/**
 * Trivia API의 요청 Form에서 각 Field Item의 타입
 */
export type TriviaFieldItem = {
  key: string;
  text: string;
  value: string;
};

/**
 * Trivia API의 요청 Form에서 각 Field와 갖을 수 있는 값
 */
export type TriviaFieldValues = {
  amount: NumberToString<TriviaRequestAmount>;
  type: TriviaRequestType;
  difficulty: TriviaRequestDifficulty;
  category: NumberToString<TriviaRequestCategory>;
};
