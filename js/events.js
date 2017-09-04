function getIt(){
  $('p').on('click', function(){
    alert('Hey!');
  });
}

function frameIt(){
  $('img').on('load', function(){
    $('img').addClass('tasty');
  });
}

function pressIt(){
  $('#typing').on('keydown', function(key){
    console.log(key.which)
    if(key.which == 83){
      alert('s was pressed');
    }
  });
}

$(document).ready(function(){
  pressIt();
  frameIt();
  getIt();
});
