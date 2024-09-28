import Container from "@/src/components/Ui/Container";
import Post from "@/src/components/Ui/Post";
import { IPost } from "../../../../types";
import axiosInstance from "@/src/lib/AxiosInstance";

export default async function FoundItems() {
  const { data } = await axiosInstance.get(`/items`);

  return (
    <Container>
      <div className="mx-auto my-3 max-w-[720px]">
        {data?.data?.map((post: IPost) => (
          <Post key={post?._id} post={post} />
        ))}
      </div>
    </Container>
  );
}
