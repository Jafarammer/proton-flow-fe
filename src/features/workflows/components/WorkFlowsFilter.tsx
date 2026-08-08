// UI Library
import { Button, Divider, Dropdown, Space, Input } from "antd";
// icons
import { IoFilter } from "react-icons/io5";
import { FaSortDown } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
// type props
import type { MenuProps } from "antd";
import type { DropdownOption } from "../../../types/dropdown";
// utils | helpers
import { toMenuItems } from "../../../utils/dropdown";
// constants
import {
  workflowStatusOptions,
  workflowTriggerOptions,
  workflowSortOptions,
} from "../constants";
// styles scss
import "./styles/work_flows_filter.scss";

interface WorkFlowsFilterProps {
  status: DropdownOption;
  onChangeStatus: MenuProps["onClick"];
  trigger: DropdownOption;
  onChangeTrigger: MenuProps["onClick"];
  sortFilter: DropdownOption;
  onChangeSortFilter: MenuProps["onClick"];
}

const WorkFlowsFilter = ({
  status,
  onChangeStatus,
  trigger,
  onChangeTrigger,
  sortFilter,
  onChangeSortFilter,
}: WorkFlowsFilterProps) => {
  return (
    <div className="workflows-filters">
      <div className="filter-group">
        <div className="workflows-filters-left">
          <div className="filters-label">
            <IoFilter size={20} />
            <span>Filters :</span>
          </div>

          <Divider type="vertical" className="filter-divider" />

          <Space size={16} align="center">
            <Dropdown
              menu={{
                items: toMenuItems(workflowStatusOptions),
                onClick: onChangeStatus,
              }}
              trigger={["click"]}
            >
              <Button>
                Status : {status.label}
                <FaSortDown />
              </Button>
            </Dropdown>

            <Dropdown
              menu={{
                items: toMenuItems(workflowTriggerOptions),
                onClick: onChangeTrigger,
              }}
              trigger={["click"]}
            >
              <Button>
                Trigger : {trigger.label}
                <FaSortDown />
              </Button>
            </Dropdown>

            <Dropdown
              menu={{
                items: toMenuItems(workflowSortOptions),
                onClick: onChangeSortFilter,
              }}
              trigger={["click"]}
            >
              <Button>
                Sort : {sortFilter.label}
                <FaSortDown />
              </Button>
            </Dropdown>
          </Space>
        </div>

        <div className="workflows-filters-right">
          <Input
            className="input-search"
            placeholder="Search..."
            prefix={<IoMdSearch color="#64748B" size={20} />}
          />
        </div>
      </div>
    </div>
  );
};

export default WorkFlowsFilter;
