import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  // sepolia,
  arbitrumSepolia,
  // arbitrum,
  // base,
  // mainnet,
  // optimism,
  // polygon,
} from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains: [
    // mainnet,
    // sepolia,
    arbitrumSepolia,
    // polygon,
    // optimism,
    // arbitrum,
    // base,
    // ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [sepolia] : []),
  ],
  ssr: true,
});
