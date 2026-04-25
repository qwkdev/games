// Decodes chess.com movelist
// Takes in 2 characters, output to and from squares

var T = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!?{~}(^)[_]@#$,./&-*++=";

function decode(e) {
var c, a, g = e.length, f = [];
for (c = 0; c < g; c += 2) {
    var d = {}, b = T.indexOf(e[c]);
    63 < (a = T.indexOf(e[c + 1])) && (d.promotion = "qnrbkp"[Math.floor((a - 64) / 3)], a = b + (16 > b ? -8 : 8) + (a - 1) % 3 - 1);
    75 < b ? d.drop = "qnrbkp"[b - 79] : d.from = T[b % 8] + (Math.floor(b / 8) + 1);
    d.to = T[a % 8] + (Math.floor(a / 8) + 1);
    f.push(d);
}
return f[0];
}




const GAME = 'nD0KDL5Qgv!Vmu2Uft9Ieg8!jzIRzHWGHO45OX70X}56vBKBuBQBLU3UdEVEfnEntLntbqtcqHBHabRIgf0TbrTLrvHBfeBvefvpfeLf';
for (let i=0; i<GAME.length; i += 2) {
	console.log(decode(GAME[i]+GAME[i+1]));
}
