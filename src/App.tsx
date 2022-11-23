import { ChakraProvider, useColorModeValue } from '@chakra-ui/react';
import customTheme from './theme';
import '@rainbow-me/rainbowkit/styles.css';
import { darkTheme, getDefaultWallets, lightTheme, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import Home from './Routes/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Routes/Root';
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.polygonMumbai, chain.goerli],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'My Web3 App',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export const App = () => {
  return (
    <ChakraProvider theme={customTheme}>
      <WagmiProvider />
    </ChakraProvider>
  );
};

const WagmiProvider = () => {
  const theme = useColorModeValue(lightTheme(), darkTheme({ ...darkTheme.accentColors.blue }));

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={theme}>
        <RouterProvider router={router} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
};
