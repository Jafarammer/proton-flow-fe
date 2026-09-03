// icon
import {
  LuHeadphones,
  LuFileText,
  LuSearch,
  LuMegaphone,
} from "react-icons/lu";
import type { ICardTemplate } from "./types/component";

export const templatesCardData: ICardTemplate[] = [
  {
    id: "customer-support",
    title: "Customer Support Bot",
    description:
      "Automatically triages incoming support tickets, answers FAQs based on knowledge base, and escalates complex issues to human agents.",
    category: "Customer Success",
    icon: LuHeadphones,
  },
  {
    id: "resume-screener",
    title: "Resume Screener",
    description:
      "Extracts key skills and experience from uploaded resumes, scoring them against job description criteria to streamline hiring.",
    category: "HR & Ops",
    icon: LuFileText,
  },
  {
    id: "research-assistant",
    title: "Automated Research Assistant",
    description:
      "Scrapes technical documentation and recent academic papers to summarize findings and generate literature reviews on specified topics.",
    category: "Engineering",
    icon: LuSearch,
  },
  {
    id: "social-media",
    title: "Social Media Content Generator",
    description:
      "Takes blog post URLs and automatically generates platform-specific social media copy, hashtags, and suggested image prompts.",
    category: "Marketing",
    icon: LuMegaphone,
  },
];

export const templateConfig: Record<
  string,
  { title: string; description: string; category: string }
> = {
  "customer-support": {
    title: "Customer Support Bot",
    description:
      "Automatically triages incoming support tickets, answers FAQs based on knowledge base, and escalates complex issues to human agents.",
    category: "Customer Success",
  },
  "resume-screener": {
    title: "Resume Screener",
    description:
      "Extracts key skills and experience from uploaded resumes, scoring them against job description criteria to streamline hiring.",
    category: "HR & Ops",
  },
  "research-assistant": {
    title: "Automated Research Assistant",
    description:
      "Scrapes technical documentation and recent academic papers to summarize findings and generate literature reviews on specified topics.",
    category: "Engineering",
  },
  "social-media": {
    title: "Social Media Content Generator",
    description:
      "Takes blog post URLs and automatically generates platform-specific social media copy, hashtags, and suggested image prompts.",
    category: "Marketing",
  },
};
