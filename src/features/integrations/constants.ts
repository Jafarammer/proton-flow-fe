import { BsOpenai, BsAnthropic } from "react-icons/bs";
import { SiGooglegemini } from "react-icons/si";
import type { Provider } from "./types/component";

export const providersData: Provider[] = [
  {
    id: "openAi",
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
