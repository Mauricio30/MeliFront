import { countryCurrencyDictionary } from "./constants";

export const formatCurrency = (amount, currency) => {
    let nomberToFormat = amount;
  
    return new Intl.NumberFormat(countryCurrencyDictionary[currency], {
      style: 'currency',
      currency,
      currencyDisplay: 'symbol',
      maximumFractionDigits: 0
    }).format(nomberToFormat);
};