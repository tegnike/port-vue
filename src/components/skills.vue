<template>
  <div id="skills">
    <h1>Technical Skills</h1>
    <div class="col-lg-9 my-4 mx-auto">
      <div class="row">
        <div class="card col-lg-6 float-left p-0 mb-4">
          <div class="card-header html"></div>
          <div class="card-body">
            <h4 class="card-title">HTML/CSS</h4>
            <p class="career">経験年数：2年</p>
            <p>個人開発サイトや企業のHP、ランディングページなど、多くのサイトをコーディングした経験があります。CSSはBootstrap4とSassを主に使用しています。</p>
          </div>
        </div>
        <div class="card col-lg-6 float-left p-0 mb-4">
          <div class="card-header ruby"></div>
          <div class="card-body">
            <h4 class="card-title">Ruby</h4>
            <p class="career">経験年数：1年</p>
            <p>個人開発で主に使用している言語で、1番得意です。現在は仕事でもRuby on Railsを使って開発しています。詳細なスキルレベルについては<router-link to="/works">Works</router-link>で紹介しています。</p>
          </div>
        </div>
        <div class="card col-lg-6 float-left p-0 mb-4">
          <div class="card-header java"></div>
          <div class="card-body">
            <h4 class="card-title">Java/C#</h4>
            <p class="career">経験年数：1年</p>
            <p>仕事で使用しています。基本的な内容は理解できています。</p>
          </div>
        </div>
        <div class="card col-lg-6 float-left p-0 mb-4">
          <div class="card-header javascript"></div>
          <div class="card-body">
            <h4 class="card-title">JavaScript</h4>
            <p class="career">経験年数：1年</p>
            <p>主にjQueryを利用して、個人開発サイトのフロントエンドで使用してきました。最近はSPAの動作性に感激して、Vue.jsを勉強し始めました。</p>
          </div>
        </div>
        <div class="card col-lg-6 float-left p-0 mb-4">
          <div class="card-header docker"></div>
          <div class="card-body">
            <h4 class="card-title">Docker</h4>
            <p class="career">経験年数：8ヶ月</p>
            <p>個人で開発する際には必ず使用しています。docker-composeを利用した基本的な操作は一通りできます。</p>
          </div>
        </div>
        <div class="card col-lg-6 float-left p-0 mb-4">
          <div class="card-header aws"></div>
          <div class="card-body">
            <h4 class="card-title">AWS</h4>
            <p class="career">経験年数：初心者</p>
            <p>ECSとECRを使用して、個人開発アプリをデプロイした経験があります。サーバーサイド関連の技術も誠意勉強中です。</p>
          </div>
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
.ruby {
  background-color: #701516;
}
.java {
  background-color: #b07219;
}
.javascript {
  background-color: #f1e05a;
}
.docker {
  background-color: #0D91D3;
}
.aws {
  background-color: #F89500;
}
</style>
