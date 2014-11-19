/*
* author: Scott Meisburger
*/

// namespace
var xmas = {
    'numRows': 5,
    'emptyFrame': [],
    'message': [],
};

xmas.alphabet = {
    '0': [
	[0, 1, 1, 1, 0],
	[1, 0, 0, 1, 1],
	[1, 0, 1, 0, 1],
	[1, 1, 0, 0, 1],
	[0, 1, 1, 1, 0],
    ],
    '1': [
	[0, 1],
	[1, 1],
	[0, 1],
	[0, 1],
	[0, 1],
    ],
    '2': [
	[0, 1, 1, 0],
	[1, 0, 0, 1],
	[0, 0, 1, 0],
	[0, 1, 0, 0],
	[1, 1, 1, 1],
    ],
    '3': [
	[0, 1, 1, 0],
	[1, 0, 0, 1],
	[0, 0, 1, 0],
	[1, 0, 0, 1],
	[0, 1, 1, 0],
    ],
    '4': [
	[1, 0, 0, 1],
	[1, 0, 0, 1],
	[1, 1, 1, 1],
	[0, 0, 0, 1],
	[0, 0, 0, 1],
    ],
    '5': [
	[1, 1, 1, 1],
	[1, 0, 0, 0],
	[1, 1, 1, 1],
	[0, 0, 0, 1],
	[1, 1, 1, 1],
    ],
    '6': [
	[1, 1, 1, 1],
	[1, 0, 0, 0],
	[1, 1, 1, 1],
	[1, 0, 0, 1],
	[1, 1, 1, 1],
    ],
    '7': [
	[1, 1, 1, 1],
	[0, 0, 0, 1],
	[0, 0, 1, 0],
	[0, 1, 0, 0],
	[0, 1, 0, 0],
    ],
    '8': [
	[1, 1, 1, 1],
	[1, 0, 0, 1],
	[1, 1, 1, 1],
	[1, 0, 0, 1],
	[1, 1, 1, 1],
    ],
    '9': [
	[1, 1, 1, 1],
	[1, 0, 0, 1],
	[1, 1, 1, 1],
	[0, 0, 0, 1],
	[0, 0, 0, 1],
    ],
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
    ':': [
	[0],
	[1],
	[0],
	[1],
	[0],
    ],
    '-': [
	[0, 0],
	[0, 0],
	[1, 1],
	[0, 0],
	[0, 0],
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

// list comprehension
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
    return symbols.reduce(function(a, b) {
	try {
	    return a.concat(xmas.alphabet[b][i]).concat([0]);
	} catch(err) {
	    return a; 
	}
    }, xmas.emptyFrame); 
}

xmas.compileMessage = function() {
    var symbols = $('.xmas-config').data('msg').toLowerCase().split('');

    return xmas.arrayComp(function(i) {
	return xmas.compileRow(symbols, i);
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

xmas.init = function() {
    xmas.numCols = parseInt($('.xmas-config').data('numCols'));
    xmas.speed = parseInt($('.xmas-config').data('speed'));
    xmas.emptyFrame = xmas.compileEmptyFrame();
    xmas.message = xmas.compileMessage(); 

    $('table.xmas').append(xmas.arrayComp(function(i) {
	return '<tr></td>';
    }, xmas.numRows));

    $('table.xmas tr').append(xmas.arrayComp(function(i) {
	return '<td></td>';
    }, xmas.numCols));
}

$(document).ready(function() {
    xmas.init();
});

$(window).load(function() {
    setInterval(function() {
	xmas.update(xmas.message);
    }, xmas.speed);
});
