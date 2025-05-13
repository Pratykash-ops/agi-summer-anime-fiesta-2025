import Image from "next/legacy/image";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  Avatar,
  Button
} from "@material-tailwind/react";
import Countdown from './Countdown'

export function EventContentCard({
  title,
  des,
  panel,
  img,
  date='2025-06-01T11:30:00'
}) {
  return (
   <> 
   <Countdown targetDate={date}/>
   <Card
      color="transparent"
      shadow={false}
      className="lg:!flex-row mb-10 lg:items-end"
    >
      <CardHeader
        floated={false}
        shadow={false}
        className="h-[32rem] max-w-[28rem] shrink-0"
      >
        <div 
          className="relative w-80 h-96  p-6 drop-shadow">

        <Image
          src={img}
          alt="character illust"
          layout="fill"
          objectFit="contain"
          />
          </div>
      </CardHeader>
      <CardBody className="col-span-full lg:col-span-3">
        <Typography variant="h6" color="blue-gray" className="mb-4 inline-flex">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>
{panel}
        </Typography>
        <Typography variant="h2" color="blue-gray" className="mb-4 font-medium">
          {title}
        </Typography>
        <Typography className="mb-12 md:w-8/12 font-medium !text-gray-500">
          {des}
        </Typography>
        <Button>More Info &rarr;</Button>
        <div className="flex items-center gap-4">
          <Avatar
            variant="circular"
            src="/agi_black_logo.png"
            alt="spotify"
            size="xl"
          />
        </div>
      </CardBody>
    </Card></>
  );
}

export default EventContentCard;
