import type { IconType } from "react-icons";
import type { ProviderType } from "./integrationsConfigure";

export type ProviderStatus = "connected" | "disconnected";

export interface Provider {
  id: ProviderType;
  name: string;
  type: string;
  description: string;
  models: string;
  apiKey?: string;
  status: ProviderStatus;
  icon: IconType;
}
