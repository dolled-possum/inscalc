/**
 * Created by johnathanreale on 10/7/17.
 */
import React from 'react';

class Calculation {

   copayDed = false;
   copayOOP = false;
   coinsDed = false;
   coinsOOP = false;

   memberCopay = 0;
   memberDeductible = 0;
   memberCoinsurance = 0;
   copayContributionDed = 0;
   copayContributionOOPX = 0;
   coinsContributionDed = 0;
   coinsContributionOOPX = 0;

   currentBalance = 0;
   workingDedHeadroom = 0;
   workingOOPXHeadroom = 0;

   copayAmount = "";
   coinsPercent = "";
   applyDeductible = false;

   entries = [];

   constructor(currentBalance, workingDedHeadroom, workingOOPXHeadroom,
               copayAmount, coinsPercent, applyDeductible, copayDed, copayOOP,
               coinsDed, coinsOOP) {
      this.currentBalance = currentBalance;
      this.workingDedHeadroom = workingDedHeadroom;
      this.workingOOPXHeadroom = workingOOPXHeadroom;
      this.copayAmount = copayAmount;
      this.coinsPercent = coinsPercent;
      this.applyDeductible = applyDeductible;
      this.copayDed = copayDed;
      this.copayOOP = copayOOP;
      this.coinsDed = coinsDed;
      this.coinsOOP = coinsOOP;

   }

   calculate() {

   if(this.copayAmount !== ""){
      this.entries.push(<span>A copay amount of ${parseFloat(this.copayAmount).toFixed(2)} is specified.<br /></span>);
   if(this.applyDeductible && this.coinsPercent === "") {
      this.entries.push(<span>Because "Apply Deductible?" is checked but a coinsurance
percentage is not specified, the deductible is considered first.<br /></span>);
   if (this.workingDedHeadroom <= this.currentBalance) {
      this.entries.push(<span>As the charge of ${parseFloat(this.currentBalance).toFixed(2)} is larger than your remaining deductible
of ${parseFloat(this.workingDedHeadroom).toFixed(2)}, your entire deductible will be consumed.<br /></span>);
      this.memberDeductible = this.workingDedHeadroom;
} else {
      this.entries.push(<span>As your remaining deductible of ${parseFloat(this.workingDedHeadroom).toFixed(2)} is larger than
                     the charge of ${parseFloat(this.currentBalance).toFixed(2)}, the total charge will go to your deductible.<br /></span>);
      this.memberDeductible = this.currentBalance;
}
      this.currentBalance = this.currentBalance - this.memberDeductible;
      this.workingDedHeadroom = this.workingDedHeadroom - this.memberDeductible;
      this.entries.push(<span>After the deductible charge of ${parseFloat(this.memberDeductible).toFixed(2)}, there is now ${parseFloat(this.currentBalance).toFixed(2)} of
                 the bill to be accounted for and ${parseFloat(this.workingDedHeadroom).toFixed(2)} left of your deductible.<br /></span>);
}
if(this.copayAmount <= this.currentBalance) {
   this.memberCopay = this.copayAmount;
   this.entries.push(<span>As the amount yet to be paid of ${parseFloat(this.currentBalance).toFixed(2)} is larger than the copay amount
                of ${parseFloat(this.copayAmount).toFixed(2)}, the full copay of ${parseFloat(this.memberCopay).toFixed(2)} is in effect.<br /></span>);
} else {
   this.memberCopay = this.currentBalance;
   this.entries.push(<span>As the amount yet to be paid of ${parseFloat(this.currentBalance).toFixed(2)} is smaller than the copay amount
                of ${parseFloat(this.copayAmount).toFixed(2)}, the copay is reduced to ${parseFloat(this.currentBalance).toFixed(2)}.<br /></span>);
}
if((this.copayOOP && this.copayDed) && (this.workingDedHeadroom + this.workingOOPXHeadroom) < this.memberCopay){
   this.entries.push(<span>Both "Bound by OOP?" and "Deductible Relevant?" have been checked for the copay. </span>);
   this.entries.push(<span>As your combined remaining deductible and OOPX of ${(parseFloat(this.workingDedHeadroom) + parseFloat(this.workingOOPXHeadroom)).toFixed(2)} is
                 smaller than the copay amount of ${parseFloat(this.memberCopay).toFixed(2)}, the copay is reduced to ${(parseFloat(this.workingDedHeadroom) + parseFloat(this.workingOOPXHeadroom)).toFixed(2)}.<br /></span>);
   this.memberCopay = (this.workingDedHeadroom + this.workingOOPXHeadroom);
}
if((this.copayOOP && !this.copayDed) && this.workingOOPXHeadroom < this.memberCopay){
   this.entries.push(<span>"Bound by OOP?" alone has been checked for the copay. </span>);
   this.entries.push(<span>As your remaining OOPX of ${parseFloat(this.workingOOPXHeadroom).toFixed(2)} is smaller than the copay amount
                 of ${parseFloat(this.memberCopay).toFixed(2)}, the copay is reduced to ${parseFloat(this.workingOOPXHeadroom).toFixed(2)}.<br /></span>);
   this.memberCopay = this.workingOOPXHeadroom;
}
if(this.copayOOP && this.copayDed) {
   this.entries.push(<span>Because "Deductible Relevant?" has been checked for the copay </span>);
   if(this.memberCopay <= this.workingDedHeadroom) {
      this.copayContributionDed = this.memberCopay;
      this.entries.push(<span>and the copay of ${parseFloat(this.memberCopay).toFixed(2)} is smaller than or equal to the remaining deductible
                     of ${parseFloat(this.workingDedHeadroom).toFixed(2)}, the remaining deductible is reduced by ${parseFloat(this.memberCopay).toFixed(2)}. <br /></span>);
   } else {
      this.copayContributionDed = this.workingDedHeadroom;
      this.entries.push(<span>and the remaining deductible of ${parseFloat(this.workingDedHeadroom).toFixed(2)} is smaller than the
                      copay of ${parseFloat(this.memberCopay).toFixed(2)}, the remaining deductible is completely consumed. <br /></span>);
   }
   this.workingDedHeadroom = this.workingDedHeadroom - this.copayContributionDed;
}
if(this.copayOOP) {
   this.copayContributionOOPX = this.memberCopay - this.copayContributionDed;
   this.workingOOPXHeadroom = this.workingOOPXHeadroom - this.copayContributionOOPX;
   if(this.workingOOPXHeadroom > 0 && this.copayContributionOOPX > 0) this.entries.push(<span>With "Bound by OOP?" for the copay checked and ${parseFloat(this.copayContributionOOPX).toFixed(2)} to be applied to accumulators, the OOPX remaining is reduced to ${this.workingOOPXHeadroom.toFixed(2)}.<br /></span>);
   if(this.workingOOPXHeadroom <= 0 && this.copayContributionOOPX > 0) this.entries.push(<span>With "Bound by OOP?" for the copay checked and ${parseFloat(this.copayContributionOOPX).toFixed(2)} to be applied to accumulators, the OOPX remaining is completely consumed.<br /></span>);
}
      this.currentBalance = this.currentBalance - this.memberCopay;
      this.entries.push(<span>After the copay, the amount still to be accounted for is ${parseFloat(this.currentBalance).toFixed(2)}.<br /><br /></span>);
}

if(this.coinsPercent !== "")
{
   this.entries.push(<span>A coinsurance percent of {parseFloat(this.coinsPercent).toFixed(0)}% is specified.<br /></span>);
   if (this.applyDeductible)
   {
      this.entries.push(<span>Because "Apply Deductible?" is checked and a coinsurance
                 percentage is specified, the deductible is considered here.<br /></span>);
      if (this.workingDedHeadroom <= this.currentBalance)
      {
         this.entries.push(<span>As the charge of ${parseFloat(this.currentBalance).toFixed(2)} is larger than your remaining deductible
                     of ${parseFloat(this.workingDedHeadroom).toFixed(2)}, your entire deductible will be consumed.<br /></span>);
         this.memberDeductible = this.workingDedHeadroom;
      } else
      {
         this.entries.push(<span>As your remaining deductible of ${parseFloat(this.workingDedHeadroom).toFixed(2)} is larger than
                     the charge of ${parseFloat(this.currentBalance).toFixed(2)}, the total charge will go to your deductible.<br /></span>);
         this.memberDeductible = this.currentBalance;
      }
      this.currentBalance = this.currentBalance - this.memberDeductible;
      this.workingDedHeadroom = this.workingDedHeadroom - this.memberDeductible;
      this.entries.push(<span>After the deductible charge of ${parseFloat(this.memberDeductible).toFixed(2)}, there is now ${parseFloat(this.currentBalance).toFixed(2)} of
                 the bill to be accounted for and ${parseFloat(this.workingDedHeadroom).toFixed(2)} left of your deductible.<br /></span>);
   }
   this.memberCoinsurance = this.currentBalance * (this.coinsPercent / 100)
   this.entries.push(<span>A base coinsurance charge of ${parseFloat(this.memberCoinsurance).toFixed(2)} represents that ${parseFloat(this.currentBalance).toFixed(2)} multiplied
                by the {this.coinsPercent}% coinsurance rate.<br /></span>);
   if ((this.coinsOOP && this.coinsDed) && (this.workingDedHeadroom + this.workingOOPXHeadroom) < this.memberCoinsurance)
   {
      this.entries.push(
         <span>Both "Bound by OOP?" and "Deductible Relevant?" have been checked for the coinsurance. </span>);
      this.entries.push(<span>As your combined remaining deductible and OOPX of ${(parseFloat(this.workingDedHeadroom) + parseFloat(this.workingOOPXHeadroom)).toFixed(2)}
         is
                 smaller than the coinsurance amount of ${parseFloat(this.memberCoinsurance).toFixed(2)}, the coinsurance is reduced to ${(parseFloat(this.workingDedHeadroom) + parseFloat(this.workingOOPXHeadroom)).toFixed(2)}.<br /></span>);
      this.memberCoinsurance = (this.workingDedHeadroom + this.workingOOPXHeadroom);
   }
   if ((this.coinsOOP && !this.coinsDed) && this.workingOOPXHeadroom < this.memberCoinsurance)
   {
      this.entries.push(<span>"Bound by OOP?" alone has been checked for the coinsurance. </span>);
      this.entries.push(<span>As your remaining OOPX of ${parseFloat(this.workingOOPXHeadroom).toFixed(2)} is smaller than the coinsurance amount
                 of ${parseFloat(this.memberCoinsurance).toFixed(2)}, the coinsurance is reduced to ${parseFloat(this.workingOOPXHeadroom).toFixed(2)}.<br /></span>);
      this.memberCoinsurance = this.workingOOPXHeadroom;
   }
   if (this.coinsOOP && this.coinsDed)
   {
      this.entries.push(<span>Because "Deductible Relevant?" has been checked for the coinsurance </span>);
      if (this.memberCoinsurance <= this.workingDedHeadroom)
      {
         this.coinsContributionDed = this.memberCoinsurance;
         this.entries.push(<span>and the coinsurance of ${parseFloat(this.memberCoinsurance).toFixed(2)} is smaller than or equal to the remaining deductible
                     of ${parseFloat(this.workingDedHeadroom).toFixed(2)}, the remaining deductible is reduced by ${parseFloat(this.memberCoinsurance).toFixed(2)}. <br /></span>);
      } else
      {
         this.coinsContributionDed = this.workingDedHeadroom;
         this.entries.push(<span>and the remaining deductible of ${parseFloat(this.workingDedHeadroom).toFixed(2)} is smaller than the
                      coinsurance of ${parseFloat(this.memberCoinsurance).toFixed(2)}, the remaining deductible is completely consumed. <br /></span>);
      }
      this.workingDedHeadroom = this.workingDedHeadroom - this.coinsContributionDed;
   }
   if (this.coinsOOP)
   {
      this.coinsContributionOOPX = this.memberCoinsurance - this.coinsContributionDed;
      this.workingOOPXHeadroom = this.workingOOPXHeadroom - this.coinsContributionOOPX;
      if (this.workingOOPXHeadroom > 0 && this.coinsContributionOOPX > 0) this.entries.push(<span>With "Bound by OOP?" for the coinsurance checked
         and ${parseFloat(this.coinsContributionOOPX).toFixed(2)} to be applied to accumulators, the OOPX remaining is reduced to ${parseFloat(this.workingOOPXHeadroom).toFixed(2)}.<br /></span>);
      if (this.workingOOPXHeadroom <= 0 && this.coinsContributionOOPX > 0) this.entries.push(<span>With "Bound by OOP?" for the coinsurance checked
         and ${parseFloat(this.coinsContributionOOPX).toFixed(2)} to be applied to accumulators, the OOPX remaining is completely consumed.<br /></span>);
   }
   this.currentBalance = this.currentBalance - this.memberCoinsurance;
   this.entries.push(<span>After coinsurance, the amount still to be accounted for is ${parseFloat(this.currentBalance).toFixed(2)}.<br /><br /></span>);

}
      let theResults = [];
      theResults["memberCopay"] = this.memberCopay;
      theResults["memberDeductible"] = this.memberDeductible;
      theResults["memberCoinsurance"] = this.memberCoinsurance;
      theResults["currentBalance"] = this.currentBalance;
      theResults["workingDedHeadroom"] = this.workingDedHeadroom;
      theResults["workingOOPXHeadroom"] = this.workingOOPXHeadroom;
      theResults["interimValues"] = [];
      theResults["interimValues"]["entries"]=this.entries;
      theResults["interimValues"]["memberDeductible"]=this.memberDeductible;
      theResults["interimValues"]["copayContributionDed"]=this.copayContributionDed;
      theResults["interimValues"]["copayContributionOOPX"]=this.copayContributionOOPX;
      theResults["interimValues"]["coinsContributionDed"]=this.coinsContributionDed;
      theResults["interimValues"]["coinsContributionOOPX"]=this.coinsContributionOOPX;

   return(theResults);
}

}

export default Calculation;