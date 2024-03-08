import type { TriviaResponse } from "@/types/trivia";
import type { CreateQuestion } from "@/types/question";

import { shuffle } from "@/lib/utils";

const getQuestions = async (uuid: string): Promise<TriviaResponse> => {
  const res = await fetch(
    `${process.env.API_URL}?type=multiple&amount=10&v=${uuid}`,
  );

  if (!res.ok) {
    if (res.status === 429) {
      throw new Error("Too many request. Please try again");
    }

    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export default async function Page({ params }: { params: { hash: string } }) {
  const { response_code, results } = await getQuestions(params.hash);

  const createQuestion: CreateQuestion = (input) => {
    return {
      ...input,
      answers: shuffle([...input.incorrect_answers, input.correct_answer]),
    };
  };

  const questions = results.map((result) => createQuestion(result));

  console.log(questions);

  return <></>;
}
