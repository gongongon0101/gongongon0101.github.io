// リストを一つ追加
function append() {
	var id = $("#id").val();
	var number = $("#number").val();
	var tmp = "http://gbf.game-a5.mbga.jp/assets/sound/voice/";
	var tmp2 = tmp + id +"_v_" + number + ".mp3";
	var tmpid = number+"-"+ id;
	var del = "<button type=\"button\" onclick=\"del('"+ tmpid + "');\">削除</button>";
	$("#test").append("<li id =\""+ tmpid + "\"><span>"+tmpid+"</span><audio src=\"" + tmp2 + "\" controls preload=\"none\"></audio>"+ del +"</li>");
}

// 削除
function del(id) {
	$("#"+id).remove();
}

// リストを一括追加
function appendList() {
	var id = $("#id").val();
	var tmp = "http://gbf.game-a5.mbga.jp/assets/sound/voice/";
	for (var i = 1; i <= 400; i++) {
		var number = zeroPadding(i,3);
		var tmp2 = tmp + id +"_v_" + number + ".mp3";
		var tmpid = number+"-"+ id;
		var del = "<button type=\"button\" onclick=\"del('"+ tmpid + "');\">削除</button>";
		$("#test").append("<li id =\""+ tmpid + "\"><span>"+tmpid+"</span><audio src=\"" + tmp2 + "\" controls preload=\"none\"></audio>"+ del +"</li>");
	}
}

// 一括削除
function delList() {
	var id = $("#id").val();
	for (var i = 1; i <= 400; i++) {
		var number = zeroPadding(i,3);
		var tmpid = number+"-"+ id;
		$("#"+tmpid).remove();
	}
}

// ゼロパディング 数字、桁数
function zeroPadding(number, digit) {
    var numberLength = String(number).length;
    if (digit > numberLength) {
        return (new Array((digit - numberLength) + 1).join(0)) + number;
    } else {
        return number;
    }
};