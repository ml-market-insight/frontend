import { XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

import { Stock } from '@/lib/models';

interface CapsuleProps {
  item: Stock;
  onRemove: (stock: Stock) => void;
}

const Capsule: React.FC<CapsuleProps> = ({ item, onRemove }) => {
  return (
    <div
      className="flex cursor-pointer flex-row items-center gap-1 rounded-full bg-grey p-0.5 hover:bg-grey/80"
      onClick={() => onRemove(item)}
    >
      <span>
        <Image src={item.icon} alt={item.name} width="20" height="20" className="rounded-full" />
      </span>
      <h5 className="text-sm font-medium text-white">{item.ticker}</h5>
      <XMarkIcon className="size-5 p-1 text-white" />
    </div>
  );
};

export default Capsule;
