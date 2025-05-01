import { Address } from 'viem';
import { staking , factory} from '../ABI/landingpool';


export const CONTRACTS = {
    LENDING_POOL_FACTORY: {
        address: "0x2c859F034E981Df3A930B5B46E6B5dea17cF3cF3" as Address,
        abi: factory,
    },
} as const;