import React from 'react';
import { history } from '../redux/configureStore';
import { useDispatch, useSelector } from 'react-redux';
import { userDB } from '../redux/modules/user';

import styled from 'styled-components';

const Friend = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(userDB());
  }, []);

  const user = useSelector((state) => state.user.user.data);

  return (
    <React.Fragment>
      <Container>
        <BackBtn
          onClick={() => {
            history.push('/');
          }}
        >
          ←
        </BackBtn>
        <Text>Friend</Text>
        <Box1>
          {user?.map((u, j) => {
            return (
              <Box2 key={u + j}>
                <Image src={u.avatar} alt={u.id} />
                <P>
                  이름 : {u.first_name} {u.last_name}
                </P>
                <P>이메일 : {u.email}</P>
              </Box2>
            );
          })}
        </Box1>
      </Container>
    </React.Fragment>
  );
};

export default Friend;

const Container = styled.div`
  width: 100%;
  padding: 25px;
`;
const BackBtn = styled.button`
  width: 35px;
  height: 35px;
  border: 2px solid white;
  border-radius: 50%;
  font-size: 20px;
`;

const Text = styled.h1`
  width: 150px;
  height: 50px;
  margin: 30px auto;
  text-align: center;
  border-bottom: 3px solid white;
`;

const Box1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  margin: 0 auto;
`;

const Box2 = styled.div`
  width: 100%;
  padding: 15px;
  margin: 30px 0px;
  border: 2px solid white;
  border-radius: 5px;
  text-align: center;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const P = styled.p`
  height: 30px;
  line-height: 30px;
`;
