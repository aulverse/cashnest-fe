import React, { useState } from "react";
import { useWriteContract, useWaitForTransactionReceipt ,useReadContract} from 'wagmi';
import { factory } from '../ABI/landingpool';

const FormCreate = () => {
  const [tokenAddress, setTokenAddress] = useState("");
  const [collateral, setCollateral] = useState("");
  const [participant, setParticipant] = useState("");

  const { writeContract } = useWriteContract();

  const processSubmit 
    = async () => {
      try {
       const hash = await writeContract({
              address:  "0x2c859F034E981Df3A930B5B46E6B5dea17cF3cF3" ,
              abi: factory,
              functionName: 'createLendingPool',
              args: [tokenAddress, "0xF3859910760530c6014e43FFbDE2390039D61bF6","0x1234567890123456789012345678901234567890",collateral*1e18,participant],
          });
        } catch (error) {
          // console.error('Error approving token:', error);
          // toast.error('Failed to approve token');
      } finally {
      }
         
    }

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">

        {/* Tambahan di atas */}
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-6">Add List Pool Nest Cash</h1>
        </div>

        {/* Token Address */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="tokenAddress" className="text-sm font-medium">
            Token Address
          </label>
          <input
            id="tokenAddress"
            type="text"
            placeholder="0x........"
            value={tokenAddress}
            onChange={(e) => setTokenAddress(e.target.value)}
            className="bg-gray-900 border border-gray-700 rounded-md px-4 py-3 outline-none"
          />
        </div>

        {/* Collateral */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="collateral" className="text-sm font-medium">
            Collateral
          </label>
          <input
            id="collateral"
            type="number"
            placeholder="0"
            value={collateral}
            onChange={(e) => setCollateral(e.target.value)}
            className="bg-gray-900 border border-gray-700 rounded-md px-4 py-3 outline-none"
          />
        </div>

        {/* Participant */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="participant" className="text-sm font-medium">
            Participant
          </label>
          <input
            id="participant"
            type="number"
            placeholder="0"
            value={participant}
            onChange={(e) => setParticipant(e.target.value)}
            className="bg-gray-900 border border-gray-700 rounded-md px-4 py-3 outline-none"
          />
        </div>

        {/* Submit Button */}
        <button
          id="submitButton"
          className="w-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white py-3 rounded-md mt-4"
          onClick={processSubmit}

        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default FormCreate;
