import {CONST} from '../CONST';
import storeToken from '../utils/TokenUtils/storeToken';

const signup = async data => {
  const response = await fetch(`${CONST.BASE_URL}/user/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({...data, name: data.firstName + '' + data.lastName}),
  });

  if (response.ok) {
    const token = response.headers.get('Authorization')?.split(' ')[1]; // Extract from header
    await storeToken(token);
  }

  return;
};

export default signup;
