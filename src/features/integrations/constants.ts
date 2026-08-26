import { BsOpenai, BsAnthropic } from "react-icons/bs";
import { SiGooglegemini } from "react-icons/si";
import type { Provider } from "./types/component";
import type { IProviderConfig } from "./types/integrationsConfigure";
import type { IProviderDocumentation } from "./types/integrationsDocs";

export const providersData: Provider[] = [
  {
    id: "openai",
    name: "OpenAI",
    type: "LLM Provider",
    description:
      "Build intelligent workflows using OpenAI language, reasoning, and embedding models.",
    models: "GPT-5, GPT-4.1, Embeddings",
    apiKey: "sk-********************************89fa",
    status: "connected",
    icon: BsOpenai,
  },
  {
    id: "anthropic",
    name: "Anthropic",
    type: "LLM Provider",
    description:
      "Connect Claude models for reasoning, document understanding, coding, and long-context workflows.",
    models: "Claude Sonnet, Claude Opus",
    status: "disconnected",
    icon: BsAnthropic,
  },
  {
    id: "gemini",
    name: "Google Gemini",
    type: "LLM Provider",
    description:
      "Use Google Gemini models for multimodal AI workflows, reasoning, and fast content processing.",
    models: "Gemini Pro, Gemini Flash",
    apiKey: "AI********************************df8",
    status: "connected",
    icon: SiGooglegemini,
  },
];

export const providerConfigs: Record<string, IProviderConfig> = {
  openai: {
    id: "openai",
    name: "OpenAI",
    description: "Connect OpenAI models to your AI workflows.",
    apiKeyPlaceholder: "sk-...",
    models: [
      {
        label: "GPT-5",
        value: "gpt-5",
      },
      {
        label: "GPT-5 Mini",
        value: "gpt-5-mini",
      },
    ],
  },
  anthropic: {
    id: "anthropic",
    name: "Anthropic",
    description: "Connect Claude models to your AI workflows.",
    apiKeyPlaceholder: "sk-ant-...",
    models: [
      {
        label: "Claude Sonnet",
        value: "claude-sonnet",
      },
      {
        label: "Claude Haiku",
        value: "claude-haiku",
      },
    ],
  },
  gemini: {
    id: "gemini",
    name: "Google Gemini",
    description: "Connect Gemini models to your AI workflows.",
    apiKeyPlaceholder: "API key",
    models: [
      {
        label: "Gemini Pro",
        value: "gemini-pro",
      },
      {
        label: "Gemini Flash",
        value: "gemini-flash",
      },
    ],
  },
};

export const providerDocumentation: Record<string, IProviderDocumentation> = {
  openai: {
    provider: "openai",
    title: "OpenAI",
    description:
      "Connect OpenAI language models to your Proton Flow workflows.",
    overview:
      "The OpenAI integration allows Proton Flow workflows to send prompts to OpenAI models and use the generated response in the next workflow step.",
    authentication: {
      description: "Connect your OpenAI account using an API key.",
      steps: [
        "Open Integrations.",
        "Select OpenAI.",
        "Open Configure.",
        "Enter your OpenAI API key.",
        "Select a default model.",
        "Test the connection.",
        "Save the configuration.",
      ],
    },
    models: [
      {
        name: "GPT-5",
        description:
          "General-purpose model for advanced reasoning and text generation.",
      },
      {
        name: "GPT-5 Mini",
        description: "Faster model suitable for lightweight workflow tasks.",
      },
    ],
    workflow: {
      description:
        "Once OpenAI is connected, it can be selected as the AI provider inside an AI workflow node.",
      steps: [
        "Create or open a workflow.",
        "Add an AI node.",
        "Select OpenAI as the provider.",
        "Select a model.",
        "Enter the prompt or instructions.",
        "Connect the AI node to the next workflow step.",
      ],
    },
    example: {
      title: "Customer Message Classification",
      prompt:
        "Classify the following customer message as sales, support, or general inquiry.",
    },
  },
  anthropic: {
    provider: "anthropic",
    title: "Anthropic",
    description: "Connect Claude models to your Proton Flow workflows.",
    overview:
      "The Anthropic integration allows Proton Flow workflows to send instructions and contextual information to Claude and use its response in subsequent workflow steps.",
    authentication: {
      description: "Connect Anthropic using your API key.",
      steps: [
        "Open Integrations.",
        "Select Anthropic.",
        "Open Configure.",
        "Enter your Anthropic API key.",
        "Select a default Claude model.",
        "Test the connection.",
        "Save the configuration.",
      ],
    },
    models: [
      {
        name: "Claude Sonnet",
        description:
          "Balanced model for reasoning, text generation, and workflow automation.",
      },
      {
        name: "Claude Haiku",
        description: "Fast model suitable for lightweight workflow operations.",
      },
    ],
    workflow: {
      description:
        "After the integration is connected, Claude can be used inside an AI node.",
      steps: [
        "Create or open a workflow.",
        "Add an AI node.",
        "Select Anthropic as the provider.",
        "Select a Claude model.",
        "Enter the instructions.",
        "Connect the node to the next workflow step.",
      ],
    },
    example: {
      title: "Support Response",
      prompt:
        "Generate a short and professional response to the following customer support message.",
    },
  },
  gemini: {
    provider: "gemini",
    title: "Google Gemini",
    description: "Connect Gemini models to your Proton Flow workflows.",
    overview:
      "The Gemini integration allows Proton Flow workflows to process prompts using Google Gemini models and pass generated results to other workflow nodes.",
    authentication: {
      description: "Connect Google Gemini using your API key.",
      steps: [
        "Open Integrations.",
        "Select Google Gemini.",
        "Open Configure.",
        "Enter your Gemini API key.",
        "Select a default model.",
        "Test the connection.",
        "Save the configuration.",
      ],
    },
    models: [
      {
        name: "Gemini Pro",
        description: "General-purpose model for reasoning and generation.",
      },
      {
        name: "Gemini Flash",
        description:
          "Fast model suitable for high-frequency workflow operations.",
      },
    ],
    workflow: {
      description:
        "Once connected, Gemini becomes available as an AI provider in the workflow builder.",
      steps: [
        "Create or open a workflow.",
        "Add an AI node.",
        "Select Google Gemini.",
        "Choose a model.",
        "Enter the prompt.",
        "Connect the result to another workflow node.",
      ],
    },
    example: {
      title: "Text Summarization",
      prompt:
        "Summarize the following customer message into three short bullet points.",
    },
  },
};

export const documentationNavigation = [
  { id: "overview", label: "Overview" },
  { id: "authentication", label: "Authentication" },
  { id: "models", label: "Available Models" },
  { id: "workflow", label: "Usage in Workflow" },
  { id: "example", label: "Example" },
];
