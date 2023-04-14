import { useQuery } from "react-query";
import { getPosts } from "@/services/posts";

const POSTS_QUERY_KEY = "POSTS_QUERY_KEY";

const usePosts = () => {
    return useQuery({
        queryKey: [POSTS_QUERY_KEY],
        queryFn: getPosts,
        refetchOnMount: true,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
    });
};

export default usePosts;
