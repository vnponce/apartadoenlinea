// eslint-disable-next-line import/prefer-default-export
import {useWindowSize} from "../hooks/useWindowSize";

export function getParameterByName(name) {
  const match = RegExp(`[?&]${name}=([^&]*)`).exec(window.location.search);
  return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

export const onChange = ({
  data, setData, name, value,
}) => {
  setData({
    ...data,
    [name]: value,
  });
};

export function encodeData(data) {
  return Object.keys(data).map((key) => [key, data[key]].map(encodeURIComponent).join('=')).join('&');
}

export const breakpoints = {
    'sm': 640,
    // => @media (min-width: 640px) { ... }

    'md': 768,
    // => @media (min-width: 768px) { ... }

    'lg': 1024,
    // => @media (min-width: 1024px) { ... }

    'xl': 1280,
    // => @media (min-width: 1280px) { ... }

    '2xl': 1536,
    // => @media (min-width: 1536px) { ... }
}
