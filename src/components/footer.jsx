import { Typography, Button, IconButton } from "@material-tailwind/react";
import Link from "next/link";
import Image  from  "next/legacy/image"
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="pb-5 p-10 md:pt-10">
      <div className="container flex flex-col mx-auto">
        <div className="flex !w-full py-20 mb-5 md:mb-20 flex-col !justify-center !items-center bg-[url('https://res.cloudinary.com/dlyq01q0n/image/upload/v1747064213/assets/PrevEvent/AGI_EVENT_IMG_93401966_ee2ey9.jpg')] bg-no-repeat bg-cover bg- max-w-6xl mx-auto rounded-2xl p-5 ">
          <Typography
            className="text-2xl md:text-3xl text-center font-bold "
            color="white"
          >
            Coming Soon
          </Typography>
          <Typography
            color="white"
            className=" md:w-7/12 text-center my-3 !text-base"
          >
            Don&apos;t miss out on this exclusive offer that will end soon.
          </Typography>
          <div className="flex md:w-fit gap-3 mt-2 flex-col">
            <Link href='https://instagram.com/animegroupindia'>
            <Button color="white" size="md">
              Stay Updated
            </Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center !justify-between">
          <div className="w-32 relative h-32 ">
            <Image src='/agi_black_logo.png' layout='fill'  objectFit='contain'></Image>
          </div>
          <ul className="flex justify-center my-4 md:my-0 w-max mx-auto items-center gap-4">
            {/* {LINKS.map((link, index) => (
              <li key={index}>
                <Typography
                  as="a"
                  href="#"
                  variant="small"
                  color="white"
                  className="font-normal !text-gray-700 hover:!text-gray-900 transition-colors"
                >
                  {link}
                </Typography>
              </li>
            ))} */}
          </ul>
          <div className="flex w-fit justify-center gap-2">
            {/* <IconButton size="sm" color="gray" variant="text">
              <Link  href=''><i className="fa-brands fa-twitter text-lg" /></Link>
            </IconButton> */}
            <IconButton size="sm" color="gray" variant="text" className='hover:text-red-500'>
              <Link href='https://www.youtube.com/@DrShubhamSinghal'><i className="fa-brands fa-youtube text-lg" /></Link>
            </IconButton>
            <IconButton size="sm" color="gray" variant="text" className="hover:text-pink-500">
              <Link href='https://instagram.com/animegroupindia'><i className="fa-brands fa-instagram text-lg" /></Link>
            </IconButton>
          </div>
        </div>
        <Typography
          color="blue-gray"
          className="text-center mt-12 font-normal !text-gray-700"
        >
          &copy; {CURRENT_YEAR} {" "}
          <a href="/" target="_blank">
            Summer Anime Fiesta 2025
          </a>{" "}
          by{" "}
          <a href="/" target="_blank">
            Anime Group India
          </a>
          .
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
