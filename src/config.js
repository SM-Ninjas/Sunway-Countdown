import axios from 'axios';
const sizes = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '870px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2000px',
};

export const devices = {
  mobileS: `@media only screen and (max-width: ${sizes.mobileS})`,
  mobileM: `@media only screen and (max-width: ${sizes.mobileM})`,
  mobileL: `@media only screen and (max-width: ${sizes.mobileL})`,
  tablet: `@media only screen and (max-width: ${sizes.tablet})`,
  laptop: `@media only screen and (max-width: ${sizes.laptop})`,
  laptopL: `@media only screen and (max-width: ${sizes.laptopL})`,
  desktop: `@media only screen and (min-width: ${sizes.desktop})`,
};

export const axiosInstance = axios.create({
  baseURL: 'https://server.jhirjhire.com/api',
  // baseURL: 'http://localhost:8800/api',
});
