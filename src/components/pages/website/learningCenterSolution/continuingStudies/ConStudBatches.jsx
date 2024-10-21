import React from "react";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { conStudBatch } from "./data";
import ConStudBatchSliderPage from "./ConStudBatchSliderPage";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      style={{
        background: "#ac1e72",
        position: "absolute",
        color: "white",
        top: "50%",
        right: "-6%",
        fontSize: "3rem",
        cursor: "pointer",
        borderRadius: "100%",
        width: "48px",
        height: "48px",
        display: "grid",
        placeItems: "center",
      }}
      onClick={onClick}
    >
      <IoIosArrowForward className="text-3xl" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      style={{
        position: "absolute",
        background: "#ac1e72",
        color: "white",
        top: "50%",
        left: "-6%",
        fontSize: "3rem",
        zIndex: "1",
        cursor: "pointer",
        borderRadius: "100%",
        width: "48px",
        height: "48px",
        display: "grid",
        placeItems: "center",
      }}
      onClick={onClick}
    >
      <IoIosArrowBack className="text-3xl" />
    </div>
  );
}

const ConStudBatches = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dotsClass: "slickNav slick-dots",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
          bottom: "-60px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "20px",
          height: "20px",
          color: "blue",
          background: "#ac1f72",
          borderRadius: "50%",
          opacity: "50%",
        }}
      ></div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          nextArrow: "",
          prevArrow: "",
          dots: true,
        },
      },
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: "",
          prevArrow: "",
          dots: true,
        },
      },
    ],
  };

  const [modalBatch, setModalBatch] = React.useState(false);
  const [itemEdit, setItemEdit] = React.useState(null);
  const handleModalBatch = (post) => {
    setModalBatch(!modalBatch);
    setItemEdit(post);
    // document.body.classList.toggle("overflow-hidden");
  };

  return (
    <>
      <section className="ConStudBatches pt-20 pb-40">
        <div className="customContainer">
          <div
            className="mb-12
          "
          >
            <p>Professional journey of our</p>
            <h3 className="text-[clamp(20px,7vw,35px)] font-semibold text-primary leading-[1.1]">
              successful, industry-ready Batches
            </h3>
          </div>
          <Slider {...settings}>
            {conStudBatch.map((post, key) => {
              return (
                <div key={key}>
                  <a onClick={() => handleModalBatch(post)}>
                    <div
                      className="blogItem addShadow mx-3 bg-[url('../../public/img/Batch-63.jpg')] bg-center bg-cover h-[350px] flex items-end relative rounded-xl grayscale hover:grayscale-0 transition-all group cursor-pointer"
                      style={{
                        backgroundImage: `url(../../public/img/${post.batchImage})`,
                      }}
                    >
                      <div>
                        <div className="blogTitle relative z-[1]">
                          <h4 className="bg-[#cccccc] group-hover:bg-primary group-hover:text-light p-2 px-10 w-[250px] rounded-tr-full rounded-br-full text-dark grayscale-0 transition-all">
                            {post.batchTitle}
                          </h4>
                        </div>
                        <div className="blogExcerpt p-10 relative z-[1]">
                          <p className="text-light font-bold text-lg">
                            {post.batchSchool}
                          </p>
                          <p className="text-light">{post.batchCourse}</p>
                        </div>
                      </div>
                      <div className="bottomGradient bg-gradient-to-t from-dark to-blue-500 h-[200px] w-full absolute bottom-0 block rounded-bl-xl rounded-br-xl"></div>
                    </div>
                  </a>
                </div>
              );
            })}
          </Slider>
        </div>
      </section>

      {modalBatch && (
        <ConStudBatchSliderPage
          setModalBatch={setModalBatch}
          itemEdit={itemEdit}
        />
      )}
    </>
  );
};

export default ConStudBatches;
