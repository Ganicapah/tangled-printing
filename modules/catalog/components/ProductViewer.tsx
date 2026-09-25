"use client";

import React, { useState } from "react";
import Image from "next/image";
import { calculateTieredPrice } from "../utils/pricing";
import PriceTierTable from "./PriceTierTable";

interface Product {
  id: string;
  name: string;
  image: string;
  specs: { length: string; width: string; material: string };
  bundle: string;
  description: string;
}

const lanyardProducts: Product[] = [
  {
    id: "1",
    name: "LANYARD FULL SET",
    image: "/lanyard-tangled.webp",
    specs: { length: "90 CM", width: "2 CM", material: "Premium Tissue" },
    bundle: "Lanyard + ID Card + Casing Plastic",
    description:
      "ID CARD cetak 2 SISI. Bahan ID CARD PVC (Polyvinyl Chloride) dengan tekstur kuat, kaku, serta tahan terhadap air. Ukuran kartu 5.6 x 8.8 cm, ketebalan 0.76 mm.",
  },
];

export default function ProductViewer() {
  const [activeIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const activeProduct = lanyardProducts[activeIndex];

  const pricing = calculateTieredPrice(quantity);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value);
    setQuantity(isNaN(val) ? 1 : val);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start md:items-center">
        <div className="flex flex-col justify-center order-2 md:order-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900 mb-3">
            {activeProduct.name}
          </h1>

          <div className="mb-6 p-4 bg-neutral-50 rounded-xl border border-neutral-100">
            <h3 className="text-sm font-bold text-neutral-900 mb-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              Paket Termasuk:{" "}
              <span className="text-blue-700">{activeProduct.bundle}</span>
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed ml-4">
              {activeProduct.description}
            </p>
          </div>

          <div className="flex flex-wrap items-baseline gap-2 sm:gap-4 mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
              Rp {pricing.unitPrice.toLocaleString("id-ID")}
              <span className="text-xs sm:text-sm font-medium text-neutral-500">
                {" "}
                /pcs
              </span>
            </h2>
            <span className="text-base sm:text-lg text-neutral-400 line-through">
              Rp {pricing.originalUnitPrice.toLocaleString("id-ID")}
            </span>
            {pricing.totalSavings > 0 && (
              <span className="px-2 py-1 text-[10px] font-bold text-green-700 bg-green-100 rounded-full uppercase tracking-wider">
                Hemat Rp {pricing.totalSavings.toLocaleString("id-ID")}
              </span>
            )}
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold text-neutral-500 uppercase tracking-widest">
                Jumlah
              </span>
              <div className="flex items-center border border-neutral-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-4 py-2 bg-neutral-50 hover:bg-neutral-100 text-neutral-600 font-bold transition-colors"
                >
                  -
                </button>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="w-16 text-center py-2 text-neutral-900 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                />
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-4 py-2 bg-neutral-50 hover:bg-neutral-100 text-neutral-600 font-bold transition-colors"
                >
                  +
                </button>
              </div>
            </div>
            <span className="text-sm font-medium text-neutral-700 sm:ml-2">
              Total:{" "}
              <strong className="text-lg text-neutral-900">
                Rp {pricing.totalPrice.toLocaleString("id-ID")}
              </strong>
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-6 border-t border-neutral-200 pt-8">
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black text-neutral-900">
                {activeProduct.specs.length}
              </span>
              <span className="text-[9px] font-bold uppercase tracking-widest text-neutral-400 mt-1">
                Panjang Lanyard
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black text-neutral-900">
                {activeProduct.specs.width}
              </span>
              <span className="text-[9px] font-bold uppercase tracking-widest text-neutral-400 mt-1">
                Lebar Lanyard
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black text-neutral-900">
                {activeProduct.specs.material.split(" ")[0]}
              </span>
              <span className="text-[9px] font-bold uppercase tracking-widest text-neutral-400 mt-1">
                Bahan Lanyard
              </span>
            </div>
          </div>

          <PriceTierTable currentQuantity={quantity} />
        </div>

        <div className="relative w-full aspect-square flex items-center justify-center bg-neutral-50 rounded-3xl overflow-hidden order-1 md:order-2 mb-4 md:mb-0">
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
