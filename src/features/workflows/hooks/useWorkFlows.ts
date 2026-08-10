// react
import { useState } from "react";
// type props
import type { MenuProps } from "antd";
import type { DropdownOption } from "../types/components";
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
  // functioin event
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

  return {
    status,
    onChangeStatus,
    trigger,
    onChangeTrigger,
    sortFilter,
    onChangeSortFilter,
  };
};

export default useWorkflows;
