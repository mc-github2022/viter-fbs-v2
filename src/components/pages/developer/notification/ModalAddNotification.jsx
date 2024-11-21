import React from "react";
import * as Yup from "yup";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as TiIcons from "react-icons/ti";
import * as LuIcons from "react-icons/lu";
import * as PiIcons from "react-icons/pi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryData } from "../../../helpers/queryData";
import { setError, setMessage, setSuccess } from "../../../store/StoreAction";
import ModalAddWrapper from "../../../partials/dashboard/ModalAddWrapper";
import { GrFormClose } from "react-icons/gr";
import { Form, Formik } from "formik";
import {
  InputSelect,
  InputText,
  InputTextArea,
} from "../../../helpers/FormInputs";
import ButtonSpinner from "../../../partials/spinners/ButtonSpinner";
import { StoreContext } from "../../../store/StoreContext";

const icons = {
  ...FaIcons,
  ...AiIcons,
  ...IoIcons,
  ...TiIcons,
  ...LuIcons,
  ...PiIcons,
};

const ModalAddNotification = ({ setIsAdd, itemEdit }) => {
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
      setIcon(itemEdit.careers_icon);
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
          ? `/v1/careers/${itemEdit.careers_aid}` // update
          : `/v1/careers`, // create
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["careers"] });
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
    careers_aid: itemEdit ? itemEdit.careers_aid : "",
    careers_job_title: itemEdit ? itemEdit.careers_job_title : "",
    careers_job_classification: itemEdit
      ? itemEdit.careers_job_classification
      : "",
    careers_job_mode: itemEdit ? itemEdit.careers_job_mode : "",
    careers_job_status: itemEdit ? itemEdit.careers_job_status : "",
    careers_job_description: itemEdit ? itemEdit.careers_job_description : "",
    careers_icon: itemEdit ? itemEdit.careers_icon : "",
  };

  const yupSchema = Yup.object({});

  return (
    <ModalAddWrapper
      className={`transition-all ease-linear transform duration-200`}
      handleClose={handleClose}
    >
      <div className="modal-title">
        <h2 className="text-sm">{itemEdit ? "Edit" : "Add"} Career</h2>
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
              careers_icon: icon,
            };
            mutation.mutate(data);
          }}
        >
          {(props) => {
            return (
              <Form className="modal-form">
                <div className="form-input">
                  <div className="flex gap-4 justify-between">
                    <div className="w-[50%]">
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
                          label="Job Title"
                          type="text"
                          name="careers_job_title"
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="input-wrapper">
                        <InputSelect
                          label="Employee Classification"
                          type="text"
                          name="careers_job_classification"
                          disabled={mutation.isPending}
                        >
                          <option value="" disabled>
                            Select Employee Classification
                          </option>
                          <option value="Full-time">Full-time</option>
                          <option value="Part-time">Part-time</option>
                        </InputSelect>
                      </div>
                      <div className="input-wrapper">
                        <InputSelect
                          label="Mode of Work"
                          type="text"
                          name="careers_job_mode"
                          disabled={mutation.isPending}
                        >
                          <option value="" disabled>
                            Select Mode of Work
                          </option>
                          <option value="On-site">On-site</option>
                          <option value="Remote">Remote</option>
                          <option value="Hybrid">Hybrid</option>
                        </InputSelect>
                      </div>
                      <div className="input-wrapper">
                        <InputSelect
                          label="Job Status"
                          type="text"
                          name="careers_job_status"
                          disabled={mutation.isPending}
                        >
                          <option value="" disabled>
                            Select Job Status
                          </option>
                          <option value="Ongoing">Ongoing</option>
                          <option value="Closed">Closed</option>
                        </InputSelect>
                      </div>
                    </div>
                    <div className="input-wrapper">
                      <InputTextArea
                        label="Job Description"
                        type="text"
                        name="careers_job_description"
                        className="h-[500px] w-[478px]"
                        disabled={mutation.isPending}
                      />
                    </div>
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

export default ModalAddNotification;
