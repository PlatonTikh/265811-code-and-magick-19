'use strict';
window.renderStatistics = function(ctx, names, times) {
  // shade of cloud
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 270, 420);

  // cloud
  ctx.fillstyle = 'white';
  ctx.fillRect(100, 10, 270, 420);

  // text
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 100 + 270 / 2, 10 + 420 / 2);
};
