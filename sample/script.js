$(function() {
	// Convert a text
	convertText();

	var flag = false;
	$('#btn').click(function() {
		if(flag) {
			$('.active').removeClass('active').next().addClass('active');
		} else {
			$('.text .chunk').eq(0).addClass('active');
			flag = true;
		}
	})

	$('#myText').chunkEmphasizer({
		controller: '#btn',
		paddingTB: 50,
		paddingLR: 150
	});
});

var convertText = function() {
	var text = $('.plane').text();
	var lines = text.split("\n");
	var words = [];
	for(var i=0; i<lines.length; i++) {
		words.push(lines[i].split(' '));
	}
	var html = '';
	for(var i=0; i<words.length; i++) {
		for(var j=0; j<words[i].length; j++) {
			if(j==0) {
				html += '<span class="chunk">';
			} else {
				if(Math.floor(Math.random() * 2) == 1) {
					html += '</span><span class="chunk">';
				}
			}
			html += '<span class="word">' + words[i][j] + ' </span>';
		}
		html += '</span><br>';
	}
	$('.text').append(html);
}