import type { Dispatch, SetStateAction } from "react";
import { Layout, Avatar, Button, Input } from "antd";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
  IoMdSearch,
} from "react-icons/io";

const { Header } = Layout;

interface HeaderProps {
  collapse: boolean;
  setCollapse: Dispatch<SetStateAction<boolean>>;
}

const AppHeader = ({ collapse, setCollapse }: HeaderProps) => {
  return (
    <Header className="header">
      <Button
        type="text"
        icon={
          collapse ? (
            <IoIosArrowDroprightCircle color="#64748B" size={20} />
          ) : (
            <IoIosArrowDropleftCircle color="#64748B" size={20} />
          )
        }
        onClick={() => setCollapse(!collapse)}
      />
      <div className="header-content">
        <Input
          className="input-search"
          prefix={<IoMdSearch color="#64748B" size={20} />}
          placeholder="Search..."
        />
        <Avatar>W</Avatar>
      </div>
    </Header>
  );
};

export default AppHeader;
