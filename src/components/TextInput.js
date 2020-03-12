import React from "react";

export default class TextInput extends React.Component {
    render() {
        return (
            <div className="input-group input-group-lg">
                <input type="text" className="form-control" onChange={this.props.onInputChange}/>
                <div className="input-group-append">
                    <button className="btn btn-outline-primary" type="button" id="button-addon2" onClick={this.props.onClick} value={this.props.btnValue}>Convert</button>
                    </div>
            </div>
            )
    }
}