import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  RectangleStackIcon,
  UserCircleIcon,
  CommandLineIcon,
  Squares2X2Icon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import Link from "next/link";


function NavItem({ children, href }) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        target={href ? "_blank" : "_self"}
        variant="paragraph"
        className="flex items-center gap-2 font-medium"
      >
        {children}
      </Typography>
    </li>
  );
}

const NAV_MENU = [
  // {
  //   name: "Instagram",
  //   icon: RectangleStackIcon,
  //   href: 'https://instagram.com/animegroupindia'
  // },
  // {
  //   name: "Account",
  //   icon: UserCircleIcon,
  // },
  // {
  //   name: "Docs",
  //   icon: CommandLineIcon,
  //   href: "https://www.material-tailwind.com/docs/react/installation",
  // },
];

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MTNavbar
      shadow={false}
      fullWidth
      blurred={true}
      color={isScrolling ? "white" : "transparent"}
      className="fixed top-0 z-[9999] border-0"
    >
      <div className="container mx-auto flex items-center justify-between">
        <Typography
          color={isScrolling ? "blue-gray" : "white"}
          className="text-lg font-bold"
        >
          <Link href='/'>Summer Anime Fiesta </Link>
        </Typography>
        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex ${
            isScrolling ? "text-gray-900" : "text-white"
          }`}
        >
          {NAV_MENU.map(({ name, icon: Icon, href }) => (
            <NavItem key={name} href={href}>
              <Icon className="h-5 w-5" />
              <span>{name}</span>
            </NavItem>
          ))}
        </ul>
        <div className="hidden items-center gap-4 lg:flex">
          <Link href='https://www.instagram.com/animegroupindia' about='_blank'>
          <Button color={isScrolling ? "gray" : "white"} variant="text">
            Updates
          </Button>
          </Link>
          <a href="/passes">
            <Button color={isScrolling ? "gray" : "white"}>Buy Passes</Button>
          </a>
        </div>
        <IconButton
          variant="text"
          color={isScrolling ? "gray" : "white"}
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-lg bg-white px-6 py-5">
          <ul className="flex flex-col gap-4 text-gray-900">
            {NAV_MENU.map(({ name, icon: Icon, href }) => (
              <NavItem key={name} href={href}>
                <Icon className="h-5 w-5" />
                {name}
              </NavItem>
            ))}
          </ul>
          <div className="mt-6 flex items-center gap-4">
            {/* <Button variant="text">Log in</Button> */}
            <Link href="/passes" >
              <Button color="gray">Buy Passes</Button>
            </Link>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
