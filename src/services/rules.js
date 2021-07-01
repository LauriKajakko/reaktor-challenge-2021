import axios from 'axios';

const getRules = async () => {
  const result = await axios.get('/api/rules.txt');
  return result.data;
};

export default { getRules };
