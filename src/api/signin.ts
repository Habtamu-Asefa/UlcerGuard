import {CONST} from '../CONST';
import storeToken from '../utils/TokenUtils/storeToken';

const signin = async user => {
  const response = await fetch(`${CONST.BASE_URL}/user/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });

  let responseData;
  console.log(response);

  if (response.ok) {
    responseData = await response.json();
    const token = responseData.token;
    await storeToken(token);
  }

  return {
    ok: response.ok,
    user: responseData?.user,
    error: !response.ok ? 'Error during signin' : null,
  };
};

export default signin;
