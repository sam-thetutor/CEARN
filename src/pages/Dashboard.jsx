import React from 'react'
import StackingPools from '../components/Pool';

const poolsData = [
  {
    id: 1,
    image: '../assets/motoko.png',
    name: 'Pool One',
    description: 'This is a short description of Pool One.',
    allowedTokens: ['ICP', 'ckBTC'],
    returnPercentage: 5.5, // Example return percentage
  },
  {
    id: 2,
    image: '../assets/motoko.png',
    name: 'Pool Two',
    description: 'This is a short description of Pool Two.',
    allowedTokens: ['ckUSDT', 'ckBTC'],
    returnPercentage: 7.2, // Example return percentage
  },
  // Add more pools as needed
];

const Dashboard = () => {
  return (
    <div>
      <StackingPools pools={poolsData} />
    </div>
  )
}

export default Dashboard
