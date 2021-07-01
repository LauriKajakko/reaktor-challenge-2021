import axios from 'axios';

const getRules = async () => {
  const result = await axios.get('http://localhost:3004/api/rules.txt');
  return result.data;
};

export default { getRules };
