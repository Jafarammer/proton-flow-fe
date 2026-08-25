import { BsOpenai, BsAnthropic } from "react-icons/bs";
import { SiGooglegemini } from "react-icons/si";
import type { Provider } from "./types/component";
import type { IProviderConfig } from "./types/integrationsConfigure";

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
