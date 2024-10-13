import React from 'react';
import { FaDollarSign } from 'react-icons/fa';

const StackingPools = ({ pools }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {pools.map((pool) => (
        <div key={pool.id} className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
          <img className="w-full h-48 object-cover" src={pool.image} alt={pool.name} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{pool.name}</div>
            <p className="text-gray-700 text-base">{pool.description}</p>
            <div className="mt-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {pool.allowedTokens.join(' ')}
              </span>
            </div>
            <div className="mt-4">
              <span className="text-lg font-semibold text-green-600">
                {pool.returnPercentage}%
              </span>
              <span className="text-gray-500 text-sm"> Return</span>
            </div>
          </div>
          <div className="px-6 pt-4 pb-2">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              <FaDollarSign className="inline mr-1" />
              Deposit
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StackingPools;
