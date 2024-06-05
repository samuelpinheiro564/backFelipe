import axios from "axios";

const API_URL = "http://localhost:3000";

const api = axios.create({
  baseURL: API_URL,
});

const apiNpcs = {
    NpcPeloId: async () => {
    try {
      const response = await api.get("/npcs");
      return response.data;
    } catch (error) {
      throw new Error("Erro ao logar planetas: " + error.message);
    }
  }

};

export default apiNpcs;