import { Component } from 'react';
import style from './addButton.module.css';
import Card from '../TodoCard/TodoCard';
import Container from '../Container/Container';

class Button extends Component {
  state = {
    isOnCreate: false,
    numClicked: '',
    isHidden: false,
  };

  handleAddCard = e => {
    // e.preventDefault();

    this.setState(({ numClicked }) => ({
      isOnCreate: true,
      // numClicked: numClicked + 1,
      isHidden: !this.state.isHidden,
    }));
    // console.log(`clic ${this.state.numClicked}`);
  };

  /*
  reset = () => {
    this.setState({ numClicked: '' })
  }
*/
  render() {
    return (
      <Container>
        <div className={style.container}>
          {this.state.isHidden && (
            <Card
              isOnCreate={this.state.isOnCreate}
              onHandleAddCard={this.handleAddCard}
            />
          )}
          <div className={style.btnHolder}>
            <button
              className={style.makeButton}
              onClick={this.handleAddCard}
            >
              {this.state.isHidden ? '-' : '+'}
            </button>
          </div>
        </div>
      </Container>
    );
  }
}
export default Button;
