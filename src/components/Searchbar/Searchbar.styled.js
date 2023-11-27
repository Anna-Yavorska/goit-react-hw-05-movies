import { Field as Input, Form as FormWrapper } from 'formik';
import styled from 'styled-components';

export const Form = styled(FormWrapper)`
  width: 100%;
  background-color: blue;
  padding: 12px;
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const Field = styled(Input)`
  height: 30px;
`;

export const FormButton = styled.button`
  height: 30px;
  cursor: pointer;
`;
