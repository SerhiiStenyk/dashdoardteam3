import { Component } from "react";
import style from './addButton.module.css'
//import Card from './Card'

class Button extends Component {

  state = { 
    numClicked: ''
 
  }
  
  handleAddCard=(e)=> {
    e.preventDefault()
   
   this.setState(({numClicked})=>({
    numClicked: numClicked + 1
       
    }));
  
    console.log(`clic ${this.state.numClicked}`)

   
  }
/*
  reset = () => {
    this.setState({ numClicked: '' })
  }
*/
    render() {
      return (
        <div className={style.container}>
         {/*this.state.numClicked && <Card/>*/}
            <div className={style.btnHolder}>
                <button type="submit" className={style.makeButton}
                onClick={this.handleAddCard}> +
                      </button>
          </div>
        </div>
        )
    }
}
export default Button;