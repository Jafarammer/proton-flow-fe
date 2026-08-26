export interface IDocumentationModel {
  name: string;
  description: string;
}

export interface IProviderDocumentation {
  provider: string;
  title: string;
  description: string;
  overview: string;
  authentication: {
    description: string;
    steps: string[];
  };
  models: IDocumentationModel[];
  workflow: {
    description: string;
    steps: string[];
  };
  example: {
    title: string;
    prompt: string;
  };
}
