import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import { useInView } from "react-intersection-observer";
import { queryDataInfinite } from "../../../../helpers/queryDataInfinite";
import LoadMore from "../../../../partials/LoadMore";
import ServerError from "../../../../partials/spinners/ServerError";
import TableLoading from "../../../../partials/spinners/TableLoading";
import NoData from "../../../../partials/spinners/NoData";
import FetchingSpinner from "../../../../partials/spinners/FetchingSpinner";
import SearchBar from "../../../../partials/SearchBar";
import { StoreContext } from "../../../../store/StoreContext";
import { setIsSearch } from "../../../../store/StoreAction";
import { purposeValue } from "../functions-notification";
import { apiVersion, formatDate } from "../../../../helpers/functions-general";

const NotificationLogTable = () => {
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
      "notificationlog",
      onSearch,
      store.isSearch,
      isFilter,
      purposeData,
      dateFrom,
      dateTo,
    ],
    queryFn: async ({ pageParam = 1 }) =>
      await queryDataInfinite(
        `${apiVersion}/notificationlog/search`, // search endpoint
        `${apiVersion}/notificationlog/page/${pageParam}`, // list endpoint
        store.isSearch || isFilter,
        // search boolean
        {
          searchValue: search.current.value,
          id: "",
          isFilter,
          notification_log_purpose: purposeData === "all" ? "" : purposeData,
          dateFrom: isFilter ? dateFrom : null,
          dateTo: isFilter ? dateTo : null,
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

  let counter = 1;

  const handleChangePurpose = (e) => {
    setPurposeData(e.target.value);
    setIsFilter(false);
    setDateFrom("");
    setDateTo("");
    dispatch(setIsSearch(false));
    search.current.value = "";
    if (e.target.value !== "all") {
      setIsFilter(true);
    }
    setPage(1);
    console.log(purposeData);
  };

  React.useEffect(() => {
    if (dateFrom && dateTo && new Date(dateFrom) > new Date(dateTo)) {
      console.error(
        "Invalid date range: dateFrom should not be later than dateTo."
      );
      setDateTo("");
    }
  }, [dateFrom, dateTo]);

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
            <label className="z-10">Purpose</label>
            <select
              name="purpose"
              value={purposeData}
              onChange={(e) => handleChangePurpose(e)}
              disabled={isFetching || status === "pending"}
            >
              <option value="all">All</option>

              {purposeValue()?.map((item, key) => (
                <option key={key} value={item.code}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col md:flex md:flex-row gap-2">
            <div className="relative flex flex-col gap-2 w-[200px]">
              <label className="z-10">Date From</label>
              <input
                type="date"
                value={dateFrom}
                onChange={(e) => {
                  const fromDate = e.target.value;
                  setDateFrom(fromDate);
                  if (
                    fromDate &&
                    dateTo &&
                    new Date(fromDate) <= new Date(dateTo)
                  ) {
                    setIsFilter(true);
                  } else {
                    setIsFilter(false);
                  }
                  if (
                    fromDate ||
                    (dateTo && new Date(fromDate) <= new Date(dateTo))
                  ) {
                    setIsFilter(true);
                  } else {
                    setIsFilter(false);
                  }
                }}
                disabled={isFetching || status === "pending"}
              />
            </div>
            <div className="relative flex flex-col gap-2 w-[200px]">
              <label className="z-10">Date To</label>
              <input
                type="date"
                value={dateTo}
                onChange={(e) => {
                  const toDate = e.target.value;
                  setDateTo(toDate);
                  if (
                    toDate &&
                    dateFrom &&
                    new Date(toDate) <= new Date(dateFrom)
                  ) {
                    setIsFilter(true);
                  } else {
                    setIsFilter(false);
                  }
                  if (
                    toDate ||
                    (dateFrom && new Date(toDate) <= new Date(dateFrom))
                  ) {
                    setIsFilter(true);
                  } else {
                    setIsFilter(false);
                  }
                }}
                disabled={isFetching || status === "pending"}
              />
            </div>
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
      <div className=" shadow-md rounded-md overflow-y-auto min-h-full md:min-h-[calc(100vh-30px)] lg:max-h-[calc(90vh-250px)] mb-10 lg:mb-0 lg:min-h-0 relative">
        {isFetching && !isFetchingNextPage && status !== "pending" && (
          <FetchingSpinner />
        )}
        <table>
          <thead>
            <tr className="text-[black]">
              <th className="pl-2 w-[1rem]">#</th>
              <th>Date Sent</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Purpose</th>
              <th>Subject</th>
              <th>Message</th>
              <th>Attachment</th>
              <th>Receiver</th>
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
                    <td className="">
                      {formatDate(item.notification_log_created)}
                    </td>
                    <td className="">{item.notification_log_name}</td>
                    <td className="">{item.notification_log_email}</td>
                    <td className="">{item.notification_log_phone}</td>
                    <td className="">
                      {`${item.notification_log_email_subject} ( ${
                        purposeValue()?.filter(
                          (pitem) =>
                            item.notification_log_purpose === pitem.code
                        )[0]?.name
                      } )`}
                    </td>
                    <td className="">{item.notification_log_subject}</td>
                    <td className="">{item.notification_log_message}</td>
                    <td className="">{item.notification_log_file}</td>
                    <td className="">{item.notification_log_receiver}</td>
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

export default NotificationLogTable;
