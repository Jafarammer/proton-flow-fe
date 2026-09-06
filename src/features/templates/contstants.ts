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

export const researchAssistantNodes: WorkflowNode[] = [
  {
    id: "research-topic",
    type: "workflowNode",
    position: { x: 0, y: 0 },
    initialWidth: 220,
    initialHeight: 72,
    data: {
      label: "Research Topic",
      description: "User Input Trigger",
      nodeType: "trigger",
    },
  },
  {
    id: "collect-sources",
    type: "workflowNode",
    position: { x: 0, y: 0 },
    initialWidth: 220,
    initialHeight: 72,
    data: {
      label: "Collect Sources",
      description: "Documentation & Papers",
      nodeType: "action",
    },
  },
  {
    id: "extract-findings",
    type: "workflowNode",
    position: { x: 0, y: 0 },
    initialWidth: 220,
    initialHeight: 72,
    data: {
      label: "Extract Key Findings",
      description: "AI Extraction",
      nodeType: "ai",
    },
  },
  {
    id: "evaluate-relevance",
    type: "workflowNode",
    position: { x: 0, y: 0 },
    initialWidth: 220,
    initialHeight: 72,
    data: {
      label: "Evaluate Relevance",
      description: "Source Quality Check",
      nodeType: "condition",
    },
  },
  {
    id: "generate-summary",
    type: "workflowNode",
    position: { x: 0, y: 0 },
    initialWidth: 220,
    initialHeight: 72,
    data: {
      label: "Generate Summary",
      description: "AI Summarization",
      nodeType: "ai",
    },
  },
  {
    id: "skip-source",
    type: "workflowNode",
    position: { x: 0, y: 0 },
    initialWidth: 220,
    initialHeight: 72,
    data: {
      label: "Skip Source",
      description: "Low Relevance",
      nodeType: "action",
    },
  },
  {
    id: "literature-review",
    type: "workflowNode",
    position: { x: 0, y: 0 },
    initialWidth: 220,
    initialHeight: 72,
    data: {
      label: "Create Literature Review",
      description: "Final Research Output",
      nodeType: "ai",
    },
  },
];

export const researchAssistantEdges: Edge[] = [
  {
    id: "topic-collect",
    source: "research-topic",
    target: "collect-sources",
  },
  {
    id: "collect-extract",
    source: "collect-sources",
    target: "extract-findings",
  },
  {
    id: "extract-evaluate",
    source: "extract-findings",
    target: "evaluate-relevance",
  },
  {
    id: "evaluate-summary",
    source: "evaluate-relevance",
    target: "generate-summary",
  },
  {
    id: "evaluate-skip",
    source: "evaluate-relevance",
    target: "skip-source",
  },
  {
    id: "summary-review",
    source: "generate-summary",
    target: "literature-review",
  },
];

export const socialMediaNodes: WorkflowNode[] = [
  {
    id: "blog-url",
    type: "workflowNode",
    position: { x: 0, y: 0 },
    initialWidth: 220,
    initialHeight: 72,
    data: {
      label: "Blog Post URL",
      description: "URL Input Trigger",
      nodeType: "trigger",
    },
  },
  {
    id: "fetch-content",
    type: "workflowNode",
    position: { x: 0, y: 0 },
    initialWidth: 220,
    initialHeight: 72,
    data: {
      label: "Fetch Blog Content",
      description: "Content Extraction",
      nodeType: "action",
    },
  },
  {
    id: "extract-key-points",
    type: "workflowNode",
    position: { x: 0, y: 0 },
    initialWidth: 220,
    initialHeight: 72,
    data: {
      label: "Extract Key Points",
      description: "AI Analysis",
      nodeType: "ai",
    },
  },
  {
    id: "generate-copy",
    type: "workflowNode",
    position: { x: 0, y: 0 },
    initialWidth: 220,
    initialHeight: 72,
    data: {
      label: "Generate Social Copy",
      description: "AI Content Generation",
      nodeType: "ai",
    },
  },
  {
    id: "platform-format",
    type: "workflowNode",
    position: { x: 0, y: 0 },
    initialWidth: 220,
    initialHeight: 72,
    data: {
      label: "Platform Formatter",
      description: "Platform Routing",
      nodeType: "condition",
    },
  },
  {
    id: "linkedin-copy",
    type: "workflowNode",
    position: { x: 0, y: 0 },
    initialWidth: 220,
    initialHeight: 72,
    data: {
      label: "LinkedIn Copy",
      description: "Professional Format",
      nodeType: "action",
    },
  },
  {
    id: "twitter-copy",
    type: "workflowNode",
    position: { x: 0, y: 0 },
    initialWidth: 220,
    initialHeight: 72,
    data: {
      label: "X / Twitter Copy",
      description: "Short-form Format",
      nodeType: "action",
    },
  },
  {
    id: "instagram-copy",
    type: "workflowNode",
    position: { x: 0, y: 0 },
    initialWidth: 220,
    initialHeight: 72,
    data: {
      label: "Instagram Copy",
      description: "Caption Format",
      nodeType: "action",
    },
  },
  {
    id: "facebook-copy",
    type: "workflowNode",
    position: { x: 0, y: 0 },
    initialWidth: 220,
    initialHeight: 72,
    data: {
      label: "Facebook Copy",
      description: "Social Post Format",
      nodeType: "action",
    },
  },
  {
    id: "generate-hashtags",
    type: "workflowNode",
    position: { x: 0, y: 0 },
    initialWidth: 220,
    initialHeight: 72,
    data: {
      label: "Generate Hashtags",
      description: "AI Hashtag Generation",
      nodeType: "ai",
    },
  },
  {
    id: "create-image-prompt",
    type: "workflowNode",
    position: { x: 0, y: 0 },
    initialWidth: 220,
    initialHeight: 72,
    data: {
      label: "Create Image Prompt",
      description: "Visual Prompt Generation",
      nodeType: "ai",
    },
  },
];

export const socialMediaEdges: Edge[] = [
  {
    id: "url-fetch",
    source: "blog-url",
    target: "fetch-content",
  },
  {
    id: "fetch-extract",
    source: "fetch-content",
    target: "extract-key-points",
  },
  {
    id: "extract-copy",
    source: "extract-key-points",
    target: "generate-copy",
  },
  {
    id: "copy-platform",
    source: "generate-copy",
    target: "platform-format",
  },
  {
    id: "platform-linkedin",
    source: "platform-format",
    target: "linkedin-copy",
  },
  {
    id: "platform-twitter",
    source: "platform-format",
    target: "twitter-copy",
  },
  {
    id: "platform-instagram",
    source: "platform-format",
    target: "instagram-copy",
  },
  {
    id: "platform-facebook",
    source: "platform-format",
    target: "facebook-copy",
  },
  {
    id: "linkedin-hashtags",
    source: "linkedin-copy",
    target: "generate-hashtags",
  },
  {
    id: "twitter-hashtags",
    source: "twitter-copy",
    target: "generate-hashtags",
  },
  {
    id: "instagram-hashtags",
    source: "instagram-copy",
    target: "generate-hashtags",
  },
  {
    id: "facebook-hashtags",
    source: "facebook-copy",
    target: "generate-hashtags",
  },
  {
    id: "hashtags-image",
    source: "generate-hashtags",
    target: "create-image-prompt",
  },
];

// explanations

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

export const explanationResearchAssistantExplanation = [
  {
    title: "Define Research Topic",
    content:
      "The user provides a research topic or question to start the workflow.",
    status: "process" as const,
  },
  {
    title: "Collect and Analyze Sources",
    content:
      "The workflow gathers technical documentation and academic papers, then extracts and evaluates their key findings.",
    status: "process" as const,
  },
  {
    title: "Generate Literature Review",
    content:
      "Relevant findings are summarized and combined into a structured literature review.",
    status: "process" as const,
  },
];

export const socialMediaExplanation: ITemplateExplanation[] = [
  {
    title: "Provide Blog Post",
    content:
      "The user provides a blog post URL to start the content generation workflow.",
    status: "process" as const,
  },
  {
    title: "Generate Platform Content",
    content:
      "The workflow extracts key points and creates platform-specific social media copy for each selected channel.",
    status: "process" as const,
  },
  {
    title: "Create Hashtags and Image Prompt",
    content:
      "AI generates relevant hashtags and a suggested image prompt to complete the social media content package.",
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
    nodes: researchAssistantNodes,
    edges: researchAssistantEdges,
    explanations: explanationResearchAssistantExplanation,
  },
  "social-media": {
    title: "Social Media Content Generator",
    description:
      "Takes blog post URLs and automatically generates platform-specific social media copy, hashtags, and suggested image prompts.",
    category: "Marketing",
    nodes: socialMediaNodes,
    edges: socialMediaEdges,
    explanations: socialMediaExplanation,
  },
};
