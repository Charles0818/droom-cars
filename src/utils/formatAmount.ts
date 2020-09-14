export const formatAmount = (amount: number): string => {
  const formatter: string = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'NGN',
  }).format(amount);
  return formatter;
};
