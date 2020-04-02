<template>
  <div class="home">
    <h1 class="display-4 font-weight-bold">
      Welcome to My Portfolio !!
      <span class="d-block">
        <span class="by">by</span> <span class="text-success">ニケ</span>
      </span>
    </h1>
    <p>
      はじめまして、ニケです。<br>
      このWebサイトは<span class="font-weight-bold">Vue.js</span>を使用してSPAで作成されています。
    </p>
  </div>
</template>

<style scoped>
h1 {
  width: 100%;
  margin-top: 150px;
  border-bottom: none;
}
h1 > span {
  margin-top: 10px
}
p {
  margin-top: 50px;
}
.by {
  font-size: 2.5rem;
}
</style>
