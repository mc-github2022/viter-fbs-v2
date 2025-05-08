import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import { FaArchive, FaEdit } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { MdDelete, MdRestore } from "react-icons/md";
import { useInView } from "react-intersection-observer";
import {
  apiVersion,
  formatDate,
  formatDateTime,
} from "../../../helpers/functions-general";
import { queryDataInfinite } from "../../../helpers/queryDataInfinite";
import LoadMore from "../../../partials/LoadMore";
import SearchBar from "../../../partials/SearchBar";
import Status from "../../../partials/Status";
import ModalArchive from "../../../partials/modals/ModalArchive";
import ModalDelete from "../../../partials/modals/ModalDelete";
import FetchingSpinner from "../../../partials/spinners/FetchingSpinner";
import NoData from "../../../partials/spinners/NoData";
import ServerError from "../../../partials/spinners/ServerError";
import TableLoading from "../../../partials/spinners/TableLoading";
import {
  setIsAdd,
  setIsArchive,
  setIsDelete,
  setIsRestore,
  setIsSearch,
} from "../../../store/StoreAction";
import { StoreContext } from "../../../store/StoreContext";
import ModalRestore from "./ModalRestore";

const SubscribersTable = ({ setItemEdit, audienceData, subscribeData }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [id, setIsId] = React.useState("");
  const [isData, setIsData] = React.useState("");
  const [isArchiving, setIsArchiving] = React.useState(false);
  const [isFilter, setIsFilter] = React.useState(false);
  const [filterData, setfilterData] = React.useState("all");

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
    queryKey: ["subscribe", onSearch, store.isSearch, isFilter, filterData],
    queryFn: async ({ pageParam = 1 }) =>
      await queryDataInfinite(
        `${apiVersion}/subscribe/search`, // search endpoint
        `${apiVersion}/subscribe/page/${pageParam}`, // list endpoint
        store.isSearch || isFilter, // search boolean
        {
          searchValue: search.current.value,
          id: "",
          isFilter,
          filterValue: setfilterData === "all" ? "" : filterData,
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

  const handleEdit = (item) => {
    dispatch(setIsAdd(true));
    setItemEdit(item);
  };

  const handleDelete = (item) => {
    dispatch(setIsDelete(true));
    setIsData(item.subscriber_email);
    setIsId(item.subscriber_aid);
  };

  const handleArchive = (item) => {
    dispatch(setIsArchive(true));
    setIsData(item.subscriber_email);
    setIsId(item.subscriber_aid);
    setIsArchiving(true);
    setIsRestore(false);
  };

  const handleRestore = (item) => {
    dispatch(setIsRestore(true));
    setIsData(item);
    setIsId(item.subscriber_aid);
    setIsArchiving(false);
    setIsRestore(true);
  };

  React.useEffect(() => {
    if (inView) {
      setPage((prev) => prev + 1);
      fetchNextPage();
    }
  }, [inView]);

  return (
    <>
      <div className="flex items-center gap-5 justify-between">
        <div className="relative flex flex-col gap-2 w-[250px]">
          <label className="z-10">Filter</label>

          <select
            name="filter"
            value={filterData}
            onChange={(e) => handleChangeFilter(e)}
            disabled={isFetching || status === "pending"}
          >
            <option value="all">All</option>
            <optgroup label="Audience">
              {subscriberCategories.map((item, key) => (
                <option key={key} value={item.subscriber_audience_id}>
                  {item.audience_name}  
                </option>
              ))}
            </optgroup>
          </select>
        </div>
        <div className="flex gap-6 items-center">
          <div className="flex items-center gap-2">
            <span>
              <FaUserGroup className="text-gray-500" />
            </span>
            {store.isSearch ? result?.pages[0].count : result?.pages[0].total}
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
      </div>
      <div className=" shadow-md rounded-md overflow-y-auto min-h-full md:min-h-[calc(100vh-30px)] lg:max-h-[calc(90vh-150px)] mb-10 lg:mb-0 lg:min-h-0 relative">
        {isFetching && !isFetchingNextPage && status !== "pending" && (
          <FetchingSpinner />
        )}
        <table>
          <thead>
            <tr className="text-[black]">
              <th className="pl-2 w-[1rem]">#</th>
              <th className=" w-[5rem]">Status</th>
              <th>Email</th>
              <th>Audience</th>
              <th>Date</th>
              <th>Feedback</th>
              <th className="text-right">Actions</th>
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
                  <tr key={key} className="place-content-start text-[14px]">
                    <td className="pl-2 place-content-start">{counter++}</td>
                    <td>
                      {item.subscriber_is_active === 1 ? (
                        <Status text="Active" />
                      ) : (
                        <Status text="Inactive" />
                      )}
                    </td>
                    <td className="place-content-start">
                      {item.subscriber_email}
                    </td>
                    <td className="place-content-start">
                      {item.audience_name}
                    </td>
                    <td className="place-content-start">
                      {formatDateTime(item.subscriber_created)}
                    </td>
                    <td className="place-content-start">
                      {item.subscriber_feedback}
                    </td>

                    <td className="flex items-center gap-3 justify-end mt-2 lg:mt-0">
                      {item.subscriber_is_active ? (
                        <>
                          <button
                            className="tooltip-action-table"
                            data-tooltip="Edit"
                            onClick={() => handleEdit(item)}
                          >
                            <FaEdit className="text-gray-600 text-[16px]" />
                          </button>
                          <button
                            className="tooltip-action-table"
                            data-tooltip="Archive"
                            onClick={() => handleArchive(item)}
                          >
                            <FaArchive className=" text-gray-600 text-[14px]" />
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            className="tooltip-action-table"
                            data-tooltip="Restore"
                            onClick={() => handleRestore(item)}
                          >
                            <MdRestore className="text-gray-600 text-[18px]" />
                          </button>
                          <button
                            className="tooltip-action-table"
                            data-tooltip="Delete"
                            onClick={() => handleDelete(item)}
                          >
                            <MdDelete className="text-gray-600 text-[18px]" />
                          </button>
                        </>
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

      {store.isDelete && (
        <ModalDelete
          setIsDelete={setIsDelete}
          queryKey={"subscribe"}
          mysqlEndpoint={`${apiVersion}/subscribe/${id}`}
          item={isData}
        />
      )}
      {store.isArchive && (
        <ModalArchive
          setIsArchive={setIsArchive}
          queryKey={"subscribe"}
          mysqlEndpoint={`${apiVersion}/subscribe/active/${id}`}
          item={isData}
          archive={isArchiving}
        />
      )}
      {store.isRestore && (
        <ModalRestore
          mysqlApiRestore={`${apiVersion}/subscribe/restore-key/${id}`}
          msg={"Are you sure you want to restore this subscriber?"}
          successMsg={"Restore succesfully."}
          queryKey={"subscribe"}
          setIsRestore={setIsRestore}
          item={isData}
        />
      )}
    </>
  );
};

export default SubscribersTable;
