module.exports = {
  root: true,
  ignorePatterns: [".gitignore", ".*lintrc.{js,ts}"],
  env: { browser: true, es2020: true, jest: true },
  extends: [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "@typescript-eslint"],
  rules: {
    "no-alert": "error",
    "no-console": ["warn", { allow: ["error"] }], // console.error以外のconsole呼び出しについて警告を出す
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }], // ループ処理の単項演算子は許可する
    "react/jsx-props-no-spreading": ["off"], // propsを渡すときにスプレッド構文の使用を禁止しない
    "react/prop-types": "off", // コンポーネントにpropTypesプロパティの設定を強制しない
    "react/require-default-props": "off", // defaultPropsでオプション引数に初期値を設定することを強制しない
    // return文の前に1行空ける
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: "*",
        next: "return",
      },
    ],
    // クラスのメンバを記述する際1行空ける
    "lines-between-class-members": [
      "error",
      "always",
      {
        exceptAfterSingleLine: true, // クラスメンバの記述が1行の場合は1行空けなくても良い
      },
    ],
    "react/jsx-uses-react": "off", // Reactのバージョンが17.0以降だとreactをインポートしなくてもjsx構文を使えるためオフ
    "react/react-in-jsx-scope": "off", // 上記と同じ理由でオフ
    // "react/jsx-key": ["error"], // リストコンポーネントでkey props を設定するように強制する
    "no-underscore-dangle": ["error", { allow: ["_id"] }], // _idを除いて先頭または末尾にアンダースコアがついた変数・プロパティを許可しない
    "import/no-extraneous-dependencies": ["off"], // react-scripts内に包含されているuuidなどのモジュールをインポート時にエラーが出るためオフ
    camelcase: ["error", { properties: "always" }], // 定数を除いて、変数名やプロパティ名にキャメルケースを使うように強制する
    // 配列の要素やオブジェクトのプロパティを変数に割当てるときに分割代入を使用するように強制する
    "prefer-destructuring": [
      "error",
      {
        // 変数代入時
        AssignmentExpression: {
          array: false, // 分割代入を使用しなくても良い
        },
      },
    ],
    "no-use-before-define": "off", // tsxファイルで import React from "react" と記述したときに誤作動するのでオフ
    "@typescript-eslint/no-use-before-define": ["error"], // 上記と同じ理由でオフ
    // void演算子の式としての使用を禁止する
    "no-void": [
      "error",
      {
        allowAsStatement: true, // @typescript-eslint/no-floating-promises ルールを回避するため文としての使用を許可する
      },
    ],

    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
  },
};
