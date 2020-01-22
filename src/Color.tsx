import React from 'react';

import "./Color.css" 

interface Props {
    name: string;
}

interface State {
    color: string;
};

function render_color() {
    function random() {
        return Math.floor(Math.random() * 256);
    }
    return "rgb(" + random() + "," + random() + "," + random() + ")" 
}

export default class Color extends React.Component<Props, State> {
    state: State = {
      color: render_color()
    };

    update_color() {
        const x = render_color()
        this.setState({color:x})
    }
  
    render () {
      return (
        <div className="color_box">
                
                <div className="color_swatch" 
                     onClick={this.update_color.bind(this)} 
                     style={{backgroundColor: this.state.color}}>
                     {this.props.name}
                </div>
            </div>
      );
    }
  }