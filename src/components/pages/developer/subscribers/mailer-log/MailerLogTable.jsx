import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { useInView } from "react-intersection-observer";
import { InputCheckbox } from "../../../../helpers/FormInputs";
import { queryDataInfinite } from "../../../../helpers/queryDataInfinite";
import LoadMore from "../../../../partials/LoadMore";
import SearchBar from "../../../../partials/SearchBar";
import FetchingSpinner from "../../../../partials/spinners/FetchingSpinner";
import NoData from "../../../../partials/spinners/NoData";
import ServerError from "../../../../partials/spinners/ServerError";
import TableLoading from "../../../../partials/spinners/TableLoading";
import { StoreContext } from "../../../../store/StoreContext";
import EmailLogStatus from "./MailerLogStatus";

import {
  apiVersion,
  formatDate,
  getDateNow,
} from "../../../../helpers/functions-general";
import { setIsSearch } from "../../../../store/StoreAction";
import MailerLogStatus from "./MailerLogStatus";
import MailerLogResendModal from "./MailerLogResendModal";

const MailerLogTable = ({ audienceData, subscribeData }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [isFilter, setIsFilter] = React.useState(false);
  const [filterData, setfilterData] = React.useState("all");
  const [isResend, setIsResend] = React.useState(false);

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
    queryKey: ["mailer-log", onSearch, store.isSearch, isFilter, setfilterData],
    queryFn: async ({ pageParam = 1 }) =>
      await queryDataInfinite(
        `${apiVersion}/mailer-log/search`, // search endpoint
        `${apiVersion}/mailer-log/page/${pageParam}`, // list endpoint
        store.isSearch || isFilter,
        // search boolean
        {
          searchValue: search.current.value,
          id: "",
          isFilter,
          sending_email_log_is_success:
            setfilterData === "all" ? "" : setfilterData,
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

  const handleChangeFilter = (e) => {
    setfilterData(e.target.value);
    setIsFilter(false);
    dispatch(setIsSearch(false));
    search.current.value = "";
    if (e.target.value !== "all") {
      setIsFilter(true);
    }
    setPage(1);
  };

  React.useEffect(() => {
    if (inView) {
      setPage((prev) => prev + 1);
      fetchNextPage();
    }
  }, [inView]);

  // Join subscribeData with audienceData to get audience_name
  const enrichedSubscribers = subscribeData?.data?.map((subscriber) => {
    const matchingAudience = audienceData?.data?.find(
      (audience) => audience.audience_aid === subscriber.subscriber_audience_id
    );
    return {
      ...subscriber,
      audience_name: matchingAudience
        ? matchingAudience.audience_name
        : "Unknown",
    };
  });

  const subscriberCategories = [
    ...new Map(
      enrichedSubscribers?.map((sub) => [
        sub.subscriber_audience_id,
        {
          subscriber_audience_id: sub.subscriber_audience_id,
          audience_name: sub.audience_name,
        },
      ])
    ).values(),
  ];

  const handleResend = () => {
    setIsResend(true)
  } 
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex gap-5">
          <div className="relative flex flex-col gap-2 w-[250px]">
            <label className="z-10">Filter</label>

            <select
              name="filter"
              value={filterData}
              onChange={(e) => handleChangeFilter(e)}
              disabled={isFetching || status === "pending"}
            >
              <option value="all">All</option>
              <optgroup label="Status">
                <option value="1">Sent</option>
                <option value="0">Failed</option>
              </optgroup>
              <optgroup label="Audience">
                {subscriberCategories.map((item, key) => (
                  <option key={key} value={item.sending_email_log_audience_id}>
                    {item.audience_name}
                  </option>
                ))}
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
              <th className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="subscriber_is_agree"
                  className="w-[14px] h-4"
                />
                <span>All</span>
              </th>
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

            {/* {result?.pages.map((page, key) => (
              <React.Fragment key={key}>
                {page?.data.map((item, key) => ( */}
                  <tr className="text-[14px]">
                    <td className="pl-2 ">{counter++}.</td>
                    <td className="w-[15rem]">
                      lourenisobel@gmail.com
                    </td>
                    <td className="w-[10rem]">{formatDate(getDateNow())}</td>
                    <td className="">
                      {/* {item.sending_email_log_is_success === 1 ? (
                        <MailerLogStatus text="Sent" />
                      ) : (
                        <MailerLogStatus text="Failed" />
                      )} */}
                    </td>
                    <td>
                      <input type="checkbox" className="w-[14px]" />
                    </td>
                    <td className="flex items-center gap-3 mt-2 lg:mt-0">
                      <>
                        <button
                          className="tooltip-action-table"
                          data-tooltip="Resend"
                          onClick={handleResend}
                        >
                          <IoIosSend className=" text-gray-600 w-5 h-5" />
                        </button>
                      </>
                    </td>
                  </tr>
                {/* ))}
              </React.Fragment>
            ))} */}
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

      {isResend && <MailerLogResendModal setIsResend={setIsResend}/>}
    </>
  );
};

export default MailerLogTable;
