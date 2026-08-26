import { useNavigate } from "react-router-dom";
import type { Provider } from "../types/component";

const useIntegrations = () => {
  // router
  const navigate = useNavigate();
  // funtion event
  const onConnect = (provider: Provider) => {
    alert(`Connect ${provider.name}`);
    navigate(`/integrations/${provider.id}/configure`);
  };
  const onDisconnect = (provider: Provider) => {
    alert(`Disconnect ${provider.name}`);
  };
  const onConfigure = (provider: Provider) => {
    alert(`Configure ${provider.name}`);
    navigate(`/integrations/${provider.id}/configure`);
  };
  const onDocumentation = (provider: Provider) => {
    alert(`Open Documentation ${provider.name}`);
    navigate(`/integrations/${provider.id}/documentation`);
  };

  return {
    onConnect,
    onDisconnect,
    onConfigure,
    onDocumentation,
  };
};

export default useIntegrations;
