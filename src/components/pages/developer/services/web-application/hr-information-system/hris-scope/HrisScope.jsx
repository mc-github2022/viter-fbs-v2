import React from "react";
import { scope } from "../../../../../website/webapp/serviceHr/data";
import { IoChevronDown } from "react-icons/io5";
import { devBaseImgUrl } from "../../../../../../helpers/functions-general";
import { HiPencil } from "react-icons/hi";
import { FaEdit, FaRegImages } from "react-icons/fa";
import { StoreContext } from "../../../../../../store/StoreContext";
import { setIsAdd, setIsDelete } from "../../../../../../store/StoreAction";
import { MdDelete } from "react-icons/md";
import ModalDelete from "../../../../../../partials/modals/ModalDelete";

const HrisScope = ({ handleUpdateHrisScopeTitles, hrisTitlesData }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [isData, setIsData] = React.useState("");
  const [id, setIsId] = React.useState("");

  const [accordionItem, setAccordionItem] = React.useState("");

  React.useEffect(() => {
    setAccordion(true);
    setAccordionItem("starter");
  }, []);

  const [accordion, setAccordion] = React.useState(false);
  const handleAccordion = (item) => {
    setAccordion(true);
    setAccordionItem(item);
    console.log(accordionItem);
  };

  const handleEdit = (item) => {
    dispatch(setIsAdd(true));
    setItemEdit(item);
  };

  const handleDelete = (item) => {
    dispatch(setIsDelete(true));
    setIsData(item.home_banner_title);
    setIsId(item.home_banner_aid);
  };

  return (
    <>
      <section className="ServiceHrScope py-20">
        <div className="customContainer relative">
          <div className="relative">
            <a
              className="absolute cursor-pointer tooltip-btn left-[16rem] -top-2 "
              data-tooltip="Edit contents"
              onClick={handleUpdateHrisScopeTitles}
            >
              <HiPencil className=" bg-[#C7AC27] rounded-full  w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
            </a>
            <p>
              {hrisTitlesData?.data?.length > 0 &&
              hrisTitlesData.data[0]?.hris_titles_overview_subtitle
                ? hrisTitlesData?.data[0].hris_titles_overview_subtitle
                : "Subtitle"}
            </p>
            <h2 className="text-[clamp(20px,7vw,35px)] font-semibold text-primary leading-[1.1] mb-8">
              {hrisTitlesData?.data?.length > 0 &&
              hrisTitlesData.data[0]?.hris_titles_overview_title
                ? hrisTitlesData?.data[0].hris_titles_overview_title
                : "Title"}
            </h2>
          </div>
          <a
            className="absolute cursor-pointer right-[6rem] top-2"
            // onClick={handleUpdatePartnerWithUs}
          >
            <span className=" bg-[#C7AC27] rounded-lg  w-[25px] h-[20px] px-[8px] border-[1px] text-black hover:underline text-base">
              Add
            </span>
          </a>
          <div className="warpper md:grid md:grid-cols-2 gap-5">
            <ul>
              {scope.map((scopeList, key) => {
                return (
                  <li
                    key={key}
                    className="overflow-hidden border-b border-[#e9e9e9]"
                  >
                    <div
                      className={`${
                        accordion && accordionItem === scopeList.scopeId
                          ? "bg-customGray"
                          : ""
                      } grid grid-cols-[_3.5fr,_.5fr] justify-between items-center px-2 group hover:bg-[#f1f1f1] cursor-pointer py-2`}
                      onClick={() => handleAccordion(scopeList.scopeId)}
                    >
                      <div className="grid grid-cols-[_2rem,_1fr] items-center gap-4">
                        <div>{scopeList.scopeIcon}</div>
                        <p
                          className={`${
                            accordion && accordionItem === scopeList.scopeId
                              ? "bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent]"
                              : "text-dark"
                          } text-[clamp(18px,4vw,20px)] font-semibold cursor-pointer `}
                        >
                          {scopeList.scopeTitle}
                        </p>
                      </div>
                      <IoChevronDown
                        className={`${
                          accordion && accordionItem === scopeList.scopeId
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                    </div>
                    <div
                      className={`${
                        accordion && accordionItem === scopeList.scopeId
                          ? "px-4 pt-4 pb-4"
                          : "h-0 py-0"
                      } accordionContent `}
                    >
                      <p>{scopeList.scopeDesc}</p>
                      <div className="flex items-center place-self-end">
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
                      </div>
                      {/* <a href="#" className="btn bg-primary text-light">
                           Schedule a Demo
                         </a> */}
                      <p className="md:hidden py-6">
                        <a
                          href="https://calendly.com/carlodm-fbs/demo-discovery-call"
                          target="_blank"
                          className="btn bg-primary text-light font-semibold"
                        >
                          SCHEDULE A DEMO
                        </a>
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>

            {scope.map((scopedata, key) => {
              return (
                <div
                  key={key}
                  className={`${
                    accordionItem === scopedata.scopeId ? "block" : "hidden"
                  }`}
                >
                  <img
                    className="hidden md:w-full md:object-contain md:block"
                    // src={`${devBaseImgUrl}/hrScopdeSS_overview.jpg`}
                    src={`${devBaseImgUrl}/${scopedata.scopeImage}`}
                    alt="What Makes This Web App"
                  />

                  <p className="hidden md:block mb-4 text-center pt-8 pb-8">
                    <a
                      href="https://calendly.com/carlodm-fbs/demo-discovery-call"
                      target="_blank"
                      className="btn bg-primary text-light font-semibold"
                    >
                      SCHEDULE A DEMO
                    </a>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {store.isDelete && (
        <ModalDelete
          setIsDelete={setIsDelete}
          queryKey={"banner"}
          mysqlEndpoint={`/v1/banner/${id}`}
          item={isData}
          filesToDelete={isData.knowledge_based_announcement_files}
        />
      )}
    </>
  );
};

export default HrisScope;
