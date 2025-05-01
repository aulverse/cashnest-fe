export const staking = [
    {
      "inputs": [
        { "internalType": "address", "name": "_stakingToken", "type": "address" },
        { "internalType": "address", "name": "_aavePool", "type": "address" },
        { "internalType": "address", "name": "_dataProvider", "type": "address" }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        { "indexed": true, "internalType": "address", "name": "winner", "type": "address" },
        { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }
      ],
      "name": "RewardClaimed",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "aavePool",
      "outputs": [
        { "internalType": "contract MockAavePool", "name": "", "type": "address" }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "dataProvider",
      "outputs": [
        { "internalType": "contract IProtocolDataProvider", "name": "", "type": "address" }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "drawLottery",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getParticipants",
      "outputs": [
        { "internalType": "address[]", "name": "", "type": "address[]" }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "user", "type": "address" }
      ],
      "name": "hasAlreadyWon",
      "outputs": [
        { "internalType": "bool", "name": "", "type": "bool" }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "", "type": "address" }
      ],
      "name": "hasWon",
      "outputs": [
        { "internalType": "bool", "name": "", "type": "bool" }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "lastDrawTime",
      "outputs": [
        { "internalType": "uint256", "name": "", "type": "uint256" }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "maxParticipants",
      "outputs": [
        { "internalType": "uint256", "name": "", "type": "uint256" }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "uint256", "name": "", "type": "uint256" }
      ],
      "name": "participants",
      "outputs": [
        { "internalType": "address", "name": "", "type": "address" }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "uint256", "name": "amount", "type": "uint256" }
      ],
      "name": "stake",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "", "type": "address" }
      ],
      "name": "stakers",
      "outputs": [
        { "internalType": "uint256", "name": "balance", "type": "uint256" },
        { "internalType": "uint256", "name": "startTime", "type": "uint256" }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "stakingDuration",
      "outputs": [
        { "internalType": "uint256", "name": "", "type": "uint256" }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "stakingToken",
      "outputs": [
        { "internalType": "contract IERC20", "name": "", "type": "address" }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "recipient", "type": "address" }
      ],
      "name": "unstake",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
  

  export const factory = [
    {
      "inputs": [
        { "internalType": "address", "name": "_collateralToken", "type": "address" },
        { "internalType": "address", "name": "_aavePool", "type": "address" },
        { "internalType": "address", "name": "_iProtocolDataProvider", "type": "address" },
        { "internalType": "uint256", "name": "_collateral", "type": "uint256" },
        { "internalType": "uint256", "name": "_maxParticipants", "type": "uint256" }
      ],
      "name": "createLendingPool",
      "outputs": [
        { "internalType": "address", "name": "", "type": "address" }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getStakingPools",
      "outputs": [
        { "internalType": "address[]", "name": "", "type": "address[]" }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "uint256", "name": "", "type": "uint256" }
      ],
      "name": "pools",
      "outputs": [
        { "internalType": "address", "name": "", "type": "address" }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];

export const poolsStacking = 
[
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      { "name": "_stakingToken", "type": "address", "internalType": "address" },
      { "name": "_aavePool", "type": "address", "internalType": "address" },
      { "name": "_dataProvider", "type": "address", "internalType": "address" },
      { "name": "_collateral", "type": "uint256", "internalType": "uint256" },
      { "name": "_maxParticipants", "type": "uint256", "internalType": "uint256" }
    ]
  },
  {
    "type": "event",
    "anonymous": false,
    "name": "RewardClaimed",
    "inputs": [
      { "indexed": true, "name": "winner", "type": "address", "internalType": "address" },
      { "indexed": false, "name": "amount", "type": "uint256", "internalType": "uint256" }
    ]
  },
  {
    "type": "function",
    "stateMutability": "view",
    "name": "aavePool",
    "outputs": [{ "name": "", "type": "address", "internalType": "contract MockAavePool" }],
    "inputs": []
  },
  {
    "type": "function",
    "stateMutability": "view",
    "name": "collateral",
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "inputs": []
  },
  {
    "type": "function",
    "stateMutability": "view",
    "name": "dataProvider",
    "outputs": [{ "name": "", "type": "address", "internalType": "contract IProtocolDataProvider" }],
    "inputs": []
  },
  {
    "type": "function",
    "stateMutability": "nonpayable",
    "name": "drawLottery",
    "outputs": [],
    "inputs": []
  },
  {
    "type": "function",
    "stateMutability": "view",
    "name": "getParticipants",
    "outputs": [{ "name": "", "type": "address[]", "internalType": "address[]" }],
    "inputs": []
  },
  {
    "type": "function",
    "stateMutability": "view",
    "name": "hasAlreadyWon",
    "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
    "inputs": [{ "name": "user", "type": "address", "internalType": "address" }]
  },
  {
    "type": "function",
    "stateMutability": "view",
    "name": "hasWon",
    "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
    "inputs": [{ "name": "", "type": "address", "internalType": "address" }]
  },
  {
    "type": "function",
    "stateMutability": "view",
    "name": "lastDrawTime",
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "inputs": []
  },
  {
    "type": "function",
    "stateMutability": "view",
    "name": "maxParticipants",
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "inputs": []
  },
  {
    "type": "function",
    "stateMutability": "view",
    "name": "participants",
    "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
    "inputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }]
  },
  {
    "type": "function",
    "stateMutability": "nonpayable",
    "name": "stake",
    "outputs": [],
    "inputs": [{ "name": "amount", "type": "uint256", "internalType": "uint256" }]
  },
  {
    "type": "function",
    "stateMutability": "view",
    "name": "stakers",
    "outputs": [
      { "name": "balance", "type": "uint256", "internalType": "uint256" },
      { "name": "startTime", "type": "uint256", "internalType": "uint256" }
    ],
    "inputs": [{ "name": "", "type": "address", "internalType": "address" }]
  },
  {
    "type": "function",
    "stateMutability": "view",
    "name": "stakingDuration",
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "inputs": []
  },
  {
    "type": "function",
    "stateMutability": "view",
    "name": "stakingToken",
    "outputs": [{ "name": "", "type": "address", "internalType": "contract IERC20" }],
    "inputs": []
  },
  {
    "type": "function",
    "stateMutability": "nonpayable",
    "name": "unstake",
    "outputs": [],
    "inputs": [{ "name": "recipient", "type": "address", "internalType": "address" }]
  }
];

  