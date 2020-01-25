'use strict';
// upper left corner position
var CLOUD_X = 100;
var CLOUD_Y = 10;
// width and height of canvas
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
// shade indent
var SHADE_INDENT = 10;
// width and height of bars
var BASE_BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
// gap between bars
var GAP = 50;
// indent between border and text
var TEXT_INDENT = 20;
// indent between bar and win text
var BAR_UPPER_INDENT = 35;
// indent between bar and time labels
var BAR_LABELS_INDENT = 25;
// win text position and indent between strings
var WIN_TEXT_X = CLOUD_X + GAP;
var WIN_TEXT_Y = CLOUD_Y + TEXT_INDENT;
var STRINGS_INDENT = 20;
// hsl parameters
var HSL_HUE = '240';
var HSL_LIGHTNESS = '50%';
var HSL_SATURATION_RANGE = 100;


// draw rectangular cloud
var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  ctx.fill();
};

// get bar height by time
var getBarHeight = function (baseheight, time, maxtime) {
  return baseheight * (time / maxtime);
};

//
var getXPosition = function (i) {
  return CLOUD_X + GAP * i + BAR_WIDTH * (i + 1);
};

window.renderStatistics = function (ctx, names, times) {
  // shade of cloud
  renderCloud(ctx, CLOUD_X + SHADE_INDENT, CLOUD_Y + SHADE_INDENT, 'rgba(0, 0, 0, 0.7)');

  // cloud
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'white');

  // text
  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', WIN_TEXT_X, WIN_TEXT_Y);
  ctx.fillText('Список результатов: ', WIN_TEXT_X, WIN_TEXT_Y + STRINGS_INDENT);

  // max time
  var maxTime = Math.max.apply(null, times);

  // vertical space win text requires
  var winTextYSpace = WIN_TEXT_Y + STRINGS_INDENT + BASE_BAR_HEIGHT;

  // draw histogram
  for (var i = 0; i < names.length; i++) {
    // draw names and time labels
    ctx.fillStyle = 'black';
    ctx.fillText(names[i], getXPosition(i),
        CLOUD_Y + CLOUD_HEIGHT - TEXT_INDENT);
    ctx.fillText(Math.floor(times[i]).toString(), getXPosition(i),
        winTextYSpace + BAR_LABELS_INDENT - getBarHeight(BASE_BAR_HEIGHT, times[i], maxTime));
    // define colors in dependence of name
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      var hslSaturation = Math.floor(Math.random() * HSL_SATURATION_RANGE) + '%, ';
      ctx.fillStyle = 'hsl(' + HSL_HUE + ', ' + hslSaturation + HSL_LIGHTNESS + ')';
    }
    // draw bars
    ctx.fillRect(getXPosition(i),
        winTextYSpace + BAR_UPPER_INDENT - getBarHeight(BASE_BAR_HEIGHT, times[i], maxTime),
        BAR_WIDTH, getBarHeight(BASE_BAR_HEIGHT, times[i], maxTime));
  }

};
