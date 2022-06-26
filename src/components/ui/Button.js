import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
  const {
    children,
    position,
    top,
    bottom,
    left,
    right,
    float,
    width,
    height,
    lineHeight,
    margin,
    padding,
    border,
    radius,
    backgroundColor,
    BG,
    cursor,
    color,
    colorHover,
    size,
    bold,
    text,
    is_float,
    tagBtn,
    cmtBtn,
    bottomSheetBtn,
    complete,
    opacity,
    cancle,
    _onClick,
    className,
  } = props;

  const styles = {
    position,
    top,
    bottom,
    left,
    right,
    float,
    width,
    height,
    lineHeight,
    margin,
    padding,
    border,
    radius,
    backgroundColor,
    BG,
    cursor,
    color,
    colorHover,
    size,
    bold,
    text,
    is_float,
    tagBtn,
    cmtBtn,
    bottomSheetBtn,
    complete,
    opacity,
    cancle,
    className,
  };

  if (is_float) {
    return (
      <React.Fragment>
        <FloatButton onClick={_onClick}>{text ? text : children}</FloatButton>
      </React.Fragment>
    );
  }

  if (tagBtn) {
    return (
      <React.Fragment>
        <TagBtn onClick={_onClick}>{text ? text : children}</TagBtn>
      </React.Fragment>
    );
  }

  if (cmtBtn) {
    return (
      <React.Fragment>
        <CmtBtn onClick={_onClick}>{text ? text : children}</CmtBtn>
      </React.Fragment>
    );
  }

  if (bottomSheetBtn) {
    return (
      <React.Fragment>
        <BottomSheetBtn {...styles} onClick={_onClick}>
          {text ? text : children}
        </BottomSheetBtn>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <ButtonDefault {...styles} onClick={_onClick}>
        {text ? text : children}
      </ButtonDefault>
    </React.Fragment>
  );
};

Button.defaultProps = {
  position: '',
  top: '',
  bottom: '',
  left: '',
  right: '',
  children: null,
  float: false,
  width: '',
  height: '',
  lineHeight: '',
  margin: '',
  padding: '',
  border: '',
  radius: 'false',
  backgroundColor: '',
  BG: '',
  cursor: '',
  color: '',
  colorHover: false,
  size: '14px',
  bold: false,
  text: false,
  is_float: false,
  tagBtn: false,
  cmtBtn: false,
  bottomSheetBtn: false,
  bookmarkBtn: false,
  complete: false,
  opacity: '',
  cancle: false,
  _onClick: () => {},
  className: '',
};

const ButtonDefault = styled.button`
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  float: ${(props) => props.float};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  line-height: ${(props) => props.lineHeight};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.radius};
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? '600' : '400')};
  &:hover {
    background-color: ${(props) => props.BG};
    cursor: ${(props) => props.cursor};
    opacity: ${(props) => props.opacity};
    color: ${(props) => props.colorHover};
  }
`;

const FloatButton = styled.button`
  position: fixed;
  bottom: 100px;
  right: 50px;
  width: 50px;
  height: 50px;
  background: #fff;
  border-radius: 50%;
  font-size: 20px;
  color: black;
  border: 1px solid #0031de;
`;

const TagBtn = styled.button`
  font-size: 16px;
  font-weight: 500;
  text-decoration: none solid rgb(18, 184, 134);
  word-spacing: 0px;
  background-color: #f8f9fa;
  color: #12b886;
  height: 32px;
  min-width: 60px;
  margin: 0 14px 14px 0;
  padding: 5px 16px 0 16px;
  display: inline-flex;
  justify-content: space-around;
  transform: none;
  transition: all 0s ease 0s;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  &:hover {
    opacity: 0.6;
  }
`;

const CmtBtn = styled.button`
  font-size: 16px;
  font-weight: 700;
  text-decoration: none solid rgb(255, 255, 255);
  text-align: center;
  word-spacing: 0px;
  background-color: #20c997;
  color: #ffffff;
  height: 32px;
  width: 109.625px;
  padding: 5px 20px 0 20px;
  margin-left: 655px;
  min-height: auto;
  min-width: auto;
  display: flex;
  cursor: pointer;
  box-sizing: border-box;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

const BottomSheetBtn = styled.button`
  width: ${(props) => props.width};
  height: 60px;
  line-height: 60px;
  font-size: 22px;
  font-weight: bold;
  color: #4378ff;
  ${(props) =>
    props.cancle ? `background-color: #C7D7FF;` : `background-color: white;`};
  border-radius: 60px;
  border: ${(props) => props.border};
  &:hover {
    background-color: #dcffaf;
  }
`;

export default Button;
