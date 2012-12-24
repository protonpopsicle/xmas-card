/*
* author: Scott Meisburger
*/

// namespace
var xmas = {
	'numRows': 5,
	'numCols': 40,
	'speed': 80,
};

xmas.alphabet = {
	' ': [
		[0, 0],
		[0, 0],
		[0, 0],
		[0, 0],
		[0, 0],
	],
	'.': [
		[0],
		[0],
		[0],
		[0],
		[1],
	],
	'!': [
		[1],
		[1],
		[1],
		[0],
		[1],
	],
	'a': [
		[0, 1, 1, 0],
		[1, 0, 0, 1],
		[1, 1, 1, 1],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
	],
	'b': [
		[1, 1, 1],
		[1, 0, 1],
		[1, 1, 1],
		[1, 0, 1],
		[1, 1, 1],
	],
	'c': [
		[0, 1, 1],
		[1, 0, 0],
		[1, 0, 0],
		[1, 0, 0],
		[0, 1, 1],
	],
	'd': [
		[1, 1, 1, 0],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[1, 1, 1, 0],
	],
	'e': [
		[1, 1, 1],
		[1, 0, 0],
		[1, 1, 1],
		[1, 0, 0],
		[1, 1, 1],
	],
	'f': [
		[1, 1, 1],
		[1, 0, 0],
		[1, 1, 1],
		[1, 0, 0],
		[1, 0, 0],
	],
	'g': [
		[0, 1, 1, 0],
		[1, 0, 0, 0],
		[1, 0, 1, 0],
		[1, 0, 0, 1],
		[0, 1, 1, 0],
	],
	'h': [
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[1, 1, 1, 1],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
	],
	'i': [
		[1],
		[1],
		[1],
		[1],
		[1],
	],
	'j': [
		[0, 0, 1],
		[0, 0, 1],
		[0, 0, 1],
		[1, 0, 1],
		[0, 1, 0],
	],
	'k': [
		[1, 0, 0, 1],
		[1, 0, 1, 0],
		[1, 1, 0, 0],
		[1, 0, 1, 0],
		[1, 0, 0, 1],
	],
	'l': [
		[1, 0, 0, 0],
		[1, 0, 0, 0],
		[1, 0, 0, 0],
		[1, 0, 0, 0],
		[1, 1, 1, 1],
	],
	'm': [
		[1, 0, 0, 0, 1],
		[1, 1, 0, 1, 1],
		[1, 0, 1, 0, 1],
		[1, 0, 0, 0, 1],
		[1, 0, 0, 0, 1],
	],
	'n': [
		[1, 0, 0, 1],
		[1, 1, 0, 1],
		[1, 0, 1, 1],
		[1, 0, 1, 1],
		[1, 0, 0, 1],
	],
	'o': [
		[0, 1, 1, 1, 0],
		[1, 0, 0, 0, 1],
		[1, 0, 0, 0, 1],
		[1, 0, 0, 0, 1],
		[0, 1, 1, 1, 0],
	],
	'p': [
		[1, 1, 1, 0],
		[1, 0, 0, 1],
		[1, 1, 1, 0],
		[1, 0, 0, 0],
		[1, 0, 0, 0],
	],
	'q': [
		[0, 1, 1, 1, 0, 0],
		[1, 0, 0, 0, 1, 0],
		[1, 0, 0, 0, 1, 0],
		[1, 0, 0, 1, 1, 0],
		[0, 1, 1, 1, 0, 1],
	],
	'r': [
		[1, 1, 1, 0],
		[1, 0, 0, 1],
		[1, 1, 1, 0],
		[1, 0, 1, 0],
		[1, 0, 0, 1],
	],
	's': [
		[0, 1, 1, 1],
		[1, 0, 0, 0],
		[0, 1, 1, 0],
		[0, 0, 0, 1],
		[1, 1, 1, 0],
	],
	't': [
		[1, 1, 1, 1, 1],
		[0, 0, 1, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 1, 0, 0],
	],
	'u': [
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[0, 1, 1, 0],
	],
	'v': [
		[1, 0, 1],
		[1, 0, 1],
		[1, 0, 1],
		[1, 0, 1],
		[0, 1, 0],
	],
	'w': [
		[1, 0, 1 ,0, 1],
		[1, 0, 1, 0, 1],
		[1, 0, 1, 0, 1],
		[1, 0, 1, 0, 1],
		[0, 1, 0, 1, 0],
	],
	'x': [
		[1, 0, 1],
		[1, 0, 1],
		[0, 1, 0],
		[1, 0, 1],
		[1, 0, 1],
	],
	'y': [
		[1, 0, 1],
		[1, 0, 1],
		[1, 0, 1],
		[0, 1, 0],
		[0, 1, 0],
	],
	'z': [
		[1, 1, 1, 1],
		[0, 0, 1, 0],
		[0, 1, 0, 0],
		[1, 0, 0, 0],
		[1, 1, 1, 1],
	],
};

// rename this
xmas.readSymbols = function() {
	return $('.xmas-config').data('msg').toLowerCase().split('');
}

// list comprehension knockoff
xmas.arrayComp = function(callback, length) {
	var anArray = [];
	for (var i = 0; i < length; i++) {
		anArray[i] = callback(i);
	}
	return anArray;
}

xmas.compileEmptyFrame = function() {
	return xmas.arrayComp(function(i) {
		return 0;
	}, xmas.numCols);
}

xmas.compileRow = function(symbols, i) {
	var val = symbols.reduce(function(a, b) {
		try {
			return a.concat(xmas.alphabet[b][i]).concat([0]);
		} catch(err) {
			return a; 
		}
	}, xmas.emptyFrame); 

	return val;
}

xmas.compileMessage = function() {
	return xmas.arrayComp(function(i) {
		return xmas.compileRow(xmas.readSymbols(), i);
	}, xmas.numRows);
}

xmas.getFrame = function(message, tick) {
	return xmas.arrayComp(function(i) {
		return message[i].slice(tick, tick + xmas.numCols);
	}, xmas.numRows);
}

xmas.draw = function(frame) {
	frame.map(function(row, i) {
		row.map(function(col, j) {
			var tRow = $('table.xmas tr')[i];
			var tCell = $(tRow).children('td')[j];

			if (col > 0) {
				$(tCell).addClass('on');
			} else {
				$(tCell).removeClass('on');
			}
		});
	});
}

xmas.tick = 0;
xmas.update = function(message) {
	xmas.draw(xmas.getFrame(message, xmas.tick));

	if (xmas.tick < message[0].length) { 
		xmas.tick++;
	} else {
		xmas.tick = 0;
	}
}

xmas.setTheTable = function() {
	$('table.xmas').append(xmas.arrayComp(function(i) {
		return '<tr></td>';
	}, xmas.numRows));

	$('table.xmas tr').append(xmas.arrayComp(function(i) {
		return '<td></td>';
	}, xmas.numCols));
}

$(document).ready(function() {
	xmas.speed = parseInt($('.xmas-config').data('speed'));
	xmas.numCols = parseInt($('.xmas-config').data('numCols'));
	xmas.setTheTable();
	xmas.emptyFrame = xmas.compileEmptyFrame();
	var message = xmas.compileMessage(); 
	var timer = setInterval(function() {
		xmas.update(message);
	}, xmas.speed);
});