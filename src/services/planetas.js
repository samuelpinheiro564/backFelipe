import axios from "axios";

const API_URL = "http://localhost:3000";

const api = axios.create({
  baseURL: API_URL,
});

const apiPlanetas = {
  getAllplanetas: async () => {
    try {
      const response = await api.get("/planeta");
      return response.data;
    } catch (error) {
      throw new Error("Erro ao logar planetas: " + error.message);
    }
  },
  CreatePlanetas: async () => {
    try {
      const response = await api.post("/planeta");
      return response.data;
    } catch (error) {
      throw new Error("Erro ao criar planetas: " + error.message);
    }
  },
  UpdatePlanetas: async (id) => {
    try {
      const response = await api.get(`/planeta/:${id}`);
      return response.data;
    } catch (error) {
      throw new Error("Erro ao atualizar planetas: " + error.message);
    }
  },
  DeletePlanetas: async (id) => {
    try {
      const response = await api.get(`/planeta/:${id}`);
      return response.data;
    } catch (error) {
      throw new Error("Erro ao delete planetas: " + error.message);
    }
  },

};

export default apiPlanetas;