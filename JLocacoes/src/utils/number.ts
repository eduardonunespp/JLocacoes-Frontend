export const calculateNutrient = (pesoLiquido: number, nutriente: number) => {
  return (pesoLiquido * nutriente) / 100;
};

export const toCurrency = (value: string) => {
  return `${(parseFloat(value) / 100).toFixed(2)}`;
};

export const { format: formatPrice } = new Intl.NumberFormat("pt-br", {
  style: "currency",
  currency: "BRL",
});
