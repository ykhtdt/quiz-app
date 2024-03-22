import { z } from "zod";

import { TRIVIA_AMOUNT } from "@/constant/trivia-amount";
import { TRIVIA_TYPE } from "@/constant/trivia-type";
import { TRIVIA_DIFFICULTY } from "@/constant/trivia-difficulty";
import { TRIVIA_CATEGORY } from "@/constant/trivia-category";

import { toArrayTuple } from "@/lib/utils";

const amount = TRIVIA_AMOUNT.map((element) => element.value);
const type = TRIVIA_TYPE.map((element) => element.value);
const difficulty = TRIVIA_DIFFICULTY.map((element) => element.value);
const category = TRIVIA_CATEGORY.map((element) => element.value);

export const formSchema = z.object({
  amount: z.enum(toArrayTuple(amount)),
  type: z.enum(toArrayTuple(type)),
  difficulty: z.enum(toArrayTuple(difficulty)),
  category: z.enum(toArrayTuple(category)),
});
