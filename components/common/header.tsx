import { DropdownUser } from "@/components/ui/dropdown-user";
import { Input } from "@/components/ui/input";

interface HeaderProps {
  setShowSidebar: () => void;
}

export const Header = ({ setShowSidebar }: HeaderProps) => {
  return (
    <header className="flex items-center justify-between h-full px-5">
      <div className="relative hidden xl:block">
        <Input icon="fi-rr-search" placeholder="Buscar..." />
      </div>
      <div className="xl:hidden">
        <button type="button" className="text-2xl" onClick={setShowSidebar}>
          <i className="fi fi-rr-menu-burger"></i>
        </button>
      </div>
      <div>
        <DropdownUser />
      </div>
    </header>
  );
};
