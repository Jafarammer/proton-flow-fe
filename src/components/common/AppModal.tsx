import { Modal, Typography } from "antd";
import type { ModalProps } from "antd";
import type { ReactNode } from "react";
import { IoCloseCircle } from "react-icons/io5";

const { Title } = Typography;

interface AppModalProps extends Omit<ModalProps, "title"> {
  title: string;
  children: ReactNode;
}

const AppModal = ({
  title,
  children,
  footer = null,
  className = "",
  ...props
}: AppModalProps) => {
  return (
    <Modal
      {...props}
      footer={footer}
      className={`app-modal ${className}`}
      title={
        <Title level={4} className="app-modal-title">
          {title}
        </Title>
      }
      closeIcon={<IoCloseCircle />}
      classNames={{
        container: "app-modal-container",
        header: "app-modal-header",
        body: "app-modal-body",
        title: "app-modal-title-wrapper",
        close: "app-modal-close",
      }}
    >
      {children}
    </Modal>
  );
};

export default AppModal;
