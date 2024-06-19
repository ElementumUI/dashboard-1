"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

import {
  Menu,
  MenuItem,
  MenuButton,
  MenuDivider,
  MenuHeader,
} from "@szhsin/react-menu";

export const DropdownUser = () => {
  const router = useRouter();

  const logout = () => {
    router.push("/auth/login");
  };

  return (
    <Menu
      menuButton={
        <MenuButton className="flex items-center gap-x-4 p-3 rounded-lg hover:bg-white transition-colors">
          <Image
            src="https://img.freepik.com/vector-gratis/8000-210_138676-7714.jpg?t=st=1718729306~exp=1718732906~hmac=1f47051bb54737c79dfa5e6d44d2e6cc9d1498b465e351c70784a8fead874fa8&w=1480"
            alt="Image"
            width={50}
            height={50}
            className="w-8 lg:w-10 h-8 lg:h-10 object-cover rounded-lg"
          />
          <div className="text-left">
            <h3 className="font-medium text-sm lg:text-base">
              Jorge Luis Trejo
            </h3>
            <p className="text-gray-500 text-xs lg:text-sm">
              jotredev@gmail.com
            </p>
          </div>
          <i className="fi fi-rr-angle-down"></i>
        </MenuButton>
      }
      transition
      align="end"
      menuClassName="w-56 box-border z-50 text-sm p-1 shadow-md rounded-md select-none focus:outline-none min-w-[9rem]"
      gap={10}
    >
      <MenuHeader className="px-2">Mi cuenta</MenuHeader>
      <MenuItem className="flex items-center gap-2 py-1.5 cursor-default hover:bg-gray-100 px-2 rounded-sm transition-colors">
        <i className="fi fi-rr-user"></i>
        Mi perfil
      </MenuItem>
      <MenuItem className="flex items-center gap-2 py-1.5 cursor-default hover:bg-gray-100 px-2 rounded-sm transition-colors">
        <i className="fi fi-rr-wallet"></i>
        Mi suscripción
      </MenuItem>
      <MenuItem className="flex items-center gap-2 py-1.5 cursor-default hover:bg-gray-100 px-2 rounded-sm transition-colors">
        <i className="fi fi-rr-settings"></i>
        Ajustes
      </MenuItem>
      <MenuDivider />
      <MenuItem className="flex items-center gap-2 py-1.5 cursor-default hover:bg-gray-100 px-2 rounded-sm transition-colors">
        <i className="fi fi-rr-users"></i>
        Equipo
      </MenuItem>
      <MenuItem className="flex items-center gap-2 py-1.5 cursor-default hover:bg-gray-100 px-2 rounded-sm transition-colors">
        <i className="fi fi-rr-user-add"></i>
        Agregar colaborado
      </MenuItem>
      <MenuItem className="flex items-center gap-2 py-1.5 cursor-default hover:bg-gray-100 px-2 rounded-sm transition-colors">
        <i className="fi fi-rr-invite"></i>
        Invitar colaborador
      </MenuItem>
      <MenuDivider />
      <MenuItem className="flex items-center gap-2 py-1.5 cursor-default hover:bg-gray-100 px-2 rounded-sm transition-colors">
        <i className="fi fi-rr-user-headset"></i>
        Soporte técnico
      </MenuItem>
      <MenuItem
        disabled
        className="flex items-center gap-2 py-1.5 cursor-default px-2 rounded-sm transition-colors"
      >
        <i className="fi fi-rr-cloud"></i>
        Cloud
      </MenuItem>
      <MenuDivider />
      <MenuItem
        onClick={logout}
        className="flex items-center gap-2 py-1.5 cursor-default hover:bg-gray-100 px-2 rounded-sm transition-colors"
      >
        <i className="fi fi-rr-exit"></i>
        Cerrar sesión
      </MenuItem>
    </Menu>
  );
};
