import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({
  position = "",
  company = "",
  time = "",
  address = "",
  work = "",
}) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3>
          {position} {company}&nbsp;
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="mt-20">
      <h2 className="text-6xl font-bold mb-32 w-full text-center">
        Professional Experience & Education
      </h2>
      <div ref={ref} className="w-[60%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
        />
        <ul>
          <Details
            position="Webdeveloper Full Stack"
            company="DCI Digital Career Institute GmbH"
            time="06/2023 - 08/2024"
            address="Remote Learning"
            work="1-year full-time further training (remote) in the MERN stack, incl. practical projects."
          />

          <Details
            position="Test centre for digital professions"
            company="DCI Digital Career Institute GmbH"
            time="03/2023 - 04/2023"
            address="Remote Learning"
            work=""
          />

          <Details
            position="Microsoft Office (Word, Excel, PowerPoint, Outlook)"
            company="DAA Balingen"
            time="10/2022 - 01/2023"
            address="Balingen"
            work="Basics and structure"
          />

          <Details
            position="Saleswoman"
            company="Aldi Süd"
            time="08/2018 - 09/2018"
            address="Mössingen"
            work=""
          />

          <Details
            position="IT-Operator"
            company="Dial4m Daycare GmbH&nbsp;, Profitline GmbH, Telemarketing GmbH"
            time="07/2012 - 06/2018"
            address="Donja Mahala (Bosnien)"
            work=""
          />

          <Details
            position="Businesswoman for office management"
            company="Montana Trade GmbH"
            time="09/2006 - 12/2007"
            address="Vinkovci (Kroatien)"
            work=""
          />

          <Details
            position="Businesswoman for office management"
            company="Wirtschaftsschule Brcko"
            time="09/2003 - 06/2004"
            address="Brcko (Bosnien)"
            work="Ausbildung"
          />

          <Details
            position="Saleswoman"
            company="Wirtschafts- und Handelsschule Ivan Domac"
            time="09/2000 - 06/2003"
            address="Vinkovci (Kroatien)"
            work="Ausbildung"
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
