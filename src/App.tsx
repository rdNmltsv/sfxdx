import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { WagmiConfig, configureChains, createClient } from "wagmi";
import { goerli, mainnet } from "wagmi/chains";
import Layout from "./components/Layout/Layout";

const projectId = "e3cf739bc256649eab84043d930efc05";
const chains = [mainnet, goerli];
const { provider } = configureChains(chains, [
  walletConnectProvider({ projectId }),
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({
    projectId,
    chains,
    version: "1",
    appName: "sfxdx",
  }),
  provider,
});
const ethereumClient = new EthereumClient(wagmiClient, chains);

function App() {
  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <Layout> </Layout>
      </WagmiConfig>

      <Web3Modal
        projectId={projectId}
        ethereumClient={ethereumClient}
        defaultChain={goerli}
      />
    </>
  );
}

export default App;
