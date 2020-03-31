<template>
  <div id="languages">
    <h1>Languages</h1>
    <div class="row">
      <div class="col-lg-1 float-left p-0 my-4 sp-block"></div>
      <div class="card col-lg-5 float-left p-0 my-4">
        <div class="card-header html"></div>
        <div class="card-body">
          <h4 class="card-title">HTML</h4>
          <p class="career">経験年数：2年</p>
          <p>内容が入ります。</p>
        </div>
      </div>
      <div class="card col-lg-5 float-left p-0 my-4">
        <div class="card-header css"></div>
        <div class="card-body">
          <h4 class="card-title">CSS</h4>
          <p class="career">経験年数：2年</p>
          <p class="framework">FW：Bootstrap4/Sass</p>
          <p>内容が入ります。</p>
        </div>
      </div>
      <div class="col-lg-1 float-left p-0 my-4 sp-block"></div>
      <div class="col-lg-1 float-left p-0 my-4 sp-block"></div>
      <div class="card col-lg-5 float-left p-0 my-4">
        <div class="card-header ruby"></div>
        <div class="card-body">
          <h4 class="card-title">Ruby</h4>
          <p class="career">経験年数：1年</p>
          <p class="framework">FW：Ruby on Rails</p>
          <p>内容が入ります。</p>
        </div>
      </div>
      <div class="card col-lg-5 float-left p-0 my-4">
        <div class="card-header java"></div>
        <div class="card-body">
          <h4 class="card-title">Java/C#</h4>
          <p class="career">経験年数：1年</p>
          <p>内容が入ります。</p>
        </div>
      </div>
      <div class="col-lg-1 float-left p-0 my-4 sp-block"></div>
      <div class="col-lg-1 float-left p-0 my-4 sp-block"></div>
      <div class="card col-lg-5 float-left p-0 my-4">
        <div class="card-header javascript"></div>
        <div class="card-body">
          <h4 class="card-title">JavaScript</h4>
          <p class="career">経験年数：1年</p>
          <p class="framework">FW：Vue</p>
          <p>内容が入ります。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.career, .framework {
  color: gray;
}
.html {
  background-color: #e44b23;
}
.css {
  background-color: #563d7c;
}
.ruby {
  background-color: #701516;
}
.java {
  background-color: #b07219;
}
.javascript {
  background-color: #f1e05a;
}
</style>
