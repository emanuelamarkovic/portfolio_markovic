import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import profile from "../../public/Images/profile.jpg";
import { MotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";

const about = () => {
  return (
    <>
      <Head>
        <title>emanuelamarkovic | About Page</title>
        <meta name="description" content="About Page" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="mb-16"
          ></AnimatedText>
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                Biography
              </h2>
              <p className="font-medium">
                Hi, I'm Emanuela. A year and a half ago I specialized in
                fullstack web development and gained profound knowledge in
                technologies such as HTML, CSS, JavaScript, Sass, Babel,
                Tailwind, React, React Native, Express, and MongoDB. In my first
                projects, I was able to deepen my skills in the development of
                modern web applications and gain practical experience.
              </p>

              <p className="my-4 font-medium">
                My passion lies in designing user-friendly and appealing user
                interfaces, placing great emphasis on high-quality code. I am
                convinced that a well-designed website or application is crucial
                for the success of services or products.
              </p>

              <p className="font-medium">
                For me, design is more than just beautiful interfaces - it's the
                key to solving problems and creating intuitive, enjoyable user
                experiences. Whether it's a website, mobile app, or other
                digital product, I bring my commitment to design excellence and
                user-centered thinking to every project.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
              <Image
                src={profile}
                alt="emanuelamarkovic"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
          <Skills />
          <Experience />
        </Layout>
      </main>
    </>
  );
};

export default about;
