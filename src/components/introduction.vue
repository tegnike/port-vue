<template>
  <div id="introduction">
    <h1>Introduction</h1>
    <img src="./../assets/icon.jpg" alt="" class="my-3">
    <p class="table col-lg-9 mt-4 mx-auto">
      はじめまして、ニケです。<br>
      <br>
      ポーランドからフルリモートで働いているサーバーサイドエンジニアです。<br>
      エンジニア歴は2年弱、リモート歴は1年になります。<br>
      <br>
      得意な言語は<span class="text-weight-bold">Ruby on Rails</span>ですが、いろいろな言語に触ることが好きです。
    </p>
    <div class="row">
      <table class="table col-lg-8 mt-4 mx-auto">
        <thead>
          <tr>
            <th class="key">KEY</th>
            <th class="value">VALUE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>名前</td>
            <td>ニケ</td>
          </tr>
          <tr>
            <td>最終学歴</td>
            <td>東京理科大学大学院 薬科学科</td>
          </tr>
          <tr>
            <td>年齢</td>
            <td>28</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="text-align-center">
      <a href="https://github.com/tegnike" target="_blank"><b-button class="m-3">Github</b-button></a>
      <a href="https://twitter.com/tegnike" target="_blank"><b-button variant="info" class="m-3">Twitter</b-button></a>
      <a href="https://qiita.com/tegnike" target="_blank"><b-button variant="success" class="m-3">Qiita</b-button></a>
    </div>
  </div>
</template>

<style scoped>
img {
  width: 200px;
  height: 200px;
  border: 1px solid #ddd;
  border-radius: 50%;
}
thead {
  background-color: rgba(65, 184, 131, 0.7);
}
tr > th {
  color: white;
  border-bottom: none;
}
</style>
