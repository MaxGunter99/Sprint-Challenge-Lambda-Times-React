import React, { Component } from 'react';
import Card from './Card';
import propTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Cards = props => {
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
      new Card component for each passing the card as the only prop*/}
      <CardContainers>
        {props.cards.map(card =>
           <Card card={card} />

        )}
      </CardContainers>
    </div>
  )
}

const CardContainers = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: none;
  flex-direction: row;
  width: 100%;
  margin-top: 16px;
  flex-wrap: wrap;
  @media (min-width: 1200px) {
    .cards-container {
      width: 1200px;
    }
  }
`;

// Make sure you include prop types for all of your incoming props

Cards.propTypes = {
  cards: propTypes.arrayOf(propTypes.object)
}

export default Cards;