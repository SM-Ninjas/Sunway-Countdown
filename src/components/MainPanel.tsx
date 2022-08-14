import React from 'react'
import styled from 'styled-components'
import { themes } from '../context/Theme'
import SunwayRed from '../assets/logos/Sunway_Red.png';
import { Counts } from '../@types/counts';

import { FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

const Container = styled.div`
  height: 100vh;
  background-color: ${themes.light.secondary};
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 490px) {
    background-color: ${themes.light.body};
  }
`
const Wrapper = styled.div`
  width: 80%;
  height: 75vh;
  border-radius: 14px;
  display: flex;
  flex-direction: column;

  section {
    &:first-child {
      height: calc(100% - 6rem);
      background-color: ${themes.light.body};
      border-radius: 14px 14px 0 0;
    }
    &:last-child {
      background-color: ${themes.light.primary};
      border-radius: 0 0 14px 14px;

      @media (max-width: 490px) {
        border-radius: 14px;
      }
    }

    h1 {
      color: ${themes.light.primary};
    }
  }
`
const Icon = styled.div`
  padding: 0.5rem;
  background-color: ${themes.light.body};
  color: ${themes.light.primary};
  border-radius: 50%;
  font-size: 24px;
`

const countDownStyle = 'flex flex-col items-center'
const semicoloStyle = 'mx-4 lg:mx-8'

const MainPanel = ({ days, minutes, hours, seconds }: Counts) => {
  return (
    <Container className='w-full lg:w-2/3'>
      <Wrapper>
        <section className='w-full p-8 flex flex-col items-center justify-between'>
          <div className='flex justify-between'>
            <img src={SunwayRed} alt='Sunway Logo' className='h-16 w-auto' />

          </div>

          <div className='flex flex-col items-center gap-2'>
            <h2 className='uppercase'>We Are Upgrading</h2>
            <div className='flex justify-center'>
              <div className={countDownStyle}>
                <h1>{days}</h1>
                <p>Days</p>
              </div>
              <h1 className={semicoloStyle}>:</h1>
              <div className={countDownStyle}>
                <h1>{hours}</h1>
                <p>Hours</p>
              </div>
              <h1 className={semicoloStyle}>:</h1>
              <div className={countDownStyle}>
                <h1>{minutes}</h1>
                <p>Minutes</p>
              </div>
              <h1 className={semicoloStyle}>:</h1>
              <div className={countDownStyle}>
                <h1>{seconds}</h1>
                <p>Seconds</p>
              </div>
            </div>
          </div>

          <div />
        </section>

        <section className='flex-1 w-full flex justify-center items-center gap-8'>
          <Icon>
            <FaFacebookF onClick={() => window.open("https://www.facebook.com/the.sunway.show" , "_blank")}/>
          </Icon>
          <Icon>
            <AiFillInstagram onClick={() => window.open("https://www.instagram.com/the_sunway_show/" , "_blank")}/>
          </Icon>
        </section>
      </Wrapper>
    </Container>
  )
}

export default MainPanel