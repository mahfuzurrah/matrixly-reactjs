"use client";
import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  item,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-white hover:opacity-[0.9] dark:text-white"
      >
        {item}
      </motion.p>
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <>
      <nav
        onMouseLeave={() => setActive(null)} // resets the state
        className="relative w-[100%] dark:bg-[#1d1c20] bg-[#1d1c20] shadow-input flex
    justify-between space-x-4 px-4 pl-5 py-4"
      >
        <Link to="/">
          <img src="/svg/logo.svg" width={130} height={50} alt="" />
        </Link>
        <div className="flex items-center gap-8">{children}</div>
      </nav>
    </>
  );
};

export const ProductItem = ({
  title,
  description,
  to,
  src,
}: {
  title: string;
  description: string;
  to: string;
  src: string;
}) => {
  return (
    <Link to={to} className="flex space-x-2">
      <img
        src={src}
        width={130}
        height={50}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black "
    >
      {children}
    </Link>
  );
};
