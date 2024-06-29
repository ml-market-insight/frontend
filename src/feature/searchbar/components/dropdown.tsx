import { ShieldCheckIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

import { Stock } from '@/lib/models';

interface DropdownProps {
  items: Stock[];
  onClick: (stock: Stock) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ items, onClick }) => {
  return (
    <div className="duration invisible absolute left-0 top-full z-10 mt-0 w-full rounded-lg bg-white opacity-0 shadow-2xl transition-[opacity,margin,visibility] group-focus-within:visible group-focus-within:mt-2 group-focus-within:opacity-100">
      {items.map((item) => (
        <button
          key={item.ticker}
          onClick={(e) => {
            onClick(item);
            e.currentTarget.blur();
          }}
          className="flex w-full flex-row items-center rounded-lg px-4 py-2 hover:bg-zinc-100"
        >
          <span>
            <Image
              src={item.icon}
              alt={item.name}
              width="24"
              height="24"
              className="rounded-full"
            />
          </span>
          <span className="flex flex-row items-center divide-x divide-black/20 text-left">
            <h4 className="w-24 pl-3 text-black/80">{item.ticker}</h4>
            <h5 className="pl-4 text-black">{item.name}</h5>
          </span>
          <span className="ml-auto flex flex-row items-center gap-1 opacity-45">
            <ShieldCheckIcon className="size-4" />
            <p className="text-sm">{item.trust}%</p>
          </span>
        </button>
      ))}
    </div>
  );
};

export default Dropdown;
