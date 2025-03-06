import React, { useEffect, useState } from 'react';
import { FaExclamationTriangle } from "react-icons/fa";


const OfflineNotifier: React.FC = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (isOnline) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-red-600 text-white text-center p-4">
      <FaExclamationTriangle className="mr-2" />
      You are currently offline. Some features may not be available.
    </div>
  );
};

export default OfflineNotifier;