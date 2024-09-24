import { Button } from "@nextui-org/button";
import { CardFooter, CardHeader, Card as NextUiCard } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { format } from "date-fns";
import { IPost } from "../../../../types";

const Card = ({ post }:{post:IPost}) => {
  const { title, category, images, city, dateFound, _id } = post || {};


  return (
    <NextUiCard isFooterBlurred radius="lg" className="border-none">
      <CardHeader className="absolute top-1 border z-10 flex-col ">
        <p className="absolute -top-0 right-1 text-white rounded-full bg-black px-2 text-tiny uppercase">
          {category?.name}
        </p>

        <h4 className="mt-2  rounded bg-black/30 p-1 text-2xl font-medium">
          {title}
        </h4>
      </CardHeader>

      <Image
        alt="Woman listing to music"
        className=" z-0 w-full h-full -translate-y-6 object-cover "
        height={200}
        src={images[0]}
        width={200}
      />

      <CardFooter className="absoulte justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <div>
          <p className="text-tiny text-black/80"> {city}.</p>
          <p className="text-tiny text-black/80">
            {format(new Date(dateFound), "dd MM yy ")}
          </p>
        </div>
        <Button
          className="text-tiny text-white bg-black/20"
          variant="flat"
          color="default"
          radius="lg"
          size="sm"
        >
          Details
        </Button>
      </CardFooter>
    </NextUiCard>
  );
};

export default Card;
