import React from 'react';
import Tab from './Tab';
import styled, { css } from 'styled-components';


const Tabs = props => {
  return (
    <Tabing>

      <div className="topics">

        <Topics>

          <Title>TRENDING TOPICS:</Title>

          {/* map over the tabs provided on your props, create a new Tab component for each one.
          give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}

          {props.tabs.map(tab => 

            <Tabz className='tab'>

              <Tab tab={tab} changeSelected={props.changeSelected} selectedTab={props.selectedTab}/>

            </Tabz>

          )}

        </Topics>

      </div>

    </Tabing>
  );
};

const Tabz = styled.text`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  color: #fff;
  background-color: #333;
  margin: 0 5px;
  padding: 2px 10px;
  font-size: 12px;
  letter-spacing: 2px;
  cursor: pointer;
  font-weight: bold;
  :hover{
    text-decoration: underline;
  }
`;

const Topics = styled.div `
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
`;

const Title = styled.text`  
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`;

const Tabing = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 47px;
  background-color: #fff;
  @media (min-width: 1280px) {
    .tabs {
      width: 1280px;
    }
  }
`;

// Make sure to use PropTypes to validate your types!
export default Tabs;
