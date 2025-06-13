import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as LuIcons from "react-icons/lu";
import * as PiIcons from "react-icons/pi";
import * as TiIcons from "react-icons/ti";
import useQueryData from "../../../../custom-hooks/useQueryData";
import { apiVersion } from "../../../../helpers/functions-general";
import TableLoading from "../../../../partials/spinners/TableLoading";

const icons = {
  ...FaIcons,
  ...AiIcons,
  ...IoIcons,
  ...TiIcons,
  ...LuIcons,
  ...PiIcons,
  ...BsIcons,
};

const ConStudServices = () => {
  const {
    isFetching: isFetchingServices,
    isLoading: isLoadingServices,
    error,
    data: continuingServicesData,
  } = useQueryData(
    `${apiVersion}/continuing-services`, // endpoint
    "get", // method
    "continuing-services", // key
    {},
    null,
    true
  );

  return (
    <>
      <section className="ConStudServices py-20">
        <div className="customContainer">
          <div className="wrapper flex flex-wrap place-content-center">
            {isLoadingServices || isFetchingServices ? (
              <TableLoading cols={1} count={15} />
            ) : (
              continuingServicesData?.data.map((item, key) => {
                const SelectedIcon = item.continuing_services_icon
                  ? icons[item.continuing_services_icon]
                  : null;

                return (
                  <div
                    className="webDesign w-[320px] py-5 md:px-3 lg:px-0"
                    key={key}
                  >
                    <div className="mb-10">
                      <p>{item.continuing_services_subtitle_a}</p>
                      <h3 className="text-[clamp(20px,7vw,35px)] font-semibold text-primary leading-[1.1] md:w-full">
                        {item.continuing_services_title}
                      </h3>
                      <p>{item.continuing_services_subtitle_b}</p>
                      <p>{item.continuing_services_prerequisite}</p>
                    </div>
                    <ul className="servicesList [&>li]:flex [&>li]:flex-col [&>li]:gap-2 [&>li]:mb-2 ">
                      <li>
                        {item.continuing_services_list
                          .split("\n") // Split by new lines
                          .filter((list) => list.trim() !== "") // Remove empty lines
                          .map((list, index) => (
                            <div key={index} className="text-base flex gap-2 ">
                              <div className="text-2xl text-dark">
                                {SelectedIcon ? (
                                  <SelectedIcon />
                                ) : (
                                  "No icon selected"
                                )}
                              </div>
                              {list}
                            </div>
                          ))}
                      </li>
                    </ul>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ConStudServices;
