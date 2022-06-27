import React from 'react';
import { history } from '../redux/configureStore';
import { useDispatch, useSelector } from 'react-redux';
import { addReducer } from '../redux/modules/list';

import ToDoList from '../components/ToDoList';
import styled from 'styled-components';

const ToDo = () => {
  // -----입력창에 커서 나타내기
  const todo = React.useRef(null);
  React.useEffect(() => {
    todo.current.focus();
  }, []);
  // -----

  // -----입력값 목록에 추가하기
  const dispatch = useDispatch();
  const [text, setText] = React.useState('');
  const onChange = (e) => {
    setText(e.target.value);
  };
  const write = () => {
    if (text === '') {
      alert('할 일을 입력해주세요!');
    } else {
      dispatch(addReducer(text));
      setText('');
    }
  };
  // -----

  // -----목록
  const list = useSelector((state) => state.list.todoList);
  // -----

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
        <H1>ToDo</H1>
        <Box1>
          <Input
            type="text"
            value={text || ''}
            onChange={onChange}
            ref={todo}
          ></Input>
          <AddBtn onClick={write}>ADD</AddBtn>
        </Box1>
        <Box2>
          {list.map((v, i) => {
            return (
              <ToDoList key={v + i} text={v} index={i} length={list.length} />
            );
          })}
        </Box2>
      </Container>
    </React.Fragment>
  );
};

export default ToDo;

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

const H1 = styled.h1`
  width: 150px;
  height: 50px;
  line-height: 50px;
  margin: 0px auto;
  text-align: center;
  border-bottom: 3px solid white;
`;

const Box1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  margin: 30px 0px;
`;

const Input = styled.input`
  width: 60%;
  height: 50px;
  margin-right: 20px;
  border-bottom: 3px solid white;
  font-size: 1.2em;
  word-wrap: normal;
  :focus {
    outline: none;
    border-bottom: 3px solid white;
  }
  /* 반응형 */
  @media screen and (max-width: 1200px) {
    width: 80%;
  }
`;

const AddBtn = styled.button`
  width: 80px;
  height: 50px;
  border: 3px double white;
  border-radius: 5px;
  /* 반응형 */
  @media screen and (max-width: 1200px) {
    width: 60px;
    height: 40px;
  }
`;

const Box2 = styled.div`
  width: 100%;
  text-align: center;
`;
