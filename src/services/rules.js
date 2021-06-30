import axios from 'axios';

const getRules = async () => {
  const result = await axios.get('/2021/downloads/MagicCompRules%2020210419.txt');
  return result.data;
};

export default { getRules };
