 
 function encriptar(){
     const texto = document.querySelector("#inputTexto").value;
    const fraseEncriptada = texto.replace(/e/igm, "enter"). replace(/o/igm, "ober"). replace(/i/igm, "imes"). replace(/a/igm, "ai"). replace(/u/igm, "ufat");


    document.querySelector("#txTarea").value = fraseEncriptada.toLowerCase();
    document.getElementById("imagen").classList.add("ocultar");
    document.getElementById("btnCopiar").classList.remove("ocultar");
 }

 const boton1 = document.querySelector("#btnEncriptar");
 boton1.onclick = encriptar;

 function desencriptar(){
    const texto = document.querySelector("#inputTexto").value;
    const fraseEncriptada = texto.replace(/enter/igm, "e"). replace(/ober/igm, "o"). replace(/imes/igm, "i"). replace(/ai/igm, "a"). replace(/ufat/igm, "u");

    document.querySelector("#txTarea").value = fraseEncriptada;
    document.querySelector("#txTarea").value;

}

const boton2 = document.querySelector("#btnDesencriptar");
boton2.onclick = desencriptar;


function copiar(){
    const texto2 = document.getElementById("txTarea");

    texto2.select();
    texto2.setSelectionRange(0, 999999);
    document.execCommand("copy");

}

const boton3 = document.getElementById("btnCopiar"); 
boton3.onclick = copiar;