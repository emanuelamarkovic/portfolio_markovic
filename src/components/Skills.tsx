import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }: { name: string; x: string; y: string }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light
                        py-3 px-6 shadow-dark cursor-pointer"
      whileHover={{ scale: 1.05 }}
      style={{ position: "absolute", left: x, top: y }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
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
        <Skill name="HTML" x="-10vw" y="0vw" />
        <Skill name="CSS" x="-10vw" y="-9vw" />
        <Skill name="JavaScript" x="0vw" y="-10vw" />
        <Skill name="React" x="30vw" y="4vw" />
        <Skill name="Next.js" x="15vw" y="5vw" />
        <Skill name="Tailwind CSS" x="25vw" y="10vw" />
        <Skill name="Sass" x="3vw" y="10vw" />
        <Skill name="Babel" x="25vw" y="20vw" />
        <Skill name="Express" x="10vw" y="2vw" />
        <Skill name="MongoDB" x="12vw" y="15vw" />
        <Skill name="Node.js" x="30vw" y="15vw" />
        <Skill name="Figma" x="34vw" y="10vw" />
        <Skill name="PostgreSQL" x="5vw" y="18vw" />
        <Skill name="TypeScript" x="20vw" y="18vw" />
      </div>
    </>
  );
};

export default Skills;
