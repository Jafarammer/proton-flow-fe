// UI Library
import { Table } from "antd";
// types
import type { IDocumentationModel } from "../types/integrationsDocs";
// styles
import "./styles/documentation_models.scss";

interface DocumentationModelsProps {
  models: IDocumentationModel[];
}

const DocumentationModels = ({ models }: DocumentationModelsProps) => {
  return (
    <Table
      className="documentation-models"
      pagination={false}
      dataSource={models}
      columns={[
        {
          title: "MODEL",
          dataIndex: "name",
          key: "name",
          width: "30%",
        },
        {
          title: "DESCRIPTION",
          dataIndex: "description",
          key: "description",
        },
      ]}
    />
  );
};

export default DocumentationModels;
