import React from 'react';

import "./Container.css" 
import Color from './Color';

interface Props {
    name: string;
}

interface myColor {
    name: string;
    key: string;
}

interface State {
    swatches: Array<myColor>;
};


export default class Container extends React.Component<Props, State> {
    state: State = {
      swatches: []
    };

    delete_swatch = () => {
            this.setState(({swatches}) => ({
                swatches: swatches.slice(0, -1),
            }))
        }

    add_swatch = () => {
        const new_element: myColor = {name: this.props.name.slice(0, 8), key:"i" + this.state.swatches.length}
        if (this.state.swatches.length < 8) {
            this.setState(({swatches}) => ({
                swatches: swatches.concat([new_element]),
            }))
        }  
        else {
            alert("too many swatches!")
        }
    }
  
    render () {
      return (
        <div className="mycontainer" id="c1">
                
                <div className="function_box">
                    <div className="function adder" onClick={this.add_swatch}>+</div>
                    <div className="function deleter" onClick={this.delete_swatch}>-</div>
                </div>
                <div className="swatches">
                    {this.state.swatches.map(item => (<Color name={item.name} key={item.key}/>))}
                </div>
                
            </div>
      );
    }
  }