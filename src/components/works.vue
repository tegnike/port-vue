<template>
  <div id="works">
    <h1>Works</h1>
    <div class="col-lg-9 my-4 mx-auto card-parent">
     <div class="card mb-4">
       <h3 class="card-header">PORT（ポートフォリオ共有サイト）</h3>
       <div class="card-body">
         <p class="card-text text-left">
            　私が最初に作ったサービスです。エンジニアが自身のポートフォリオを共有することができます。 他のエンジニアのポートフォリオを参考にしたり、レビューを依頼することで、ポートフォリオのブラッシュアップに活用できます。
         </p>
         <p class="card-text text-left">
           【主な使用技術】<br>
           Ruby 2.5.3, Rails 5.2.3, SASS, Bootstrap, JQuery<br>
           Dockerfile/docker-compose.yml<br>
           Redis, Webpacker, RSpec<br>
           CircleCi, AWS(ECS, ECRなど)
         </p>
         <a href="https://github.com/tegnike/PORT" target="_blank"><b-button class="m-3">Github</b-button></a>
         <a href="https://port-port.herokuapp.com/" target="_blank"><b-button variant="primary" class="m-3">Webサイト</b-button></a>
       </div>
     </div>
     <div class="card">
       <h3 class="card-header">ポートフォリオサイト</h3>
       <div class="card-body">
         <p class="card-text text-left">
           　このサイトです。SPAを作成してみたかったので、Vue.jsを使用しています。
         </p>
         <p class="card-text text-left">
           【主な使用技術】<br>
           Vue.js 2.6.1<br>
           Dockerfile/docker-compose.yml<br>
           Github Pages
         </p>
         <a href="https://github.com/tegnike/port-vue" target="_blank"><b-button class="m-3">Github</b-button></a>
       </div>
     </div>
   </div>
  </div>
</template>

<style scoped>
.card {
  margin-bottom: 30px;
}
.card-header {
  font-size: 1.5rem;
  font-weight: bold;
}
</style>
