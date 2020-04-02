<template>
  <div id="works">
    <h1>Works</h1>
    <div class="col-lg-9 my-4 mx-auto card-parent">
      <b-card header="PORT（ポートフォリオ共有サイト）">
        <b-card-text class="text-left">
          　私が最初に作ったサービスです。エンジニアが自身のポートフォリオを共有することができます。 他のエンジニアのポートフォリオを参考にしたり、レビューを依頼することで、ポートフォリオのブラッシュアップに活用できます。
        </b-card-text>
        <b-card-text class="text-left">
          【主な使用技術】<br>
          Ruby 2.5.3, Rails 5.2.3, SASS, Bootstrap, JQuery<br>
          Dockerfile/docker-compose.yml<br>
          Redis, Webpacker, RSpec<br>
          CircleCi, AWS(ECS, ECRなど)
        </b-card-text>
        <a href="https://github.com/tegnike/PORT" target="_blank"><b-button class="m-3">Github</b-button></a>
        <a href="https://port-port.herokuapp.com/" target="_blank"><b-button variant="primary" class="m-3">Webサイト</b-button></a>
      </b-card>
      <b-card header="ポートフォリオサイト">
        <b-card-text class="text-left">
          　このサイトです。SPAを作成してみたかったので、Vue.jsを使用しています。
        </b-card-text>
        <b-card-text class="text-left">
          【主な使用技術】<br>
          Vue.js 2.6.1<br>
          Dockerfile/docker-compose.yml<br>
          Github Pages
        </b-card-text>
        <a href="https://github.com/tegnike/port-vue" target="_blank"><b-button class="m-3">Github</b-button></a>
      </b-card>
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
