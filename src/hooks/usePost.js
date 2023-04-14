import { useQuery } from "react-query";
import { getPost } from "@/services/posts";

const POST_QUERY_KEY = "POST_QUERY_KEY";

const usePost = (id) => {
    return useQuery({
        queryKey: [POST_QUERY_KEY, id],
        queryFn: () => getPost(id),
        refetchOnMount: true,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
    });
};

export default usePost;
