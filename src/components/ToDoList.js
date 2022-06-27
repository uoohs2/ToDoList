import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editReducer, deleteReducer } from '../redux/modules/list';

import styled from 'styled-components';

const ToDoList = (props) => {
  const dispatch = useDispatch();

  // -----수정버튼 클릭 확인여부 위해서
  const [edit, setEdit] = React.useState(false);
  // -----

  // -----수정된 값
  const [editText, setEditText] = React.useState(props.text);
  const onChange = (e) => {
    setEditText(e.target.value);
  };
  // -----

  // -----수정버튼 클릭시
  const _edit = () => {
    if (edit === false) {
      setEdit(true);
    } else if (edit === true) {
      const info = { index: props.index, text: editText };
      dispatch(editReducer(info));
      setEdit(false);
    }
  };
  // -----

  return (
    <React.Fragment>
      <Div>
        <Num>{props.length - props.index}</Num>
        {edit && (
          <EditText type="text" value={editText} onChange={onChange}></EditText>
        )}
        {!edit && <Text>{props.text}</Text>}
        <EditBtn onClick={_edit}>edit</EditBtn>
        <DeleteBtn
          onClick={() => {
            dispatch(deleteReducer(props.index));
          }}
        >
          del
        </DeleteBtn>
      </Div>
    </React.Fragment>
  );
};

export default ToDoList;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  margin: 10px 0px;
  padding: 0px 50px;
  border: 1px solid black;
`;

const Num = styled.p`
  width: 50px;
  height: 30px;
  line-height: 30px;
  margin-right: 10px;
  border: 1px solid black;
`;

const Text = styled.p`
  width: 50%;
  line-height: 30px;
  border: 1px solid black;
  white-space: normal;
  word-wrap: break-word;
`;

const EditText = styled.input`
  width: 50%;
  line-height: 30px;
  padding: 0px 5px;
  border: 1px solid white;
  white-space: normal;
  word-wrap: break-word;
  :focus {
    outline: 1px solid white;
  }
`;

const EditBtn = styled.button`
  width: 50px;
  height: 30px;
  margin: 0px 10px;
  border: 1px solid black;
`;

const DeleteBtn = styled.button`
  width: 50px;
  height: 30px;
  border: 1px solid black;
`;
