import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import codeKnacker from "../../public/Images/codeKnacker.png";
import simpleQuiz from "../../public/Images/simpleQuiz.png";

const FeaturedProjects = ({
  type,
  title,
  summary,
  img,
  link,
  github,
}: {
  type: string;
  title: string;
  summary: string;
  img: string;
  link: string;
  github: string;
}) => {
  return (
    <article
      className="w-full flex items-center justify-between rounded-3xl border 
    border-solid border-dark bg-light shadow-2xl p-12"
    >
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image
          src={img}
          alt={title}
          width={500}
          height={1000}
          className="w-full h-auto"
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl p-6">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 font-semibold "
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({
  title,
  type,
  img,
  link,
  github,
}: {
  type: string;
  title: string;
  img: string;
  link: string;
  github: string;
}) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid
     border-dark bg-light p-6 relative"
    >
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image
          src={img}
          alt={title}
          width={900}
          height={800}
          layout="responsive"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl p-6">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 font-semibold "
          >
            Visit
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>emanuelamarkovic | Projects Page</title>
        <meta name="description" content="About Page" />
      </Head>
      <main className="w-full mb-16 flex flex-col text-4xl items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Imagination Trumps" className="mb-16" />
          <AnimatedText text="Knowledge!" className="mb-16" />
          <div className="grid grid-cols-12 gap-24">
            <div className="col-span-12">
              <FeaturedProjects
                title="Code knacker"
                type="React"
                summary="A simple game to guess the secret code"
                img={codeKnacker.src}
                link="https://emanuelamarkovic.github.io/codeknacker/"
                github="https://github.com/emanuelamarkovic/codeknacker"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Simple Quiz Game"
                type="Java Script"
                img={simpleQuiz.src}
                link="https://emanuelamarkovic.github.io/codeknacker/"
                github="https://github.com/emanuelamarkovic/codeknacker"
              />
            </div>
            <div className="col-span-6">Project 2</div>
            <div className="col-span-12">Featured Project</div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
