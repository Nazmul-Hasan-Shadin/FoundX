import { Button } from "@nextui-org/button";
import { CardFooter, CardHeader, Card as NextUiCard } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { format } from "date-fns";

import { Skeleton } from "@nextui-org/skeleton";

const CardSkeleton = () => {
  return (
    <Skeleton>
      <NextUiCard isFooterBlurred radius="lg" className="border-none">
        <CardHeader className="absolute top-1 border z-10 flex-col ">
          <p className="absolute -top-0 right-1 text-white rounded-full bg-black px-2 text-tiny uppercase"></p>

          <h4 className="mt-2  rounded bg-black/30 p-1 text-2xl font-medium"></h4>
        </CardHeader>

        <CardFooter className="absoulte justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <div>
            <p className="text-tiny text-black/80"> </p>
            <p className="text-tiny text-black/80"></p>
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
    </Skeleton>
  );
};

export default CardSkeleton;
