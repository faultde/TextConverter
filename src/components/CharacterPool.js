import React from "react";
import CharacterCard from "./CharacterCard";

export default class CharacterPool extends React.Component {
  state ={
    toggleDelete: false,
    toggleDisplay: 'inline-block',
    btnStyle : 'btn-outline-danger'
  }

  toggleDelete = (e) =>{
      if(!this.state.toggleDelete){
        this.setState({toggleDelete:true})
        console.log(this.state.toggleDelete)
        this.setState({btnStyle: 'btn-danger'})
      }else{
      this.setState({toggleDelete:false})
      console.log(this.state.toggleDelete)
      this.setState({btnStyle: 'btn-outline-danger'})
      }
    }
    
  toggleButton = () => {
      if(this.state.toggleDisplay === 'none'){
        console.log('toggle off')
        this.setState({toggleDisplay: "inline"})
      }else{
        console.log('toggle on')
        this.setState({toggleDisplay: "none"})
      }
  }
      
  render() {
    return (
      <div className="container-lg">
        <div className="card" style={{ marginTop: 20, textAlign: "center" }}>
          <h5 className="card-header">
            Character Pool
            <button
              className={`btn btn-outline-primary float-right`}
              onClick={this.toggleButton}
            >
              Toggle
            </button>
          </h5>
          
          <div
            className="container"
            style={{display: `${this.state.toggleDisplay}` }}
          >
          <nav className="navbar navbar-light bg-light"
          style={{border: "2px solid white", margin:10, borderRadius:20}}>
            <button className="btn btn-outline-success" type="button">
              PreSelect
            </button>
            <button className={`btn ${this.state.btnStyle}`} onClick={this.toggleDelete}>
              Delete
            </button>
          </nav>
            <div className="row">
            <CharacterCard 
            toggleDelete={this.state.toggleDelete}
            onCharacterClick={this.props.onCharacterClick}
            alphaArray={this.props.alphaArray}
            addNew={this.props.addNew} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
