export type ProviderType = "openai" | "anthropic" | "gemini";

export interface IProviderModel {
  label: string;
  value: string;
}

export interface IProviderConfig {
  id: ProviderType;
  name: string;
  description: string;
  apiKeyPlaceholder: string;
  models: IProviderModel[];
}

export interface IIntegrationForm {
  apiKey: string;
  model: string;
}
