import React from "react";
import Navigation from "../../../../partials/dashboard/Navigation";
import Dashboard from "../../../../partials/dashboard/Dashboard";
import { Form, Formik } from "formik";
import {
  InputSelect,
  InputText,
  InputTextArea,
} from "../../../../helpers/FormInputs";
import { FaPlay } from "react-icons/fa";
import TableLoading from "../../../../partials/spinners/TableLoading";
import TableSpinner from "../../../../partials/spinners/TableSpinner";

const Mailer = () => {
  const [preview, setPreview] = React.useState(false);
  const handlePreview = () => {
    setPreview(true);
  };
  return (
    <>
      <section id="subscribers" className="bg-[#f5f5f3]">
        <Navigation menu="subscribers" submenu="mailer" />
        <Dashboard>
          <div className="mx-5 pt-2">
            <div className="py-5 flex justify-between ">
              <div className="text-sm text-[black] font-semibold">
                <h2>Newsletter Mailer</h2>
              </div>
            </div>
            <div className="pb-4">
              <Formik>
                <Form>
                  <div className="grid grid-cols-2 gap-12">
                    <div>
                      <div className="input-wrapper">
                        <InputSelect
                          label="Recipient"
                          type="text"
                          name="lcss_batch_category"
                        >
                          <option value="" disabled>
                            -Select Recipient-
                          </option>
                          <option value="College On-the-job Training">
                            Subscribers
                          </option>
                        </InputSelect>
                      </div>
                      <div className="input-wrapper">
                        <InputText
                          label="Subject"
                          type="text"
                          name="subject"
                          className="w-full"
                        />
                      </div>
                      <div className="input-wrapper ">
                        <InputTextArea
                          label="Paste Your HTML Code Here"
                          type="text"
                          name="events_activities_description"
                          className="h-[430px] "
                        />
                      </div>
                      <div className="form-action  bottom-0 w-full">
                        <div className="form-btn">
                          <button
                            className="btn-modal-submit w-[200px]"
                            type="submit"
                          >
                            Send
                          </button>
                          <button
                            className="btn-modal-cancel hover:bg-[#f3f3f3]  bg-[white] w-[200px]"
                            type="button"
                            onClick={handlePreview}
                          >
                            View Preview
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="Preview grid place-items-center">
                      <div className={`${preview ? "block" : "hidden"}`}>
                        <p>Content Displayed :)</p>
                      </div>
                    </div>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </Dashboard>
      </section>
    </>
  );
};

export default Mailer;
