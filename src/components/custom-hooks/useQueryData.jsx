import { useQuery } from "@tanstack/react-query";
import { queryData } from "../helpers/queryData";

// Queries hook
const useQueryData = (
  endpoint,
  method,
  key = "",
  fd = {},
  id = null,
  refetchOnWindowFocus = false,
  enabled = true
) => {
  return useQuery({
    queryKey: [key, id],
    queryFn: async () => await queryData(endpoint, method, fd),
    retry: false,
    refetchOnWindowFocus: refetchOnWindowFocus,
    refetchOnMount: enabled, // only refetch if enabled
    cacheTime: 200,
    enabled,
  });
};

export default useQueryData;

//userQueryData processes the request, and returns the values
