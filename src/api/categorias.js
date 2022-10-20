import axios from "axios";
export default class CategoriasApi {
  async buscarTodosAsCategorias() {
    const response = await axios.get(
      "https://librosmichalski.herokuapp.com/categorias"
    );
    return response.data;
  }

  async buscarCategoria(id) {
    const response = await axios.get(
      `https://librosmichalski.herokuapp.com/categorias/${id}`
    );
    return response.data;
  }

  async adicionarCategoria(editora) {
    const response = await axios.post(
      "https://librosmichalski.herokuapp.com/categorias",
      editora
    );
    return response.data;
  }

  async excluirCategoria(id) {
    const response = await axios.delete(
      `https://librosmichalski.herokuapp.com/categorias/${id}`
    );
    return response.data;
  }

  async atualizarCategoria(categoria) {
    const response = await axios.put(
      `https://librosmichalski.herokuapp.com/categorias/${categoria.id}`,
      categoria
    );
    return response.data;
  }
}
