import React from 'react';
import { history } from '../redux/configureStore';

import styled from 'styled-components';

const Main = () => {
  return (
    <React.Fragment>
      <Container>
        <Text>이 윤 지</Text>
        <Btn
          onClick={() => {
            history.push('/Todo');
          }}
        >
          ToDo
        </Btn>
        <Btn
          onClick={() => {
            history.push('/Friend');
          }}
        >
          Rest API 활용
        </Btn>
      </Container>
    </React.Fragment>
  );
};

export default Main;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 50px;
`;

const Text = styled.h1`
  width: 150px;
  height: 50px;
  margin: 50px 0px;
  text-align: center;
  border-bottom: 3px solid white;
`;

const Btn = styled.button`
  width: 300px;
  height: 80px;
  margin: 50px 0px;
  border: 2px solid white;
  border-radius: 50px;
  font-size: 35px;
  font-weight: bold;
`;
