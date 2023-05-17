import React from 'react';
import axios from 'axios';

const fetchDigimon = async (digimon: string) => {
    try {
      const response = await axios.get(`https://digimon-api.com/api/v1/digimon/}`);
      return response.data;
    } catch (error) {
      throw new Error(`Erro ao obter dados do servidor`);
    }
  };
  export default fetchDigimon;