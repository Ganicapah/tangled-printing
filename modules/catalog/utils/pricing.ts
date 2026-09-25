import { LANYARD_PRICE_TIERS } from "../constants/priceTiers";
import { PricingCalculationResult } from "../types/pricing";

export function calculateTieredPrice(
  inputQuantity: number,
): PricingCalculationResult {
  const quantity = Math.max(1, Math.floor(inputQuantity));

  const activeTier =
    LANYARD_PRICE_TIERS.find(
      (tier) => quantity >= tier.minQty && quantity <= tier.maxQty,
    ) || LANYARD_PRICE_TIERS[LANYARD_PRICE_TIERS.length - 1];

  const totalPrice = activeTier.unitPrice * quantity;
  const totalOriginalPrice = activeTier.originalUnitPrice * quantity;
  const totalSavings = totalOriginalPrice - totalPrice;
  const discountPercentage = Math.round(
    (totalSavings / totalOriginalPrice) * 100,
  );

  return {
    quantity,
    unitPrice: activeTier.unitPrice,
    originalUnitPrice: activeTier.originalUnitPrice,
    totalPrice,
    totalOriginalPrice,
    totalSavings,
    discountPercentage,
  };
}
