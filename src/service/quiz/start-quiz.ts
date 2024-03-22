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
    `/api/quiz?amount=${amount}&type=${type}&difficulty=${difficulty}&category=${category}`,
  );

  const data = res.json();
  return data;
};
