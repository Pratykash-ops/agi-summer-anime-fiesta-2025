
import { Typography, Card } from "@material-tailwind/react";


export function StatsCard({ count, title }) {
  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h1" className="font-bold" color="blue-gray">
        {count}
      </Typography>
      <Typography variant="h6" color="blue-gray" className="mt-1 font-medium">
        {title}
      </Typography>
    </Card>
  );
}


export default StatsCard;
