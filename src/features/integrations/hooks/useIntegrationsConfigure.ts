import { useState } from "react";
// type
import type { IIntegrationForm } from "../types/integrationsConfigure";

const useIntegrationsConfigure = (initialModel: string) => {
  // useState
  const [form, setForm] = useState<IIntegrationForm>({
    apiKey: "",
    model: initialModel,
  });
  const [testing, setTesting] = useState<boolean>(false);
  // funtion
  const onChangeApiKey = (apiKey: string): void => {
    setForm((prev) => ({
      ...prev,
      apiKey,
    }));
  };

  const onChangeModel = (model: string): void => {
    setForm((prev) => ({
      ...prev,
      model,
    }));
  };

  const onTestConnection = async (): Promise<void> => {
    setTesting(true);

    try {
      // Api nanti disini
      console.log("test connections");
    } catch (error) {
      console.log("test connections error");
    } finally {
      setTesting(false);
    }
  };

  const onSave = async (): Promise<void> => {
    console.log(form);
    // API POST
  };

  return {
    form,
    testing,
    onChangeApiKey,
    onChangeModel,
    onTestConnection,
    onSave,
  };
};

export default useIntegrationsConfigure;
