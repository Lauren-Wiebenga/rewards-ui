export const sortDateStrings = (dates) => {
  return dates.sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : 0));
};

export const formatAmount = (amount) => {
  return `$${amount.toFixed(2)}`;
};
