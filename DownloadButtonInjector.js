var hashChange = false;
var lastURL = null;

function isHashChange(){
  if(lastURL == window.location.href)
    hashChange = false;
  else
    hashChange = true;
  lastURL = window.location.href;

  return hashChange;
}

function injectButtons(){

  if(isHashChange()){
    console.log("hashChange : "+hashChange);
    console.log("lastURL : "+lastURL);
    if(window.location.href == "https://www.instagram.com/")
      injectTimelineButtons();
    else if(window.location.href.split('https://www.instagram.com/p/').length == 2)
      injectModalImageButton();
  }

}

let oldInjectElements = 0;
let oldVideoElements = 0;

function injectTimelineButtons(){
  oldInjectElements = 0;
  oldVideoElements = 0;
  injectTimelineButtonsClock = setInterval(function(){
    var InjectableElements = document.getElementsByClassName('_jjzlb');
    var InjectableVideoElements = document.getElementsByClassName('_c8hkj');
    if(oldInjectElements < InjectableElements.length || oldVideoElements < InjectableVideoElements.length)
      injectElements();
  }, 10);
}

function injectElements(){
  var InjectableElements = document.getElementsByClassName('_jjzlb');
  var imgs = document.getElementsByClassName('_icyx7');
  var aLink = '<a target="_blank" style="background: linear-gradient(to top, #4B5475 0%, rgb(102, 94, 160) 100%);color: white;padding: 10px;padding-bottom: 5px;border-radius: 4px;padding-top: 7px;text-align: center; position: relative;float: right;border-bottom: 1px solid #ccc;">Download</a>';
  var injectionSpots = document.getElementsByClassName('_iuf51 _oajsw');

      var newElements = InjectableElements.length-oldInjectElements;

      for(var x = oldInjectElements; x < InjectableElements.length; x++){
          injectionSpots[x].innerHTML += aLink;
          injectionSpots[x].getElementsByTagName('a')[0].href = imgs[x].src
      }

      oldInjectElements += newElements;

  var InjectableVideoElements = document.getElementsByClassName('_c8hkj');
  var aLink = '<a target="_blank" style="background: linear-gradient(to top, #4B5475 0%, rgb(102, 94, 160) 100%);color: white;padding: 10px;padding-bottom: 5px;border-radius: 4px;padding-top: 7px;text-align: center; position: relative;float: right;border-bottom: 1px solid #ccc;">Download</a>';
  var injectionSpots = document.getElementsByClassName('_iuf51 _3sst1');

    var newElements = InjectableVideoElements.length-oldVideoElements;

    for(var x = oldVideoElements; x < InjectableVideoElements.length; x++){
        injectionSpots[x].innerHTML += aLink;
        injectionSpots[x].getElementsByTagName('a')[0].href = InjectableVideoElements[x].src;
    }

    oldVideoElements += newElements;
}

function injectModalImageButton(){
  if(document.getElementsByClassName('_22yr2 _e0mru').length > 0){
    var InjectableElement = document.getElementsByClassName('_22yr2 _e0mru')[0];
    var imgSrc = InjectableElement.getElementsByClassName('_icyx7')[0].src;
    var aLink = '<a target="_blank" style="background: linear-gradient(to top, #4B5475 0%, rgb(102, 94, 160) 100%);color: white;padding: 10px;padding-bottom: 5px;border-radius: 4px;padding-top: 7px;text-align: center; position: relative;float: right;border-bottom: 1px solid #ccc;">Download</a>';
    var injectionSpots = document.getElementsByClassName('_iuf51 _oajsw');
            injectionSpots[0].innerHTML += aLink;
            injectionSpots[0].getElementsByTagName('a')[0].href = imgSrc;
  }else if(document.getElementsByClassName('_c8hkj').length > 0){
    var InjectableElement = document.getElementsByClassName('_c8hkj')[0];
    var imgSrc = document.getElementsByClassName('_c8hkj')[0].src;
    var aLink = '<a target="_blank" style="background: linear-gradient(to top, #4B5475 0%, rgb(102, 94, 160) 100%);color: white;padding: 10px;padding-bottom: 5px;border-radius: 4px;padding-top: 7px;text-align: center; position: relative;float: right;border-bottom: 1px solid #ccc;">Download</a>';
    var injectionSpots = document.getElementsByClassName('_iuf51 _3sst1');
            injectionSpots[0].innerHTML += aLink;
            injectionSpots[0].getElementsByTagName('a')[0].href = imgSrc;
  }
}

setInterval(injectButtons, 10);

function deleteAppButton(){
  if(document.getElementsByClassName('_28zbs _nqfwp').length != 0)
    document.getElementsByClassName('_28zbs _nqfwp')[0].remove();
}

setInterval(deleteAppButton, 10);
deleteAppButton();

function deleteDownloadAppButton(){
  if(document.getElementsByClassName('_azlhu').length != 0)
    document.getElementsByClassName('_azlhu')[0].remove();
}

setInterval(deleteDownloadAppButton, 10);
deleteDownloadAppButton();
