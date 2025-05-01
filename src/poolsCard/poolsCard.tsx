import React from 'react';
import { useLendingPoolDetail } from '../hooks/useLandingPoolDetail';

interface StakingPoolCardProps {
  poolAddress: string;
  onSelect: (
    address: string,
    maxParticipants: bigint | undefined,
    participants: any[] | undefined,
    formattedCollateral: string,
    collateral: bigint | undefined,
  ) => void;
}

const StakingPoolCard: React.FC<StakingPoolCardProps> = ({ poolAddress, onSelect }) => {
  const {
    maxParticipants,
    participants,
    formattedCollateral,
    collateral
  } = useLendingPoolDetail(poolAddress);

  // Mengecek apakah jumlah peserta sudah penuh
  const isFull = maxParticipants !== undefined && participants !== undefined
    && BigInt(participants.length) === maxParticipants;

  const statusText = isFull ? 'Close' : 'Open';
  const statusColor = isFull ? 'text-red-500' : 'text-green-500';

  // Pastikan maxParticipants dan participants sudah terisi sebelum mengirim ke onSelect
  const handleOnSelect = () => {
    if (isFull) {
      console.log("Pool sudah penuh, tidak dapat dipilih:", poolAddress);
      return;
    }

    
    if (maxParticipants !== undefined && participants !== undefined && formattedCollateral !== undefined) {
      onSelect(poolAddress, maxParticipants, participants, formattedCollateral,collateral);
    } else {
      console.log("Data belum lengkap untuk pool: ", poolAddress);
    }
  };

  const renderRow = (label: string, value: React.ReactNode) => (
    <div className="grid grid-cols-2 mb-1">
      <div className="text-white font-medium">{label}</div>
      <div className="text-white font-semibold text-right">{value}</div>
    </div>
  );

  return (
    <div
      className="rainbow-border bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700 cursor-pointer transform transition duration-300 hover:scale-105"
      onClick={handleOnSelect} 
    >
      {renderRow('Status ', <span className={statusColor}>{statusText}</span>)}
      {renderRow('Max Participants ', maxParticipants?.toString() || 'N/A')}
      {renderRow('Participants Join ', Array.isArray(participants) ? participants.length : 0)}
      {renderRow('Collateral ', formattedCollateral || 'N/A')}
      {renderRow('Collateral ', collateral?.toString() || 'N/A')}

    </div>
  );
};

export default StakingPoolCard;
