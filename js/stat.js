'use strict';
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var GAP = 50;
var TEXT_MARGIN = 20;
var BAR_UPPER_MARGIN = 20;
var BAR_LABELS_MARGIN = 10;


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  ctx.fill();
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};


window.renderStatistics = function (ctx, names, times) {
  // shade of cloud
  renderCloud(ctx, CLOUD_X + 10, CLOUD_Y + 10, 'rgba(0, 0, 0, 0.7)');

  // cloud
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'white');

  // text
  var winTextX = CLOUD_X + GAP;
  var winTextY = CLOUD_Y + TEXT_MARGIN;
  var stringsMargin = 25;
  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', winTextX, winTextY);
  ctx.fillText('Список результатов: ', winTextX, winTextY + stringsMargin);

  // max time
  var maxTime = getMaxElement(times);


  // histogram
  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = 'black';
    ctx.fillText(names[i], CLOUD_X + GAP * i + BAR_WIDTH * (i + 1),
        CLOUD_Y + CLOUD_HEIGHT - TEXT_MARGIN);
    ctx.fillText(Math.floor(times[i]), CLOUD_X + GAP * i + BAR_WIDTH * (i + 1),
        CLOUD_Y + winTextY + stringsMargin + BAR_LABELS_MARGIN + BAR_HEIGHT - (BAR_HEIGHT * (times[i] / maxTime)));

    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      var hslHue = 240 + ', ';
      var hslLightness = '50%';
      var hslSaturation = Math.floor(Math.random() * 101) + '%, ';
      ctx.fillStyle = 'hsl(' + hslHue + hslSaturation + hslLightness + ')';
    }

    ctx.fillRect(CLOUD_X + GAP * i + BAR_WIDTH * (i + 1),
        CLOUD_Y + winTextY + stringsMargin + BAR_UPPER_MARGIN + BAR_HEIGHT - (BAR_HEIGHT * (times[i] / maxTime)),
        BAR_WIDTH, BAR_HEIGHT * (times[i] / maxTime));
  }

};
