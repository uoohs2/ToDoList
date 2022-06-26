import React from 'react';

import { Div, Text, Image } from '../components/ui';
import styled from 'styled-components';

const Main = () => {
  return (
    <React.Fragment>
      <Container>안녕하세요</Container>
    </React.Fragment>
  );
};

export default Main;

const Container = styled.div`
  width: 1500px;
  margin: 0 auto;
  border: 1px solid black;
`;
