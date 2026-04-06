import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import { FaEdit, FaList } from "react-icons/fa";
import { MdDelete, MdOutlineFileUpload } from "react-icons/md";
import { RiDraftFill } from "react-icons/ri";
import { useInView } from "react-intersection-observer";
import {
  apiVersion,
  formatDate,
  getConvertStringToJSONparseData,
} from "../../../../helpers/functions-general";
import { queryDataInfinite } from "../../../../helpers/queryDataInfinite";
import LoadMore from "../../../../partials/LoadMore";
import SearchBar from "../../../../partials/SearchBar";
import FilterPublishDraft from "../../../../partials/filter-search/FilterPublishDraft";
import ModalDelete from "../../../../partials/modals/ModalDelete";
import FetchingSpinner from "../../../../partials/spinners/FetchingSpinner";
import NoData from "../../../../partials/spinners/NoData";
import ServerError from "../../../../partials/spinners/ServerError";
import TableLoading from "../../../../partials/spinners/TableLoading";
import {
  setIsAdd,
  setIsArchive,
  setIsDelete,
  setIsRestore,
  setIsSearch,
} from "../../../../store/StoreAction";
import { StoreContext } from "../../../../store/StoreContext";
import DraftStatusEventsAndActivities from "../../why-fbs-page/events-and-activities/DraftStatusEventsAndActivities";
import ModalDraft from "../../why-fbs-page/events-and-activities/modals/ModalDraft";
import ModalUpload from "../../why-fbs-page/events-and-activities/modals/ModalUpload";

const InsightsTable = ({ setItemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [id, setIsId] = React.useState("");
  const [isData, setIsData] = React.useState("");
  const [isArchiving, setIsArchiving] = React.useState(false);

  // page
  const [isFilter, setIsFilter] = React.useState(false);
  const [filterData, setFilterData] = React.useState("all");
  const [page, setPage] = React.useState(1);
  const [onSearch, setOnSearch] = React.useState(false);
  const search = React.useRef({ value: "" });
  const { ref, inView } = useInView();
  let counter = 1;

  const {
    data: result,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["insights", search.current.value, store.isSearch, filterData],
    queryFn: async ({ pageParam = 1 }) =>
      await queryDataInfinite(
        `${apiVersion}/insights/search`, // search endpoint
        `${apiVersion}/insights/page/${pageParam}`, // list endpoint
        store.isSearch || isFilter, // search boolean
        {
          isFilter,
          is_active: filterData,
          searchValue: search.current.value,
          id: "",
        }, // search value
      ),
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total) {
        return lastPage.page + lastPage.count;
      }
      return;
    },
    refetchOnWindowFocus: false,
  });

  const handleEdit = (item) => {
    dispatch(setIsAdd(true));
    setItemEdit(item);
  };

  const handleDelete = (item) => {
    dispatch(setIsDelete(true));
    setIsData(item.home_insights_title);
    setIsId(item.home_insights_aid);
  };

  const handleArchive = (item) => {
    dispatch(setIsArchive(true));
    setIsData(item.home_insights_title);
    setIsId(item.home_insights_aid);
    setIsArchiving(true);
    setIsRestore(false);
  };

  const handleRestore = (item) => {
    dispatch(setIsRestore(true));
    setIsData(item.home_insights_title);
    setIsId(item.home_insights_aid);
    setIsArchiving(false);
    setIsRestore(true);
  };

  const handleClear = (e) => {
    setFilterData("all");
    setIsFilter(false);
    dispatch(setIsSearch(false));
    setPage(1);
    search.current.value = "";
  };

  React.useEffect(() => {
    if (inView) {
      setPage((prev) => prev + 1);
      fetchNextPage();
    }
  }, [inView]);

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between gap-2">
        <div className="flex gap-2">
          <FilterPublishDraft
            filterData={filterData}
            setFilterData={setFilterData}
            setIsFilter={setIsFilter}
            setPage={setPage}
          />
          <div className="relative ml-2 flex items-center gap-1 text-sm text-gray-600">
            <FaList />
            <span>
              {result?.loading === "error"
                ? "0"
                : isFetching || result?.loading === "pending"
                  ? "loading"
                  : store.isSearch || isFilter
                    ? result?.pages[0]?.count
                    : result?.pages[0]?.total}
            </span>
            {(store.isSearch || isFilter) && (
              <span
                className="ml-3 underline text-xs  cursor-pointer hover:text-primary"
                onClick={(e) => handleClear(e)}
              >
                Clear
              </span>
            )}
          </div>
        </div>

        <div>
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
              <th>Status</th>
              <th>Category</th>
              <th>Title</th>
              <th className="w-[8rem]">Slug</th>
              <th className="w-[8rem]">Date</th>
              <th className="min-w-[10rem]">Content</th>
              <th>CTA Enable</th>
              <th>Buttton Caption </th>
              <th>Form Selected</th>
              <th className="w-[8rem]">Thumbnail</th>
              <th className="w-[8rem]">Image</th>
              <th>Gallery</th>
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
                {page?.data.map((item, key) => {
                  const insightsSliderImages =
                    getConvertStringToJSONparseData(
                      item.home_insights_img_list,
                    ) || [];
                  const insightsThumbnail =
                    getConvertStringToJSONparseData(
                      item.home_insights_thumbnail,
                    ) || [];
                  return (
                    <tr key={key} className="place-content-start text-[14px]">
                      <td className="pl-2 place-content-start">{counter++}</td>
                      <td className="place-content-start">
                        {item.home_insights_is_active === 1 ? (
                          <DraftStatusEventsAndActivities text="Publish" />
                        ) : (
                          <DraftStatusEventsAndActivities text="Draft" />
                        )}
                      </td>
                      <td className="place-content-start">
                        {item.home_insights_category}
                      </td>
                      <td className="place-content-start">
                        <p className="line-clamp-2">
                          {item.home_insights_title}
                        </p>
                      </td>
                      <td className="place-content-start">
                        <p className="line-clamp-1">
                          {item.home_insights_slug}
                        </p>
                      </td>
                      <td className="place-content-start">
                        {formatDate(item.home_insights_date)}
                      </td>
                      <td className="place-content-start max-w-[10rem]">
                        <p className="line-clamp-1">
                          {item.home_insights_paragraph_a}
                        </p>
                      </td>
                      <td>
                        {item.home_insights_cta_is_active === 1 ? "Yes" : "No"}
                      </td>
                      <td>{item.home_insights_cta_text}</td>
                      <td>{item.home_insights_form_selected}</td>
                      <td className="place-content-start">
                        {insightsThumbnail.map((img, index) => (
                          <p key={index}>{img.name}</p>
                        ))}
                      </td>
                      <td className="place-content-start">
                        {/* {insightsImages.map((img, index) => (
                          <p key={index}>{img.name}</p>
                        ))} */}
                        {item.home_insights_img}
                      </td>
                      <td className="place-content-start">
                        <div className="line-clamp-5">
                          {insightsSliderImages.map((img, index) => (
                            <p key={index}>{img.name}</p>
                          ))}
                        </div>
                      </td>
                      <td className="flex items-center gap-3 justify-end mt-2 lg:mt-0">
                        {item.home_insights_is_active ? (
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
                              data-tooltip="Edit"
                              onClick={() => handleEdit(item)}
                            >
                              <FaEdit className="text-gray-600 text-[16px]" />
                            </button>
                            <button
                              className="tooltip-action-table"
                              data-tooltip="Publish"
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
                  );
                })}
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
          queryKey={"insights"}
          mysqlEndpoint={`${apiVersion}/insights/${id}`}
          item={isData}
        />
      )}
      {store.isArchive && (
        <ModalDraft
          mysqlApiArchive={`${apiVersion}/insights/active/${id}`}
          msg={"Are you sure you want to draft this post?"}
          successMsg={"Draft succesfully."}
          queryKey={"insights"}
          setIsArchive={setIsArchive}
        />
      )}
      {store.isRestore && (
        <ModalUpload
          mysqlApiRestore={`${apiVersion}/insights/active/${id}`}
          msg={"Are you sure you want to publish this post?"}
          successMsg={"Upload succesfully."}
          queryKey={"insights"}
          setIsRestore={setIsRestore}
        />
      )}
    </>
  );
};

export default InsightsTable;
