/**
 * Created by johnathanreale on 10/6/17.
 */
import React, {Component} from 'react';
class Calculator extends Component {

   render() {

      return (
         <div>
            <br />
            {this.props.entries !== "" &&
            <div className="bold">
               {this.props.currentIndex !== null && <span>Step {parseFloat(this.props.currentIndex) + 1}</span>} Explanation: </div>}
            <div>{this.props.entries}</div>
            <div>
               <div className="bold">Amounts to Add to Current Accumulator Postition:</div>
               {parseFloat(this.props.memberDeductible) > 0 && <span>Standard Deductible: ${parseFloat(this.props.memberDeductible).toFixed(2)}<br /></span>}
               {parseFloat(this.props.copayContributionDed) > 0 && <span>Copay Contribution to Deductible: ${parseFloat(this.props.copayContributionDed).toFixed(2)}<br /></span>}
               {parseFloat(this.props.coinsContributionDed) > 0 && <span>Coinsurance Contribution to Deductible: ${parseFloat(this.props.coinsContributionDed).toFixed(2)}<br /></span>}
               {parseFloat(this.props.copayContributionOOPX) > 0 && <span>Copay Contribution to OOPX: ${parseFloat(this.props.copayContributionOOPX).toFixed(2)}<br /></span>}
               {parseFloat(this.props.coinsContributionOOPX) > 0 && <span>Coinsurance Contribution to OOPX: ${parseFloat(this.props.coinsContributionOOPX).toFixed(2)}<br /></span>}
               {(parseFloat(this.props.memberDeductible) <= 0 && parseFloat(this.props.copayContributionDed) <= 0 && parseFloat(this.props.coinsContributionDed) <= 0 && parseFloat(this.props.copayContributionOOPX) <= 0 && parseFloat(this.props.coinsContributionOOPX) <= 0) && <span>(none)<br /></span>}
               <br />
            </div>
            <hr />
         </div>
      );
   }
}

export default Calculator;