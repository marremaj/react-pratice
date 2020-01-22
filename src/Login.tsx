import React from 'react';

import "./Login.css" 

interface Props {
    parent: (name:string) => void;
}

export default class Login extends React.Component<Props> {

    myRef = React.createRef<HTMLInputElement>()

    handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        this.props.parent((this.myRef.current && this.myRef.current.value)? this.myRef.current.value : "Unknown")
    }
  
    render () {
      return (
        <div id="form">
        <form onSubmit={this.handleSubmit}>
            <h1>Add your name</h1>
            <label>
            Name: 
            <input
                type="text"
                name="username"
                ref={this.myRef}
            />
            </label>
            <br/>
            <button type="submit">Submit</button>
        </form>
        </div>
      );
    }
  }