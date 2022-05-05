import React from 'react';
import ReactStart from 'react-rating-stars-component';

// Link para criar o rating
// https://www.npmjs.com/package/react-rating-stars-component
class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      avaliacao: '',
      rating: 0,
    };

    this.handleMessage = this.handleMessage.bind(this);
    this.handleRating = this.handleRating.bind(this);
  }

  handleRating(newRating) {
    console.log(newRating);
  }

  handleMessage({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { email, avaliacao, rating } = this.state;
    return (
      <div>
        <form>
          <input
            type="email"
            name="email"
            value={ email }
            onChange={ this.handleMessage }
            placeholder="Email"
          />
          <ReactStart
            count={ 5 }
            onChange={ this.handleRating }
            size={ 24 }
            activeColor="#ffd700"
            value={ rating }
          />
          <textarea
            name="avaliacao"
            data-testid="product-detail-evaluation"
            placeholder="Mensagem(opcional)"
            value={ avaliacao }
            onChange={ this.handleMessage }
          />
          <button type="submit">Avaliar</button>
        </form>
      </div>
    );
  }
}

export default ReviewForm;
