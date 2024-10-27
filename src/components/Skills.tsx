import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiSass,
  SiBabel,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiFigma,
} from "react-icons/si";

const Skill = ({ icon, x, y }: { icon: React.ReactNode; x: any; y: any }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light
                        py-3 px-6 shadow-dark cursor-pointer"
      whileHover={{ scale: 1.05 }}
      style={{ position: "absolute", left: x, top: y }}
      initial={{ x: 0, y: 0 }}
      animate={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
    >
      {icon}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="text-6xl mt-64 w-full font-bold text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center rounded-full justify-center bg-gradientRadial overflow-hidden">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light
        p-8 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill icon={<FaHtml5 />} x="-10vw" y="0vw" />
        <Skill icon={<FaCss3Alt />} x="-10vw" y="-9vw" />
        <Skill icon={<FaJs />} x="0vw" y="-10vw" />
        <Skill icon={<FaReact />} x="10vw" y="0vw" />
        <Skill icon={<SiNextdotjs />} x="0vw" y="10vw" />
        <Skill icon={<SiTailwindcss />} x="-10vw" y="10vw" />
        <Skill icon={<SiSass />} x="-15vw" y="10vw" />
        <Skill icon={<SiBabel />} x="15vw" y="-10vw" />
        <Skill icon={<SiExpress />} x="15vw" y="0vw" />
        <Skill icon={<SiMongodb />} x="0vw" y="15vw" />
        <Skill icon={<FaNodeJs />} x="-15vw" y="15vw" />
        <Skill icon={<SiFigma />} x="15vw" y="-15vw" />
        <Skill icon={<SiPostgresql />} x="-10vw" y="15vw" />
      </div>
    </>
  );
};

export default Skills;
