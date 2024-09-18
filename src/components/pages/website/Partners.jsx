import React from "react";

const Partners = () => {
  return (
    <>
      <section className="partners py-24">
        <div className="customContainer">
          <div className="wrapper grid grid-cols-[_1fr_1fr]">
            <div>
              <ul className="grid grid-cols-2 [&>li>img]:mx-auto gap-10">
                <li>
                  <img src="../../public/img/logo-avant.png" alt="" />
                </li>
                <li>
                  <img src="../../public/img/AKA-Global.png" alt="" />
                </li>
                <li>
                  <img src="../../public/img/DTOD-BPO.png" alt="" />
                </li>
                <li>
                  <img src="../../public/img/FTC-e1716532807623.png" alt="" />
                </li>
                <li>
                  <img src="../../public/img/JCCO.png" alt="" />
                </li>
                <li>
                  <img src="../../public/img/lightupToy.png" alt="" />
                </li>
                <li>
                  <img src="../../public/img/rebekah.png" alt="" />
                </li>
                <li>
                  <img src="../../public/img/web-obich.png" alt="" />
                </li>
              </ul>
            </div>
            <div className="text-right flex items-center justify-end">
              <div>
                <h3 className="text-[45px] font-semibold  leading-[1.1] mb-8  text-dark">
                  They love <br />
                  <span className="text-primary">working with us.</span>
                </h3>
                <div className="flex justify-end">
                  <p className="2xl:w-[300px]">
                    Explore the diverse range of clients and partners who trust
                    us to deliver exceptional solution and services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partners;
