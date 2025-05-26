import React from "react";
import { FaEdit } from "react-icons/fa";
import { HiPencil } from "react-icons/hi";
import { IoChevronDown } from "react-icons/io5";
import { MdDelete, MdOutlineDashboard } from "react-icons/md";
import {
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "../../../../../../helpers/functions-general";
import LoadImages from "../../../../../../partials/LoadImages";
import ModalDelete from "../../../../../../partials/modals/ModalDelete";
import FetchingSpinner from "../../../../../../partials/spinners/FetchingSpinner";
import NoData from "../../../../../../partials/spinners/NoData";
import TableLoading from "../../../../../../partials/spinners/TableLoading";
import {
  setIsDelete,
  setIsUpdateHome,
} from "../../../../../../store/StoreAction";
import { StoreContext } from "../../../../../../store/StoreContext";
import ContactFormDefault from "../../../../contact-form-default/ContactFormDefault";

const PaymentScope = ({
  handleUpdatePaymentScopeTitles,
  handleUpdatePaymentScope,
  isLoadingScope,
  isFetchingScope,
  setItemEdit,
  paymentTitlesData,
  paymentScopeData,
  contactFormDefaultData,
  handleUpdateContactFormDefault,
}) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [isData, setIsData] = React.useState("");
  const [id, setIsId] = React.useState("");
  const [isContactDefaultOpen, setIsContactDefaultOpen] = React.useState(false);

  const [accordionItem, setAccordionItem] = React.useState("");

  const currentScope = paymentScopeData?.data?.find(
    (item) => item.payment_scope_aid === accordionItem
  );

  const PaymentScopeImage = getConvertStringToJSONparseData(
    currentScope?.payment_scope_img
  );

  React.useEffect(() => {
    if (paymentScopeData?.data?.length > 0) {
      setAccordionItem(paymentScopeData.data[0].payment_scope_aid);
    }
  }, [paymentScopeData]);

  const handleAccordion = (item) => {
    setAccordionItem(item);
  };

  const handleEdit = (scopeList) => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "payment-scope" }));
    setItemEdit(scopeList);
  };

  const handleDelete = (scopeList) => {
    dispatch(setIsDelete(true));
    setIsData(scopeList.payment_scope_title);
    setIsId(scopeList.payment_scope_aid);
  };

  const handleOpen = () => {
    setIsContactDefaultOpen(true);
  };

  return (
    <>
      <section className="ServiceHrScope py-20">
        <div className="customContainer relative">
          <div className="relative">
            <a
              className="absolute cursor-pointer tooltip-btn left-[16rem] -top-2 "
              data-tooltip="Edit contents"
              onClick={handleUpdatePaymentScopeTitles}
            >
              <HiPencil className=" bg-[#C7AC27] rounded-full  w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
            </a>
            <p>
              {paymentTitlesData?.data?.length > 0 &&
              paymentTitlesData.data[0]?.payment_titles_overview_subtitle
                ? paymentTitlesData?.data[0].payment_titles_overview_subtitle
                : "Subtitle"}
            </p>
            <h2 className="text-[clamp(20px,7vw,35px)] font-semibold text-primary leading-[1.1] mb-8">
              {paymentTitlesData?.data?.length > 0 &&
              paymentTitlesData.data[0]?.payment_titles_overview_title
                ? paymentTitlesData?.data[0].payment_titles_overview_title
                : "Title"}
            </h2>
          </div>
          <a
            className="absolute cursor-pointer right-[6rem] top-2"
            onClick={handleUpdatePaymentScope}
          >
            <span className=" bg-[#C7AC27] rounded-lg  w-[25px] h-[20px] px-[8px] border-[1px] text-black hover:underline text-base">
              Add
            </span>
          </a>
          {isFetchingScope && !isLoadingScope && <FetchingSpinner />}
          {(isLoadingScope || paymentScopeData?.data?.length === 0) && (
            <div className="text-center">
              <div className="p-36">
                <NoData />
              </div>
            </div>
          )}
          <div className="warpper md:grid md:grid-cols-2 gap-5">
            <ul>
              {isLoadingScope || isFetchingScope ? (
                <TableLoading cols={1} count={15} />
              ) : (
                paymentScopeData?.data.map((scopeList, key) => {
                  return (
                    <li
                      key={key}
                      className="overflow-hidden border-b border-[#e9e9e9]"
                    >
                      <div
                        className={`${
                          accordionItem === scopeList.payment_scope_aid
                            ? "bg-customGray"
                            : ""
                        } grid grid-cols-[_3.5fr,_.5fr] justify-between items-center px-2 group hover:bg-[#f1f1f1] cursor-pointer py-2`}
                        onClick={() =>
                          handleAccordion(scopeList.payment_scope_aid)
                        }
                      >
                        <div className="grid grid-cols-[_2rem,_1fr] items-center gap-4">
                          <div>
                            <MdOutlineDashboard className="text-3xl text-primary" />
                          </div>
                          <p
                            className={`${
                              accordionItem === scopeList.payment_scope_aid
                                ? "bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent]"
                                : "text-dark"
                            } text-[clamp(18px,4vw,20px)] font-semibold cursor-pointer `}
                          >
                            {scopeList.payment_scope_title}
                          </p>
                        </div>
                        <IoChevronDown
                          className={`${
                            accordionItem === scopeList.payment_scope_aid
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </div>
                      <div
                        className={`${
                          accordionItem === scopeList.payment_scope_aid
                            ? "px-4 pt-4 pb-4"
                            : "h-0 py-0"
                        } accordionContent `}
                      >
                        <p>{scopeList.payment_scope_desc}</p>
                        <div className="flex items-center place-self-end">
                          <button
                            className="tooltip-action-table"
                            data-tooltip="Edit"
                            onClick={() => handleEdit(scopeList)}
                          >
                            <FaEdit className="text-gray-600 text-[16px]" />
                          </button>
                          <button
                            className="tooltip-action-table"
                            data-tooltip="Delete"
                            onClick={() => handleDelete(scopeList)}
                          >
                            <MdDelete className="text-gray-600 text-[18px]" />
                          </button>
                        </div>
                        {/* <a href="#" className="btn bg-primary text-light">
                           Schedule a Demo
                         </a> */}
                        <p className="md:hidden py-6">
                          <button
                            onClick={handleOpen}
                            className="btn bg-primary text-light font-semibold uppercase"
                          >
                            {scopeList.payment_scope_button_text || "Button"}
                          </button>
                        </p>
                      </div>
                    </li>
                  );
                })
              )}
            </ul>

            {paymentScopeData?.data.map((scopedata, key) => {
              return (
                <div
                  key={key}
                  className={`${
                    accordionItem === scopedata.payment_scope_aid
                      ? "block"
                      : "hidden"
                  } relative`}
                >
                  {PaymentScopeImage.map((img, index) => (
                    <LoadImages
                      className="hidden h-[364px] md:w-full md:object-contain md:block z-10"
                      url={`${googleHDViewLink}${img?.id}`}
                      alt="What Makes This Web App"
                      key={index}
                    />
                  ))}

                  <p className="hidden md:block mb-4 text-center pt-8 pb-8">
                    <button
                      onClick={handleOpen}
                      className="btn bg-primary text-light font-semibold uppercase"
                    >
                      {scopedata.payment_scope_button_text || "Button"}
                    </button>
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
          queryKey={"payment-scope"}
          mysqlEndpoint={`/v1/payment-scope/${id}`}
          item={isData}
        />
      )}

      {isContactDefaultOpen && (
        <ContactFormDefault
          setIsContactDefaultOpen={setIsContactDefaultOpen}
          handleUpdateContactFormDefault={handleUpdateContactFormDefault}
          contactFormDefaultData={contactFormDefaultData}
        />
      )}
    </>
  );
};

export default PaymentScope;
