import { classNames } from "@/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const MenuLink = ({ link }) => {
  const pathname = usePathname();
  console.log("🚀 ~ file: MenuLink.tsx:7 ~ MenuLink ~ pathname", pathname);
  let isActive = false;

  if (pathname === link) {
    isActive = true;
  }

  return (
    <Link href={link.link} className="bg-blue-500">
      <button
        className={classNames("", isActive ? "bg-green-400" : "bg-white")}
      >
        test
      </button>
    </Link>
  );
};
