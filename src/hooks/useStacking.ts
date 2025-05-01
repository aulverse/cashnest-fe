
import { useCallback } from 'react';
import { useReadContract, useWriteContract, useSimulateContract, type Config } from 'wagmi';
import { Address } from 'viem';
import { staking , factory, poolsStacking} from '../ABI/landingpool';
import { formatUnits } from 'viem';


export function useLendingPoolDetail(poolAddress: Address) {



}