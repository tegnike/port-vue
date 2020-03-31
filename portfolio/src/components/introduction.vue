<template>
  <div id="introduction">
    <h1>Introduction</h1>
    <img src="./../assets/icon.jpg" alt="" class="my-3">
    <div class="row">
      <table class="table col-lg-10 mt-4 mx-auto">
        <thead>
          <tr>
            <th class="key">KEY</th>
            <th class="value">VALUE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>tegnike</td>
          </tr>
          <tr>
            <td>Educational Background</td>
            <td>東京理科大学大学院 薬科学科</td>
          </tr>
          <tr>
            <td>Age</td>
            <td>28</td>
          </tr>
          <tr>
            <td>Github</td>
            <td><a href="https://github.com/tegnike">tegnike</a></td>
          </tr>
          <tr>
            <td>Twitter</td>
            <td><a href="https://twitter.com/teg_nike">teg_nike</a></td>
          </tr>
          <tr>
            <td>Qiita</td>
            <td><a href="https://qiita.com/tegnike">tegnike</a></td>
          </tr>
        </tbody>
      </table>
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
  background-color: rgba(65, 184, 131, 0.5);
}
tr > th {
  color: white;
  border-bottom: none;
}
</style>
