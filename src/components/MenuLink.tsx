import { classNames } from "@/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const MenuLink = ({ link }) => {
  const pathname = usePathname();
  let isActive = false;

  if (pathname === link.link) {
    isActive = true;
  }

  return (
    <Link href={link.link}>
      <button
        className={classNames(
          "text-white",
          isActive ? "rounded-[36px] bg-[#2CB67D]" : ""
        )}
      >
        <span className="px-2">{link.label}</span>
      </button>
    </Link>
  );
};
