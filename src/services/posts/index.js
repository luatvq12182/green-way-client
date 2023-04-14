import { httpClient } from "@/services/httpClient";

const POST_PREFIX = "/posts";

const getPosts = () => {
    return httpClient.get(POST_PREFIX);
};

const getPost = (id) => {
    return httpClient.get(POST_PREFIX + "/" + id);
};

export { getPosts, getPost };
