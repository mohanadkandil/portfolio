import { MenuLink } from "./MenuLink";

const links = [
  { label: "All", link: "/" },
  { label: "About", link: "/about" },
  { label: "Projects", link: "/projects" },
  { label: "Contact", link: "/contact" },
];
export const Menu = () => {
  return (
    <div className="my-12 flex gap-10 rounded-[36px] border-2 border-[#2C2C2E] px-8 py-3">
      {links.map((link) => (
        <MenuLink link={link} key={link.label} />
      ))}
    </div>
  );
};
