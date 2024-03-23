import { z } from "zod";

export const formSchema = z.object({
  answer: z.string({
    required_error: "You need to select a answer.",
  }),
});
