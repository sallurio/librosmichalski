import axios from "axios";
export default class LivrosApi {
  async buscarTodosOsLivros() {
    const response = await axios.get("http://localhost:5173/livros");
    return response.data;
  }

  async buscarLivro(id) {
    const response = await axios.get(`http://localhost:5173/livros/${id}`);
    return response.data;
  }

  async adicionarLIvro(livro) {
    const response = await axios.post("http://localhost:5173/livros", livro);
    return response.data;
  }

  async excluirLivro(id) {
    const response = await axios.delete(`http://localhost:5173/livros/${id}`);
    return response.data;
  }

  async atualizarLivro(livro) {
    const response = await axios.put(
      `http://localhost:5173/livros/${livro.id}`,
      livro
    );
    return response.data;
  }
}
