import React from "react";
import Header from "../../../partials/Header";
import Footer from "../../../partials/Footer";
import { Form, Formik } from "formik";
import { InputText } from "../../../helpers/FormInputs";

const Payment = () => {
  const [pageName, setPageName] = React.useState("payment");
  return (
    <>
      <Header pageName={pageName} />
      <div className="payment pt-[96px] md:pt-[176px] pb-20">
        <div className="customContainer">
          <div className="text-center">
            <h2 className="text-primary mb-8 text-[clamp(30px,5vw,40px)] font-semibold">
              Online Payment
            </h2>
            <p className="w-full md:w-[50%] m-auto mb-20">
              Frontline Business Solution accepts Visa, Mastercard and GCash for
              local online payment. If you wish to pay by check, please contact
              us and we can send an invoice with the mailing address.
            </p>
          </div>
          <div className="wrapper grid place-items-center">
            <div className="theForm  p-[40px] addShadow rounded-lg bg-light relative z-[1] w-full sm:w-[550px] ">
              <Formik>
                <Form>
                  <div className="space-y-6">
                    <div className="input-wrapper">
                      <InputText label="Name" type="text" name="client_name" />
                    </div>
                    <div className="input-wrapper">
                      <InputText label="Email" type="text" name="client_name" />
                    </div>
                    <div className="input-wrapper pesoSign">
                      <InputText
                        label="Amount"
                        type="text"
                        name="client_name"
                      />
                    </div>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Payment;
