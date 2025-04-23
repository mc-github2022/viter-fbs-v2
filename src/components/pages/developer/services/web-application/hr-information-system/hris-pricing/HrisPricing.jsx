import React from "react";
import { FaCheckCircle, FaEdit } from "react-icons/fa";
import { pricing } from "../../../../../website/webapp/serviceHr/data";
import { HiPencil } from "react-icons/hi";
import { StoreContext } from "../../../../../../store/StoreContext";
import { setIsAdd, setIsDelete } from "../../../../../../store/StoreAction";
import ModalDelete from "../../../../../../partials/modals/ModalDelete";
import { MdDelete } from "react-icons/md";

const HrisPricing = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [isData, setIsData] = React.useState("");
  const [id, setIsId] = React.useState("");

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
      <section className="ServiceHrPricing py-20 bg-[#000000] relative sm:overflow-hidden">
        <div className="footerGradientBlack hidden sm:block absolute h-[1000px] w-full bottom-[-30%] right-[-30%]"></div>
        <div className="customContainer z-[1]">
          <div className="mb-20 text-center relative z-[3]">
            <a
              className="absolute cursor-pointer tooltip-btn right-[350px] -top-6 "
              data-tooltip="Edit contents"
              // onClick={handleUpdateInsightsTitle}
            >
              <HiPencil className=" bg-[#C7AC27] rounded-full  w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
            </a>
            <p className="text-light">
              Web application for your payroll processing needs
            </p>
            <h3 className="text-[clamp(20px,7vw,35px)] font-semibold leading-[1.1] text-light">
              Affordable Pricing Plan
            </h3>
            <a
              className="absolute cursor-pointer right-[360px] top-[100px]"
              // onClick={handleUpdatePartnerWithUs}
            >
              <span className=" bg-[#C7AC27] rounded-lg  w-[25px] h-[20px] px-[8px] border-[1px] text-black hover:underline text-base">
                Add
              </span>
            </a>
          </div>
          <div className="md:grid md:place-items-center">
            <div className="wrapper md:grid md:grid-cols-2 gap-6 items-center">
              {pricing.map((price, key) => {
                return (
                  <div
                    key={key}
                    className={`priceItem mb-5 lg:mb-0 relative z-[1] w-full text-light text-center  rounded-lg addShadow ${
                      price.isActive ? "bg-primary" : "bg-customGray !text-dark"
                    } grid `}
                  >
                    <div className="flex flex-col justify-between px-10 pt-10">
                      <div>
                        <div className="title mb-4 ">
                          {price.icon}
                          <h3
                            className={`${price.customCss} text-2xl font-bold  text-light mb-6`}
                          >
                            {price.title}
                          </h3>
                          <p
                            className={`${price.customCss} text-2xl  font-bold text-light`}
                          >
                            {price.rate}
                          </p>

                          {price.note !== "" && (
                            <p
                              className={`${price.customCss} text-light text-lg italic`}
                            >
                              {price.note}
                            </p>
                          )}
                        </div>
                        {/* <ul className="[&>li]:flex [&>li]:items-center [&>li]:gap-2 mb-8">
                             {price.info.map((info, key) => (
                               <li key={key} className="text-left">
                                 <FaCheckCircle
                                   className={`${price.customCss} text-light`}
                                 />
                                 {info}
                               </li>
                             ))}
                           </ul> */}
                        <table className="prices my-5">
                          <tbody>
                            {price.info.map((info, key) => (
                              <tr
                                key={key}
                                className="border-0 flex items-start"
                              >
                                <td>
                                  <FaCheckCircle
                                    className={`${price.customCss} text-light translate-y-`}
                                  />
                                </td>
                                <td className="text-[16px]">{info}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      <button
                        className="btn bg-primary text-light border-light
                           border-2 mt-10 font-bold w-[190px] mx-auto
                           hover:bg-light hover:text-primary hover:border-primary"
                      >
                        CHOOSE PLAN
                      </button>
                    </div>
                    <div className="flex items-center place-self-end p-5">
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
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="absolute bg-light h-[180px] w-full bottom-[-2px] "></div>
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

export default HrisPricing;
