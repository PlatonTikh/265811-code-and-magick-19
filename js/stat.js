'use strict';
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_WIDTH = 270;
var CLOUD_HEIGHT = 420;
var BAR_HEIGHT = 150;
var FONT_GAP = 15;
var GAP = 50;
var TEXT_WIDTH = 50;
var barWidth = CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};


window.renderStatistics = function (ctx, names, times) {
  // shade of cloud
  renderCloud(ctx, CLOUD_X + 10, CLOUD_Y + 10, 'rgba(0, 0, 0, 0.7)')

  // cloud
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'white')

  // text
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + CLOUD_WIDTH / 2, CLOUD_Y + CLOUD_HEIGHT / 2);

  // max time
  var MAX_TIME = Math.max(times);

  // histogram
  var createHist = function () {
    for (var i = 0; i < names.length; i++) {
      ctx.fillStyle = '#000';
      ctx.fillText(names[i], CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_HEIGHT) * i);
      ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + GAP + (GAP + BAR_HEIGHT) * i, (barWidth * times[i]) / MAX_TIME, BAR_HEIGHT);
    };

  };
};
