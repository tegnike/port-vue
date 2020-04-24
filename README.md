# 私のポートフォリオサイト
Vue.jsを使ってSPAで作成してみました。

<img width="851" alt="PORT_AWS" src="https://user-images.githubusercontent.com/35606144/78299911-e80be980-7536-11ea-8a73-43c848685b7b.png">

## URL
https://tegnike.github.io/port-vue/#/

## 使用技術

### 言語・FW
* Vue 2.6.1

### 開発環境
* Dockerfile/docker-compose.yml

### 本番環境
* Github Pages

## ビルドメモ

1. コンテナ起動
```
docker-compose up
```

2. コンテナに入る
```
docker exec -it port-vue_app_1 sh
```

3. ビルド
```
npm run build
```
