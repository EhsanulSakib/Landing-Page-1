"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SignInButton from "./GetStartedButton";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/gallery", label: "Gallery" },
  { href: "/achievements", label: "Achievements" },
];

const NavLinks = ({ closeDrawer }: { closeDrawer?: () => void }) => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col w-full lg:flex-row mt-6 lg:mt-0 gap-6 lg:gap-12 lg:items-center justify-between lg:justify-center">
      <ul className="flex flex-col lg:flex-row gap-8 text-secondary font-semibold text-base md:text-lg lg:text-xl xl:text-2xl lg:items-center">
        {navItems.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={`transition ease-in-out duration-500 ${pathname === href
                ? "text-primary font-bold"
                : "text-primaryText hover:text-secondary"
                }`}
              onClick={closeDrawer}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavLinks;
