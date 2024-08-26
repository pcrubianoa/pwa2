import React, { useEffect, useState } from 'react';
import { storeDataAndUpdateUI } from '../utils/storage';

const StorageUsage = () => {
  const [details, setDetails] = useState('');
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    storeDataAndUpdateUI(setDetails, setPercentage);
  }, []);

  return (
    <div className="mt-2 text-center">
      <p id="storageEstimate">{details}</p>
      <div className="progress" style={{ width: '100%', backgroundColor: '#e0e0e0' }}>
        <div className="percentage" style={{ width: `${percentage}%`, backgroundColor: '#76c7c0' }}></div>
      </div>
    </div>
  );
};

export default StorageUsage;
