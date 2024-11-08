import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark">
      <Layout className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All rights reserved</span>
        <div className="flex items-center ">
          Build With <span className="text-primary text-2xl px-1">&#9825;</span>
          by&nbsp;
          <Link
            href="https://www.linkedin.com/in/emanuela-markovic-5518bb2b7/"
            className="underline underline-offset-2"
            target="_blank"
          >
            emanuelamarkovic
          </Link>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
