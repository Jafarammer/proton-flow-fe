// constants
import { documentationNavigation } from "../constants";
// styles
import "./styles/documentation_sidebar.scss";

interface DocumentationSidebarProps {
  activeSection: string;
}

const DocumentationSidebar = ({ activeSection }: DocumentationSidebarProps) => {
  return (
    <div className="documentation-sidebar">
      <span className="sidebar-label">ON THIS PAGE</span>

      <nav>
        {documentationNavigation.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={activeSection === item.id ? "active" : ""}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default DocumentationSidebar;
