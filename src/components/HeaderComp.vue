<template>
  <header>
    <div class="menu-esquerdo">
      <span>
        <RouterLink to="/">Home</RouterLink>
      </span>
      <span>|</span>
      <span>
        <RouterLink to="/livros">Livros</RouterLink>
      </span>
      <span>|</span>
      <span>
        <RouterLink to="/autores">Autores</RouterLink>
      </span>
      <span>|</span>
      <span>
        <RouterLink to="/editoras">Editoras</RouterLink>
      </span>
      <span>|</span>
      <span>
        <RouterLink to="/categorias">Categorias</RouterLink>
      </span>
    </div>
    <div class="menu-direito">
      <span>
        <a>Sair</a>
      </span>
    </div>
  </header>
</template>
<style>
header span {
  padding: 0 20px;
}

header {
  height: 10%;
  background-color: #634832;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  padding-left: 20px;
  justify-content: space-between;
}

.form-input {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}
</style>
