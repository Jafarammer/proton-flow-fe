import type { Edge } from "@xyflow/react";
import type { WorkflowNode } from "./types/templatePreview";
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

export const customerSupportNodes: WorkflowNode[] = [
  {
    id: "trigger",
    type: "workflowNode",
    position: {
      x: 0,
      y: 180,
    },
    data: {
      label: "New Support Ticket",
      description: "Webhook Trigger",
      nodeType: "trigger",
    },
  },
  {
    id: "analyze-intent",
    type: "workflowNode",
    position: {
      x: 260,
      y: 180,
    },
    data: {
      label: "Analyze Intent",
      description: "AI Model",
      nodeType: "ai",
    },
  },
  {
    id: "route-intent",
    type: "workflowNode",
    position: {
      x: 520,
      y: 180,
    },
    data: {
      label: "Route by Intent",
      description: "Condition",
      nodeType: "condition",
    },
  },
  {
    id: "knowledge-base",
    type: "workflowNode",
    position: {
      x: 800,
      y: 20,
    },
    data: {
      label: "Search Knowledge Base",
      description: "Knowledge",
      nodeType: "knowledge",
    },
  },
  {
    id: "collect-info",
    type: "workflowNode",
    position: {
      x: 800,
      y: 180,
    },
    data: {
      label: "Ask for Details",
      description: "Action",
      nodeType: "action",
    },
  },
  {
    id: "human-agent",
    type: "workflowNode",
    position: {
      x: 800,
      y: 340,
    },
    data: {
      label: "Escalate to Human",
      description: "Human Agent",
      nodeType: "human",
    },
  },
  {
    id: "send-response",
    type: "workflowNode",
    position: {
      x: 1080,
      y: 180,
    },
    data: {
      label: "Send Response",
      description: "Customer Reply",
      nodeType: "action",
    },
  },
];

export const customerSupportEdges: Edge[] = [
  {
    id: "trigger-analyze",
    source: "trigger",
    target: "analyze-intent",
  },
  {
    id: "analyze-route",
    source: "analyze-intent",
    target: "route-intent",
  },
  {
    id: "route-knowledge",
    source: "route-intent",
    target: "knowledge-base",
  },
  {
    id: "route-collect-info",
    source: "route-intent",
    target: "collect-info",
  },
  {
    id: "route-human",
    source: "route-intent",
    target: "human-agent",
  },
  {
    id: "knowledge-response",
    source: "knowledge-base",
    target: "send-response",
  },
  {
    id: "collect-response",
    source: "collect-info",
    target: "send-response",
  },
  {
    id: "human-response",
    source: "human-agent",
    target: "send-response",
  },
];

export const defaultNodes: WorkflowNode[] = [
  {
    id: "start",
    type: "workflowNode",
    position: {
      x: 0,
      y: 100,
    },
    data: {
      label: "Start",
      description: "Workflow Trigger",
      nodeType: "trigger",
    },
  },
  {
    id: "action",
    type: "workflowNode",
    position: {
      x: 280,
      y: 100,
    },
    data: {
      label: "Action",
      description: "Workflow Action",
      nodeType: "action",
    },
  },
];

export const defaultEdges: Edge[] = [
  {
    id: "start-action",
    source: "start",
    target: "action",
  },
];
