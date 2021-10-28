/**
 * Created by johnathanreale on 10/13/17.
 */
import React, {Component} from 'react';
class AccumsRenderer extends Component {

   render()
   {
      return (<span>

{this.props.familyPlan ||
<div className="border borderfix borderspecial">
   {this.props.currentIndex !== null && <div className="tier">Tier {this.props.currentIndex + 1}</div>}
   <br />
    <div className="bottompadding">
   Deductible Remaining
   <input className="padding alignborder input" value={this.props.deductibleRemaining}
          onChange={this.props.changeDeductibleRemaining}/>
   OOPX Remaining (not including deductible)
   <input className="padding alignborder input" value={this.props.oopxRemaining}
          onChange={this.props.changeOopxRemaining}/>
    </div>
   Deductible Limit
   <input className="padding alignborder input" value={this.props.deductibleLimit}
          onChange={this.props.changeDeductibleLimit}/>
   OOPX Limit (not including deductible)
   <input className="padding alignborder input" value={this.props.oopxLimit} onChange={this.props.changeOopxLimit}/>
   <br />
   {this.props.currentIndex !== null && <input className="padding alignborder" type="button" value="remove tier" onClick={this.props.removeAccHandler} />}
   <input className="padding alignborder" type="button" value="add tier after" onClick={this.props.addAccHandler} />
</div>
}
         {this.props.familyPlan &&
         <div className="padding border borderfix">
            {this.props.currentIndex !== null && <div className="tier">Tier {this.props.currentIndex + 1}</div>}
            <br />
            Individual Deductible Remaining
            <input className="padding alignborder input" value={this.props.deductibleRemaining}
                   onChange={this.props.changeDeductibleRemaining}/>
            Individual OOPX Remaining (not including deductible)
            <input className="padding alignborder input" value={this.props.oopxRemaining}
                   onChange={this.props.changeOopxRemaining}/>
            <br />
            Individual Deductible Limit
            <input className="padding alignborder input" value={this.props.deductibleLimit}
                   onChange={this.props.changeDeductibleLimit}/>
            Individual OOPX Limit (not including deductible)
            <input className="padding alignborder input" value={this.props.oopxLimit}
                   onChange={this.props.changeOopxLimit}/>
            <br />
            Family Deductible Remaining
            <input className="padding alignborder input" value={this.props.famDeductibleRemaining}
                   onChange={this.props.changeFamDeductibleRemaining}/>
            Family OOPX Remaining (not including deductible)
            <input className="padding alignborder input" value={this.props.famOopxRemaining}
                   onChange={this.props.changeFamOopxRemaining}/>
            <br />
            Family Deductible Limit
            <input className="padding alignborder input" value={this.props.famDeductibleLimit}
                   onChange={this.props.changeFamDeductibleLimit}/>
            Family OOPX Limit (not including deductible)
            <input className="padding alignborder input" value={this.props.famOopxLimit}
                   onChange={this.props.changeFamOopxLimit}/>
            <br />
            {this.props.currentIndex !== null && <input className="padding alignborder" type="button" value="remove tier" onClick={this.props.removeAccHandler} />}
            <input className="padding alignborder" type="button" value="add tier after" onClick={this.props.addAccHandler} />
         </div>
         }

  </span> );

   }
}

export default AccumsRenderer;