import { z } from 'zod'

export const researchSchema = z.object({
  title:       z.string().min(10, 'Title must be at least 10 characters'),
  authorName:  z.string().min(3, 'Full name is required'),
  institution: z.string().min(3, 'Institution is required'),
  email:       z.string().email('Valid email is required'),
  phone:       z.string().optional(),
  category:    z.string().min(1, 'Please select a category'),
  abstract:    z.string().min(100, 'Abstract must be at least 100 characters'),
  fileUrl: z.string().optional(),
  ethicsApproval: z.boolean().refine(v => v === true, 'Ethics approval confirmation is required'),
})

export const complaintSchema = z.object({
  fullName:  z.string().min(3, 'Full name is required'),
  email:     z.string().email('Valid email is required'),
  phone:     z.string().optional(),
  category:  z.string().min(1, 'Please select a category'),
  subject:   z.string().min(5, 'Subject is required'),
  message:   z.string().min(20, 'Message must be at least 20 characters'),
})

export const contactSchema = z.object({
  fullName: z.string().min(3, 'Full name is required'),
  email:    z.string().email('Valid email is required'),
  phone:    z.string().optional(),
  category: z.string().min(1, 'Please select a category'),
  subject:  z.string().min(5, 'Subject is required'),
  message:  z.string().min(20, 'Message must be at least 20 characters'),
})

export type ResearchFormData  = z.infer<typeof researchSchema>
export type ComplaintFormData = z.infer<typeof complaintSchema>
export type ContactFormData   = z.infer<typeof contactSchema>
