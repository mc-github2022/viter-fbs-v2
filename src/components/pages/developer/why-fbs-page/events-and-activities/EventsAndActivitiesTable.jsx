import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import { FaArchive, FaEdit } from "react-icons/fa";
import { MdDelete, MdOutlineFileUpload, MdRestore } from "react-icons/md";
import { useInView } from "react-intersection-observer";
import { apiVersion, formatDate } from "../../../../helpers/functions-general";
import { queryDataInfinite } from "../../../../helpers/queryDataInfinite";
import LoadMore from "../../../../partials/LoadMore";
import ModalDelete from "../../../../partials/modals/ModalDelete";
import SearchBar from "../../../../partials/SearchBar";
import FetchingSpinner from "../../../../partials/spinners/FetchingSpinner";
import NoData from "../../../../partials/spinners/NoData";
import ServerError from "../../../../partials/spinners/ServerError";
import TableLoading from "../../../../partials/spinners/TableLoading";
import TableSpinner from "../../../../partials/spinners/TableSpinner";
import {
  setIsAdd,
  setIsArchive,
  setIsDelete,
  setIsRestore,
} from "../../../../store/StoreAction";
import { StoreContext } from "../../../../store/StoreContext";
import Status from "../../../../partials/Status";
import ModalArchive from "../../../../partials/modals/ModalArchive";
import StatusEventsAndActivities from "./DraftStatusEventsAndActivities";
import DraftStatusEventsAndActivities from "./DraftStatusEventsAndActivities";
import ModalRestore from "../../user/other-user/modal/ModalRestore";
import ModalUpload from "./modals/ModalUpload";
import ModalDraft from "./modals/ModalDraft";
import { RiDraftFill, RiDraftLine } from "react-icons/ri";

const EventsAndActivitiesTable = ({ setItemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [id, setIsId] = React.useState("");
  const [isData, setIsData] = React.useState("");
  const [isArchiving, setIsArchiving] = React.useState(false);

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
    queryKey: ["eventsAndAct", onSearch, store.isSearch],
    queryFn: async ({ pageParam = 1 }) =>
      await queryDataInfinite(
        `${apiVersion}/eventsAndAct/search`, // search endpoint
        `${apiVersion}/eventsAndAct/page/${pageParam}`, // list endpoint
        store.isSearch, // search boolean
        { searchValue: search.current.value, id: "" } // search value
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

  const handleEdit = (item) => {
    dispatch(setIsAdd(true));
    setItemEdit(item);
  };

  const handleDelete = (item) => {
    dispatch(setIsDelete(true));
    setIsData(item.events_activities_title);
    setIsId(item.events_activities_aid);
  };

  const handleArchive = (item) => {
    dispatch(setIsArchive(true));
    setIsData(item.events_activities_title);
    setIsId(item.events_activities_aid);
    setIsArchiving(true);
    setIsRestore(false);
  };

  const handleRestore = (item) => {
    dispatch(setIsRestore(true));
    setIsData(item.events_activities_title);
    setIsId(item.events_activities_aid);
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
      <div className="place-self-end">
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
              <th className=" w-[5rem]">Status</th>
              <th>Category</th>
              <th className="w-[10rem]">Title</th>
              <th className="w-[10rem]">Slug</th>
              <th className="w-[8rem]">Date</th>
              <th>Content</th>
              <th className="w-[8rem]">Image</th>
              <th className="w-[8rem]">Gallery</th>
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
                    <td className="place-content-start">
                      {item.events_activities_is_active === 1 ? (
                        <DraftStatusEventsAndActivities text="Active" />
                      ) : (
                        <DraftStatusEventsAndActivities text="Draft" />
                      )}
                    </td>
                    <td className="place-content-start">
                      {item.events_activities_category}
                    </td>
                    <td className="place-content-start">
                      {item.events_activities_title}
                    </td>
                    <td className="place-content-start">
                      {item.events_activities_slug}
                    </td>
                    <td className="place-content-start">
                      {formatDate(item.events_activities_date)}
                    </td>
                    <td>
                      <p className="line-clamp-5">
                        {item.events_activities_description}
                      </p>
                    </td>
                    <td className="place-content-start">
                      {item.events_activities_img}
                    </td>
                    <td className="place-content-start">
                      <p className="line-clamp-5">
                        {item.events_activities_img_list}
                      </p>
                    </td>
                    <td className="flex items-center gap-3 justify-end mt-2 lg:mt-0">
                      {item.events_activities_is_active ? (
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
                            data-tooltip="Draft"
                            onClick={() => handleArchive(item)}
                          >
                            <RiDraftFill className=" text-gray-600 text-[16px]" />
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            className="tooltip-action-table"
                            data-tooltip="Upload"
                            onClick={() => handleRestore(item)}
                          >
                            <MdOutlineFileUpload className="text-gray-600 text-[18px]" />
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
          queryKey={"eventsAndAct"}
          mysqlEndpoint={`${apiVersion}/eventsAndAct/${id}`}
          item={isData}
        />
      )}
      {store.isArchive && (
        <ModalDraft
          mysqlApiArchive={`${apiVersion}/eventsAndAct/active/${id}`}
          msg={"Are you sure you want to draft this post?"}
          successMsg={"Draft succesfully."}
          queryKey={"eventsAndAct"}
          setIsArchive={setIsArchive}
        />
      )}
      {store.isRestore && (
        <ModalUpload
          mysqlApiRestore={`${apiVersion}/eventsAndAct/active/${id}`}
          msg={"Are you sure you want to upload this post?"}
          successMsg={"Upload succesfully."}
          queryKey={"eventsAndAct"}
          setIsRestore={setIsRestore}
        />
      )}
    </>
  );
};

export default EventsAndActivitiesTable;
