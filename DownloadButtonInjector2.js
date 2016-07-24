//Code For Timeline Pics
let oldInjectElements = 0;

setInterval(checkNewElements, 100);

function checkNewElements(){
    var InjectableElements = document.getElementsByClassName('_jjzlb');
    if(oldInjectElements < InjectableElements.length)
      injectElements();
}

function injectElements(){
  var InjectableElements = document.getElementsByClassName('_jjzlb');
  var imgs = document.getElementsByClassName('_icyx7');
  var aLink = '<a style="background: linear-gradient(to top, #4B5475 0%, rgb(102, 94, 160) 100%);color: white;padding: 10px;padding-bottom: 5px;border-radius: 4px;padding-top: 7px;text-align: center; position: relative;float: right;border-bottom: 1px solid #ccc;">Download</a>';
  var injectionSpots = document.getElementsByClassName('_iuf51 _oajsw');

      var newElements = InjectableElements.length-oldInjectElements;

      for(var x = oldInjectElements; x < InjectableElements.length; x++){
          injectionSpots[x].innerHTML += aLink;
          injectionSpots[x].getElementsByTagName('a')[0].href = imgs[x].src
      }

      oldInjectElements += newElements;
      console.log(oldInjectElements + " : " + InjectableElements.length);
}
