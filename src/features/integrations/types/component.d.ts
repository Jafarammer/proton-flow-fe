import type { IconType } from "react-icons";

export type ProviderStatus = "connected" | "disconnected";

export interface Provider {
  id: string;
  name: string;
  type: string;
  description: string;
  models: string;
  apiKey?: string;
  status: ProviderStatus;
  icon: IconType;
}
