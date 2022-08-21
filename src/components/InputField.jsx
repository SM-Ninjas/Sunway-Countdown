import styled from 'styled-components';
import { devices } from '../config';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  label {
    margin-bottom: 10px;
    color: white;
    font-family: 'Droid Sans';
    ${devices.desktop} {
      font-size: 48px;
    }
  }
  input {
    width: 100%;
    padding: 10px 7px;
    background-color: transparent;
    border: none;
    border: 1px solid #fff;
    border-radius: 5px;
    color: #fff;
    outline: none;
    font-family: 'Droid Sans';
    margin-bottom: 5px;
    ${devices.tablet} {
      margin-bottom: 10px;
    }
    ${devices.desktop} {
      padding: 20px 30px;
      font-size: 32px;
    }
  }
`;

const InputField = ({ label, name, type, value, setValue }) => {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} value={value} id={name} onChange={e => setValue(e.target.value)} />
    </Container>
  );
};
export default InputField;
