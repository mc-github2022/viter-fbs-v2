import React from "react";

const WhyUsTheTeam = () => {
  return (
    <>
      <section className="whyUsTheTeam py-20 bg-[#000]">
        <div className="customContainer">
          <div className="wrapper grid grid-cols-1 xl:grid-cols-[_270px_2fr] gap-16">
            <div className="flex items-center">
              <div>
                <p className="text-light">We work with a</p>
                <h2 className="text-[clamp(20px,7vw,35px)] font-semibold text-primary leading-[1.1] mb-8">
                  great team for extraordinary result.
                </h2>
              </div>
            </div>
            <div className="flex flex-wrap gap-y-10 gap-20 place-content-center xl:grid xl:grid-cols-4 xl:gap-20">
              <div className="theTeamItem relative">
                <div className="thePill h-[230px] lg:h-[300px] w-[130px] rounded-full bg-gradient-to-b from-[#bd0565] to-blue-[transparent] rotate-[50deg] overflow-hidden relative">
                  <div className="absolute top-2 rotate-[-50deg] w-[220px] ml-2">
                    <img
                      className="grayscale"
                      // src={`${devBaseImgUrl}/team-jeff.png`}
                      src={`../../public/img/team-jeff.png`}
                      alt=""
                    />
                  </div>
                  <div className="nameAndPos text-light text-center rotate-[-50deg] text-xs ml-3 absolute bottom-[50px] left-3">
                    <p className="">Jeffrey Pessina</p>
                    <p>CEO</p>
                  </div>
                </div>
              </div>
              <div className="theTeamItem relative">
                <div className="thePill h-[230px] lg:h-[300px] w-[130px] rounded-full bg-gradient-to-b from-[#bd0565] to-blue-[transparent] rotate-[50deg] overflow-hidden relative">
                  <div className="absolute top-[-10px] rotate-[-50deg] w-[230px] ml-4">
                    <img
                      className="grayscale"
                      // src={`${devBaseImgUrl}/teamRalph.png`}
                      src={`../../public/img/teamRalph.png`}
                      alt=""
                    />
                  </div>
                  <div className="nameAndPos text-light text-center rotate-[-50deg] text-xs ml-3 absolute bottom-[50px] left-3">
                    <p className="">Ralph Acoba</p>
                    <p>Operations Manager</p>
                  </div>
                </div>
              </div>
              <div className="theTeamItem relative">
                <div className="thePill h-[230px] lg:h-[300px] w-[130px] rounded-full bg-gradient-to-b from-[#bd0565] to-blue-[transparent] rotate-[50deg] overflow-hidden relative">
                  <div className="absolute top-[-30px] left-[45px] rotate-[-50deg] w-[180px] ml-2">
                    <img
                      className="grayscale"
                      // src={`${devBaseImgUrl}/team-bea.png`}
                      src={`../../public/img/team-ada.png`}
                      alt=""
                    />
                  </div>
                  <div className="nameAndPos text-light text-center rotate-[-50deg] text-xs ml-3 absolute bottom-[50px] left-3">
                    <p className="">Rhoda Beloso</p>
                    <p>HR Manager</p>
                  </div>
                </div>
              </div>
              <div className="theTeamItem relative">
                <div className="thePill h-[230px] lg:h-[300px] w-[130px] rounded-full bg-gradient-to-b from-[#bd0565] to-blue-[transparent] rotate-[50deg] overflow-hidden relative">
                  <div className="absolute top-2 left-[10px] rotate-[-50deg] w-[180px] ml-2">
                    <img
                      className="grayscale"
                      // src={`${devBaseImgUrl}/team-bea.png`}
                      src={`../../public/img/team-bea.png`}
                      alt=""
                    />
                  </div>
                  <div className="nameAndPos text-light text-center rotate-[-50deg] text-xs ml-3 absolute bottom-[50px] left-3">
                    <p className="">Bhea Del Monte</p>
                    <p>Finance Head</p>
                  </div>
                </div>
              </div>
              <div className="theTeamItem relative">
                <div className="thePill h-[230px] lg:h-[300px] w-[130px] rounded-full bg-gradient-to-b from-[#bd0565] to-blue-[transparent] rotate-[50deg] overflow-hidden relative">
                  <div className="absolute top-[-30px] rotate-[-50deg] w-[220px] ml-[50px]">
                    <img
                      className="grayscale"
                      // src={`${devBaseImgUrl}/teamJhonny.webp`}
                      src={`../../public/img/teamJhonny.webp`}
                      alt=""
                    />
                  </div>
                  <div className="nameAndPos text-light text-center rotate-[-50deg] text-xs ml-3 absolute bottom-[50px] left-3">
                    <p className="">Jhonny Dichoso</p>
                    <p>Web & LCS Supervisor</p>
                  </div>
                </div>
              </div>
              <div className="theTeamItem relative">
                <div className="thePill h-[230px] lg:h-[300px] w-[130px] rounded-full bg-gradient-to-b from-[#bd0565] to-blue-[transparent] rotate-[50deg] overflow-hidden relative">
                  <div className="absolute top-[-20px] rotate-[-50deg] w-[200px] ml-[50px]">
                    <img
                      className="grayscale"
                      // src={`${devBaseImgUrl}/teamPat.webp`}
                      src={`../../public/img/teamPat.webp`}
                      alt=""
                    />
                  </div>
                  <div className="nameAndPos text-light text-center rotate-[-50deg] text-xs ml-3 absolute bottom-[50px] left-3">
                    <p className="">Patrick Reyes</p>
                    <p>Web Supervisor</p>
                  </div>
                </div>
              </div>
              <div className="theTeamItem relative">
                <div className="thePill h-[230px] lg:h-[300px] w-[130px] rounded-full bg-gradient-to-b from-[#bd0565] to-blue-[transparent] rotate-[50deg] overflow-hidden relative">
                  <div className="absolute top-[-20px] rotate-[-50deg] w-[200px] ml-2">
                    <img
                      className="grayscale"
                      // src={`${devBaseImgUrl}/sir-carlo.png`}
                      src={`../../public/img/sir-carlo.png`}
                      alt=""
                    />
                  </div>
                  <div className="nameAndPos text-light text-center rotate-[-50deg] text-xs ml-3 absolute bottom-[50px] left-3">
                    <p className="">Carlo Del Monte</p>
                    <p>Marketing Head</p>
                  </div>
                </div>
              </div>
              <div className="theTeamItem relative">
                <div className="thePill h-[230px] lg:h-[300px] w-[130px] rounded-full bg-gradient-to-b from-[#bd0565] to-blue-[transparent] rotate-[50deg] overflow-hidden relative">
                  <div className="absolute top-[-20px] rotate-[-50deg] w-[200px] ml-12">
                    <img
                      className="grayscale"
                      // src={`${devBaseImgUrl}/sirMyk.webp`}
                      src={`../../public/img/sirMyk.webp`}
                      alt=""
                    />
                  </div>
                  <div className="nameAndPos text-light text-center rotate-[-50deg] text-xs ml-3 absolute bottom-[50px] left-3">
                    <p className="">Michael De Jesus</p>
                    <p>VA Supervisor</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyUsTheTeam;
