# chunk-highlighter

## 仕様
テキストにブラーのかかった要素を重ね、マスキングすることでアクティブなチャンクを目立たせます。



## 使い方
```javascript
$( selector ).chunkEmphasizer( options );
```



## オプション
```javascript
var options = {
	controller: '#ctrlBtn',
	active: '.active',
	chunk: '.chunk',
	word: '.word',
	paddingTB: 50,
	paddingLR: 100
}
```
##### options.controller
チャンクを操作する要素を指定します。
##### options.active
アクティブなチャンクに付与されているセレクタを指定します。
##### options.chunk
チャンクに付与されているセレクタを指定します。
##### options.word
チャンク内の各単語に付与されているセレクタを指定します。
##### options.paddingTB
ブラーの上下のパッディングを指定します。
##### options.paddingLR
ブラーの左右のパディングを指定します。

## 対応
このプラグインは主要なモダンブラウザの最新版で動作します。

なお、InternetExplorer、MS Edgeには対応しておりません。
#### PC
* Firefox 3.5 +
* Chrome 24 +
* Safari 7.1 +
* Opera 15 +
* IE 非対応
* Edge 非対応

#### SP
* Android Browser 4.4 +
* Chrome for Android 49 +
* Firefox for Android 45 +
* Opera Mobile 36 +

## 使用上の注意
1. このプラグインは**アクティブなチャンク、各チャンク、単語にそれぞれクラスが付与されている**ことで動作します。
2. プラグインを使用する要素には**idの指定が必須**です。
