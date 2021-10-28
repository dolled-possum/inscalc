/**
 * Created by johnathanreale on 10/13/17.
 */
class Accuumulation {

   deductibleRemaining = 800;
   oopxRemaining = 3000;
   deductibleLimit = 900;
   oopxLimit = 3000;
   famDeductibleRemaining = 805;
   famOopxRemaining = 3005;
   famDeductibleLimit = 905;
   famOopxLimit = 3005;

   constructor(deductibleRemaining, oopxRemaining, deductibleLimit, oopxLimit,
               famDeductibleRemaining, famOopxRemaining, famDeductibleLimit, famOopxLimit)
   {
      this.deductibleRemaining = deductibleRemaining;
      this.oopxRemaining = oopxRemaining;
      this.deductibleLimit = deductibleLimit;
      this.oopxLimit = oopxLimit;
      this.famDeductibleRemaining = famDeductibleRemaining;
      this.famOopxRemaining = famOopxRemaining;
      this.famDeductibleLimit = famDeductibleLimit;
      this.famOopxLimit = famOopxLimit;
   }
}

export default Accuumulation;