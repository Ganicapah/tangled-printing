"use client";

import React from "react";
import { LANYARD_PRICE_TIERS } from "../constants/priceTiers";

interface PriceTierTableProps {
  currentQuantity: number;
}

export default function PriceTierTable({
  currentQuantity,
}: PriceTierTableProps) {
  return (
    <div className="mt-8 border border-neutral-200 rounded-xl overflow-hidden">
      <div className="bg-neutral-50 px-4 py-3 border-b border-neutral-200">
        <h3 className="text-xs font-bold tracking-widest text-neutral-500 uppercase">
          Harga Grosir
        </h3>
      </div>
      <div className="divide-y divide-neutral-100">
        {LANYARD_PRICE_TIERS.map((tier, index) => {
          const isActive =
            currentQuantity >= tier.minQty && currentQuantity <= tier.maxQty;

          return (
            <div
              key={index}
              className={`flex justify-between px-4 py-2 text-sm transition-colors ${
                isActive ? "bg-blue-50/50" : "bg-white"
              }`}
            >
              <span
                className={`font-medium ${isActive ? "text-blue-700" : "text-neutral-600"}`}
              >
                {tier.maxQty === Infinity
                  ? `${tier.minQty}+ pcs`
                  : `${tier.minQty} - ${tier.maxQty} pcs`}
              </span>
              <div className="flex items-center gap-3">
                <span className="text-neutral-400 line-through text-xs">
                  Rp {tier.originalUnitPrice.toLocaleString("id-ID")}
                </span>
                <span
                  className={`font-bold ${isActive ? "text-blue-700" : "text-neutral-900"}`}
                >
                  Rp {tier.unitPrice.toLocaleString("id-ID")}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
