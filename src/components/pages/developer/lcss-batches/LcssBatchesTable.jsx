import React from "react";
import { StoreContext } from "../../../store/StoreContext";
import useQueryData from "../../../custom-hooks/useQueryData";
import { setIsAdd, setIsDelete } from "../../../store/StoreAction";
import ModalDelete from "../../../partials/modals/ModalDelete";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import ServerError from "../../../partials/spinners/ServerError";
import TableLoading from "../../../partials/spinners/TableLoading";
import NoData from "../../../partials/spinners/NoData";
import TableSpinner from "../../../partials/spinners/TableSpinner";
import FetchingSpinner from "../../../partials/spinners/FetchingSpinner";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "@tanstack/react-query";
import { queryDataInfinite } from "../../../helpers/queryDataInfinite";
import SearchBar from "../../../partials/SearchBar";
import LoadMore from "../../../partials/LoadMore";

const LcssBatchesTable = ({ setItemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [id, setIsId] = React.useState("");
  const [isData, setIsData] = React.useState("");

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
    isLoading,
    status,
  } = useInfiniteQuery({
    queryKey: ["lcssBatches", onSearch, store.isSearch],
    queryFn: async ({ pageParam = 1 }) =>
      await queryDataInfinite(
        `/v1/lcssBatches/search`, // search endpoint
        `/v1/lcssBatches/page/${pageParam}`, // list endpoint
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
    setIsData(item.lcss_batch_name);
    setIsId(item.lcss_batch_aid);
  };

  React.useEffect(() => {
    if (inView) {
      setPage((prev) => prev + 1);
      fetchNextPage();
    }
  }, [inView]);

  return (
    <>
      <SearchBar
        search={search}
        dispatch={dispatch}
        store={store}
        result={result?.pages}
        isFetching={isFetching}
        setOnSearch={setOnSearch}
        onSearch={onSearch}
      />

      <div className=" shadow-md rounded-md overflow-y-auto min-h-full md:min-h-[calc(100vh-30px)] lg:max-h-[calc(100vh-250px)] mb-10 lg:mb-0 lg:min-h-0 relative">
        {isFetching && !isFetchingNextPage && status !== "loading" && (
          <FetchingSpinner />
        )}
        <table>
          <thead>
            <tr className="text-[black]">
              <th className="pl-2 w-[1rem]">#</th>
              <th>Batch</th>
              <th>Category</th>
              <th>School</th>
              <th>Course</th>
              <th className="w-[30rem]">Image</th>
              <th className="text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="relative">
            {isLoading && !isFetchingNextPage && status !== "pending" && (
              <TableSpinner />
            )}
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
                      {item.lcss_batch_name}
                    </td>
                    <td className="place-content-start">
                      {item.lcss_batch_category}
                    </td>
                    <td className="place-content-start">
                      {item.lcss_batch_school}
                    </td>
                    <td className="place-content-start">
                      {item.lcss_batch_course}
                    </td>
                    <td className="place-content-start">
                      <p className="line-clamp-5">{item.lcss_batch_img}</p>
                    </td>
                    <td className="flex items-center gap-3 justify-end mt-2 lg:mt-0">
                      <button
                        className="tooltip-action-table"
                        data-tooltip="Edit"
                        onClick={() => handleEdit(item)}
                      >
                        <FaEdit className="text-gray-600 text-[18px]" />
                      </button>
                      <button
                        className="tooltip-action-table"
                        data-tooltip="Delete"
                        onClick={() => handleDelete(item)}
                      >
                        <MdDelete className="text-gray-600 text-[18px]" />
                      </button>
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
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

      {store.isDelete && (
        <ModalDelete
          setIsDelete={setIsDelete}
          queryKey={"lcssBatches"}
          mysqlEndpoint={`/v1/lcssBatches/${id}`}
          item={isData}
        />
      )}
    </>
  );
};

export default LcssBatchesTable;
