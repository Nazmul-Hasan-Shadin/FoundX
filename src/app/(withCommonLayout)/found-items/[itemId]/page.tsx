import Post from "@/src/components/Ui/Post";
import { getRecentPosts } from "@/src/services/RecentPosts";
import { getPost } from "@/src/services/post";
import React from "react";

interface IProps {
  params: {
    itemId: string;
  };
}

const ItemDetailPage = async ({ params: { itemId } }: IProps) => {
  const { data: post } = await getPost(itemId);
  return (
    <div className="mx-auto my-3 max-w-[720px]">
      <Post key={post?._id} post={post} />
    </div>
  );
};

export default ItemDetailPage;
