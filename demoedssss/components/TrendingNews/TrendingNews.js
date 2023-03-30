import React, { useEffect, useState } from "react";
import styles from "../../styles/TrendingNews.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faLink } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
// import img from "../../Image/HomePageIMage/raspred1.png";
import img from "../../public/Logo.png"

import axios from "axios";
import Image from 'next/image';
// import { useNavigate } from "react-router-dom";
// import {Helmet} from "react-helmet";

function TrendingNews() {
  const [resData, setResData] = useState("");
  // const navigate = useNavigate();
  console.log("resData", resData);

  console.log("data",process.env.REACT_APP_API_BASE_URL);

  const handleClick = (e) => {
    navigate("/FullNews/" + `${e}`, { replace: true });
  };

  // const data = resData.length;
  // console.log("ntt",resData.NewsTittle);
  useEffect(() => {
    axios
      .post("http://localhost:5000/call"+ "/allNewsData", {
        data: "Top news",
      })
      .then(async (response) => {
        await setResData(await response.data.response.pop());
        // console.log("ntt",response);
      });
  }, []);

  return (
    <>


    <div
      className={styles.FullHead}
   
    >
      <div    onClick={(e) => {
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
        {/* <Image src={process.env.REACT_APP_API_URL + resData.Path} alt="" /> */}
        <Image src={img} alt="" />
      </div>
      <div className={styles.NewFooter}>
        <div className={styles.catted}>{resData.GujCategory}</div>

        <div className={styles.SocialIcon}>
          <FontAwesomeIcon
            className={styles.SocialIconed}
            href="#"
            icon={faLink}
            onClick={() => {
              navigator.clipboard.writeText(process.env.REACT_APP_FRONT_FILES + "fullnews/"+resData._id);
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
