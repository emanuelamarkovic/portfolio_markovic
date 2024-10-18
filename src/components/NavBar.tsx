"use client";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { useRouter } from "next/navigation";

const CostumLink = ({
  href,
  title,
  className = "",
}: {
  href: string;
  title: string;
  className?: string;
}) => {
  return (
    <Link href={href} className={`${className} relative`}>
      {title}
      <span className="h-1 inline-block w-full bg-dark absolute left-0 -bottom-0.5">
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar: React.FC = () => {
  const router = useRouter();
  console.log(router);
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between ">
      <nav>
        <CostumLink href="/" title="Home" className="mr-4" />
        <CostumLink href="/about" title="About" className="mx-4" />
        <CostumLink href="/projects" title="Projects" className="mx-4" />
        <CostumLink href="/articles" title="Articles" className="ml-4" />
      </nav>
      <nav>
        <Link href="/" target={"_blank"}>
          Linkedin
        </Link>
        <Link href="/" target={"_blank"}>
          Github
        </Link>
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
