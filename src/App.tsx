import React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Global from './assets/Global';
import CoursePanel from './components/CoursePanel';
import MainPanel from './components/MainPanel';
import { themes } from './context/Theme';

const RootContainer = styled.div`
  max-width: 100vw;
  height: 100vh;
  background-color: ${themes.light.body};
`
const Container = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  display: flex;
`

const App = () => {
  const [count, setCount] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  let interval: any = null;

  const startTimer = () => {
    const countDownDate = new Date("August 22, 2022 ").getTime();
    console.log(countDownDate);

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if(distance < 0) {
        clearInterval(interval.current);
      }
      else {
        setCount({ days, hours, minutes, seconds });
      }
    }, 1000);
  }

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval);
    }
  })

  return (
    <>
      <Global />
      <RootContainer>
        <Container>
          <MainPanel 
            days={count.days} 
            hours={count.hours}
            minutes={count.minutes}
            seconds={count.seconds}
          />
          <CoursePanel />
        </Container>
      </RootContainer>
    </>
  )
}

export default App