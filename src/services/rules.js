import axios from 'axios';

const getRules = async () => {
  try {
    const result = await axios.get('/2021/downloads/MagicCompRules%2020210419.txt');
    return result.data;
  } catch (error) {
    return [];
  }
};

export default { getRules };
