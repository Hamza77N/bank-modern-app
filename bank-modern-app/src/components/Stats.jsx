import React from "react";
import styles from "../style";
import { stats } from "../constants";

const Stats = () => (
  <section
    className={`${styles.flexCenter} flex-row flex-wrap  sm:mb-mb-20 mb:6`}
  >
    {stats.map((state) => (
      <div
        key={state.id}
        className={`flex-1 flex justify-start items-center flex-row m-3 `}
      >
        <h3 className=" font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading[53px] leading-[43px] text-white ">
          {state.value}
        </h3>
        <p className=" font-poppins font-normal xs:text-[20px] text-[15px] xs:leading[26px] leading-[21px] text-gradient uppercase ml-3 ">
          {state.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
