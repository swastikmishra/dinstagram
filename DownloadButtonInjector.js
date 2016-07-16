//Code For Timeline Pics
let oldInjectElements = 0;

setInterval(checkNewElements, 100);

function checkNewElements(){
    var InjectableElements = document.getElementsByClassName('_jjzlb');
    var imgs = document.getElementsByClassName('_icyx7');
    var aLink = '<a style="background-color: #003569;color: white;padding: 10px;border-radius: 4px;;top: 20px;left: 10px;text-align: center;z-index: 999999999;position: relative;border-bottom: 1px solid #ccc;">Download</a>';

    if(oldInjectElements < InjectableElements.length){

        var newElements = InjectableElements.length-oldInjectElements;

        for(var x = oldInjectElements; x < InjectableElements.length; x++){
            InjectableElements[x].innerHTML += aLink;
            InjectableElements[x].getElementsByTagName('a')[0].href = imgs[x].src;
            InjectableElements[x].getElementsByTagName('a')[0].onclick = function() { showAlert(imgs[x].src); }
        }

    }
}

function showAlert(x){
  alert(x);
}
