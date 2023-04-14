import { useQuery } from "react-query";
import { getSliders } from "@/services/slider";

const SLIDERS_QUERY_KEY = "SLIDERS_QUERY_KEY";

const useSliders = () => {
    return useQuery({
        queryKey: [SLIDERS_QUERY_KEY],
        queryFn: getSliders,
        refetchOnMount: true,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
    });
};

export default useSliders;
