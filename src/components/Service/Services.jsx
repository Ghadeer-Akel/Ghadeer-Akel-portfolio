import React from 'react';
import {MdDesignServices} from 'react-icons/md';
import {FiCodesandbox} from 'react-icons/fi';
import {CgWebsite} from 'react-icons/cg';
import styled from 'styled-components';
import Card from './Card';
import {Slide} from 'react-awesome-reveal';

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          My <span className="green">services</span>
        </h4>
        <h1>What I Do</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={MdDesignServices}
            title={'React Development'}
            disc={`Create reusable React components that encapsulate specific functionality and appearance.`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={FiCodesandbox}
            title={' Responsive Design'}
            disc={`Ability to create websites that work well on various devices and screen sizes using responsive design techniques.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={CgWebsite}
            title={'Collaboration'}
            disc={`Collaborate with back-end developers, UX/UI designers, and other team members to integrate React components seamlessly into the overall web application.`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
