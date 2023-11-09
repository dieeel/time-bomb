# 開発ログ

## 2023/11/2 初期構築

```
npx create-react-app time-bomb
cd time-bomb
```

とりあえず起動確認

```
npm start
```

すぐ使わないそうなファイルおよび記載を削除

削除ファイル

* App.test.js
* logo.svg
* setupTests.js
* reportWebVitals.js

とりあえず使わなそうな記述削除

* `index.js`

`logo` 削除

```
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

* App.js

hellow world.へ

`npm start` 時にこんなメッセージ

```
One of your dependencies, babel-preset-react-app, is importing the
"@babel/plugin-proposal-private-property-in-object" package without
declaring it in its dependencies. This is currently working because
"@babel/plugin-proposal-private-property-in-object" is already in your
node_modules folder for unrelated reasons, but it may break at any time.

babel-preset-react-app is part of the create-react-app project, which
is not maintianed anymore. It is thus unlikely that this bug will
ever be fixed. Add "@babel/plugin-proposal-private-property-in-object" to
your devDependencies to work around this error. This will make this message
go away.
```

## 2023/11/5 コンポーネント作成（プレイヤー）

プレイヤーのコンポーネントを作成  
[reactの流儀](https://ja.react.dev/learn/thinking-in-react)に従い、作成


## 2023/11/9 chakra css framework

* [公式](https://chakra-ui.com/)

```
cd time-bomb/time-bomb
npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

Cardコンポーネントを作ったが、playerコンポーネントとして、スカとかをcardコンポーネントにした方が良いと思われる





