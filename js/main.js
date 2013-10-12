SC.initialize({
  client_id: '070b3bfc43c305e3c6aabc4261e36f52'
});

function addLine() {
	$("#addBtn").before('<input type="text" data-provide="typehead" name="option">')
}

function choose() {
	var result = Math.floor(Math.random() * $("input[name=option]").length);

	SC.get('/tracks', {q: $("input[name=option]")[result].value, limit: 50}, function(tracks) {
		console.log(tracks);
	  var result = Math.floor(Math.random() * tracks.length);
		SC.oEmbed(tracks[result].permalink_url, { auto_play: true }, function(oEmbed) {
		  $("#player").html(oEmbed.html);
		});
	});
	reset();
}

function reset() {
	for(var i = 0; i < $("input[name=option]").length; i++) {
		$("input[name=option]")[i].value = ""
	}
}