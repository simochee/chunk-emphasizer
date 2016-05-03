# chunk-highlighter

## 仕様
テキストにブラーのかかった要素を重ね、マスキングすることでアクティブなチャンクを目立たせます。



## 使い方
```html
<script src="./jquery.min.js"></script>
<script src="./jquery.chunk-emphasizer.js"></script>
<link rel="stylesheet" href="./jquery.chunk-emphasizer.css">
```
```javascript
$( selector ).chunkEmphasizer( options );
```
* このプラグインを指定する要素にはid属性を付与する必要があります。



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
#### options.controller
チャンクを操作する要素を指定します。
#### options.active
アクティブなチャンクに付与されているセレクタを指定します。
#### options.chunk
チャンクに付与されているセレクタを指定します。
#### options.word
チャンク内の各単語に付与されているセレクタを指定します。
#### options.paddingTB
ブラーの上下のパッディングを指定します。
#### options.paddingLR
ブラーの左右のパディングを指定します。