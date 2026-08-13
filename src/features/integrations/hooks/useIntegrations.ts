import type { Provider } from "../types/component";

const useIntegrations = () => {
  // funtion event
  const onConnect = (provider: Provider) => {
    alert(`Connect ${provider.name}`);
  };
  const onDisconnect = (provider: Provider) => {
    alert(`Disconnect ${provider.name}`);
  };
  const onConfigure = (provider: Provider) => {
    alert(`Configure ${provider.name}`);
  };
  const onDocumentation = (provider: Provider) => {
    alert(`Open Documentation ${provider.name}`);
  };

  return {
    onConnect,
    onDisconnect,
    onConfigure,
    onDocumentation,
  };
};

export default useIntegrations;
