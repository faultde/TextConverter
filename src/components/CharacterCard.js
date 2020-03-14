import React from 'react';

export default class CharacterCard extends React.Component{
  onEnter = (e) =>{
    if(this.props.toggleDelete){
    e.target.classList.add("btn-outline-danger");
    e.target.setAttribute('delete',"yes")
    }
  }
  onLeave = (e) =>{
    e.target.classList.remove("btn-outline-danger");
  }

 
  render(){
    let alphaArray = this.props.alphaArray;
    let btnStyle = 'btn-outline-primary';
    return (
      alphaArray.map((character, index) => {
        return (
          <div className="col-sm-2">
            <div className="card" style={{display:'inline-block'}}>
              <h5 className="card-header">
                {String.fromCharCode(
                  alphaArray.indexOf(character) + 97
                ).toUpperCase()}
              </h5>
              
              {character.map(element => {
                // Individual Element
                return (
                  <button
                    className={`btn btn-sm ${btnStyle}`}
                    onClick={this.props.onCharacterClick}
                    value={index}
                    style={{width:50, margin:5, fontSize:"2em"}}
                    onMouseEnter={this.onEnter}
                    onMouseLeave={this.onLeave}

                  >
                    {element} 
                  </button>
                );
              })}

              <button
                href="#"
                className="btn btn-sm btn-primary"
                style={{width:50, margin:5, fontSize:"2em"}}
                onClick={this.props.addNew}
                value={alphaArray.indexOf(character)}
              >
                +
              </button>
            </div>
          </div>
        );
      })
    )
  }
}

