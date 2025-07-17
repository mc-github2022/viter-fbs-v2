import React from "react";
import { StoreContext } from "../../../../store/StoreContext";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "@tanstack/react-query";
import { queryDataInfinite } from "../../../../helpers/queryDataInfinite";
import { apiVersion } from "../../../../helpers/functions-general";
import {
  setIsAdd,
  setIsArchive,
  setIsDelete,
  setIsRestore,
  setIsSearch,
} from "../../../../store/StoreAction";
import SearchBar from "../../../../partials/SearchBar";
import FetchingSpinner from "../../../../partials/spinners/FetchingSpinner";
import TableLoading from "../../../../partials/spinners/TableLoading";
import NoData from "../../../../partials/spinners/NoData";
import ServerError from "../../../../partials/spinners/ServerError";
import Status from "../../../../partials/Status";
import { FaArchive, FaCheckCircle, FaEdit, FaList } from "react-icons/fa";
import { MdDelete, MdRestore } from "react-icons/md";
import LoadMore from "../../../../partials/LoadMore";
import ModalDelete from "../../../../partials/modals/ModalDelete";
import ModalArchive from "../../../../partials/modals/ModalArchive";
import ModalRestore from "../../../../partials/modals/ModalRestore";
import { IoMdCloseCircle } from "react-icons/io";
import FilterStatus from "../../../../partials/filter-search/FilterStatus";

const DetailsTable = ({ setItemEdit, packagesListData }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [id, setIsId] = React.useState("");
  const [isData, setIsData] = React.useState("");
  const [isArchiving, setIsArchiving] = React.useState(false);

  // page
  const [isFilter, setIsFilter] = React.useState(false);
  const [filterData, setFilterData] = React.useState("all");
  const [filterListData, setFilterListData] = React.useState("all");
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
    queryKey: [
      "packages-details",
      search.current.value,
      store.isSearch,
      filterData,
      filterListData,
    ],
    queryFn: async ({ pageParam = 1 }) =>
      await queryDataInfinite(
        `${apiVersion}/packages-details/search`, // search endpoint
        `${apiVersion}/packages-details/page/${pageParam}`, // list endpoint
        store.isSearch || isFilter, // search boolean
        {
          isFilter,
          searchValue: search.current.value,
          id: "",
          is_active: filterData,
          list_id: filterListData,
        } // search value
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
    setIsData(item.packages_details_title);
    setIsId(item.packages_details_aid);
  };

  const handleArchive = (item) => {
    dispatch(setIsArchive(true));
    setIsData(item.packages_details_title);
    setIsId(item.packages_details_aid);
    setIsArchiving(true);
    setIsRestore(false);
  };

  const handleRestore = (item) => {
    dispatch(setIsRestore(true));
    setIsData(item.packages_details_title);
    setIsId(item.packages_details_aid);
    setIsArchiving(false);
    setIsRestore(true);
  };

  const handleClear = (e) => {
    setFilterData("all");
    setFilterListData("all");
    setIsFilter(false);
    dispatch(setIsSearch(false));
    setPage(1);
    search.current.value = "";
  };

  const handleChangefilterListData = (e) => {
    setFilterListData(e.target.value);
    setIsFilter(false);
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

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between gap-2">
        <div className="flex gap-2">
          <FilterStatus
            filterData={filterData}
            setFilterData={setFilterData}
            setIsFilter={setIsFilter}
            setPage={setPage}
          />
          <div className="flex items-center gap-2">
            <div className="relative w-40">
              <label>Filter</label>
              <select
                name="packages"
                value={filterListData}
                onChange={(e) => handleChangefilterListData(e)}
                className="text-xs py-[0px] "
                disabled={isFetching || status === "pending"}
              >
                <option value="all">All</option>
                {packagesListData?.data.map((item, key) => (
                  <option key={key} value={item.packages_list_aid}>
                    {item.packages_list_title} (
                    {item.packages_list_category_name})
                  </option>
                ))}
              </select>
            </div>
          </div>
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
              <th className=" w-[5rem]">Status</th>
              <th className="min-w-[15rem]">Package</th>
              <th className="min-w-[15rem]">Title</th>
              <th className="min-w-[20rem]">Details</th>
              <th>Highlighted</th>
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
                  return (
                    <tr key={key} className="place-content-start text-[14px]">
                      <td className="pl-2 place-content-start">{counter++}</td>
                      <td>
                        {item.packages_details_is_active === 1 ? (
                          <Status text="Active" />
                        ) : (
                          <Status text="Inactive" />
                        )}
                      </td>
                      <td className="place-content-start">
                        {item.packages_list_title} (
                        {item.packages_list_category_name})
                      </td>
                      <td className="place-content-start">
                        {item.packages_details_title}
                      </td>
                      <td className="place-content-start">
                        <p className="line-clamp-2">
                          {item.packages_details_list}
                        </p>
                      </td>
                      <td>
                        {item.packages_details_is_highlighted === 1 ? (
                          <FaCheckCircle className="text-primary text-base" />
                        ) : (
                          <IoMdCloseCircle className="text-gray-500 text-lg" />
                        )}
                      </td>
                      <td className="flex items-center gap-3 justify-end mt-2 lg:mt-0">
                        {item.packages_details_is_active ? (
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
          queryKey={"packages-details"}
          mysqlEndpoint={`${apiVersion}/packages-details/${id}`}
          item={isData}
        />
      )}
      {store.isArchive && (
        <ModalArchive
          setIsArchive={setIsArchive}
          queryKey={"packages-details"}
          mysqlEndpoint={`${apiVersion}/packages-details/active/${id}`}
          item={isData}
          archive={isArchiving}
        />
      )}
      {store.isRestore && (
        <ModalRestore
          setIsRestore={setIsRestore}
          queryKey={"packages-details"}
          mysqlEndpoint={`${apiVersion}/packages-details/active/${id}`}
          item={isData}
        />
      )}
    </>
  );
};

export default DetailsTable;
