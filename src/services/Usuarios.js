import axios from "axios";

const API_URL = "http://localhost:3000";

const api = axios.create({
  baseURL: API_URL,
});

const apiUsuarios = {
  Login: async (email,senha) => {
    try {
      const response = await api.get(`/usuarios/:${email}/:${senha}`);
      return response.data;
    } catch (error) {
      throw new Error("Erro ao logar usuario: " + error.message);
    }
  },
  createUsuarios: async () => {
    try {
      const response = await api.post("/usuarios");
      return response.data;
    } catch (error) {
      throw new Error("Erro ao criar usuarios: " + error.message);
    }
  },
  updateUsuarios: async (id) => {
    try {
      const response = await api.get(`/usuarios/:${id}`);
      return response.data;
    } catch (error) {
      throw new Error("Erro ao atualizar usuarios: " + error.message);
    }
  },
  deleteUsuarios: async (id) => {
    try {
      const response = await api.get(`/usuarios/:${id}`);
      return response.data;
    } catch (error) {
      throw new Error("Erro ao delete usuarios: " + error.message);
    }
  },

};

export default apiUsuarios;