import {
  Card,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";



export function AboutCard({ title, description, subTitle, extraClass}) {
  return (
    <Card shadow={false}>
      <CardBody className={"h-[453px] p-5 flex flex-col justify-center items-center rounded-2xl overflow-hidden bg-no-repeat bg-center bg-cover bg-gray-900 "+extraClass}>
        <div className="absolute 0 h-full w-full bg-black/30 z-0 rounded-2xl" />
        <Typography variant="h6" className="mb-4 text-center z-50" color="white">
          {subTitle}
        </Typography>
        <Typography variant="h4" className="text-center z-50" color="white">
          {title}
        </Typography>
        <Typography
          color="white"
          className="mt-2 mb-10 text-base w-full lg:w-8/12 text-center font-normal z-50"
        >
          {description}
        </Typography>
      </CardBody>
    </Card>
  );
}


export default AboutCard;
