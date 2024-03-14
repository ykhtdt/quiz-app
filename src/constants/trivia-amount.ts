import { TriviaAmount } from "@/types/question";

export const TRIVIA_AMOUNT: TriviaAmount[] = [];

for (let i = 5; i <= 50; i++) {
  TRIVIA_AMOUNT.push({
    key: i,
    text: i,
    value: String(i),
  });
}
