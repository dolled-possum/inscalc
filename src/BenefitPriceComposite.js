/**
 * Created by johnathanreale on 10/7/17.
 */
class BenefitPriceComposite {

   procCost = 0;
   copayAmount = "";
   coinsPercent = "";
   applyDeductible = false;

   constructor(procCost, copayAmount, coinsPercent, applyDeductible, provTier)
   {
      this.procCost = procCost;
      this.copayAmount = copayAmount;
      this.coinsPercent = coinsPercent;
      this.applyDeductible = applyDeductible;
      this.provTier = provTier;
   }
}

export default BenefitPriceComposite;