import React from "react";

import { Button } from "@nextui-org/button";
import Link from "next/link";
import { getRecentPosts } from "@/src/services/RecentPosts";

import Card from "@/src/components/Ui/Card/Card";
import Container from "@/src/components/Ui/Container";
import { IPost } from "../../../../../types";

const RecentPost = async () => {
  const { data: Posts } = await getRecentPosts();


  return (
    <Container>
      <div className="section-title my-8">
        <h2 className="mb-2 text-center text-2xl">Recently Found Items</h2>
        <p className="text-center">
          A list Of Items that have been recently found and reported.
        </p>
      </div>

      <div className="my-8 grid justify-center  gap-10 sm:grid-cols-1 md:grid-cols-4">
        {Posts.map((item: IPost) => (
          <Card post={item} />
        ))}
      </div>

      <div className="flex justify-center">
        <Button className="rounded-md bg-default-900 text-default " size="md">
          <Link href={"/found-items"}>See All</Link>
        </Button>
      </div>
    </Container>
  );
};

export default RecentPost;
