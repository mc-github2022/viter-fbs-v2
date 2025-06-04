import React from "react";
import { FaCopy } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import useQueryData from "../../../custom-hooks/useQueryData";
import {
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "../../../helpers/functions-general";
import LoadImages from "../../../partials/LoadImages";
import ModalDelete from "../../../partials/modals/ModalDelete";
import FetchingSpinner from "../../../partials/spinners/FetchingSpinner";
import NoData from "../../../partials/spinners/NoData";
import ServerError from "../../../partials/spinners/ServerError";
import TableLoading from "../../../partials/spinners/TableLoading";
import { setIsDelete } from "../../../store/StoreAction";
import { StoreContext } from "../../../store/StoreContext";

const GalleryTable = ({ setItemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [id, setIsId] = React.useState("");
  const [isData, setIsData] = React.useState("");
  const [copyLink, setCopyLink] = React.useState("");
  const [copiedLink, setCopiedLink] = React.useState(null);

  const {
    isFetching,
    error,
    isLoading,
    data: galleryData,
  } = useQueryData(
    "/v1/gallery", // endpoint
    "get", // method
    "gallery" // key
  );

  let counter = 1;

  const handleDelete = (item) => {
    dispatch(setIsDelete(true));
    setIsData();
    setIsId(item.gallery_aid);
  };


  const handleCopyLink = (item) => {
    if (item?.gallery_img) {
      const galleryImage = getConvertStringToJSONparseData(item.gallery_img);
      if (galleryImage.length > 0) {
        const imageUrl = `${googleHDViewLink}${galleryImage[0]?.id}`;

        navigator.clipboard
          .writeText(imageUrl)
          .then(() => {
            setCopiedLink(imageUrl); // Set the copied link
            setTimeout(() => setCopiedLink(null), 2000); // Reset after 2 seconds
          })
          .catch((err) => {
            console.error("Failed to copy link:", err);
          });
      }
    }
  };

  console.log(copyLink);

  React.useEffect(() => {
    console.log(copyLink);
  }, [copyLink]);

  return (
    <>
      <div className=" overflow-y-auto min-h-full md:min-h-[calc(100vh-30px)] lg:max-h-[calc(90vh-150px)] mb-10 lg:mb-0 lg:min-h-0 relative">
        {isFetching && !isLoading && <FetchingSpinner />}

        {(isLoading || galleryData?.data.length === 0) && (
          <div className="text-center">
            <div colSpan="100%" className="p-10">
              {isLoading ? <TableLoading /> : <NoData />}
            </div>
          </div>
        )}

        {error && (
          <div className="text-center ">
            <div colSpan="100%" className="p-10">
              <ServerError />
            </div>
          </div>
        )}
        <div className="flex flex-wrap items-center">
          {galleryData?.data.map((item, key) => {
            const galleryImage = getConvertStringToJSONparseData(
              item.gallery_img
            );
            return (
              <div
                key={key}
                className="place-content-start text-[14px] w-[250px] h-[250px] border-r "
              >
                <div
                  className="p-3 place-content-start flex flex-col gap-3"
                  colSpan="100%"
                >
                  {counter++}
                  <div className="relative h-[160px]">
                    {galleryImage.map((image, index) => (
                      <LoadImages
                        url={`${googleHDViewLink}${image?.id}`}
                        alt=""
                        className="h-[150px] w-[200px] object-contain"
                        key={index}
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-5 justify-between">
                    <span className="line-clamp-1 text-xs">
                      <div className="line-clamp-1">
                        {galleryImage.map((img, index) => (
                          <p key={index}>{img.name}</p>
                        ))}
                      </div>
                    </span>
                    <div className="flex items-center">
                      <button
                        className="tooltip-action-table"
                        data-tooltip={
                          copiedLink ===
                          `${googleHDViewLink}${
                            getConvertStringToJSONparseData(item.gallery_img)[0]
                              ?.id
                          }`
                            ? "Copied!"
                            : "Copy Link"
                        }
                        onClick={() => handleCopyLink(item)}
                      >
                        <FaCopy className="text-gray-600 text-[14px]" />
                      </button>
                      <button
                        className="tooltip-action-table"
                        data-tooltip="Delete"
                        onClick={() => handleDelete(item)}
                      >
                        <MdDelete className="text-gray-600 text-[18px]" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {store.isDelete && (
        <ModalDelete
          setIsDelete={setIsDelete}
          queryKey={"gallery"}
          mysqlEndpoint={`/v1/gallery/${id}`}
          item={isData}
        />
      )}
    </>
  );
};

export default GalleryTable;
