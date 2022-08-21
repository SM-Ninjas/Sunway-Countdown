import styled from 'styled-components';
import bcu from '../assets/images/bculogo.JPG';
import sunway from '../assets/images/sunway.png';
import { FaFacebookF } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { useEffect, useState } from 'react';
import { devices } from '../config';

const Container = styled.div`
  width: 65%;
  height: 100vh;
  background-color: #8a1f2a;
  display: flex;
  justify-content: center;
  align-items: center;
  ${devices.tablet} {
    width: 100%;
    min-height: 40vh;
  }
`;
const Box = styled.div`
  width: 80%;
  height: 80%;
  background-color: white;
  border-radius: 20px;
  padding-top: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${devices.mobileL} {
    width: 90%;
    height: 95%;
    border-radius: 10px;
  }
`;

const Top = styled.div`
  padding: 0 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20%;
  ${devices.tablet} {
    padding: 5px 10px;
  }
`;
const LogoContainer = styled.div`
  flex: 1;
  &:nth-child(2) {
    flex: 2;
  }
  img {
    width: 200px;
    height: auto;
    ${devices.mobileL} {
      width: 100px;
    }
  }
`;

const Middle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-family: 'Droid Sans';
    font-size: 24px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 20px;
    ${devices.mobileL} {
      font-size: 20px;
      margin-bottom: 0px;
    }
    ${devices.desktop} {
      font-size: 64px;
    }
  }
`;

const Counter = styled.div`
  display: flex;
  font-family: 'Montserrat';
`;

const Number = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  span {
    color: #c62c3c;
    font-size: 64px;
    ${devices.mobileL} {
      font-size: 48px;
    }
    ${devices.desktop} {
      font-size: 128px;
    }
  }
  p {
    font-size: 12px;
    ${devices.mobileL} {
      font-size: 8px;
    }
    ${devices.desktop} {
      font-size: 48px;
    }
  }
`;
const Colon = styled.div`
  color: #c62c3c;
  margin-right: 5px;
  font-size: 64px;
  font-family: 'Montserrat';
  ${devices.mobileL} {
    font-size: 48px;
  }
  ${devices.desktop} {
    font-size: 128px;
  }
`;

const Bottom = styled.div`
  height: 14%;
  width: 100%;
  background-color: #c62c3c;
  border-radius: 0 0 19px 19px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${devices.mobileL} {
    border-radius: 0 0 9px 9px;
    height: 20%;
  }
  a {
    width: 40px;
    height: 40px;
    background-color: white;
    margin: 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: #c62c3c;
    font-size: 28px;
    cursor: pointer;
    ${devices.mobileL} {
      width: 30px;
      height: 30px;
      font-size: 20px;
    }
    ${devices.desktop} {
      width: 70px;
      height: 70px;
      font-size: 56px;
      margin: 0 30px;
    }
  }
`;

const Landing = () => {
  const [day, setDay] = useState('');
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');

  const getTimeRemaining = e => {
    const time = Date.parse(e) - Date.parse(new Date());
    if (time < 0) {
      console.log('Date Passed');
    } else {
      setSeconds(Math.floor((time / 1000) % 60));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setDay(Math.floor(time / (1000 * 60 * 60 * 24)));
    }
  };
  useEffect(() => {
    setInterval(() => getTimeRemaining('22 Aug 2022 11:15:00 GMT'), 1000);
  }, []);

  return (
    <Container>
      <Box>
        <Top>
          <LogoContainer>
            <img src={sunway} alt='' />
          </LogoContainer>
          <LogoContainer></LogoContainer>
          <LogoContainer>
            <img src={bcu} alt='' />
          </LogoContainer>
        </Top>
        <Middle>
          <h1>We are Upgrading</h1>
          <Counter>
            <Number>
              <span>{day}</span>
              <p>Days</p>
            </Number>
            <Colon>:</Colon>
            <Number>
              <span>{hours}</span>
              <p>Hours</p>
            </Number>
            <Colon>:</Colon>
            <Number>
              <span>{minutes}</span>
              <p>Minutes</p>
            </Number>
            <Colon>:</Colon>
            <Number>
              <span>{seconds}</span>
              <p>Seconds</p>
            </Number>
          </Counter>
        </Middle>
        <Bottom>
          <a href='https://www.facebook.com/sunwaycollegektm' target={'_blank'} rel='noreferrer'>
            <FaFacebookF />
          </a>
          <a href='https://www.instagram.com/sunwaycollegektm/' target={'_blank'} rel='noreferrer'>
            <RiInstagramFill />
          </a>
        </Bottom>
      </Box>
    </Container>
  );
};
export default Landing;
