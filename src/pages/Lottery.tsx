import Link from 'next/link';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useState } from 'react';
import { useWriteContract, useWaitForTransactionReceipt ,useReadContract} from 'wagmi';
import { poolsStacking } from '../ABI/landingpool';
import { abiToken } from '../ABI/token';
import { useLendingPool } from '../hooks/useLandingPool';
import StakingPoolCard from '../poolsCard/poolsCard';
import { getPublicClient } from '@wagmi/core';
import { useAccount, useConfig } from 'wagmi';
import { toast } from 'react-hot-toast';

const addressToken = "0x2e7E7C3Db2ffB28A4d0B05542369A308015cA69A";

const Navbar = () => {
  const [active, setActive] = useState('Dashboard');

  const menuItems = [
    { name: 'Dashboard', href: '/' },
    { name: 'Lottery Club', href: '/Lottery' },
 

  ];

  return (
    <nav className="flex justify-between items-center px-6 py-3 bg-black text-white">
      <div className="w-1/4"></div>
      <div className="flex space-x-6 w-1/2 justify-center">
        {menuItems.map((item) => (
          <Link key={item.name} href={item.href} passHref>
            <div
              className={`relative cursor-pointer ${
                active === item.name ? 'text-white' : 'text-gray-400'
              }`}
              onClick={() => setActive(item.name)}
            >
              {item.name}
              {active === item.name && (
                <div className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-pink-500"></div>
              )}
            </div>
          </Link>
        ))}
      </div>
      <div className="flex items-center space-x-4 w-1/4 justify-end">
        <button className="p-2 bg-gray-800 rounded-lg">🌐</button>
        <ConnectButton />
        <button className="p-2 bg-gray-800 rounded-lg">⋮</button>
      </div>
    </nav>
  );
};

const Lottery = () => {
  const [pools, setPools] = useState([
    { id: 1, totalParticipants: 12, totalStaked: "12 ETH", status: "Active", contractid: "0xEC01C25D86B3E60d162132b4e182465083bff4BC" },
    { id: 2, totalParticipants: 10, totalStaked: "10 ETH", status: "Active", contractid: "" },
    { id: 3, totalParticipants: 8, totalStaked: "8 ETH", status: "Completed", contractid: "" },
  ]);
  const [selectedPool, setSelectedPool] = useState<{
    poolAddress: string;
    maxParticipants: bigint | undefined;
    participants: string[] | undefined;
    formattedCollateral: string;
    collateral: bigint | undefined;
  } | null>(null);
    const [isApproving, setIsApproving] = useState(false);
    const [needsApproval, setNeedsApproval] = useState(false);
    const config = useConfig();

    const { poolAddresses } = useLendingPool(); // ✅ panggil hook di dalam function component

    const [amount, setAmount] = useState('');

  const { writeContract } = useWriteContract();

    const processStaking 
    = async () => {

      try {
          setIsApproving(true);
          // if (!selectedPool.poolAddress || !selectedPool.formattedCollateral) return;

          const hash = await writeContract({
              address:  "0xb8F5395F67d2831b23CdD5ec11806B370CeFE31E" ,
              abi: abiToken,
              functionName: 'approve',
              args: [selectedPool.poolAddress, selectedPool.collateral],
          });

         

          const hash2 = await writeContract({
            address:  selectedPool.poolAddress,
            abi: poolsStacking,
            functionName: 'stake',
            args: [selectedPool.collateral],
          });
        //   const publicClient = getPublicClient(config);

        //   await publicClient.waitForTransactionReceipt({
        //     hash: hash2 as Hash,
        // });
      
          setSelectedPool(null);
          // toast.success('✅ Token approved!');



      } catch (error) {
          // console.error('Error approving token:', error);
          // toast.error('Failed to approve token');
      } finally {
          setIsApproving(false);
      }

  };



    
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-6">  

      🏆 List Pool Cash Nest : {poolAddresses ? poolAddresses.length : 0} poolsa 
      </h1>

      {!selectedPool ? (
 <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
 {poolAddresses.map((poolAddress: string) => (
  <StakingPoolCard
  key={poolAddress}
  poolAddress={poolAddress}
  onSelect={(poolAddress, maxParticipants, participants, formattedCollateral,collateral) =>
    setSelectedPool({
      poolAddress,
      maxParticipants,
      participants,
      formattedCollateral,
      collateral
    })
  }
/>
))}

</div>
      ) : (
        

        <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg mt-6">

    
        <div className="max-w-md mx-auto space-y-6">
          <div>
            <h2 className="text-lg font-semibold">Stake</h2>
            <div className="flex items-center border border-gray-700 rounded-lg p-4 mt-2 bg-gray-900">
              <input
                type="number"
                value={selectedPool.formattedCollateral} 
                disabled
                placeholder="1.0"
                className="bg-transparent flex-1 text-2xl outline-none"
              />
            </div>
            <div className="text-right text-sm mt-1 text-gray-400">
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {/* aPriori Card */}
            <div className="border border-purple-600 rounded-lg p-4 bg-purple-950">
              <h3 className="text-md font-semibold mb-2">Detail</h3>
              <div className="text-sm space-y-1">
                <div>Total Participants <span className="font-semibold">:  {selectedPool.maxParticipants.toString() } /
                {selectedPool.participants?.length }
                {/* {selectedPool ? JSON.stringify(selectedPool) : 'Tidak ada data pool yang dipilih'} */}
                </span></div>
                <div>Staked <span className="font-semibold">{selectedPool.maxParticipants.toString() } MONTH</span></div>
                <div>Stake Amount <span className="font-semibold">{selectedPool.formattedCollateral} ETH</span></div>
              </div>
            </div>
  

          </div>
  
          <div className="flex space-x-4">


          <button
              onClick={() => setSelectedPool(null)}
              className="flex-1 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-purple-800 hover:opacity-90 transition text-lg font-semibold"
            >
            Back to Pool List
          </button>
          <button
            onClick={processStaking}
            className="flex-1 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-purple-800 hover:opacity-90 transition text-lg font-semibold"
          >
            Staking
          </button>


</div>
        </div>


      </div>




      )}
    </div>
  );
};

export default Lottery;
