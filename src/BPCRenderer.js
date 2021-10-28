/**
 * Created by johnathanreale on 10/8/17.
 */
import React, {Component} from 'react';
class BPCRenderer extends Component {

   render() {

      return(
         <div id="topbar" className="borderspecial">
            {this.props.currentIndex !== null && <div id="left">Step {parseFloat(this.props.currentIndex) + 1}:</div>}
             <span>Copay Amount</span>
            <input className="padding alignborder input" value={this.props.copayAmount} onChange={this.props.changeCopayHandler}/>
             <br /><span>Coinsurance Percent</span>
            <input className="padding alignborder input" value={this.props.coinsPercent} onChange={this.props.changeCoinsHandler}/>
             <br />{this.props.currentIndex !== null?<span>Cost of Procedure Component</span>:<span>Total Cost of Procedure</span>}
            <input className="padding alignborder input" value={this.props.procCost} onChange={this.props.changeProcHandler}/>
             <br /><span>Provider Tier</span>
             <input className="padding alignborder input" value={this.props.provTier} onChange={this.props.changeProvTier}/>
             <br /><span>Apply Deductible?</span>
            <input className="padding alignborder" type="checkbox" checked={this.props.applyDeductible} onChange={this.props.changeApplyDedHandler}/>
             <br />
            {this.props.currentIndex !== null && <input className="padding alignborder" type="button" value="remove" onClick={this.props.removeBpcHandler} />}
             <input className="padding alignborder" type="button" value="add after" onClick={this.props.addBpcHandler} />
         </div>
      );

   }
}

export default BPCRenderer;