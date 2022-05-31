import styled from "styled-components";

import * as commentApi from "../../apis/commentApi";

const Wrapper = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

const Author = styled.div`
  margin-right: 10px;
  font-weight: bold;
`;

const Content = styled.div`
  margin-right: auto;
`;

const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 15px;
  color: #868e96;
  cursor: pointer;
`;

const Comment = ({ author, body, onDelete }) => {
  return (
    <Wrapper>
      <Author> {author} </Author>
      <Content> {body} </Content>
      <DeleteButton onClick={onDelete}>삭제</DeleteButton>
    </Wrapper>
  );
};

export default Comment;
