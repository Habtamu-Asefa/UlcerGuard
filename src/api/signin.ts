import {CONST} from '../CONST';
import storeToken from '../utils/TokenUtils/storeToken';

const signin = async user => {
  console.log('Data receieved in signin: ', user);
  const response = await fetch(`${CONST.BASE_URL}/user/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });

  if (response.ok) {
    const token = response.headers.get('Authorization')?.split(' ')[1]; // Extract from header
    await storeToken(token);
  }

  return;
};

export default signin;
