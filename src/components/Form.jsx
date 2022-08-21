import { useContext, useRef, useState } from 'react';
import styled from 'styled-components';
import InputField from './InputField';
import emailjs from '@emailjs/browser';
import { devices } from '../config';
import { NotificationContext } from './Notification/NotificationProvider';
import { v4 } from 'uuid';
import { axiosInstance } from '../config';

const Container = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${devices.tablet} {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  width: 80%;
  height: 80%;
  background-color: #8a1f2a;
  border-radius: 20px;
  text-align: center;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${devices.tablet} {
    height: max-content;
    width: 100%;
    border-radius: 0;
  }
  ${devices.desktop} {
    padding: 30px 60px;
  }

  h1 {
    color: white;
    font-family: 'Droid Sans';
    ${devices.desktop} {
      font-size: 48px;
    }
  }
  button {
    background-color: #fff;
    border: none;
    padding: 0.5rem 2rem;
    border-radius: 5px;
    color: #8a1f2a;
    font-family: 'Montserrat';
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
    &:hover {
      background-color: #eee;
    }
    ${devices.mobileL} {
      padding: 0.5rem 1rem;
    }
    ${devices.desktop} {
      font-size: 32px;
      padding: 1rem 4rem;
    }
  }
`;
const Inputs = styled.form`
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`;

const Form = () => {
  const dispatch = useContext(NotificationContext);
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [stream, setStream] = useState('');
  const [college, setCollege] = useState('');
  const [pass, setPass] = useState('');
  const formRef = useRef();

  const sendMail = async () => {
    if (name == '' || contact == '' || email == '' || stream == '' || college == '' || pass == '') {
      dispatch({
        type: 'ADD_NOTIFICATION',
        payload: {
          id: v4(),
          message: 'Please fill all the fields',
          type: 'error',
        },
      });
    } else {
      // emailjs.sendForm('service_5le5r5g', 'template_guqd8mt', formRef.current, 'ljx-2vf-XrI_AgHa0').then(result => {
      //   dispatch({
      //     type: 'ADD_NOTIFICATION',
      //     payload: {
      //       id: v4(),
      //       type: 'Success',
      //       message: 'Thank you for your inquiry.',
      //     },
      //   });
      // });
      const res = await axiosInstance.post('/auth/lead', { name, contact, email, stream, college, pass });
      if (res.status === 200) {
        dispatch({
          type: 'ADD_NOTIFICATION',
          payload: {
            id: v4(),
            type: 'Success',
            message: 'Thank you for your inquiry.',
          },
        });
      } else if (res.status === 500) {
        dispatch({
          type: 'ADD_NOTIFICATION',
          payload: {
            id: v4(),
            type: 'Error',
            message: 'Something went wrong.',
          },
        });
      }
      setName('');
      setContact('');
      setEmail('');
      setStream('');
      setCollege('');
      setPass('');
    }
  };

  const fields = [
    {
      label: 'Name',
      name: 'name',
      type: 'text',
      value: name,
      setValue: setName,
    },
    {
      label: 'Phone Number',
      name: 'contact',
      type: 'number',
      value: contact,
      setValue: setContact,
    },
    {
      label: 'Email',
      name: 'email',
      type: 'email',
      value: email,
      setValue: setEmail,
    },
    {
      label: '+2 Stream',
      name: 'stream',
      type: 'text',
      value: stream,
      setValue: setStream,
    },
    {
      label: '+2 College',
      type: 'text',
      name: 'college',
      value: college,
      setValue: setCollege,
    },
    {
      label: 'Completion Year',
      type: 'text',
      name: 'pass',
      value: pass,
      setValue: setPass,
    },
  ];

  return (
    <Container>
      <Wrapper>
        <h1>Inquiry Form</h1>
        <Inputs ref={formRef}>
          {fields.map((item, key) => (
            <InputField key={key} {...item} />
          ))}
        </Inputs>
        <div>
          <button onClick={sendMail}>Submit</button>
        </div>
      </Wrapper>
    </Container>
  );
};
export default Form;
