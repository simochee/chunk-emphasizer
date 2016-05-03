# chunk-highlighter

## 仕様
テキストにブラーのかかった要素を重ね、マスキングすることでアクティブなチャンクを目立たせます。



## 使い方
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
