import { NavLogo, SearchBar } from 'components';

export function Nav() {
  return (
    <nav className="w-full h-20 bg-zinc-800 border-b border-gray-200">
      <div className="w-full h-full max-w-7xl m-auto flex items-center justify-between px-4">
        <NavLogo />
        <div className="hidden lg:flex items-center gap-4">
          <SearchBar />
        </div>
      </div>
    </nav>
    );
  }
