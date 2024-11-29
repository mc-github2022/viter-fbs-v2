import React from "react";
import { StoreContext } from "../../../store/StoreContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryData } from "../../../helpers/queryData";
import { setError, setMessage, setSuccess } from "../../../store/StoreAction";
import ModalAddWrapper from "../../../partials/dashboard/ModalAddWrapper";
import { GrFormClose } from "react-icons/gr";
import { Field, Form, Formik } from "formik";
import { InputSelect, InputText } from "../../../helpers/FormInputs";
import ButtonSpinner from "../../../partials/spinners/ButtonSpinner";
import * as Yup from "yup";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as TiIcons from "react-icons/ti";
import * as LuIcons from "react-icons/lu";
import * as PiIcons from "react-icons/pi";

const icons = {
  ...FaIcons,
  ...AiIcons,
  ...IoIcons,
  ...TiIcons,
  ...LuIcons,
  ...PiIcons,
};

const ModalAddSpecialOffers = ({ setIsAdd, itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [searchTerm, setSearchTerm] = React.useState(
    itemEdit ? itemEdit.special_offers_icons : ""
  );
  const [onFocusSearch, setOnFocusSearch] = React.useState(false);
  const [selectedIcon, setSelectedIcon] = React.useState(
    itemEdit ? itemEdit.special_offers_icons : ""
  );
  const [itemsLimit, setItemsLimit] = React.useState(20);

  // sets the limit of icons being show
  const handleShowMore = () => {
    setItemsLimit(itemsLimit + 20);
  };

  const refSearch = React.useRef();

  const clickOutsideRefSearch = (e) => {
    if (refSearch.current && !refSearch.current.contains(e.target)) {
      setOnFocusSearch(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", clickOutsideRefSearch);
    return () => document.removeEventListener("click", clickOutsideRefSearch);
  }, []);

  const handleIconSelect = (iconKey) => {
    setSelectedIcon(iconKey);
    setSearchTerm(iconKey);
    setOnFocusSearch(false);
  };

  const filteredIcons = Object.keys(icons).filter((iconKey) =>
    iconKey.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Limit the number of icons displayed
  const limitedIcons = filteredIcons.slice(0, itemsLimit);

  const handleClose = () => {
    setTimeout(() => {
      dispatch(setIsAdd(false));
    }, 200);
  };

  const SelectedIcon = selectedIcon ? icons[selectedIcon] : null;

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `/v1/specialOffers/${itemEdit.special_offers_aid}` // update
          : `/v1/specialOffers`, // create
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["specialOffers"] });
      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
        dispatch(setSuccess(false));
      } else {
        console.log("Success");
        dispatch(setIsAdd(false));
        dispatch(setSuccess(true));
        dispatch(setMessage(`Successfully ${itemEdit ? "Updated" : "Added"}.`));
      }
    },
  });

  const initVal = {
    special_offers_aid: itemEdit ? itemEdit.special_offers_aid : "",
    special_offers_icons: itemEdit ? itemEdit.special_offers_icons : "",
    special_offers_services: itemEdit ? itemEdit.special_offers_services : "",
    special_offers_price: itemEdit ? itemEdit.special_offers_price : "",
    special_offers_link: itemEdit ? itemEdit.special_offers_link : "",
  };

  const yupSchema = Yup.object({});

  return (
    <ModalAddWrapper
      className={`transition-all ease-linear transform duration-200 max-h-[450px] max-w-[500px]`}
      handleClose={handleClose}
    >
      <div className="modal-title">
        <h2 className="text-sm">{itemEdit ? "Edit" : "Add"} Special Offers</h2>
        <button onClick={handleClose}>
          <GrFormClose className="text-[25px]" />
        </button>
      </div>
      <div className="modal-content">
        <Formik
          initialValues={initVal}
          validationSchema={yupSchema}
          onSubmit={async (values) => {
            const data = {
              ...values,
              special_offers_icons: selectedIcon,
            };
            mutation.mutate(data);
          }}
        >
          {(props) => {
            return (
              <Form className="modal-form">
                <div className="form-input">
                  <div className="flex gap-4 justify-between">
                    <div className="w-[500px]"></div>
                  </div>

                  <div className="input-wrapper" ref={refSearch}>
                    <InputText
                      label="Search Icon"
                      type="text"
                      name="special_offers_icons"
                      placeholder="Type to search icons..."
                      value={searchTerm}
                      onChange={(e) => {
                        const value = e.target.value;
                        setSearchTerm(value);
                        props.setFieldValue("special_offers_icons", value);
                      }}
                      onFocus={() => setOnFocusSearch(true)}
                      className="border p-2 w-full"
                    />
                    {onFocusSearch && (
                      <div className="w-full h-40 max-h-40 overflow-y-auto absolute top-[34px] bg-white shadow-md z-50 rounded-sm border border-gray-200 pt-1">
                        {limitedIcons.map((iconKey) => {
                          const IconComponent = icons[iconKey];
                          return (
                            <div
                              key={iconKey}
                              className="icon-item cursor-pointer flex items-center gap-2 px-2 py-1 hover:bg-gray-100"
                              onClick={() => {
                                handleIconSelect(iconKey);
                                props.setFieldValue(
                                  "special_offers_icons",
                                  iconKey
                                );
                                setOnFocusSearch(false);
                              }}
                            >
                              <IconComponent />
                              <span>{iconKey}</span>
                            </div>
                          );
                        })}
                        {filteredIcons.length > itemsLimit && (
                          <div className="load-more">
                            <button
                              type="button"
                              onClick={handleShowMore}
                              className="text-primary p-1 ml-1.5 rounded"
                            >
                              Show More Icons ...
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                    {selectedIcon ? (
                      <div className="flex items-center gap-4 ml-3 text-xs">
                        Selected icon: <SelectedIcon />
                      </div>
                    ) : (
                      <div className="text-xs ml-3">No icon selected</div>
                    )}
                  </div>

                  <div className="input-wrapper">
                    <InputText
                      label="Services"
                      type="text"
                      name="special_offers_services"
                      disabled={mutation.isPending}
                    />
                  </div>
                  <div className="input-wrapper">
                    <InputText
                      label="Special Offer"
                      type="text"
                      name="special_offers_price"
                      disabled={mutation.isPending}
                    />
                  </div>
                  <div className="input-wrapper">
                    <InputText
                      label="Link"
                      type="text"
                      name="special_offers_link"
                      disabled={mutation.isPending}
                    />
                  </div>
                </div>
                <div className="form-action mb-1">
                  <div className="form-btn">
                    <button
                      className="btn-modal-submit"
                      type="submit"
                      disabled={
                        mutation.isPending || !props.dirty || !selectedIcon
                      }
                    >
                      {mutation.isPending ? (
                        <>
                          <ButtonSpinner /> Save
                        </>
                      ) : (
                        "Save"
                      )}
                    </button>
                    <button
                      className="btn-modal-cancel"
                      type="button"
                      onClick={handleClose}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </ModalAddWrapper>
  );
};

export default ModalAddSpecialOffers;
