function getColorCode() {
  $('.fxxk').empty();
  getColorBar();
}

function getColorBar() {
  var chain = generateId();

  $('.fxxk').append("<div class='shard'> </div>");
  $('.hash').text(generateId());

  for (let i = 0; i < 11; i++) {
    var step = i * 6;
    var res = chain.slice(step, step + 6);
    var col = '#' + res;
    $('.fxxk').append("<div class='shard' style='background-color: " + col + "'></div>");
  }
}

function refresh() {
  getColorCode();
}

