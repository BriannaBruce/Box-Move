var $div = $('div');
var $document = $(document);

$div.on('click', function(event) {
  var randX = Math.random();
  var randY = Math.random();
  var Height = $document.height() - $div.height();
  var Width = $document.width() - $div.width();
  var x = Width * randX;
  var y = Height * randY;
  $div.css ({
    'top': y + 'px',
    'left': x + 'px'
  })
})