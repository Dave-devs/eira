"use client";

import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { LuSearch } from "react-icons/lu";
import { MdClear } from "react-icons/md";
import { usePathname } from 'next/navigation';

export default function SearchBar() {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const [visible, setVisible] = useState<boolean>(false);

  const pathname = usePathname();

  useEffect(() => {
    if(pathname.includes('collection')) {
      setVisible(true);
    }else {
        setVisible(false);
    }
  }, [pathname, showSearch])

  return showSearch && visible ? (
    <section className="border-t border-b bg-blue-400 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 mx-3 my-5 rounded-full w-3/4 sm:1/2">
        <input
          type="text"
          className="flex-1 outline-none bg-inherit text-sm"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <LuSearch size={16} />
      </div>
          <MdClear onClick={() => setShowSearch(false)} className="inline cursor-pointer" size={16} />
    </section>
  ) : null;
}
