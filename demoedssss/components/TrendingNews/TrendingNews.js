import React, { useEffect, useState } from "react";
import styles from "../../styles/TrendingNews.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faLink } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
// import img from "../../Image/HomePageIMage/raspred1.png";
// import img from "../../public/Logo.png"

import axios from "axios";
import Image from 'next/image';
// import { useNavigate } from "react-router-dom";
// import {Helmet} from "react-helmet";

function TrendingNews() {
  const [resData, setResData] = useState("");
  // const navigate = useNavigate();


  // console.log("data",process.env.REACT_APP_API_BASE_URL);
  // const daterss = process.env.API_BASE_URL

  const handleClick = (e) => {
    navigate("/FullNews/" + `${e}`, { replace: true });
  };

  // const data = resData.length;
  // console.log("ntt",resData.NewsTittle);
  useEffect(() => {
    axios
      .post(process.env.NEXT_PUBLIC_API_BASE_URL + "/allNewsData", {
        data: "Top news",
      })
      .then(async (response) => {
        await setResData(await response.data.response.pop());
        console.log("ntt", response);
      });
  }, []);

  console.log("resData", resData.Path);


  return (
    <>


      <div
        className={styles.FullHead}

      >
        <div onClick={(e) => {
          handleClick(resData._id);
        }}>
          <h3 style={{ overflow: "hidden" }}>
            <span
              style={{ color: resData.Colored ? resData.Colored : "#000000" }}
            >
              {resData.NewsTittle}
            </span>{" "}
            <br />
            <span>{resData.NewsSubTittle}</span>
          </h3>

          {/* <img className="" src={img} alt="" /> */}
          {/* <img src={process.env.NEXT_PUBLIC_API_URL + `${resData.Path}`} alt="" /> */}
          {/* `${resData.Path}` */}
          <Image width={700} height={400} src={process.env.NEXT_PUBLIC_API_URL + `${resData.Path}`} alt="data" />
        </div>
        <div className={styles.NewFooter}>
          <div className={styles.catted}>{resData.GujCategory}</div>

          <div className={styles.SocialIcon}>
            <FontAwesomeIcon
              className={styles.SocialIconed}
              href="#"
              icon={faLink}
              onClick={() => {
                navigator.clipboard.writeText(process.env.NEXT_PUBLIC_FRONT_FILES + "fullnews/" + resData._id);
              }}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              className={styles.SocialIconed}
              href="#"
              icon={faFacebook}

            ></FontAwesomeIcon>
            <FontAwesomeIcon
              className={styles.SocialIconed}
              href="#"
              icon={faTwitter}
            ></FontAwesomeIcon>
          </div>
        </div>
      </div>
    </>
  );
}

export default TrendingNews;
