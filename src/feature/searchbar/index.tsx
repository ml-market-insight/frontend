'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

import { Stock } from '@/lib/models';

import Dropdown from './components/dropdown';

const STOCKS: Stock[] = [
  {
    name: 'Apple Inc.',
    ticker: 'AAPL',
    icon: 'https://s3-symbol-logo.tradingview.com/apple.svg',
    trust: 90
  },
  {
    name: 'Tesla Inc.',
    ticker: 'TSLA',
    icon: 'https://s3-symbol-logo.tradingview.com/tesla.svg',
    trust: 80
  },
  {
    name: 'Microsoft Corporation',
    ticker: 'MSFT',
    icon: 'https://s3-symbol-logo.tradingview.com/microsoft.svg',
    trust: 70
  },
  {
    name: 'Amazon.com Inc.',
    ticker: 'AMZN',
    icon: 'https://s3-symbol-logo.tradingview.com/amazon.svg',
    trust: 60
  },
  {
    name: 'Alphabet Inc.',
    ticker: 'GOOGL',
    icon: 'https://s3-symbol-logo.tradingview.com/alphabet.svg',
    trust: 50
  },
  {
    name: 'Facebook Inc.',
    ticker: 'FB',
    icon: 'https://s3-symbol-logo.tradingview.com/facebook.svg',
    trust: 40
  },
  {
    name: 'NVIDIA Corporation',
    ticker: 'NVDA',
    icon: 'https://s3-symbol-logo.tradingview.com/nvidia.svg',
    trust: 30
  },
  {
    name: 'PayPal Holdings Inc.',
    ticker: 'PYPL',
    icon: 'https://s3-symbol-logo.tradingview.com/paypal.svg',
    trust: 20
  },
  {
    name: 'Netflix Inc.',
    ticker: 'NFLX',
    icon: 'https://s3-symbol-logo.tradingview.com/netflix.svg',
    trust: 10
  },
  {
    name: 'Adobe Inc.',
    ticker: 'ADBE',
    icon: 'https://s3-symbol-logo.tradingview.com/adobe.svg',
    trust: 5
  }
];

const SearchBar = () => {
  const [search, setSearch] = useState('');

  const displayedStocks = STOCKS.filter((stock) =>
    stock.name.toLowerCase().includes(search.toLowerCase())
  )
    .sort((a, b) => b.trust - a.trust)
    .slice(0, 5);

  return (
    <div className="m-auto my-16 flex max-w-[832px] flex-col gap-3">
      <div className="group relative w-full">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Saisissez les actions dans lesquels vous souhaitez investir"
          className="w-full rounded-xl border border-lightgrey bg-obsidian py-3 pl-10 pr-4 text-white placeholder-gray/80 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-60"
        />
        <MagnifyingGlassIcon className="absolute left-4 top-1/2 size-4 -translate-y-1/2 transform text-gray/80" />
        <Dropdown items={displayedStocks} />
      </div>
      <div className="flex flex-col gap-2 px-2">
        <p className="text-sm text-gray">Mon choix: </p>
      </div>
    </div>
  );
};

export default SearchBar;
