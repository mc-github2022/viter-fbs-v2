import React, { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import useQueryData from "../../../custom-hooks/useQueryData";
import { devBaseImgUrl } from "../../../helpers/functions-general";
import ModalWrapper from "../../../partials/ModalWrapper";

const EventsSliderPage = ({ setIsEventsImg, selectedImage }) => {
  const {
    isFetching,
    error,
    isLoading,
    status,
    data: eventsAndActivitiesData,
  } = useQueryData(
    "/v1/eventsAndAct", // endpoint
    "get", // method
    "eventsAndAct" // key
  );

  const handleClose = () => {
    setIsEventsImg(false);
    document.body.classList.remove("overflow-hidden");
  };

  const selectedItem = eventsAndActivitiesData?.data.find(
    (item) => item.events_activities_aid === selectedImage
  );

  const images =
    selectedItem?.events_activities_img_list
      .split(",")
      .map((img) => img.trim())
      .filter(Boolean) || [];

  // Choose a specific image from the list, e.g., the first image
  const specificImage = images[0]; // Change 0 to the desired index if needed

  return (
    <ModalWrapper
      className={`transition-all ease-linear transform duration-200 w-[80%] lg:w-[42%] md:w-[60%] place-self-center`}
      handleClose={handleClose}
    >
      <div className="bg-transparent h-fit place-items-center place-content-center">
        {/* {eventsAndActivitiesData?.data[0].map((image, index) => (
          <div
            key={index}
            className="justify-items-center"
            // className="my-[10vh] lg:my-[20vh] md:mt-[20vh] md:mb-[10vh]"
          >
            <div className="z-[1] max-w-[700px] h-[60vh] place-self-center relative mx-1">
              <img
                src={`${devBaseImgUrl}/${image[0]}`}
                alt={`Event image ${image} - ${index + 1}`}
                className="object-contain w-[700px] h-[60vh]"
              />
            </div>
          </div>
        ))} */}
        <div className="justify-items-center">
          <div className="z-[1] max-w-[700px] h-[60vh] place-self-center relative mx-1">
            {specificImage ? (
              <img
                src={`${devBaseImgUrl}/${specificImage}`}
                alt={`Event image ${specificImage}`}
                className="object-contain w-[700px] h-[60vh]"
              />
            ) : (
              <p>No image available</p> // Handle the case where no image is found
            )}
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default EventsSliderPage;
