// storage.js
export const storeDataAndUpdateUI = async (setDetails, setPercentage) => {
  if ('storage' in navigator && 'estimate' in navigator.storage) {
    const { usage, quota } = await navigator.storage.estimate();
    const percentUsed = Math.round((usage / quota) * 100);
    const usageInMib = Math.round(usage / (1024 * 1024));
    const quotaInMib = Math.round(quota / (1024 * 1024));

    const details = `${usageInMib} MB de ${quotaInMib} MB usados (${percentUsed}%)`;
    setDetails(details);
    setPercentage((usageInMib / quotaInMib) * 100);
  }
};