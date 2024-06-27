import Image from 'next/image';

import logo from '/public/images/logo.svg';

const TopBar = () => {
  return (
    <nav className="w-screen border-b border-lightgrey bg-obsidian px-11 py-4">
      <a href="/" className="inline-block">
        <Image src={logo} alt="Logo" />
      </a>
    </nav>
  );
};

export default TopBar;
