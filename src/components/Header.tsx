import { Menu } from "./Menu";

export const Header = () => {
  return (
    <header className="flex w-full items-center justify-between px-8 py-4">
      <span className="text-3xl font-semibold text-[#2cb67d]">Kandil</span>
      <Menu />
      <div className="px-4" />
    </header>
  );
};
