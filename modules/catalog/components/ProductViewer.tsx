"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  specs: {
    length: string;
    width: string;
    material: string;
  };
}

const lanyardProducts: Product[] = [
  {
    id: "1",
    name: "LANYARD",
    price: 25000,
    image: "/lanyard-tangled.webp",
    specs: {
      length: "90 CM",
      width: "2 CM",
      material: "Premium Tissue",
    },
  },
];

export default function ProductViewer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProduct = lanyardProducts[activeIndex];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-black text-neutral-900 mb-2">
            {activeProduct.name}
          </h1>
          <p className="text-2xl text-neutral-600 mb-8">
            Rp {activeProduct.price.toLocaleString("id-ID")}
          </p>

          <div className="grid grid-cols-3 gap-6 border-t border-neutral-200 pt-8 mb-10">
            <div className="flex flex-col">
              <span className="text-2xl font-black text-neutral-900">
                {activeProduct.specs.length}
              </span>
              <span className="text-[9px] font-bold uppercase tracking-widest text-neutral-400 mt-1">
                Panjang
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-neutral-900">
                {activeProduct.specs.width}
              </span>
              <span className="text-[9px] font-bold uppercase tracking-widest text-neutral-400 mt-1">
                Lebar
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-neutral-900">
                {activeProduct.specs.material.split(" ")[0]}{" "}
              </span>
              <span className="text-[9px] font-bold uppercase tracking-widest text-neutral-400 mt-1">
                Bahan
              </span>
            </div>
          </div>
        </div>

        <div className="relative w-full aspect-square flex items-center justify-center bg-neutral-50 rounded-3xl overflow-hidden">
          <div className="relative w-3/4 h-3/4 transition-transform duration-700 ease-in-out transform scale-100 hover:scale-95">
            <Image
              src={activeProduct.image}
              alt={activeProduct.name}
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
