export type Strategy = {
  symbol: string;
  qty: number;
  buyPrice: number;
  takeProfit: number;
  tickSize: number;
  active: boolean;
};

export const defaultValue: Strategy = {
  symbol: '',
  buyPrice: -2.25,
  takeProfit: 3.25,
  qty: 0.1,
  tickSize: 2,
  active: false,
};

export const strategies: Strategy[] = [
  // {
  //   symbol: 'BTCUSDT',
  //   buyPrice: -1.25,
  //   qty: 0.006,
  //   takeProfit: 2.5,
  //   tickSize: 2,
  //   active: false,
  // },
  // {
  //   symbol: 'ETHUSDT',
  //   buyPrice: -1.55,
  //   qty: 0.09,
  //   takeProfit: 2.5,
  //   tickSize: 2,
  //   active: false,
  // },
  // {
  //   symbol: 'SOLUSDT',
  //   buyPrice: -2.75,
  //   qty: 8.5,
  //   takeProfit: 2.5,
  //   tickSize: 2,
  //   active: false,
  // },
  // {
  //   symbol: 'BNBUSDT',
  //   buyPrice: -2.45,
  //   qty: 0.39,
  //   takeProfit: 7.5,
  //   tickSize: 1,
  //   active: false,
  // },
  {
    symbol: 'DOGEUSDT',
    buyPrice: -3.75,
    qty: 1000,
    takeProfit: 7.5,
    tickSize: 4,
    active: true,
  },
];
