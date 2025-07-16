import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import { FaArchive, FaEdit, FaList } from "react-icons/fa";
import { MdDelete, MdRestore } from "react-icons/md";
import { useInView } from "react-intersection-observer";
import { apiVersion } from "../../../../helpers/functions-general";
import { queryDataInfinite } from "../../../../helpers/queryDataInfinite";
import FilterStatus from "../../../../partials/filter-search/FilterStatus";
import LoadMore from "../../../../partials/LoadMore";
import ModalArchive from "../../../../partials/modals/ModalArchive";
import ModalDelete from "../../../../partials/modals/ModalDelete";
import ModalRestore from "../../../../partials/modals/ModalRestore";
import SearchBar from "../../../../partials/SearchBar";
import FetchingSpinner from "../../../../partials/spinners/FetchingSpinner";
import NoData from "../../../../partials/spinners/NoData";
import ServerError from "../../../../partials/spinners/ServerError";
import TableLoading from "../../../../partials/spinners/TableLoading";
import Status from "../../../../partials/Status";
import {
  setIsAdd,
  setIsArchive,
  setIsDelete,
  setIsRestore,
  setIsSearch,
} from "../../../../store/StoreAction";
import { StoreContext } from "../../../../store/StoreContext";

const ListTable = ({ setItemEdit, packagesCategoryData, packagesListData }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [id, setIsId] = React.useState("");
  const [isData, setIsData] = React.useState("");
  const [isArchiving, setIsArchiving] = React.useState(false);

  // page
  const [isFilter, setIsFilter] = React.useState(false);
  const [filterData, setFilterData] = React.useState("all");
  const [filterCategoryData, setFilterCategoryData] = React.useState("all");
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
      "packages-list",
      search.current.value,
      store.isSearch,
      filterData,
      filterCategoryData,
    ],
    queryFn: async ({ pageParam = 1 }) =>
      await queryDataInfinite(
        `${apiVersion}/packages-list/search`, // search endpoint
        `${apiVersion}/packages-list/page/${pageParam}`, // list endpoint
        store.isSearch || isFilter, // search boolean
        {
          isFilter,
          is_active: filterData,
          category_id: filterCategoryData,
          searchValue: search.current.value,
          id: "",
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

  // // Join packagesListData with packagesCategoryData to get packages_category_name
  // const enrichedList = packagesListData?.data?.map((list) => {
  //   const matchingCategory = packagesCategoryData?.data?.find(
  //     (category) =>
  //       category.packages_category_aid === list.packages_list_category_name_id
  //   );
  //   return {
  //     ...list,
  //     packages_category_name: matchingCategory
  //       ? matchingCategory.packages_category_name
  //       : "Unknown",
  //   };
  // });

  // const listCategories = [
  //   ...new Map(
  //     enrichedList?.map((sub) => [
  //       sub.packages_list_category_name_id,
  //       {
  //         packages_list_category_name_id: sub.packages_list_category_name_id,
  //         packages_category_name: sub.packages_category_name,
  //       },
  //     ])
  //   ).values(),
  // ];

  const handleEdit = (item) => {
    dispatch(setIsAdd(true));
    setItemEdit(item);
  };

  const handleDelete = (item) => {
    dispatch(setIsDelete(true));
    setIsData(item.packages_list_title);
    setIsId(item.packages_list_aid);
  };

  const handleArchive = (item) => {
    dispatch(setIsArchive(true));
    setIsData(item.packages_list_title);
    setIsId(item.packages_list_aid);
    setIsArchiving(true);
    setIsRestore(false);
  };

  const handleRestore = (item) => {
    dispatch(setIsRestore(true));
    setIsData(item.packages_list_title);
    setIsId(item.packages_list_aid);
    setIsArchiving(false);
    setIsRestore(true);
  };

  const handleClear = (e) => {
    setFilterData("all");
    setFilterCategoryData("all");
    setIsFilter(false);
    dispatch(setIsSearch(false));
    setPage(1);
    search.current.value = "";
  };

  const handleChangefilterCategoryData = (e) => {
    setFilterCategoryData(e.target.value);
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
                name="category"
                value={filterCategoryData}
                onChange={(e) => handleChangefilterCategoryData(e)}
                className="text-xs py-[0px] "
                disabled={isFetching || status === "pending"}
              >
                <option value="all">All</option>
                {packagesCategoryData?.data.map((item, key) => (
                  <option key={key} value={item.packages_category_aid}>
                    {item.packages_category_name}
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
              <th className="min-w-[10rem]">Category</th>
              <th className="min-w-[15rem]">Title</th>
              <th className="min-w-[10rem]">Title Description</th>
              <th className="min-w-[10rem]">Price</th>
              <th className="min-w-[10rem]">Price Description</th>
              <th className="min-w-[10rem]">Foreign Price</th>
              <th className="min-w-[10rem]">Foreign Price Description</th>
              <th className="min-w-[15rem]">Other Details</th>
              <th className="min-w-[8rem]">Button</th>
              <th className="min-w-[8rem]">Highlighted</th>
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
                        {item.packages_list_is_active === 1 ? (
                          <Status text="Active" />
                        ) : (
                          <Status text="Inactive" />
                        )}
                      </td>
                      <td className="place-content-start">
                        {item.packages_category_name}
                      </td>
                      <td className="place-content-start">
                        {item.packages_list_title}
                      </td>
                      <td className="place-content-start">
                        {item.packages_list_title_desc}
                      </td>
                      <td className="place-content-start">
                        {item.packages_list_price}
                      </td>
                      <td className="place-content-start">
                        {item.packages_list_price_desc}
                      </td>
                      <td className="place-content-start">
                        {item.packages_list_foreign_price}
                      </td>
                      <td className="place-content-start">
                        {item.packages_list_foreign_price_desc}
                      </td>
                      <td className="place-content-start ">
                        <p className="line-clamp-2">
                          {item.packages_list_other_details}
                        </p>
                      </td>
                      <td className="place-content-start">
                        {item.packages_list_button_text}
                      </td>
                      <td>
                        {item.packages_list_is_highlighted === 1 ? (
                          <span className="h-0.5 w-1 py-.5 px-2 bg-primary rounded-full"></span>
                        ) : (
                          <span className="h-0.5 w-1 py-.5 px-2 bg-light rounded-full border border-gray-500"></span>
                        )}
                      </td>
                      <td className="flex items-center gap-3 justify-end mt-2 lg:mt-0">
                        {item.packages_list_is_active ? (
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
          queryKey={"packages-list"}
          mysqlEndpoint={`${apiVersion}/packages-list/${id}`}
          item={isData}
        />
      )}
      {store.isArchive && (
        <ModalArchive
          setIsArchive={setIsArchive}
          queryKey={"packages-list"}
          mysqlEndpoint={`${apiVersion}/packages-list/active/${id}`}
          item={isData}
          archive={isArchiving}
        />
      )}
      {store.isRestore && (
        <ModalRestore
          setIsRestore={setIsRestore}
          queryKey={"packages-list"}
          mysqlEndpoint={`${apiVersion}/packages-list/active/${id}`}
          item={isData}
        />
      )}
    </>
  );
};

export default ListTable;
