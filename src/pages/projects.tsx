import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import codeknacker from "../../public/Images/codeknacker.png";

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
    <article>
      <Link href={link} target="_blank">
        <Image
          src={img}
          alt={title}
          //   className="w-full h-auto"
          width="200"
          height="100"
        />
      </Link>

      <div>
        <span>{type}</span>
        <Link href={link} target="_blank">
          <h2>{title}</h2>
        </Link>
        <p>{summary}</p>
        <div>
          <Link href={github} target="_blank">
            <GithubIcon />
          </Link>
          <Link href={link} target="_blank">
            Visit Project
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
          <AnimatedText text="Imagination Trumps" className="mb-16" />{" "}
          <AnimatedText text="Knowledge!" className="mb-16" />
          <FeaturedProjects
            title="Code knacker"
            type="React"
            summary="A simple game to guess the secret code"
            img={codeknacker.src}
            link="https://emanuelamarkovic.github.io/codeknacker/"
            github="https://github.com/emanuelamarkovic/codeknacker"
          />
        </Layout>
      </main>
    </>
  );
};

export default projects;
