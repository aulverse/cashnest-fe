'use client';
import { Address } from 'viem';
import { useCallback, useEffect, useState } from 'react';
import { useReadContracts, useSimulateContract, useWriteContract, type Config } from 'wagmi';
import { CONTRACTS } from '../config/Address';
const MAX_POOLS_TO_FETCH = 10;

export function useLendingPool() {
    const [poolAddresses, setPoolAddresses] = useState<Address[]>([]);


        // Step 1: Get array of pool addresses
        const { data: poolAddressesResult, isLoading: isLoadingAddresses } = useReadContracts({
            contracts: Array.from({ length: MAX_POOLS_TO_FETCH }, (_, i) => ({
                ...CONTRACTS.LENDING_POOL_FACTORY,
                functionName: 'pools',
                args: [BigInt(i)],
            })),
        });



            // Process pool addresses
    useEffect(() => {
        if (poolAddressesResult) {
            const addresses = poolAddressesResult
                .map(result =>
                    result.status === 'success' && result.result ? result.result as Address : undefined
                )
                .filter((address): address is Address =>
                    !!address && address !== '0x0000000000000000000000000000000000000000'
                );

            setPoolAddresses(addresses);
        }
    }, [poolAddressesResult]);



    const { data: poolDetailsResults, isLoading: isLoadingDetails } = useReadContracts({

        contracts: poolAddresses.map(address => ({
            ...CONTRACTS.LENDING_POOL_FACTORY,
            functionName: 'getStakingPools',
            // args: [address],
        })),
    });

        return {
            poolAddresses
            
        }

}