var aLink = '<a target="_new" style="background-color: #003569;color: white;padding: 10px;border-radius: 4px;;top: 20px;left: 10px;text-align: center;z-index: 999999999;position: relative;border-bottom: 1px solid #ccc;">Download</a>';
//Code For Timeline Pics
var oldInjectElements = 0;

setInterval(checkNewElements, 100);

function checkNewElements(){
    var InjectableElements = document.getElementsByClassName('_jjzlb');
    var imgs = document.getElementsByClassName('_icyx7');

    if(oldInjectElements < InjectableElements.length){

        alert("Inserting new Elements : "+oldInjectElements+" , "+InjectableElements.length);
        var newElements = InjectableElements.length-oldInjectElements;

        for(var x = oldInjectElements; x < InjectableElements.length; x++){
            InjectableElements[x].innerHTML += aLink;
            InjectableElements[x].getElementsByTagName('a')[0].href = imgs[x].src;
        }

        oldInjectElements += newElements;
    }
}
