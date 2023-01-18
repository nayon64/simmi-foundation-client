import React, { useEffect, useState } from "react";
import Curosel from "./Curosel";

const Banner = () => {
	const [bannerDatas, setBannerDatas] = useState([]);
	const [bannerIndex, setBannerIndex]=useState(0)

  useEffect(() => {
    fetch("banner.json")
      .then((res) => res.json())
      .then((data) => {
        setBannerDatas(data);
      });
  }, []);

  console.log(bannerIndex)

  const data = bannerDatas[bannerIndex];

  return (
    <section>
      <Curosel setBannerIndex={setBannerIndex} bannerData={data} />
    </section>
  );
};

export default Banner;
