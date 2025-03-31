import { z } from "zod";

export const sendContactEmailSchema = z.object({
  name: z.string().max(100).min(1, { message: 'Name is required' }),
  email: z.string().min(1, { message: 'Email is required' }).email(),
  message: z.string().max(1500).min(1, { message: 'Message is required' })
})

export type SendContactEmailSchemaType = z.infer<typeof sendContactEmailSchema>;