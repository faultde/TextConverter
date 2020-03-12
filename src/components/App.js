import React from "react";
import TextInput from './TextInput';
import CharacterPool from './CharacterPool';
import './app.css';


let convertedArr = [];

export default class App extends React.Component {
    state = {
        term: '',
        displayTerm: '',
        toggleDisplay: 'inline-block',
        alphaArray: [
            ['Ⱥ', 'Λ', 'Δ'],
            ['฿', 'Ƀ', 'β'],
            ['₡', 'ℂ', '∁'],
            ['ⅅ', 'Ɖ', 'ↁ'],
            ['ℇ', 'ℰ', 'Ҿ'],
            ['Ƒ', 'ƒ', 'Ғ'],
            ['ɠ', '൭', 'Ǥ'],
            ['Ħ', 'Ԋ', 'Ȟ'],
            ['Ɨ', 'ϊ', 'ĩ'],
            ['Ʈ', 'J', 'Ɉ'],
            ['Ҟ', 'Ϗ', 'Ӄ'],
            ['Ƚ', 'ƪ', '£'],
            ['൱', 'ӎ', 'ʍ'],
            ['Ŋ', 'Ͷ'],
            ['ϴ', 'Ǿ', 'ȯ'],
            ['₱', 'Ƿ'],
            ['Ɋ', 'ʠ', 'Ҩ'],
            ['Ʀ', 'Я', 'Ѓ'],
            ['Ϩ', '$', 'ȿ'],
            ['Ͳ', 'Ƭ', 'Ⱦ'],
            ['Ȗ', 'Ʉ', 'Ц'],
            ['Ʋ', 'ұ', 'Ѵ'],
            ['Ш', '₩', 'Ϣ'],
            ['Ϫ', 'Ӿ', 'Ӽ'],
            ['¥', 'Ϋ', 'ɏ'],
            ['Ɀ', '𐌶', 'Ƶ']
        ]
    }

    onInputChange = (e) => {
        this.setState({
            term: e.target.value
        })
    }
    convertButton = () => {
            convertedArr = [];
            let str = this.state.term.toLowerCase();
            let arr = [];
            let newArr = [];
            arr = str.split('');
            arr.forEach(elem => { newArr.push(elem) })
            for (let i = 0; i < newArr.length; i++) {
                if (newArr[i] === " " || !isNaN(newArr[i])){
                    convertedArr.push(newArr[i]);
                } else {

                    let letterSelection = this.state.alphaArray[newArr[i].charCodeAt(0) - 97];
                    let newLetter = letterSelection[Math.floor(Math.random() * letterSelection.length)];
                    convertedArr.push(newLetter);
                }
            }
        this.setState({
            displayTerm: convertedArr.join('')
        })
    }
    addNewButton = (e) => {
        let tempArray = this.state.alphaArray;
    
            let newChar = prompt(`Please add a new character to the ${this.state.alphaArray[e.target.value]} array.`);
            if (newChar != null) {
                alert(newChar + " was added to " + this.state.alphaArray[e.target.value])
                tempArray[e.target.value].push(newChar)
                console.log(tempArray)
                this.setState({alphaArray : tempArray})
             
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
    deleteCharacter = (e) => {
      console.log(e.target.innerHTML)
      let selectedCharacter = e.target.innerHTML;
      
    }
    render() {
        return (
            <div className="container">
            <div className="card app">
                <div className="card-body">
                        <h1 className="card-title" style={{ textAlign: "center",padding:15 }}>Text Converter</h1>
                        <h1 className="card-title" style={{ textAlign: "center" }}>{this.state.displayTerm}</h1>
                        <TextInput onInputChange={this.onInputChange} onClick={this.convertButton} btnValue={this.state.term} />
                        <CharacterPool 
                        alphaArray={this.state.alphaArray} 
                        addNew={this.addNewButton} 
                        toggleDisplay={this.state.toggleDisplay} 
                        toggleButton={this.toggleButton}
                        deleteCharacter={this.deleteCharacter}/>
                        
                    </div>
                </div>
            </div>

        )
    }
}

