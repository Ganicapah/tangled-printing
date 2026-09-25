export interface PriceTier {
  minQty: number;
  maxQty: number;
  unitPrice: number;
  originalUnitPrice: number;
}

export interface PricingCalculationResult {
  quantity: number;
  unitPrice: number;
  originalUnitPrice: number;
  totalPrice: number;
  totalOriginalPrice: number;
  totalSavings: number;
  discountPercentage: number;
}
