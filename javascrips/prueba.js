document.getElementById('boton1').onclick = function () {
    document.getElementById('ms1').innerHTML ="hola";
    
}

document.getElementById('id2').onclick = function () {
    document.getElementById('id3').style.display = "block";
    document.getElementById('id1').style.display ="block";
    
}
document.getElementById('id1').onclick = function () {
    document.getElementById('id3').style.display="none";
    document.getElementById('id1').style.display="none";
    
}