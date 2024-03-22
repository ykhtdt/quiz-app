import type { TriviaFieldItem } from "@/type/question";

export const TRIVIA_AMOUNT: TriviaFieldItem[] = [];

for (let i = 5; i <= 50; i++) {
  TRIVIA_AMOUNT.push({
    key: String(i),
    text: String(i),
    value: String(i),
  });
}
