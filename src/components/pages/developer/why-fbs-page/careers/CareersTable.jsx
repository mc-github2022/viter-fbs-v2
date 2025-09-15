import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import useQueryData from "../../../../custom-hooks/useQueryData";
import ModalDelete from "../../../../partials/modals/ModalDelete";
import FetchingSpinner from "../../../../partials/spinners/FetchingSpinner";
import NoData from "../../../../partials/spinners/NoData";
import ServerError from "../../../../partials/spinners/ServerError";
import TableLoading from "../../../../partials/spinners/TableLoading";
import { setIsAdd, setIsDelete } from "../../../../store/StoreAction";
import { StoreContext } from "../../../../store/StoreContext";
import CareersStatus from "./CareersStatus";
import { getConvertStringToJSONparseData } from "../../../../helpers/functions-general";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "@tanstack/react-query";
import { queryDataInfinite } from "../../../../helpers/queryDataInfinite";
import SearchBar from "../../../../partials/SearchBar";

const CareersTable = ({ setItemEdit }) => {
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
    status,
  } = useInfiniteQuery({
    queryKey: ["careers", onSearch, store.isSearch],
    queryFn: async ({ pageParam = 1 }) =>
      await queryDataInfinite(
        `/v1/careers/search`, // search endpoint
        `/v1/careers/page/${pageParam}`, // list endpoint
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
    setIsData(item.careers_job_title);
    setIsId(item.careers_aid);
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

      <div className=" shadow-md rounded-md overflow-y-auto min-h-full md:min-h-[calc(100vh-30px)] lg:max-h-[calc(90vh-150px)] mb-10 lg:mb-0 lg:min-h-0 relative">
        {isFetching && !isFetchingNextPage && status !== "pending" && (
          <FetchingSpinner />
        )}
        <table>
          <thead>
            <tr className="text-[black]">
              <th className="pl-2 w-[1rem]">#</th>
              <th>Icon Name</th>
              <th>Job Title</th>
              <th>employee classification</th>
              <th>Mode of Work</th>
              <th>Job Status</th>
              <th className="">Job Overview</th>
              <th className="w-[18rem]">Job Description</th>
              <th>Image</th>
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
                  const careersImages =
                    getConvertStringToJSONparseData(item.careers_img) || [];
                  return (
                    <tr key={key} className="place-content-start text-[14px]">
                      <td className="pl-2 place-content-start">{counter++}</td>
                      <td className="place-content-start">
                        {item.careers_icon}
                      </td>
                      <td className="place-content-start">
                        {item.careers_job_title}
                      </td>
                      <td className="place-content-start">
                        {item.careers_job_classification}
                      </td>
                      <td className="place-content-start">
                        {item.careers_job_mode}
                      </td>
                      <td className="place-content-start">
                        {item.careers_job_status === "Ongoing" ? (
                          <CareersStatus text="Ongoing" />
                        ) : (
                          <CareersStatus text="Closed" />
                        )}
                      </td>
                      <td>
                        <p className="line-clamp-5">
                          {item.careers_job_overview}
                        </p>
                      </td>
                      <td>
                        <p className="line-clamp-5">
                          {item.careers_job_description}
                        </p>
                      </td>
                      <td className="place-content-start">
                        {careersImages.map((img, index) => (
                          <p key={index}>{img.name}</p>
                        ))}
                      </td>

                      <td className="flex items-center gap-3 justify-end mt-2 lg:mt-0">
                        <button
                          className="tooltip-action-table"
                          data-tooltip="Edit"
                          onClick={() => handleEdit(item)}
                        >
                          <FaEdit className="text-gray-600 text-[16px]" />
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
                  );
                })}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      {store.isDelete && (
        <ModalDelete
          setIsDelete={setIsDelete}
          queryKey={"careers"}
          mysqlEndpoint={`/v1/careers/${id}`}
          item={isData}
        />
      )}
    </>
  );
};

export default CareersTable;
