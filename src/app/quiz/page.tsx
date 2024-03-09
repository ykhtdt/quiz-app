import type { TriviaResponse } from "@/types/trivia";
import type { CreateQuestion } from "@/types/question";

import { shuffle } from "@/lib/utils";

const getQuestions = async (uuid: string): Promise<TriviaResponse> => {
  const res = await fetch(`${process.env.APP_URL}/api/quiz`);

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

  const questions = results.map(createQuestion);

  console.log(response_code, questions);

  return <></>;
}
