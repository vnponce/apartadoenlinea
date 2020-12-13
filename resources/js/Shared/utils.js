// eslint-disable-next-line import/prefer-default-export
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
