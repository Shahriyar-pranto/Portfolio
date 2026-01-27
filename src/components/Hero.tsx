'use client';

import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import profileImageImport from '../assets/profileImage.jpg';

// Extract src from Next.js StaticImageData object
const profileImage = typeof profileImageImport === 'string' ? profileImageImport : profileImageImport.src;

// INSTRUCTIONS: To use your own profile image:
// 1. Add your image to the /assets folder (e.g., profile.jpg)
// 2. Uncomment the line below and update the filename:
// import profileImage from '../assets/profile.jpg';
// 3. Replace the src in ImageWithFallback below with {profileImage}

// Custom icon components for design tools
const FigmaIcon = () => (
  <svg
    width="28"
    height="43"
    viewBox="0 0 28 43"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_3250_6342)">
      <path
        d="M6.9986 42.8233C10.8618 42.8233 13.9972 39.6258 13.9972 35.6861V28.5488H6.9986C3.13537 28.5488 0 31.7463 0 35.6861C0 39.6258 3.13537 42.8233 6.9986 42.8233Z"
        fill="#0ACF83"
      />
      <path
        d="M0 21.4112C0 17.4714 3.13537 14.2739 6.9986 14.2739H13.9972V28.5484H6.9986C3.13537 28.5484 0 25.3509 0 21.4112Z"
        fill="#A259FF"
      />
      <path
        d="M0 7.13726C0 3.19749 3.13537 0 6.9986 0H13.9972V14.2745H6.9986C3.13537 14.2745 0 11.077 0 7.13726Z"
        fill="#F24E1E"
      />
      <path
        d="M13.9961 -0.000488281H20.9947C24.8579 -0.000488281 27.9933 3.197 27.9933 7.13677C27.9933 11.0765 24.8579 14.274 20.9947 14.274H13.9961V-0.000488281Z"
        fill="#FF7262"
      />
      <path
        d="M27.9933 21.4112C27.9933 25.3509 24.8579 28.5484 20.9947 28.5484C17.1315 28.5484 13.9961 25.3509 13.9961 21.4112C13.9961 17.4714 17.1315 14.2739 20.9947 14.2739C24.8579 14.2739 27.9933 17.4714 27.9933 21.4112Z"
        fill="#1ABCFE"
      />
    </g>
    <defs>
      <clipPath id="clip0_3250_6342">
        <rect width="28" height="42.8235" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const FramerIcon = () => (
  <svg
    width="38"
    height="38"
    viewBox="0 0 38 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_3250_6348)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.69922 25.3335H18.9992V38.0002L5.69922 25.3335Z"
        fill="#0055FF"
      />
      <path
        d="M18.9992 12.6665H5.69922V25.3332H32.2991L18.9992 12.6665Z"
        fill="#00AAFF"
      />
      <path
        d="M5.69922 0L18.9992 12.6667H32.2991V0H5.69922Z"
        fill="#88DDFF"
      />
    </g>
    <defs>
      <clipPath id="clip0_3250_6348">
        <rect width="38" height="38" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const AdobeXDIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_3250_6336)">
      <path
        d="M7.08724 0.00439453H32.9206C36.8372 0.00439453 40.0039 3.17106 40.0039 7.08773V31.9211C40.0039 35.8377 36.8372 39.0044 32.9206 39.0044H7.08724C3.17057 39.0044 0.00390625 35.8377 0.00390625 31.9211V7.08773C0.00390625 3.17106 3.17057 0.00439453 7.08724 0.00439453Z"
        fill="#470137"
      />
      <path
        d="M21.0425 10.2543L16.0425 18.5043L21.3758 27.2543C21.4091 27.321 21.4258 27.3877 21.4091 27.4543C21.3925 27.521 21.3258 27.471 21.2258 27.4877H17.4091C17.1425 27.4877 16.9591 27.471 16.8425 27.3043C16.4925 26.6043 16.1258 25.921 15.7758 25.221C15.4258 24.5377 15.0425 23.8377 14.6425 23.121C14.2425 22.4043 13.8425 21.6877 13.4425 20.9543H13.4091C13.0591 21.671 12.6758 22.3877 12.2925 23.1044C11.9091 23.821 11.5258 24.5377 11.1591 25.2377C10.7758 25.9377 10.3925 26.6543 10.0091 27.3377C9.94248 27.5043 9.80914 27.521 9.62581 27.521H5.95914C5.89248 27.521 5.84248 27.5543 5.84248 27.471C5.82581 27.4043 5.84248 27.3377 5.87581 27.2877L11.0591 18.7877L6.00914 10.2377C5.95914 10.171 5.94248 10.1043 5.97581 10.071C6.00914 10.021 6.07581 10.0043 6.14248 10.0043H9.92581C10.0091 10.0043 10.0925 10.021 10.1591 10.0377C10.2258 10.071 10.2758 10.121 10.3258 10.1877C10.6425 10.9043 11.0091 11.621 11.3925 12.3377C11.7925 13.0543 12.1758 13.7543 12.5925 14.4543C12.9925 15.1543 13.3591 15.8543 13.7091 16.571H13.7425C14.0925 15.8377 14.4591 15.121 14.8258 14.421C15.1925 13.721 15.5758 13.021 15.9591 12.321C16.3425 11.621 16.7091 10.9043 17.0758 10.221C17.0925 10.1543 17.1258 10.0877 17.1758 10.0543C17.2425 10.021 17.3091 10.0043 17.3925 10.021H20.9091C20.9925 10.0043 21.0758 10.0543 21.0925 10.1377C21.1091 10.1543 21.0758 10.221 21.0425 10.2543ZM28.7425 27.8377C27.5091 27.8543 26.2758 27.6043 25.1591 27.0877C24.1091 26.6043 23.2425 25.8043 22.6425 24.821C22.0258 23.8043 21.7258 22.5377 21.7258 21.021C21.7091 19.7877 22.0258 18.571 22.6425 17.5043C23.2758 16.421 24.1925 15.521 25.2925 14.921C26.4591 14.271 27.8591 13.9543 29.5091 13.9543C29.5925 13.9543 29.7091 13.9543 29.8591 13.971C30.0091 13.9877 30.1758 13.9877 30.3758 14.0043V8.73768C30.3758 8.62102 30.4258 8.55435 30.5425 8.55435H33.9258C34.0091 8.53768 34.0758 8.60435 34.0925 8.67101V24.571C34.0925 24.871 34.1091 25.2043 34.1258 25.571C34.1591 25.921 34.1758 26.2543 34.1925 26.5377C34.1925 26.6543 34.1425 26.7543 34.0258 26.8043C33.1591 27.171 32.2425 27.4377 31.3091 27.6044C30.4591 27.7544 29.6091 27.8377 28.7425 27.8377ZM30.3758 24.5043V17.171C30.2258 17.1377 30.0758 17.1043 29.9258 17.0877C29.7425 17.071 29.5591 17.0543 29.3758 17.0543C28.7258 17.0543 28.0758 17.1877 27.4925 17.4877C26.9258 17.771 26.4425 18.1877 26.0758 18.721C25.7091 19.2543 25.5258 19.971 25.5258 20.8377C25.5091 21.421 25.6091 22.0043 25.8091 22.5543C25.9758 23.0043 26.2258 23.4043 26.5591 23.7377C26.8758 24.0377 27.2591 24.271 27.6925 24.4043C28.1425 24.5543 28.6091 24.621 29.0758 24.621C29.3258 24.621 29.5591 24.6043 29.7758 24.5877C29.9925 24.6043 30.1758 24.571 30.3758 24.5043Z"
        fill="#FF61F6"
      />
    </g>
    <defs>
      <clipPath id="clip0_3250_6336">
        <rect width="40" height="39.008" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const IllustratorIcon = () => (
  <svg
    width="40"
    height="39"
    viewBox="0 0 40 39"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_3250_6363)">
      <path
        d="M32.9167 0.00195312H7.08333C3.17132 0.00195312 0 3.17327 0 7.08529V31.9186C0 35.8306 3.17132 39.002 7.08333 39.002H32.9167C36.8287 39.002 40 35.8306 40 31.9186V7.08529C40 3.17327 36.8287 0.00195312 32.9167 0.00195312Z"
        fill="#330000"
      />
      <path
        d="M19.3861 23.4057H13.1878L11.9261 27.324C11.8911 27.4707 11.7561 27.5724 11.6045 27.5657H8.46445C8.28612 27.5657 8.22278 27.4674 8.27612 27.2707L13.6428 11.814C13.6961 11.6524 13.7495 11.469 13.8045 11.264C13.8745 10.9057 13.9111 10.5424 13.9111 10.1774C13.8978 10.0874 13.9611 10.0024 14.0528 9.98904C14.0678 9.98738 14.0845 9.98738 14.0995 9.98904H18.3661C18.4911 9.98904 18.5628 10.034 18.5811 10.124L24.6728 27.2974C24.7261 27.4757 24.6728 27.5657 24.5111 27.5657H21.0228C20.8995 27.579 20.7845 27.499 20.7545 27.3774L19.3861 23.4057ZM14.1528 20.024H18.3928C18.2861 19.6657 18.1595 19.264 18.0178 18.8157C17.8745 18.369 17.7228 17.8907 17.5611 17.3807C17.3995 16.8707 17.2395 16.3607 17.0778 15.8507C16.9161 15.3407 16.7695 14.849 16.6345 14.3757C16.4995 13.9024 16.3795 13.4674 16.2728 13.074H16.2461C16.0945 13.799 15.9078 14.5157 15.6828 15.2207C15.4328 16.0257 15.1778 16.849 14.9178 17.689C14.6578 18.5307 14.4028 19.309 14.1528 20.024Z"
        fill="#FF9A00"
      />
      <path
        d="M28.2901 12.8329C27.7368 12.8546 27.2001 12.6413 26.8151 12.2429C26.4318 11.8279 26.2285 11.2779 26.2518 10.7129C26.2318 10.1529 26.4518 9.61127 26.8551 9.22293C27.2551 8.8396 27.7901 8.63127 28.3451 8.64627C28.9885 8.64627 29.4951 8.83793 29.8618 9.22293C30.2351 9.62627 30.4335 10.1629 30.4118 10.7129C30.4351 11.2796 30.2268 11.8313 29.8351 12.2429C29.4251 12.6463 28.8668 12.8613 28.2918 12.8329H28.2901ZM26.4385 27.2963V14.4696C26.4385 14.3079 26.5101 14.2279 26.6535 14.2279H29.9535C30.0968 14.2279 30.1685 14.3079 30.1685 14.4696V27.2963C30.1685 27.4746 30.0968 27.5646 29.9535 27.5646H26.6801C26.5185 27.5646 26.4385 27.4746 26.4385 27.2963Z"
        fill="#FF9A00"
      />
    </g>
    <defs>
      <clipPath id="clip0_3250_6363">
        <rect width="40" height="39" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const PhotoshopIcon = () => (
  <svg
    width="40"
    height="39"
    viewBox="0 0 40 39"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_3250_6352)">
      <path
        d="M32.9167 0.00195312H7.08333C3.17132 0.00195312 0 3.17327 0 7.08529V31.9186C0 35.8306 3.17132 39.002 7.08333 39.002H32.9167C36.8287 39.002 40 35.8306 40 31.9186V7.08529C40 3.17327 36.8287 0.00195312 32.9167 0.00195312Z"
        fill="#001E36"
      />
      <path
        d="M9.00557 27.351V10.2044C9.00557 10.0794 9.05891 10.016 9.16724 10.016C9.45391 10.016 9.71391 10.011 10.1072 10.0027C10.5006 9.99437 10.9256 9.98437 11.3822 9.97603C11.8389 9.9677 12.3222 9.9577 12.8306 9.94937C13.3406 9.94103 13.8456 9.93604 14.3472 9.93604C15.7072 9.93604 16.8522 10.106 17.7822 10.446C18.6222 10.7294 19.3872 11.1977 20.0222 11.8144C20.5606 12.3494 20.9772 12.9944 21.2439 13.706C21.4956 14.3977 21.6222 15.1294 21.6189 15.866C21.6189 17.2977 21.2872 18.4777 20.6256 19.4077C19.9589 20.341 19.0222 21.0494 17.9422 21.4344C16.8156 21.8544 15.5622 21.9977 14.1856 21.9977C13.7922 21.9977 13.5139 21.9927 13.3539 21.9844C13.1922 21.976 12.9522 21.971 12.6289 21.971V27.3244C12.6456 27.441 12.5639 27.5494 12.4472 27.566C12.4272 27.5694 12.4072 27.5694 12.3872 27.566H9.19224C9.06724 27.566 9.00391 27.4944 9.00391 27.351H9.00557ZM12.6289 13.236V18.8277C12.8606 18.846 13.0756 18.8544 13.2722 18.8544H14.1572C14.8089 18.8527 15.4556 18.7494 16.0756 18.5477C16.6072 18.3894 17.0822 18.0827 17.4439 17.6627C17.7922 17.251 17.9672 16.6794 17.9672 15.946C17.9806 15.4277 17.8456 14.9144 17.5789 14.4694C17.2972 14.0394 16.8889 13.7077 16.4122 13.516C15.7889 13.2744 15.1222 13.1594 14.4539 13.181C14.0239 13.181 13.6439 13.186 13.3139 13.1944C12.9822 13.2044 12.7539 13.2177 12.6289 13.2344V13.236Z"
        fill="#31A8FF"
      />
      <path
        d="M31.9948 17.811C31.4898 17.5527 30.9531 17.3627 30.3981 17.2477C29.7865 17.1077 29.1615 17.036 28.5331 17.0327C28.1931 17.0227 27.8548 17.0643 27.5265 17.1527C27.3182 17.1993 27.1332 17.3177 27.0032 17.4877C26.9165 17.6243 26.8698 17.7827 26.8698 17.9443C26.8748 18.101 26.9315 18.2527 27.0315 18.3743C27.1881 18.5577 27.3798 18.7077 27.5948 18.8177C27.9782 19.0243 28.3715 19.2077 28.7748 19.3677C29.6748 19.6693 30.5365 20.0793 31.3381 20.5893C31.8848 20.9343 32.3365 21.4093 32.6531 21.971C32.9198 22.5043 33.0531 23.0927 33.0415 23.6877C33.0581 24.4743 32.8331 25.246 32.3981 25.901C31.9315 26.566 31.2848 27.0827 30.5331 27.391C29.7181 27.7493 28.7131 27.9277 27.5148 27.9277C26.7531 27.936 25.9932 27.8627 25.2482 27.7127C24.6598 27.6043 24.0882 27.4243 23.5448 27.176C23.4248 27.1143 23.3515 26.9893 23.3565 26.8543V23.956C23.3498 23.8977 23.3765 23.841 23.4231 23.8077C23.4698 23.781 23.5298 23.786 23.5715 23.821C24.2131 24.1993 24.9098 24.476 25.6381 24.6393C26.2798 24.7993 26.9365 24.886 27.5965 24.8943C28.2231 24.8943 28.6831 24.8143 28.9781 24.6527C29.2498 24.5277 29.4248 24.2543 29.4215 23.9543C29.4215 23.7227 29.2865 23.4977 29.0198 23.2843C28.7515 23.0693 28.2065 22.811 27.3831 22.506C26.5398 22.2127 25.7415 21.806 25.0081 21.2993C24.4831 20.9343 24.0515 20.4527 23.7465 19.891C23.4831 19.3627 23.3498 18.7777 23.3581 18.1877C23.3581 17.4777 23.5515 16.781 23.9215 16.176C24.3431 15.5093 24.9498 14.9777 25.6665 14.646C26.4531 14.2527 27.4382 14.056 28.6182 14.056C29.3098 14.051 29.9998 14.0993 30.6848 14.2043C31.1798 14.2677 31.6648 14.3977 32.1232 14.5927C32.1965 14.6143 32.2565 14.6693 32.2848 14.741C32.3032 14.806 32.3115 14.8743 32.3115 14.9427V17.6527C32.3148 17.7177 32.2848 17.7777 32.2315 17.8143C32.1581 17.851 32.0731 17.851 31.9998 17.8143L31.9948 17.811Z"
        fill="#31A8FF"
      />
    </g>
    <defs>
      <clipPath id="clip0_3250_6352">
        <rect width="40" height="39" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const HTMLIcon = () => (
  <svg
    width="36"
    height="41"
    viewBox="0 0 36 41"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_3250_6377)">
      <path
        d="M3.01833 36.7051L0.00390625 0.0683594L36.0039 0.141983L32.8165 36.7051L18.1398 40.9314L3.01833 36.7051Z"
        fill="#E34F26"
      />
      <path
        d="M18.1367 37.3927V3.55713L32.9618 3.60621L30.3181 33.8787L18.1367 37.3927Z"
        fill="#EF652A"
      />
      <path
        d="M28.882 12.0094L29.3018 7.53711H6.49609L7.75609 21.2484H23.4954L22.8781 27.0964L17.8375 28.4476L12.7229 26.9734L12.4512 23.4842H7.92913L8.54693 30.6101L17.8373 33.1901L27.2016 30.6101L28.4616 16.7025H11.9321L11.4626 12.0094H28.882Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_3250_6377">
        <rect width="36" height="41" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const CSSIcon = () => (
  <svg
    width="34"
    height="39"
    viewBox="0 0 34 39"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_3250_6381)">
      <path
        d="M2.85086 34.914L0.00390625 0.0649414L34.0039 0.134973L30.9935 34.914L17.1322 38.9341L2.85086 34.914Z"
        fill="#1B73BA"
      />
      <path
        d="M17.1289 35.5683V3.38379L31.1303 3.43048L28.6335 32.226L17.1289 35.5683Z"
        fill="#1C88C7"
      />
      <path
        d="M27.6481 7.49805H6.10938L6.69286 11.7049H16.9137L6.85628 16.029L7.43949 20.0958H22.2577L21.7209 25.7753L16.7037 26.7571L12.1534 25.5886L11.8033 22.363H7.62621L8.18612 29.0712L17.147 31.572L25.7348 28.8375L26.8315 15.725H17.7536L27.6478 11.6115L27.6481 7.49805Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_3250_6381">
        <rect width="34" height="39" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const JSIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_3250_6374)">
      <path
        d="M0 1.91385C0 0.856857 0.856858 0 1.91385 0H38.0862C39.1431 0 40 0.856858 40 1.91385V38.0862C40 39.1431 39.1431 40 38.0862 40H1.91385C0.856857 40 0 39.1431 0 38.0862V1.91385Z"
        fill="#F0DB4F"
      />
      <path
        d="M36.7325 30.4602C36.4397 28.6351 35.2496 27.1028 31.7249 25.6731C30.5005 25.1104 29.1355 24.7074 28.7287 23.7796C28.5842 23.2396 28.5652 22.9355 28.6564 22.6085C28.9188 21.5476 30.1849 21.2168 31.1887 21.521C31.8351 21.7377 32.4473 22.2359 32.8161 23.0305C34.5423 21.9127 34.5385 21.9203 35.7439 21.1522C35.3028 20.4678 35.0671 20.1522 34.7781 19.8595C33.7401 18.6998 32.3256 18.1028 30.0633 18.1484C29.6716 18.1979 29.2762 18.2511 28.8845 18.3005C27.7553 18.5857 26.6792 19.1788 26.048 19.9735C24.1545 22.1218 24.6944 25.8822 26.9986 27.4298C29.2686 29.1332 32.6032 29.5211 33.029 31.1142C33.4435 33.0648 31.5956 33.6959 29.7591 33.4716C28.4055 33.1903 27.6526 32.502 26.8389 31.2511C25.3409 32.118 25.3409 32.118 23.8009 33.0039C24.166 33.8024 24.5499 34.1636 25.1622 34.8557C28.0595 37.7948 35.3104 37.6503 36.6108 33.2017C36.664 33.0495 37.0139 32.0305 36.7325 30.4602ZM21.7515 18.3841H18.01C18.01 21.6161 17.9949 24.8252 17.9949 28.0571C17.9949 30.1142 18.1013 32.0001 17.7667 32.578C17.2192 33.7149 15.8009 33.5742 15.1545 33.3537C14.4968 33.0305 14.1622 32.5704 13.7743 31.9203C13.6679 31.7339 13.588 31.5895 13.5614 31.578C12.5462 32.1978 11.5347 32.8214 10.5195 33.4412C11.0253 34.4792 11.7705 35.3803 12.7249 35.9658C14.1507 36.8214 16.0671 37.0837 18.0709 36.6236C19.3751 36.2434 20.5005 35.4564 21.0899 34.2587C21.9416 32.6883 21.7591 30.7872 21.7515 28.6845C21.7705 25.2549 21.7515 21.8252 21.7515 18.3841Z"
        fill="#323330"
      />
    </g>
    <defs>
      <clipPath id="clip0_3250_6374">
        <rect width="40" height="40" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 px-4 sm:px-6 lg:px-8 pt-20 sm:pt-0 transition-colors duration-300">
      <div className="max-w-7xl w-full">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-sm mb-4 sm:mb-6 text-sm sm:text-base"
            >
              <Sparkles size={16} className="text-purple-600 dark:text-purple-400 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">
                Available for freelance
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight"
            >
              Hi, I'm Ahmed Shahriyar
              <br />
              <span className="text-purple-600 dark:text-purple-400">
                UI/UX Designer
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 max-w-lg text-sm sm:text-base"
            >
              Creative and detail-oriented UI/UX Designer with
              experience in designing for web, mobile, and CRM
              platforms. Skilled in Figma, Adobe XD, Framer and
              prototyping tools. I focus on building intuitive,
              user-centric interfaces that enhance engagement
              and support business growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 dark:bg-purple-600 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-purple-700 transition-colors w-full sm:w-auto"
              >
                View My Work
                <ArrowRight size={20} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg border-2 border-gray-900 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors w-full sm:w-auto"
              >
                Get in Touch
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 md:order-2"
          >
            <div className="relative w-full aspect-square max-w-xs sm:max-w-md md:max-w-lg mx-auto">
              {/* Animated gradient backdrop */}
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                  scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                }}
                className="absolute -inset-2 sm:-inset-3 md:-inset-4 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 dark:from-purple-600 dark:via-pink-600 dark:to-blue-600 opacity-15 blur-[40px] sm:blur-[60px] md:blur-[80px] rounded-[2rem] sm:rounded-[3rem] md:rounded-[4rem]"
              />

              {/* Outer container with gradient - Rectangle */}
              <div
                className="absolute inset-0 rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3.5rem]"
                style={{
                  background: "linear-gradient(135deg, rgba(168,85,247,0.15) 0%, rgba(236,72,153,0.15) 50%, rgba(59,130,246,0.15) 100%)",
                  boxShadow: "0 0 50px rgba(168,85,247,0.25)",
                }}
              />

              {/* Inner decorative corners */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute inset-4 sm:inset-6 md:inset-8 border-[2px] border-dashed border-purple-300/50 dark:border-purple-400/40 rounded-xl sm:rounded-2xl"
              />

              {/* Profile image container - Rectangle */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ 
                  scale: 1, 
                  opacity: 1,
                }}
                transition={{ 
                  delay: 0.5, 
                  duration: 0.6,
                }}
                className="absolute inset-8 sm:inset-12 md:inset-16 overflow-hidden shadow-2xl ring-4 sm:ring-6 md:ring-8 ring-white/50 dark:ring-gray-800/50 rounded-xl sm:rounded-2xl"
                style={{
                  boxShadow: "0 25px 70px rgba(0,0,0,0.25), 0 0 50px rgba(168,85,247,0.25)",
                }}
              >
                <ImageWithFallback
                  src={profileImage}
                  alt="Ahmed Shahriyar - UI/UX Designer"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Skill badges positioned decoratively around the profile */}
              {/* Framer - Top Right */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  x: 0, 
                  y: 0,
                }}
                transition={{ delay: 0.8, duration: 0.6, scale: { duration: 0.2 }, rotate: { duration: 0.2 } }}
                whileHover={{ scale: 1.25, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="absolute -top-3 -right-3 sm:-top-6 sm:-right-6 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-blue-900/30 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg sm:shadow-2xl ring-2 sm:ring-4 ring-blue-100 dark:ring-blue-700/50 backdrop-blur-sm cursor-pointer z-10"
                style={{
                  boxShadow: "0 15px 40px rgba(59,130,246,0.4), 0 0 0 1px rgba(255,255,255,0.1)",
                }}
              >
                <FramerIcon />
              </motion.div>

              {/* Figma - Top Left */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  x: 0, 
                  y: 0,
                }}
                transition={{ delay: 0.9, duration: 0.6, scale: { duration: 0.2 }, rotate: { duration: 0.2 } }}
                whileHover={{ scale: 1.25, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                className="absolute -top-3 -left-3 sm:-top-6 sm:-left-6 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-purple-900/30 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg sm:shadow-2xl ring-2 sm:ring-4 ring-purple-100 dark:ring-purple-700/50 backdrop-blur-sm cursor-pointer z-10"
                style={{
                  boxShadow: "0 15px 40px rgba(168,85,247,0.4), 0 0 0 1px rgba(255,255,255,0.1)",
                }}
              >
                <FigmaIcon />
              </motion.div>

              {/* HTML - Bottom Right */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: -20 }}
                animate={{ 
                  opacity: 1, 
                  x: 0, 
                  y: 0,
                }}
                transition={{ delay: 1.2, duration: 0.6, scale: { duration: 0.2 }, rotate: { duration: 0.2 } }}
                whileHover={{ scale: 1.25, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="absolute -bottom-3 -right-3 sm:-bottom-6 sm:-right-6 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center bg-gradient-to-br from-white to-orange-50 dark:from-gray-800 dark:to-orange-900/30 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg sm:shadow-2xl ring-2 sm:ring-4 ring-orange-100 dark:ring-orange-700/50 backdrop-blur-sm cursor-pointer z-10"
                style={{
                  boxShadow: "0 15px 40px rgba(249,115,22,0.4), 0 0 0 1px rgba(255,255,255,0.1)",
                }}
              >
                <HTMLIcon />
              </motion.div>

              {/* JavaScript - Bottom Left */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: -20 }}
                animate={{ 
                  opacity: 1, 
                  x: 0, 
                  y: 0,
                }}
                transition={{ delay: 1.1, duration: 0.6, scale: { duration: 0.2 }, rotate: { duration: 0.2 } }}
                whileHover={{ scale: 1.25, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center bg-gradient-to-br from-white to-yellow-50 dark:from-gray-800 dark:to-yellow-900/30 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg sm:shadow-2xl ring-2 sm:ring-4 ring-yellow-100 dark:ring-yellow-700/50 backdrop-blur-sm cursor-pointer z-10"
                style={{
                  boxShadow: "0 15px 40px rgba(234,179,8,0.4), 0 0 0 1px rgba(255,255,255,0.1)",
                }}
              >
                <JSIcon />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}