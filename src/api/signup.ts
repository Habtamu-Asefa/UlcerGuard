import {CONST} from '../CONST';

const signup = async () => {
  const response = await fetch(`${CONST.BASE_URL}/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization:
        'eyJhbGciOiJIUzI1NiJ9.aGFidGFtdQ._mKu-ZixQryMR_I5S1-F64zfNt-vA0CUgc0q4u7ETyQ',
    },
    body: JSON.stringify({
      name: 'habtamu',
      email: 'habtamu@gmail.com',
      gender: 'she/her',
      dob: 'Wed Jul 28 1993 14:39:07 GMT+0300 (East Africa Time)',
      weight: '90',
      password: '2156445',
    }),
  });

  return response;
};

export default signup;
