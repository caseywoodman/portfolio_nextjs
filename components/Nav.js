import Link from "next/link";
import React from "react";

import { navigation } from "../database/data.json";

const Nav = () => {
  return (
    <nav className="flex flex-col w-full bg-primary pt-3">
      <div className="flex flex-col items-center m-auto w-8/12">
        <p className="text-5xl font-bold text-white text-center">Casey Woodman</p>
        <p className="text-lg font-semibold text-white">Full Stack Developer</p>
      </div>
      <div className="w-full bg-secondary mt-2">
        <div className="w-9/12 sm:w-3/12 justify-between flex m-auto font-semibold text-md text-white">
          {navigation.map((item) => (
            <Link key={item.name} href={item.url} className="hover:bg-white hover:text-primary px-5 h-full py-2">
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
