import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarth } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/LeftMenuBar.module.css";
// import axios from "axios";
// import { useCookies } from "react-cookie";

import Trending from "../LeftMenuBar/ICO/trending.png";
import City from "./ICO/City.png";
import Gujarat from "./ICO/Gujarat.png";
import Original from "./ICO/Original.png";
import Astrology from "./ICO/Astrology.png";
import Cricket from "./ICO/Cricket.png";
import Entertaiment from "./ICO/Entertaiment.png";
import India from "./ICO/India.png";
import Book from "./ICO/Book.png";
import World from "./ICO/World.png";
import Utilities from "./ICO/Utilities.png";
import Sports from "./ICO/Sports.png";
import Business from "./ICO/Business.png";
import Magazine from "./ICO/Magazine.png";
import Image from 'next/image';
// import { Link } from "react-router-dom";

function LeftMenuBar() {
  const [resData, setResData] = useState([]);
  // const [cookies, setCookies] = useCookies("GujCategory");

  // let cookiesdata = cookies.GujCategory;
  // console.log(cookiesdata);

  // useEffect(() => {

  //   axios.get("http://localhost:5000/call/GetCategory").then((response) => {
  //     setResData(response.data);
  //     console.log(response.data);
  //     setCookies('GujCategory', JSON.stringify(response.data))
  //   });

  //   return () => {};
  // }, []);

  

  // useEffect(() => {
  //   if (!cookies.GujCategory) {
  //     axios
  //       .get(process.env.REACT_APP_API_BASE_URL + "/GetCategory")
  //       .then((response) => {
  //         setResData(response.data);
  //         console.log(response.data);
  //         setCookies("GujCategory", JSON.stringify(response.data));
  //       });
  //   }
  // }, []);

  console.log(resData);

  return (
    <div className={styles.categorysection}>

      {/* {(!cookies.GujCategory ? resData : cookiesdata).map((news, index) => {
        return ( */}
      <>
        <a
          style={{ textDecoration: "none", color: "#000" }}

          // href={`/category/${news.Category.EngCategory}`}
          href={"/category/Top news"}
        >
          <div className={styles.category}>
            <div className={styles.DATA}>
              <Image className={styles.IOCINC} src={Trending}  width={20} height={100}alt="" />
              &nbsp;
              <p className={styles.ntres}>ટૉપ ન્યૂઝ</p>
            </div>
          </div>
        </a>
        <a style={{ textDecoration: "none", color: "#000" }} href={"/category/my city"}>
          <div className={styles.category}>
            <div className={styles.DATA}>
              <Image className={styles.IOCINC} src={City} alt="" />
              &nbsp;
              <p className={styles.ntres}>મારું શહેર</p>
            </div>
          </div>
        </a>
        <a style={{ textDecoration: "none", color: "#000" }} href="/category/My Gujarat">
          <div className={styles.category}>
            <div className={styles.DATA}>
              <Image className={styles.IOCINC} src={Gujarat} alt="" />
              &nbsp;
              <p className={styles.ntres}>મારું ગુજરાત</p>
            </div>
          </div>
        </a>
        <a style={{ textDecoration: "none", color: "#000" }} href="/category/Original">
          <div className={styles.category}>
            <div className={styles.DATA}>
              <Image className={styles.IOCINC} src={Original}   
              
              alt="" />
              &nbsp;
              <p className={styles.ntres}>ઓરિજિનલ</p>
            </div>
          </div>
        </a>
        {/* <a style={{ textDecoration: "none", color: "#000" }} href={"/category/Cricket"}>
          <div className="category">
            <div className="DATA">
              <Image className="IOCINC" src={Cricket} alt="" />
              &nbsp;
              <p className="ntres">ક્રિકેટ</p>
            </div>
          </div>
        </a> */}
        <a style={{ textDecoration: "none", color: "#000" }} href={"/category/Entertainment"}>
          <div className={styles.category}>
            <div className={styles.DATA}>
              <Image className={styles.IOCINC} src={Entertaiment} alt="" />
              &nbsp;
              <p className={styles.ntres}>એન્ટરટેઇનમેન્ટ</p>
            </div>
          </div>
        </a>
        <a style={{ textDecoration: "none", color: "#000" }} href={"/category/India"}>
          <div className={styles.category}>
            <div className={styles.DATA}>
              <Image className={styles.IOCINC} src={India} alt="" />
              &nbsp;
              <p className={styles.ntres}>ઈન્ડિયા</p>
            </div>
          </div>
        </a>
        {/* <a style={{ textDecoration: "none", color: "#000" }} href="category/">

          <div className="category">
            <div className="DATA">
              <Image className="IOCINC" src={Entertaiment} alt="" />
              &nbsp;
              <p className="ntres">એન્ટરટેઇનમેન્ટ</p>
            </div>
          </div>
        </a> */}
        <a style={{ textDecoration: "none", color: "#000" }} href={"/category/Dharma-Darshan"}>

          <div className={styles.category}>
            <div className={styles.DATA}>
              <Image className={styles.IOCINC} src={Book} alt="" />
              &nbsp;
              <p className={styles.ntres}>ધર્મ-રાશિ</p>
            </div>
          </div>
        </a>
        <a style={{ textDecoration: "none", color: "#000" }} href="/category/World">
          <div className={styles.category}>
            <div className={styles.DATA}>
              <Image className={styles.IOCINC} src={World} alt="" />
              &nbsp;
              <p className={styles.ntres}>વર્લ્ડ</p>
            </div>
          </div>
        </a>
        {/* <a style={{ textDecoration: "none", color: "#000" }} href={"/category/utility"}>
          <div className="category">
            <div className="DATA">
              <Image className="IOCINC" src={Utilities} alt="" />
              &nbsp;
              <p className="ntres">યુટિલિટી</p>
            </div>
          </div>
        </a> */}
        <a style={{ textDecoration: "none", color: "#000" }} href={"/category/Sports"}>
          <div className={styles.category}>
            <div className={styles.DATA}>
              <Image className={styles.IOCINC} src={Sports} alt="" />
              &nbsp;
              <p className={styles.ntres}>સ્પોર્ટ્સ</p>
            </div>
          </div>
        </a>
        <a style={{ textDecoration: "none", color: "#000" }} href={"/category/Business"}>
          <div className={styles.category}>
            <div className={styles.DATA}>
              <Image className={styles.IOCINC} src={Business} alt="" />
              &nbsp;
              <p className={styles.ntres}>બિઝનેસ</p>
            </div>
          </div>
        </a>
        {/* <a style={{ textDecoration: "none", color: "#000" }} href={"/category/Horoscope"}>
          <div className="category">
            <div className="DATA">
              <Image className="IOCINC" src={Astrology} alt="" />
              &nbsp;
              <p className="ntres">રાશિફળ</p>
            </div>
          </div>
        </a> */}
        <a style={{ textDecoration: "none", color: "#000" }} href={"/category/magazine"}>
          <div className={styles.category}>
            <div className={styles.DATA}>
              <Image className={styles.IOCINC} src={Magazine} alt="" />
              &nbsp;
              <p className={styles.ntres}>મેગેઝિન</p>
            </div>
          </div>
        </a>
      </>
      {/* );
      })} */}

    </div>
  );
}

// export default LeftMenuBar;

export default React.memo(LeftMenuBar);
