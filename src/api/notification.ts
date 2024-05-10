import {CONST} from '../CONST';

const notification = async () => {
  try {
    const response = await fetch(`${CONST.BASE_URL}/notification`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      // Handle non-2xx status codes here
      throw new Error(`API request failed with status: ${response.status}`);
    }

    const data = await response.json();
    return {ok: response.ok, error: null, data};
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return {ok: false, error: error.message, data: []}; // Return error data
  }
};

export default notification;
