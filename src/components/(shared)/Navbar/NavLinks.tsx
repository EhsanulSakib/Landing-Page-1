"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SignInButton from "./GetStartedButton";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#features", label: "Features" },
  { href: "#plans", label: "Plans" },
];

const NavLinks = ({ closeDrawer }: { closeDrawer?: () => void }) => {
  const pathname = usePathname();

  const handleScroll = (event: React.MouseEvent, href: string) => {
    event.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const scrollMargin = 100; // Adjust this value based on your navbar height
      window.scrollTo({
        top: targetElement.getBoundingClientRect().top + window.scrollY - scrollMargin,
        behavior: "smooth",
      });
    }
    if (closeDrawer) closeDrawer();
  };
  

  return (
    <div className="flex flex-col w-full lg:flex-row mt-6 lg:mt-0 gap-6 lg:gap-12 lg:items-center justify-between lg:justify-center">
      <ul className="flex flex-col lg:flex-row gap-8 text-secondary font-semibold text-sm md:text-base lg:text-lg xl:text-xl lg:items-center">
        {navItems.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              className={`transition ease-in-out duration-500 ${pathname === href
                ? "text-primary font-bold"
                : "text-primaryText hover:text-secondary"
                }`}
              onClick={(event) => handleScroll(event, href)}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavLinks;
