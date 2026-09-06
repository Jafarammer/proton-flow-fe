import type { Edge } from "@xyflow/react";
import type {
  WorkflowNode,
  ITemplateExplanation,
} from "./types/templatePreview";
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

export const customerSupportNodes: WorkflowNode[] = [
  {
    id: "trigger",
    type: "workflowNode",
    position: {
      x: 0,
      y: 0,
    },
    initialWidth: 220,
    initialHeight: 72,
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
      x: 0,
      y: 0,
    },
    initialWidth: 220,
    initialHeight: 72,
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
      x: 0,
      y: 0,
    },
    initialWidth: 220,
    initialHeight: 72,
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
      x: 0,
      y: 0,
    },
    initialWidth: 220,
    initialHeight: 72,
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
      x: 0,
      y: 0,
    },
    initialWidth: 220,
    initialHeight: 72,
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
      x: 0,
      y: 0,
    },
    initialWidth: 220,
    initialHeight: 72,
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
      x: 0,
      y: 0,
    },
    initialWidth: 220,
    initialHeight: 72,
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

export const resumeScreenerNodes: WorkflowNode[] = [
  {
    id: "resume-uploaded",
    type: "workflowNode",
    position: { x: 0, y: 0 },
    initialWidth: 220,
    initialHeight: 72,
    data: {
      label: "Resume Uploaded",
      description: "File Upload Trigger",
      nodeType: "trigger",
    },
  },
  {
    id: "extract-resume",
    type: "workflowNode",
    position: { x: 0, y: 0 },
    initialWidth: 220,
    initialHeight: 72,
    data: {
      label: "Extract Resume Data",
      description: "AI Extraction",
      nodeType: "ai",
    },
  },
  {
    id: "compare-job",
    type: "workflowNode",
    position: { x: 0, y: 0 },
    initialWidth: 220,
    initialHeight: 72,
    data: {
      label: "Compare Job Criteria",
      description: "AI Analysis",
      nodeType: "ai",
    },
  },
  {
    id: "calculate-score",
    type: "workflowNode",
    position: { x: 0, y: 0 },
    initialWidth: 220,
    initialHeight: 72,
    data: {
      label: "Calculate Match Score",
      description: "Scoring",
      nodeType: "action",
    },
  },
  {
    id: "score-threshold",
    type: "workflowNode",
    position: { x: 0, y: 0 },
    initialWidth: 220,
    initialHeight: 72,
    data: {
      label: "Score Threshold",
      description: "Condition",
      nodeType: "condition",
    },
  },
  {
    id: "qualified",
    type: "workflowNode",
    position: { x: 0, y: 0 },
    initialWidth: 220,
    initialHeight: 72,
    data: {
      label: "Add Candidate",
      description: "Qualified Candidate",
      nodeType: "action",
    },
  },
  {
    id: "not-qualified",
    type: "workflowNode",
    position: { x: 0, y: 0 },
    initialWidth: 220,
    initialHeight: 72,
    data: {
      label: "Send Rejection",
      description: "Not Qualified",
      nodeType: "action",
    },
  },
];

export const resumeScreenerEdges: Edge[] = [
  {
    id: "resume-extract",
    source: "resume-uploaded",
    target: "extract-resume",
  },
  {
    id: "extract-compare",
    source: "extract-resume",
    target: "compare-job",
  },
  {
    id: "compare-score",
    source: "compare-job",
    target: "calculate-score",
  },
  {
    id: "score-threshold",
    source: "calculate-score",
    target: "score-threshold",
  },
  {
    id: "threshold-qualified",
    source: "score-threshold",
    target: "qualified",
  },
  {
    id: "threshold-not-qualified",
    source: "score-threshold",
    target: "not-qualified",
  },
];

export const defaultNodes: WorkflowNode[] = [
  {
    id: "start",
    type: "workflowNode",
    position: {
      x: 0,
      y: 0,
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
      x: 0,
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

export const explanationCustomerSupport = [
  {
    title: "Ticket Received",
    content: "A new support ticket enters Proton Flow through a webhook.",
    status: "process" as const,
  },
  {
    title: "Intent Analysis",
    content:
      "The AI analyzes the customer's request and determines whataction should happen next.",
    status: "process" as const,
  },
  {
    title: "Smart Routing",
    content:
      "Proton Flow answers from the knowledge base, requests more information, or escalates the ticket to a human agent.",
    status: "process" as const,
  },
];

export const resumeScreenerExplanation = [
  {
    title: "Resume Uploaded",
    content: "A candidate uploads a resume to start the screening workflow.",
    status: "process" as const,
  },
  {
    title: "Resume Analysis",
    content:
      "The AI extracts key skills and experience, then compares them with the job criteria.",
    status: "process" as const,
  },
  {
    title: "Candidate Scoring",
    content:
      "The candidate receives a match score and is routed based on the screening threshold.",
    status: "process" as const,
  },
];

export const defaultExplanation = [
  {
    title: "Start Workflow",
    content:
      "The workflow starts when the configured trigger receives new input.",
    status: "process" as const,
  },
  {
    title: "Process Data",
    content:
      "The workflow processes the input through the configured AI models, conditions, and actions.",
    status: "process" as const,
  },
  {
    title: "Complete Workflow",
    content:
      "The workflow completes the process and produces the configured output.",
    status: "process" as const,
  },
];

export const templateConfig: Record<
  string,
  {
    title: string;
    description: string;
    category: string;
    nodes: WorkflowNode[];
    edges: Edge[];
    explanations: ITemplateExplanation[];
  }
> = {
  "customer-support": {
    title: "Customer Support Bot",
    description:
      "Automatically triages incoming support tickets, answers FAQs based on knowledge base, and escalates complex issues to human agents.",
    category: "Customer Success",
    nodes: customerSupportNodes,
    edges: customerSupportEdges,
    explanations: explanationCustomerSupport,
  },
  "resume-screener": {
    title: "Resume Screener",
    description:
      "Extracts key skills and experience from uploaded resumes, scoring them against job description criteria to streamline hiring.",
    category: "HR & Ops",
    nodes: resumeScreenerNodes,
    edges: resumeScreenerEdges,
    explanations: resumeScreenerExplanation,
  },
  "research-assistant": {
    title: "Automated Research Assistant",
    description:
      "Scrapes technical documentation and recent academic papers to summarize findings and generate literature reviews on specified topics.",
    category: "Engineering",
    nodes: defaultNodes,
    edges: defaultEdges,
    explanations: defaultExplanation,
  },
  "social-media": {
    title: "Social Media Content Generator",
    description:
      "Takes blog post URLs and automatically generates platform-specific social media copy, hashtags, and suggested image prompts.",
    category: "Marketing",
    nodes: defaultNodes,
    edges: defaultEdges,
    explanations: defaultExplanation,
  },
};
