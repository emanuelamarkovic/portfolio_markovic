"use client";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { LinkedinIcon, GithubIcon } from "./Icons";
import { motion } from "framer-motion";

const CostumLink = ({
  href,
  title,
  className = "",
}: {
  href: string;
  title: string;
  className?: string;
}) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block absolute left-0 -bottom-0.5 bg-dark
          transition-[width] ease duration-300
          ${router.asPath === href ? "w-full" : "w-0"}
        `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar: React.FC = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between ">
      <nav>
        <CostumLink href="/" title="Home" className="mr-4" />
        <CostumLink href="/about" title="About" className="mx-4" />
        <CostumLink href="/projects" title="Projects" className="mx-4" />
        <CostumLink href="/articles" title="Articles" className="ml-4" />
      </nav>
      <nav className="flex items-center justify-center flex-wrap">
        <motion.a
          href="https://www.linkedin.com/in/emanuela-markovic-5518bb2b7/"
          target={"_blank"}
          whileHover={{ y: -2 }}
        >
          <LinkedinIcon />
        </motion.a>
        <motion.a
          href="https://github.com/emanuelamarkovic"
          target={"_blank"}
          whileHover={{ y: -2 }}
        >
          <GithubIcon />
        </motion.a>
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
