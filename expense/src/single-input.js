import React from 'react';

class SingleInput extends React.Component {
    
    render() {
        return (
            <div>
                 <label>{this.props.title}</label> 
                 <input type={this.props.inputType } 
                 placeholder={this.props.placeholder} 
                 onChange={this.props.controlFunc }
                 value={this.props.content}
                 id={this.props.id} />
            </div>
             //onChange={ props.controlFunc } <== activate function (passed by props) on change event
             //value={props.content} <== get the value (passed by props) back from the state
        );
    }
}

export default SingleInput;