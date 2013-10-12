SC.initialize({
  client_id: '070b3bfc43c305e3c6aabc4261e36f52'
});

function addLine() {
	$("#addBtn").before('<input type="text" data-provide="typehead" name="option">')
}

function choose() {
	var i = Math.floor(Math.random() * $("input[name=option]").length);
	var text = $("input[name=option]")[i].value;
	SC.get('/tracks', {q: $("input[name=option]")[i].value, limit: 50}, function(tracks) {
		console.log(tracks);
	  var j = Math.floor(Math.random() * tracks.length);
		SC.oEmbed(tracks[j].permalink_url, { auto_play: true }, function(oEmbed) {
		  $("#player").html(oEmbed.html);
		  console.log(text);
		  $("#chosen").text(text);
		});
	});
	reset();
}

function reset() {
	for(var i = 0; i < $("input[name=option]").length; i++) {
		$("input[name=option]")[i].value = ""
	}
}