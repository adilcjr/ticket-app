import { z } from "zod";

export const ticketSchema = z.object({
  title: z.string().min(1, "Title is required.").max(255),
  description: z.string().min(1, "Description is required.").max(65535),
  status: z.string().min(1, "").max(10).optional(),
  priority: z.string().min(1, "").max(10).optional(),
});

export const ticketPatchSchema = z.object({
  title: z.string().min(1, "").max(255).optional(),
  description: z.string().min(1, "").max(65535).optional(),
  status: z.string().min(1, "").max(10).optional(),
  priority: z.string().min(1, "").max(10).optional(),
});
