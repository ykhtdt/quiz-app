import type { StringifyProperties } from "@/type/utils";
import type { TriviaRequestQuery, TriviaResponse } from "@/type/trivia";

type Props = StringifyProperties<TriviaRequestQuery>;

export const startQuiz = async ({
  amount,
  type,
  difficulty,
  category,
}: Props): Promise<TriviaResponse> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}?amount=${amount}&type=${type}&difficulty=${difficulty}&category=${category}`,
  );

  if (!res.ok) {
    const { response_code }: TriviaResponse = await res.json();

    if (response_code === 5) {
      throw new Error("Too many request. Please try again.");
    }

    throw new Error("Internal Server Error.");
  }

  const data: TriviaResponse = await res.json();
  return data;
};
