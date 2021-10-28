import React, { Component } from 'react';
import './App.css';
import Calculator from './Calculator.js';
import Calculation from './Calculation.js';
import BenefitPriceComposite from './BenefitPriceComposite.js';
import Accumulation from './Accumulation.js';
import BPCRenderer from './BPCRenderer.js';
import AccumsRenderer from './AccumsRenderer.js';

class App extends Component {

    constructor(props)
    {
        super(props);
        let bpcs = [new BenefitPriceComposite(600,"",20,true,0),
           new BenefitPriceComposite(1300,"",10,true,0),
           new BenefitPriceComposite(95,25,"",false,0)];
        //let bpcs = [new BenefitPriceComposite(400,"50","",false)];
        //let accums = [new Accumulation(707,1507,717,1517,1707,2507,1717,2517)];
        let accums = [new Accumulation(707,1507,717,1517,1707,2507,1717,2517),
           new Accumulation(708,1508,718,1518,1708,2508,1718,2518)];
        this.state = {
            benefitPriceComposites: bpcs,
            accumulations: accums,
            copayOOP: false,
            copayDed: false,
            coinsOOP: true,
            coinsDed: false,
            familyPlan: false,
            selectedOption1: 'option11',
            selectedOption2: 'option12',
            advancedOptions: false,
        }
    }

    setCopayOOP(event) {
        this.setState({
            copayOOP: event.target.checked
        })
    }

    setCopayDed(event) {
        this.setState({
            copayDed: event.target.checked
        })
    }

    setCoinsOOP(event) {
        this.setState({
            coinsOOP: event.target.checked
        })
    }

    setCoinsDed(event) {
        this.setState({
            coinsDed: event.target.checked
        })
    }

   setDeductibleRemaining = (theindex) => (e) => {
      let accums = this.state.accumulations;
      accums[theindex].deductibleRemaining = parseFloat(e.target.value);
      this.setState({
         accumulations: accums
      })
   }

   setOopxRemaining = (theindex) => (e) => {
         let accums = this.state.accumulations;
         accums[theindex].oopxRemaining = parseFloat(e.target.value);
         this.setState({
            accumulations: accums
         })
   }

   setDeductibleLimit = (theindex) => (e) => {
      let accums = this.state.accumulations;
      accums[theindex].deductibleLimit = parseFloat(e.target.value);
      this.setState({
         accumulations: accums
      })
   }

   setOopxLimit = (theindex) => (e) => {
      let accums = this.state.accumulations;
      accums[theindex].oopxLimit = parseFloat(e.target.value);
      this.setState({
         accumulations: accums
      })
   }

   setFamDeductibleRemaining = (theindex) => (e) => {
      let accums = this.state.accumulations;
      accums[theindex].famDeductibleRemaining = parseFloat(e.target.value);
      this.setState({
         accumulations: accums
      })
   }

   setFamOopxRemaining = (theindex) => (e) => {
      let accums = this.state.accumulations;
      accums[theindex].famOopxRemaining = parseFloat(e.target.value);
      this.setState({
         accumulations: accums
      })
   }

   setFamDeductibleLimit = (theindex) => (e) => {
      let accums = this.state.accumulations;
      accums[theindex].famDeductibleLimit = parseFloat(e.target.value);
      this.setState({
         accumulations: accums
      })
   }

   setFamOopxLimit = (theindex) => (e) => {
      let accums = this.state.accumulations;
      accums[theindex].famOopxLimit = parseFloat(e.target.value);
      this.setState({
         accumulations: accums
      })
   }


   testEvent(event) {
       if (event.target.value === "copay-traditional") this.setupScenario([580, 50, false, false, "", true, false, false, 400, 2250, 1]);
       if (event.target.value === "copay-after-deductible") this.setupScenario([580, 50, false, false, "", true, false, true, 400, 2250, 1]);
       if (event.target.value === "copay-with-oop") this.setupScenario([580, 50, true, false, "", true, false, false, 400, 2250, 1]);
       if (event.target.value === "copay-aca") this.setupScenario([580, 50, true, true, "", true, false, false, 400, 2250, 1]);
       if (event.target.value === "coinsurance-traditional") this.setupScenario([6740, "", false, false, 20, true, false, true, 400, 2250, 1]);
       if (event.target.value === "coinsurance-no-deductible") this.setupScenario([6740, "", false, false, 20, true, false, false, 400, 2250, 1]);
       if (event.target.value === "coinsurance-with-copay") this.setupScenario([6740, 500, false, false, 20, true, false, true, 400, 2250, 1]);
    }

    setFamilyPlan(event) {
        this.setState({
            familyPlan: event.target.checked,
        })
    }

    radioChange1(event) {
        this.setState({
            selectedOption1: event.target.value,
        })
    }

    radioChange2(event) {
        this.setState({
            selectedOption2: event.target.value,
        })
    }

    toggleAdvancedOptions(event) {
        this.setState({
            advancedOptions: !this.state.advancedOptions
        })
    }

   setProcCost = (theindex) => (e) =>
   {
      let bpcs = this.state.benefitPriceComposites;
      bpcs[theindex].procCost = parseFloat(e.target.value);
      this.setState({
         benefitPriceComposites: bpcs,
      });
   }

   setCopayAmount = (theindex) => (e) =>
   {
      let bpcs = this.state.benefitPriceComposites;
      bpcs[theindex].copayAmount = parseFloat(e.target.value);
      this.setState({
         benefitPriceComposites: bpcs,
      });
   }

   setCoinsPercent = (theindex) => (e) =>
   {
      let bpcs = this.state.benefitPriceComposites;
      bpcs[theindex].coinsPercent = parseFloat(e.target.value);
      this.setState({
         benefitPriceComposites: bpcs,
      });
   }

   setApplyDeductible = (theindex) => (e) =>
   {
      let bpcs = this.state.benefitPriceComposites;
      bpcs[theindex].applyDeductible = e.target.checked;
      this.setState({
         benefitPriceComposites: bpcs,
      });
   }

    setProvTier = (theindex) => (e) =>
    {
        let bpcs = this.state.benefitPriceComposites;
        bpcs[theindex].provTier = parseFloat(e.target.value);
        this.setState({
            benefitPriceComposites: bpcs,
        });
    }

   removeIndexPosition = (theindex) => (e) => {
       let bpcs = this.state.benefitPriceComposites;
       bpcs.splice(parseFloat(theindex),1);
       this.setState({
          benefitPriceComposites: bpcs,
    });
}

   addIndexPosition = (theindex) => (e) => {
      let bpcs = this.state.benefitPriceComposites;
      let newbpc = new BenefitPriceComposite(0,"","",false,0);
      bpcs.splice(parseFloat(theindex) + 1,0,newbpc);
      this.setState({
         benefitPriceComposites: bpcs,
      });
   }

   removeAccIndexPosition = (theindex) => (e) => {
      let accums = this.state.accumulations;
      accums.splice(parseFloat(theindex),1);
      this.setState({
         accumulations: accums,
      });
   }

   addAccIndexPosition = (theindex) => (e) => {
      let accums = this.state.accumulations;
      let newaccum = new Accumulation(0,0,0,0,0,0,0,0);
      accums.splice(parseFloat(theindex) + 1,0,newaccum);
      this.setState({
         accumulations: accums,
      });
   }

   setupScenario(fieldValues) {
       let bpcs = [new BenefitPriceComposite(fieldValues[0],fieldValues[1],fieldValues[4],fieldValues[7],fieldValues[10])];
       let accum = [new Accumulation(fieldValues[8],fieldValues[9],fieldValues[8],fieldValues[9],null,null,null,null)]
       this.setState({
          benefitPriceComposites: bpcs,
          accumulations: accum,
          copayOOP: fieldValues[2],
          copayDed: fieldValues[3],
          coinsOOP: fieldValues[5],
          coinsDed: fieldValues[6],
       });
    }

  render() {
     let memberCopay = 0;
     let memberDeductible = 0;
     let memberCoinsurance = 0;
     let currentBalance = 0;
     let workingDedHeadroom = this.state.accumulations[0].deductibleRemaining;
     let workingOOPXHeadroom = this.state.accumulations[0].oopxRemaining;

     let calculators = [];
     let bpcrenderers = [];
     let accumsrenderers = [];;
     let accindex = 0
     let index = 0;

     for(let accum of this.state.accumulations)
     {
        accumsrenderers.push(<AccumsRenderer familyPlan={this.state.familyPlan}
                                             deductibleRemaining = {accum.deductibleRemaining}
                                             oopxRemaining = {accum.oopxRemaining}
                                             deductibleLimit = {accum.deductibleLimit}
                                             oopxLimit = {accum.oopxLimit}
                                             famDeductibleRemaining = {accum.famDeductibleRemaining}
                                             famOopxRemaining = {accum.famOopxRemaining}
                                             famDeductibleLimit = {accum.famDeductibleLimit}
                                             famOopxLimit = {accum.famOopxLimit}
                                             changeDeductibleRemaining = { this.setDeductibleRemaining(accindex) }
                                             changeOopxRemaining = { this.setOopxRemaining(accindex) }
                                             changeDeductibleLimit = { this.setDeductibleLimit(accindex) }
                                             changeOopxLimit = { this.setOopxLimit(accindex) }
                                             changeFamDeductibleRemaining = { this.setFamDeductibleRemaining(accindex) }
                                             changeFamOopxRemaining = { this.setFamOopxRemaining(accindex) }
                                             changeFamDeductibleLimit = { this.setFamDeductibleLimit(accindex) }
                                             changeFamOopxLimit = { this.setFamOopxLimit(accindex) }
                                             addAccHandler = { this.addAccIndexPosition(accindex) }
                                             removeAccHandler = { this.removeAccIndexPosition(accindex) }
                                             currentIndex={this.state.accumulations.length > 1?accindex:null} />);
        accindex++;
     }

        for(let bpc of this.state.benefitPriceComposites) {
          bpcrenderers.push(<BPCRenderer copayAmount={bpc.copayAmount} coinsPercent={bpc.coinsPercent}
                                         procCost={bpc.procCost} applyDeductible={bpc.applyDeductible}
                                         provTier={bpc.provTier}
                                         removeBpcHandler={ this.removeIndexPosition(index) }
                                            addBpcHandler={ this.addIndexPosition(index) }
                                            changeProcHandler={ this.setProcCost(index) }
                                             changeCopayHandler={ this.setCopayAmount(index) }
                                             changeCoinsHandler={ this.setCoinsPercent(index) }
                                             changeApplyDedHandler={ this.setApplyDeductible(index) }
                                            changeProvTier={ this.setProvTier(index) }
                                             currentIndex={this.state.benefitPriceComposites.length > 1?index:null} />);
          let calc = new Calculation(bpc.procCost,workingDedHeadroom,
             workingOOPXHeadroom,bpc.copayAmount,bpc.coinsPercent,bpc.applyDeductible,this.state.copayDed,this.state.copayOOP,
          this.state.coinsDed,this.state.coinsOOP);
          let output = calc.calculate();
          memberCopay = parseFloat(memberCopay) + parseFloat(output["memberCopay"]);
          memberDeductible = parseFloat(memberDeductible) + parseFloat(output["memberDeductible"]);
          memberCoinsurance = parseFloat(memberCoinsurance) + parseFloat(output["memberCoinsurance"]);
          currentBalance = parseFloat(currentBalance) + parseFloat(output["currentBalance"]);
          workingDedHeadroom = output["workingDedHeadroom"];
          workingOOPXHeadroom = output["workingOOPXHeadroom"];
          calculators.push(<Calculator entries={output["interimValues"]["entries"]}
                                       memberDeductible={output["interimValues"]["memberDeductible"]}
                                       copayContributionDed={output["interimValues"]["copayContributionDed"]}
                                       copayContributionOOPX={output["interimValues"]["copayContributionOOPX"]}
                                       coinsContributionDed={output["interimValues"]["coinsContributionDed"]}
                                       coinsContributionOOPX={output["interimValues"]["coinsContributionOOPX"]}
                                       currentIndex={this.state.benefitPriceComposites.length > 1?index:null} />);
          index++;
       }

     return (
        <div id="outsidediv">
            <div id="toparea">
                <div id="logo"/>
                <div id="lsr">LSR</div>
                <select id="dropdown" defaultValue={"placeholder"} onChange={this.testEvent.bind(this)}>
                    <option value="placeholder">Choose a scenario</option>
                    <option value="copay-traditional">Traditional Copay</option>
                    <option value="copay-after-deductible">Copay After Deductible</option>
                    <option value="copay-with-oop">Copay Applied To OOP Only</option>
                    <option value="copay-aca">ACA-compliant Copay</option>
                    <option value="coinsurance-traditional">Traditional Coinsurance</option>
                    <option value="coinsurance-no-deductible">Coinsurance With No Deductible</option>
                    <option value="coinsurance-with-copay">Coinsurance With Copay</option>
                </select>
                <div id="familyplan">
                    <span>Family plan?</span><input type="checkbox" checked={this.state.familyPlan} onChange={this.setFamilyPlan.bind(this)}></input>
                </div>
            </div>
            {this.state.advancedOptions ||
                <div>
                <br />
            <input className="bordergray" type="button" value="Show Advanced Options"
                   onClick={this.toggleAdvancedOptions.bind(this)}/>
                <br />
                </div>
            }
            {this.state.advancedOptions &&
            <div>
                <br />
                <input className="bordergray" type="button" value="Hide Advanced Options"
                       onClick={this.toggleAdvancedOptions.bind(this)}/>
                <div className="bordergray" id="borderpadding">
                    <span>Copay : </span>
                    <span>Bound by OOP?</span><input className="padding alignborder" type="checkbox"
                                                     checked={this.state.copayOOP}
                                                     onChange={this.setCopayOOP.bind(this)}/>
                    <span>Deductible Relevant?</span><input className="padding alignborder bordertext" type="checkbox"
                                                            checked={this.state.copayDed}
                                                            onChange={this.setCopayDed.bind(this)}/>
                </div>
                <div className="bordergray borderspecial">
                    <span>Coinsurance : </span>
                    <span>Bound by OOP?</span><input className="padding alignborder" type="checkbox"
                                                     checked={this.state.coinsOOP}
                                                     onChange={this.setCoinsOOP.bind(this)}/>
                    <span>Deductible Relevant?</span><input className="padding alignborder bordertext" type="checkbox"
                                                            checked={this.state.coinsDed}
                                                            onChange={this.setCoinsDed.bind(this)}/>
                </div>
                <br />
                <div className="bordergray">
                    Deductible :
                    Cross-Apply
                    <input className="padding alignborder input" type="radio" value="option11"
                           onChange={this.radioChange1.bind(this)} checked={this.state.selectedOption1 === 'option11'}/>
                    Isolate
                    <input className="padding alignborder input" type="radio" value="option21"
                           onChange={this.radioChange1.bind(this)} checked={this.state.selectedOption1 === 'option21'}/>
                    Cascade
                    <input className="padding alignborder input bordertext" type="radio" value="option31"
                           onChange={this.radioChange1.bind(this)} checked={this.state.selectedOption1 === 'option31'}/>
                </div>
                <div className="bordergray" id="borderspecial2">
                    OOP :
                    Cross-Apply
                    <input className="padding alignborder input" type="radio" value="option12"
                           onChange={this.radioChange2.bind(this)} checked={this.state.selectedOption2 === 'option12'}/>
                    Isolate
                    <input className="padding alignborder input" type="radio" value="option22"
                           onChange={this.radioChange2.bind(this)} checked={this.state.selectedOption2 === 'option22'}/>
                    Cascade
                    <input className="padding alignborder input bordertext" type="radio" value="option32"
                           onChange={this.radioChange2.bind(this)} checked={this.state.selectedOption2 === 'option32'}/>
                </div>
            </div>
            }
           <br />
           <span>{accumsrenderers}</span>
           <br />
           <span>{bpcrenderers}</span>
           <span>{calculators}</span>
            <div>
                <div className="bold">Breakdown of Total Cost:</div>
               <div>Member Contribution: <span className="bold">${(parseFloat(memberCopay) + parseFloat(memberDeductible) + parseFloat(memberCoinsurance)).toFixed(2)}</span></div>
               <div>Insurer Contribution: <span className="bold">${parseFloat(currentBalance).toFixed(2)}</span></div>
                <br />
                <div>

                <div className="bold">Breakdown of Member Contibution:</div>
               Copay: <span className="bold">${parseFloat(memberCopay).toFixed(2)}</span><br />
                Deductible: <span className="bold">${parseFloat(memberDeductible).toFixed(2)}</span><br />
                Coinsurance: <span className="bold">${parseFloat(memberCoinsurance).toFixed(2)}</span><br />
                <br />
                </div>
                <br />
            </div>
        </div>
    );
   }
}

export default App;