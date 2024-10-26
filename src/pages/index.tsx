import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePicture from "../../public/Images/profilePicture.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <Image
                src={profilePicture}
                alt="emanuelamarkovic"
                className="w-full h-auto"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-5xl"
              />
              <p className="my-4 text-base font-medium">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
              <div className="flex items-center self-start mt-2">
                <Link
                  href="/Resume_E_M.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light mr-6 p-2.5 px-6
                rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
                  download={true}
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href="mailto: emanuela.markovic@hotmail.com"
                  target={"_blank"}
                  className="underline underline-offset-2"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />
      </main>
    </>
  );
}
