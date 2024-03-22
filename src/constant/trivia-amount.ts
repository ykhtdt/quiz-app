import type { TriviaRequestAmount } from "@/type/trivia";

type TriviaAmount = ReadonlyArray<{
  key: `${TriviaRequestAmount}`;
  text: `${TriviaRequestAmount}`;
  value: `${TriviaRequestAmount}`;
}>;

export const TRIVIA_AMOUNT: TriviaAmount = Array.from(
  { length: 46 },
  (_, i) => ({
    key: `${i + 5}` as `${TriviaRequestAmount}`,
    text: `${i + 5}` as `${TriviaRequestAmount}`,
    value: `${i + 5}` as `${TriviaRequestAmount}`,
  }),
);
