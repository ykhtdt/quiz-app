import { TriviaResponseResult } from "@/type/trivia";

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
 * Trivia API의 요청 Form에서 각 Field의 타입
 */
export type TriviaFieldValue = {
  key: string;
  text: string;
  value: string;
};

export type TriviaFieldValues = {
  amount:
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12"
    | "13"
    | "14"
    | "15"
    | "16"
    | "17"
    | "18"
    | "19"
    | "20"
    | "21"
    | "22"
    | "23"
    | "24"
    | "25"
    | "26"
    | "27"
    | "28"
    | "29"
    | "30"
    | "31"
    | "32"
    | "33"
    | "34"
    | "35"
    | "36"
    | "37"
    | "38"
    | "39"
    | "40"
    | "41"
    | "42"
    | "43"
    | "44"
    | "45"
    | "46"
    | "47"
    | "48"
    | "49"
    | "50";
  type: "0" | "multiple" | "boolean";
  difficulty: "0" | "easy" | "medium" | "hard";
  category:
    | "0"
    | "9"
    | "10"
    | "11"
    | "12"
    | "13"
    | "14"
    | "15"
    | "16"
    | "17"
    | "18"
    | "19"
    | "20"
    | "21"
    | "22"
    | "23"
    | "24"
    | "25"
    | "26"
    | "27"
    | "28"
    | "29"
    | "30"
    | "31"
    | "32";
};
