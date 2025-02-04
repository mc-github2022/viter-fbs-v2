import React from "react";
import { StoreContext } from "../../../../store/StoreContext";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "@tanstack/react-query";
import { queryDataInfinite } from "../../../../helpers/queryDataInfinite";
import SearchBar from "../../../../partials/SearchBar";
import FetchingSpinner from "../../../../partials/spinners/FetchingSpinner";
import TableLoading from "../../../../partials/spinners/TableLoading";
import NoData from "../../../../partials/spinners/NoData";
import ServerError from "../../../../partials/spinners/ServerError";
import LoadMore from "../../../../partials/LoadMore";
import EmailLogStatus from "./EmailLogStatus";

const EmailLogTable = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [isFilter, setIsFilter] = React.useState(false);
  const [purposeData, setPurposeData] = React.useState("all");
  const [dateFrom, setDateFrom] = React.useState("");
  const [dateTo, setDateTo] = React.useState("");

  const [onSearch, setOnSearch] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const search = React.useRef({ value: "" });
  const { ref, inView } = useInView();

  const {
    data: result,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: [
      "email-log",
      onSearch,
      store.isSearch,
      isFilter,
      purposeData,
      dateFrom,
      dateTo,
    ],
    queryFn: async ({ pageParam = 1 }) =>
      await queryDataInfinite(
        `${apiVersion}/email-log/search`, // search endpoint
        `${apiVersion}/email-log/page/${pageParam}`, // list endpoint
        store.isSearch || isFilter,
        // search boolean
        {
          searchValue: search.current.value,
          id: "",
          isFilter,
          sending_email_log_audience_id:
            purposeData === "all" ? "" : purposeData,
        }, // search value
        "post"
      ),
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total) {
        return lastPage.page + lastPage.count;
      }
      return;
    },
    refetchOnWindowFocus: false,
  });

  React.useEffect(() => {
    if (inView) {
      setPage((prev) => prev + 1);
      fetchNextPage();
    }
  }, [inView]);

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex gap-5">
          <div className="relative flex flex-col gap-2 w-[250px]">
            <label className="z-10">Filter</label>

            <select>
              <option value="volvo">All</option>
              <optgroup label="Status">
                <option value="volvo">Sent</option>
                <option value="saab">Failed</option>
              </optgroup>
              <optgroup label="Audience">
                <option value="mercedes">Web-LCS</option>
              </optgroup>
            </select>
          </div>
        </div>

        <SearchBar
          search={search}
          dispatch={dispatch}
          store={store}
          result={result?.pages}
          isFetching={isFetching}
          setOnSearch={setOnSearch}
          onSearch={onSearch}
        />
      </div>
      <div className=" shadow-md rounded-md overflow-y-auto min-h-full md:min-h-[calc(100vh-30px)] lg:max-h-[calc(90vh-150px)] mb-10 lg:mb-0 lg:min-h-0 relative">
        {isFetching && !isFetchingNextPage && status !== "pending" && (
          <FetchingSpinner />
        )}
        <table>
          <thead>
            <tr className="text-[black]">
              <th className="pl-2 w-[1rem]">#</th>
              <th>Email</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="relative">
            {(status === "pending" || result?.pages[0].data.length === 0) && (
              <tr className="text-center">
                <td colSpan="100%" className="p-10">
                  {status === "pending" ? <TableLoading /> : <NoData />}
                </td>
              </tr>
            )}

            {error && (
              <tr className="text-center ">
                <td colSpan="100%" className="p-10">
                  <ServerError />
                </td>
              </tr>
            )}

            {result?.pages.map((page, key) => (
              <React.Fragment key={key}>
                {page?.data.map((item, key) => (
                  <tr key={key} className="text-[14px]">
                    <td className="pl-2 ">{counter++}.</td>
                    <td className="">{item.sending_email_log_email}</td>
                    <td className="">{item.sending_email_log_created}</td>
                    <td className="place-content-start">
                      {item.sending_email_log_is_active === 1 ? (
                        <EmailLogStatus text="Sent" />
                      ) : (
                        <EmailLogStatus text="Failed" />
                      )}
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
        <div className="place-self-center">
          <LoadMore
            fetchNextPage={fetchNextPage}
            isFetchingNextPage={isFetchingNextPage}
            hasNextPage={hasNextPage}
            result={result?.pages[0]}
            setPage={setPage}
            page={page}
            refView={ref}
          />
        </div>
      </div>
    </>
  );
};

export default EmailLogTable;
