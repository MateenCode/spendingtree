import styled from "styled-components";

export const FieldWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 80rem;
  margin: 1rem;
`;

export const Label = styled.label`
  color: #454545;
  font-size: 1.4rem;
`;

export const FormInputContainer = styled.input`
  background: none;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 3px;
  padding: 10px 10px 10px 5px;
`;

export const Error = styled.span`
  color: #ff704d;
`;
