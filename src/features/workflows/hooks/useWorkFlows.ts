// react
import { useState } from "react";
// type props
import type { MenuProps } from "antd";
import type { DropdownOption, IWorkflowData } from "../types/components";
// constants
import {
  workflowStatusOptions,
  workflowTriggerOptions,
  workflowSortOptions,
} from "../constants";

const useWorkflows = () => {
  // useState
  const [status, setStatus] = useState<DropdownOption>(
    workflowStatusOptions[0],
  );
  const [trigger, setTrigger] = useState<DropdownOption>(
    workflowTriggerOptions[0],
  );
  const [sortFilter, setSortFilter] = useState<DropdownOption>(
    workflowSortOptions[0],
  );
  const [selectedWorkflow, setSelectedWorkflow] =
    useState<IWorkflowData | null>(null);
  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);
  // functioin event
  const onCloseDeleteModal = (): void => {
    setOpenModalDelete(false);
    setSelectedWorkflow(null);
  };

  const onChangeStatus: MenuProps["onClick"] = ({ key }) => {
    const selected = workflowStatusOptions.find((item) => item.value === key);

    if (!selected) return;

    setStatus(selected);
  };

  const onChangeTrigger: MenuProps["onClick"] = ({ key }) => {
    const selected = workflowTriggerOptions.find((item) => item.value === key);
    if (!selected) return;

    setTrigger(selected);
  };

  const onChangeSortFilter: MenuProps["onClick"] = ({ key }) => {
    const selected = workflowSortOptions.find((item) => item.value === key);
    if (!selected) return;

    setSortFilter(selected);
  };

  const onEditWorkflow = (workflowId: string) => {
    alert(`Edit ${workflowId}`);
  };

  const onConfirmDeleteWorkflow = (workflow: IWorkflowData): void => {
    setSelectedWorkflow(workflow);
    setOpenModalDelete(true);
  };

  const onDeleteWorkflow = () => {
    if (!selectedWorkflow) return;

    alert(`Delete workflow: ${selectedWorkflow.name}`);

    onCloseDeleteModal();
  };

  return {
    status,
    onChangeStatus,
    trigger,
    onChangeTrigger,
    sortFilter,
    onChangeSortFilter,
    onEditWorkflow,
    onDeleteWorkflow,
    selectedWorkflow,
    openModalDelete,
    onCloseDeleteModal,
    onConfirmDeleteWorkflow,
  };
};

export default useWorkflows;
