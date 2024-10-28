import React from "react";
import { StoreContext } from "../../../store/StoreContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryData } from "../../../helpers/queryData";
import { setError, setMessage, setSuccess } from "../../../store/StoreAction";
import ModalAddWrapper from "../../../partials/dashboard/ModalAddWrapper";
import { GrFormClose } from "react-icons/gr";
import { Form, Formik } from "formik";
import { InputSelect, InputText } from "../../../helpers/FormInputs";
import ButtonSpinner from "../../../partials/spinners/ButtonSpinner";
import * as Yup from "yup";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as TiIcons from "react-icons/ti";

const icons = { ...FaIcons, ...AiIcons, ...IoIcons, ...TiIcons };

const ModalAddSpecialOffers = ({ setIsAdd, itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [icon, setIcon] = React.useState(
    itemEdit ? itemEdit.special_offers_icons : ""
  );

  const Icon = icon ? icons[icon] : null;


  const filteredIcons = Object.keys(icons).filter((iconKey) =>
    iconKey.toLowerCase().includes(searchTerm.toLowerCase())
  );

 
  React.useEffect(() => {
    if (itemEdit) {
      setIcon(itemEdit.special_offers_icons);
    }
  }, [itemEdit]);

  
  const handleClose = () => {
    setTimeout(() => {
      dispatch(setIsAdd(false));
    }, 200);
  };

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
      className={`transition-all ease-linear transform duration-200`}
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
              special_offers_icons: icon,
            };
            mutation.mutate(data);
          }}
        >
          {(props) => {
            return (
              <Form className="modal-form">
                <div className="form-input">
                  <div className="input-wrapper">
                    <label htmlFor="icon-search">Search Icon</label>
                    <input
                      id="icon-search"
                      type="text"
                      placeholder="Type to search icons..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="border p-2 w-full"
                      disabled={mutation.isPending}
                    />

                    <select
                      name="home_insights_category"
                      value={icon}
                      onChange={(e) => setIcon(e.target.value)}
                      className="border p-2 w-full mt-2"
                      disabled={mutation.isPending}
                    >
                      <option value="" disabled>
                        Select an icon
                      </option>
                      {filteredIcons.map((iconKey) => (
                        <option
                          key={iconKey}
                          value={iconKey}
                          className="text-sm"
                        >
                          {iconKey}
                        </option>
                      ))}
                    </select>

                    {icon ? (
                      <div className="flex items-center gap-4 mt-2">
                        Selected icon: <Icon />
                      </div>
                    ) : (
                      "No icon selected"
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
                <div className="form-action">
                  <div className="form-btn">
                    <button
                      className="btn-modal-submit"
                      type="submit"
                      disabled={mutation.isPending || !icon}
                    >
                      {mutation.isPending ? <ButtonSpinner /> : "Save"}
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
