const formatNum = (number) => {
  return new Intl.NumberFormat("th-TH", { maximumFractionDigits: 0 }).format(
    number
  );
};

export { formatNum };
