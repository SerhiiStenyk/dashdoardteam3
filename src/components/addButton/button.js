import { Component } from 'react';
import style from './addButton.module.css';
// import Card from '../TodoCard/TodoCard';

class Button extends Component {
  // state = {
  //   isOnCreate: false,
  //   isHidden: false,
  // };

  // handleAddCard = () => {
  //   this.setState(() => ({
  //     isOnCreate: true,
  //     isHidden: !this.state.isHidden,
  //   }));
  // };

  render() {
    return (
      <div>
        {/* {this.state.isHidden && (
          <Card
            isOnCreate={this.state.isOnCreate}
            onHandleAddCard={this.handleAddCard}
          />
        )} */}
        <div className={style.btnHolder}>
          <button
            className={style.makeButton}
            onClick={() => {
              this.props.handleAddCard();
              // this.setState(() => ({
              //   isHidden: !this.state.isHidden,
              // }));
            }}
          >
            {this.props.isHidden ? '-' : '+'}
          </button>
        </div>
      </div>
    );
  }
}
export default Button;
