import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const SearchBar = () => {
  return (
    <div className="m-auto my-16 flex max-w-[832px] flex-col gap-3">
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Saisissez les actions dans lesquels vous souhaitez investir"
          className="w-full rounded-xl border border-lightgrey bg-obsidian py-3 pl-10 pr-4 text-white placeholder-gray/80 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-60"
        />
        <MagnifyingGlassIcon className="absolute left-4 top-1/2 size-4 -translate-y-1/2 transform text-gray/80" />
      </div>
      <div className="flex flex-col gap-2 px-2">
        <p className="text-sm text-gray">Mon choix: </p>
      </div>
    </div>
  );
};

export default SearchBar;
