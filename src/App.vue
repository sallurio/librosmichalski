<script setup>
import HeaderComp from "@/components/HeaderComp.vue";
</script>

<template>
  <HeaderComp />
  <main>
    <RouterView />
  </main>
</template>
<style>
.form-input input {
  width: 25%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  margin: 5px;
}

.form-input button {
  padding: 0.5rem;
  width: 15%;
  border: 1px solid #634832;
  background-color: #634832;
  font-weight: bold;
  margin-left: 1px;
  color: #38220f;
}

.form-input button:hover {
  cursor: pointer;
  background-color: #553f2d;
}

.lists {
  display: flex;
  justify-content: center;
}

.lists input {
  width: 15%;
  padding: 0.5rem;
  margin-left: 1px;
  text-align: center;
}

.lists button {
  padding: 0.5rem;
  width: 20%;
  border: 1px solid #634832;
  background-color: #634832;
  margin-left: 1px;
  font-style: bold;
}

.lists button:hover {
  cursor: pointer;
  background-color: #553f2d;
}

table {
  width: 80%;
  border-collapse: collapse;
  margin: 0 auto;
  border: 1px solid black;
  font-size: 1.1rem;
}

table thead {
  background-color: #634832;
  font-weight: bold;
  width: 100%;
}

table tbody tr {
  text-align: center;
}

table tbody tr:nth-child(odd) {
  background-color: #967259;
}

.title {
  text-align: center;
  font-size: 35px;
}
</style>
