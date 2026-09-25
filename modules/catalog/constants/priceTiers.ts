import { PriceTier } from "../types/pricing";

// Matriks harga dikunci untuk mencegah mutasi state
export const LANYARD_PRICE_TIERS: readonly PriceTier[] = Object.freeze([
  { minQty: 1, maxQty: 1, unitPrice: 28000, originalUnitPrice: 30000 },
  { minQty: 2, maxQty: 3, unitPrice: 26000, originalUnitPrice: 28000 },
  { minQty: 4, maxQty: 7, unitPrice: 23000, originalUnitPrice: 27000 },
  { minQty: 8, maxQty: 11, unitPrice: 18000, originalUnitPrice: 24000 },
  { minQty: 12, maxQty: 19, unitPrice: 16000, originalUnitPrice: 20000 },
  { minQty: 20, maxQty: 49, unitPrice: 15000, originalUnitPrice: 18000 },
  { minQty: 50, maxQty: Infinity, unitPrice: 14000, originalUnitPrice: 16000 },
]);
