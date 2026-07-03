import {
  Award,
  FileCheck2,
  GraduationCap,
  CheckCheck,
  MessageSquareText,
  Sparkles,
  Target,
} from 'lucide-react'

export const floatingIcons = [
  { icon: Award, label: 'Scholarship', position: { top: 84, left: 12 } },
  { icon: GraduationCap, label: 'Admissions', position: { top: 208, right: 6 } },
  { icon: FileCheck2, label: 'Documents', position: { bottom: 42, left: 72 } },
]

export const curriculum = [
  {
    icon: Sparkles,
    title: 'Module 01: Scholarship Positioning',
    description: 'Understand where your profile stands and which scholarships are worth targeting first.',
  },
  {
    icon: GraduationCap,
    title: 'Module 02: University Shortlisting',
    description: 'Build a balanced list of universities and programs based on your academic and career goals.',
  },
  {
    icon: Target,
    title: 'Module 03: Application Strategy',
    description: 'Plan deadlines, priorities, and decision points so your applications stay focused and realistic.',
  },
  {
    icon: MessageSquareText,
    title: 'Module 04: SOP and Essay Guidance',
    description: 'Strengthen your personal story and supporting documents with direct, practical feedback.',
  },
  {
    icon: FileCheck2,
    title: 'Module 05: Document Review',
    description: 'Refine key application materials and reduce avoidable mistakes before submission.',
  },
  {
    icon: CheckCheck,
    title: 'Module 06: Submission and Interview Prep',
    description: 'Finish strong with final review support and better preparation for the next selection steps.',
  },
]
