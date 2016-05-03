// 匿名関数で全体をラップ
;(function($) {
	// $.fn.name_space
	$.fn.chunkEmphasizer = function(options) {
		// 要素を退避
		var elements = this;

		// 渡されたオプションとデフォルトをマージする
		var opts = $.extend({}, $.fn.chunkEmphasizer.defaults, options);

		// 要素を1つずつ処理
		elements.each(function() {
			var $this = $(this);
			// ブラー要素生成
			var svgName = init($this);
			// マスクング処理
			$(window).on('resize', function() {
				masking($this, opts, svgName);
			});
			$(opts.controller).on('click', function() {
				masking($this, opts, svgName);
			});
		});

		// method chain用に要素を返す
		return this;
	};

	// 匿名関数内では普通の関数がプライベートメソッドになる
	// ブラーとかSVGとかを生成
	var init = function($root) {
		$root.wrap('<div class="ce-text-wrapper">');
		$parent = $root.parent();
		var html = $root.html();
		$root.addClass('main-text');
		$root.before('<div class="l-blur">')
			 .before('<div class="s-blur">');
		$parent.find('.l-blur, .s-blur').html(html);
		var svgName = $root.attr('id') + '-maskSVG';
		var svgHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0"><defs><clipPath id="' +
						svgName +
					  '"></clipPath><clipPath id="' +
						svgName + 'blur">';
		$('body').append(svgHTML);
		return svgName;
	}

	var masking = function($root, opts, svgName) {
		console.log('happen')
		$parent = $root.parent();
		var $active = $parent.find(opts.active);
		$('#' + svgName + ',#' +svgName + 'blur').empty();
		$root.add($parent.find('.l-blur')).css({
			'-webkit-clip-path': 'none',
			'clip-path': 'none'
		})
		var len = $active.find('.word').length;
		for(var i=0; i<len; i++) {
			var $word = $active.find('.word').eq(i);
			var pos = $word.offset();
			var w = $word.width();
			var h = $word.height();
			var rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
			rect.setAttribute('x', pos.left - 2);
			rect.setAttribute('y', pos.top);
			rect.setAttribute('width', w + 1);
			rect.setAttribute('height', h);
			$('#' + svgName)[0].appendChild(rect);
			var rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
			rect.setAttribute('x', pos.left - opts.paddingLR/2 - 2);
			rect.setAttribute('y', pos.top - opts.paddingTB/2);
			rect.setAttribute('width', w + opts.paddingLR);
			rect.setAttribute('height', h + opts.paddingTB);
			$('#' + svgName + 'blur')[0].appendChild(rect);
		}
		$root.css({
			'-webkit-clip-path': 'url(#' + svgName + ')',
			'clip-path': 'url(#' + svgName + ')'
		});
		$parent.find('.l-blur').css({
			'-webkit-clip-path': 'url(#' + svgName + 'blur)',
			'clip-path': 'url(#' + svgName + 'blur)'
		});
	}

	// プラグインのデフォルトオプション
	$.fn.chunkEmphasizer.defaults = {
		controller: '#ctrlBtn',
		active: '.active',
		paddingTB: 25,
		paddingLR: 55
	};
})( jQuery );