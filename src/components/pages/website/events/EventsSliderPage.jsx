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

  // find the id and its matched index
  const selectedItem = eventsAndActivitiesData?.data.find(
    (item) => item.events_activities_aid === selectedImage?.id
  );

  const images = selectedItem?.events_activities_img_list
    ? selectedItem.events_activities_img_list
        .split(",")
        .map((img) => img.trim())
    : [];

  const specificImage = selectedImage ? images[selectedImage.index] : null;

  return (
    <ModalWrapper
      className={`transition-all ease-linear transform duration-200 w-[80%] lg:w-[42%] md:w-[60%] place-self-center`}
      handleClose={handleClose}
    >
      <div className="bg-transparent h-fit place-items-center place-content-center">
        <div className="justify-items-center">
          <div className="z-[1] max-w-[700px] h-[60vh] place-self-center relative mx-1">
            {specificImage ? (
              <img
                src={`${devBaseImgUrl}/${specificImage}`}
                alt={`Selected Event Image`}
                className="object-contain w-[700px] h-[60vh]"
              />
            ) : (
              <p>No image available</p>
            )}
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default EventsSliderPage;
