/**
 * eslint-config-airbnb のルールの内 本プロダクトにはそぐわないものを上書きする
 */
module.exports = {
  rules: {
    /**
     * 複数行にわたる配列やオブジェクトの末尾にカンマを必須とさせるルール
     * 配列やオブジェクトの末尾につくカンマは常に許可しない
     */
    'comma-dangle': ['error', 'never'],

    /**
     * プロパティーの呼び出し時に `object['propertyName']` のような形を許容しないルール
     * `object.propertyName` のように `.` 区切りにしなければならない
     * しかしながらスネークケースの場合は `.` 区切りにしたくないため、`allow_patern` で許容
     */
    'dot-notation': ['error', {
      allowPattern: "^[a-z]+(?:_[a-z]+)+$",
      allowKeywords: true
    }],

    /**
     * anonymous function を許容しないルール
     * コールバックで使いたいため anonymous function を許容する
     */
    'func-names': 'off',

    /**
     * JSX の属性の値を囲うクォートは常にシングルクォート
     */
    'jsx-quotes': ['error', 'prefer-single'],

    /**
     * 特定の構文を許容しないルール
     * `ForInStatement` (`for (let key in object)`) は許容する
     * `DebuggerStatement`、`LabeledStatement`、`WithStatement` は許容しない
     */
    'no-restricted-syntax': [
      'error',
      'DebuggerStatement',
      'LabeledStatement',
      'WithStatement'
    ],

    /**
     * 計算された結果が使われない式を許容しないルール
     * 通常であれば許容するべきではない
     * しかし現状の ESLint では do expressions が正しく認識されない
     * とりあえず許容 (要経過観察)
     */
    'no-unused-expressions': 'off',

    /**
     * コールバック function で arrow function を使うことを推奨するルール
     * `this` の binding が必要な箇所以外ではやみくもに arrow function を使うのを避けたい
     * そのため anonymous function をコールバックで使えるよう許容する
     */
    'prefer-arrow-callback': 'off',

    /**
     * anonymous function で `()` の前に空白スペースを必須とさせるルール
     * named function、anonymous function 両者で空白スペースはないまま統一したいため許容
     */
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never'
    }]
  }
};
