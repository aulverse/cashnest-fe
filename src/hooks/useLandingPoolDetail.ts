'use client';


import { useCallback } from 'react';
import { useReadContract, useWriteContract, useSimulateContract, type Config } from 'wagmi';
import { Address } from 'viem';
import { staking , factory, poolsStacking} from '../ABI/landingpool';
import { formatUnits } from 'viem';






export function useLendingPoolDetail(poolAddress: Address) {


       // Read total supply and borrow info
        const { data: maxParticipants } = useReadContract({
        address: poolAddress,
        abi: poolsStacking,
        functionName: 'maxParticipants',
        });

         // Read total supply and borrow info
        const { data: participants } = useReadContract({
        address: poolAddress,
        abi: poolsStacking,
        functionName: 'getParticipants',
        });

        // Read total supply and borrow info
        const { data: collateral } = useReadContract({
        address: poolAddress,
        abi: poolsStacking,
        functionName: 'collateral',
        });

        const formattedCollateral = collateral ? formatUnits(collateral, 18) : '0.00';

        return {
                maxParticipants,
                participants,
                formattedCollateral,
                collateral
        }

}