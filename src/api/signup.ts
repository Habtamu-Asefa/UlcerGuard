import {CONST} from '../CONST';
import storeToken from '../utils/TokenUtils/storeToken';

const signup = async data => {
  const response = await fetch(`${CONST.BASE_URL}/user/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const error = await response.text();

  if (response.ok) {
    const token = response.headers.get('Authorization')?.split(' ')[1]; // Extract from header
    await storeToken(token);
  }

  return {ok: response.ok, error: error};
};

export default signup;
