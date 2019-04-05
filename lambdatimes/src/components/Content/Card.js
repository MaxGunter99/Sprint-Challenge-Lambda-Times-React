import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Card = props => {
  return (
    <div className="card">
      <Carding>
        <div className="headline">{props.card.headline /* headline goes here */}</div>
          <div className="author">
            <div className="img-container">
              <ImgContainerz>
                <img src={props.card.img /* image source goes here */} />
              </ImgContainerz>
            </div>
          <span>By {props.card.author /* author goes here */}</span>
        </div>
        <p><strong>Tab: </strong>{props.card.tab}</p>
      </Carding>
    </div>
  );
};

const ImgContainerz = styled.div`
  padding-right: 10px;
  border-right: 1px solid lightgrey;
  height: 40px;
`;

const Carding = styled.div`
  .headline{
    font-size: 25px;
    font-family: Didot, serif;
    .author{
      display: flex;
      justify-content: none;
      align-items: center;
      flex-direction: row;
      margin-top: 15px;
    }
  }
`;



// Make sure to include PropTypes.

Card.propTypes = {
  card: PropTypes.shape({
    author: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    tab: PropTypes.string.isRequired
  })
}

export default Card;
