import axios from "axios";

const API_URL = "http://localhost:3000";

const api = axios.create({
  baseURL: API_URL,
});

const apiAvatares = {
    getAllavatares: async () => {
    try {
      const response = await api.get("/avatares");
      return response.data;
    } catch (error) {
      throw new Error("Erro ao logar avatares: " + error.message);
    }
  },
  DeleteAvatares: async (id) => {
    try {
      const response = await api.post(`/planeta/:${id}`);
      return response.data;
    } catch (error) {
      throw new Error("Erro ao criar avatares: " + error.message);
    }
  }

};

export default apiAvatares;