let tabuada = 5;

function escreva(){
    document.write("Tabuada do " + tabuada + "<br>")
    document.write(tabuada + " x 1 = " + (tabuada*1) + "<br>");
    document.write(tabuada + " x 2 = " + (tabuada*2) + "<br>");   
    document.write(tabuada + " x 3 = " + (tabuada*3) + "<br>");
    document.write(tabuada + " x 4 = " + (tabuada*4) + "<br>");
    document.write(tabuada + " x 5 = " + (tabuada*5) + "<br>");
    document.write(tabuada + " x 6 = " + (tabuada*6) + "<br>");
    document.write(tabuada + " x 7 = " + (tabuada*7) + "<br>");
    document.write(tabuada + " x 8 = " + (tabuada*8) + "<br>");
    document.write(tabuada + " x 9 = " + (tabuada*9) + "<br>");
    document.write(tabuada + " x 10 = " + (tabuada*10) + "<br>");
}

let lista = ["Jesus","Spessato","Jorge","Raquel"]

function mostra(){
    document.write(lista.length + "<br>");
    for(let i = 0; i < lista.length; i++){
        document.write(lista[i] + "<br>");
    }  
}

function mostratabuada(){
    for(let i = 1; i <= 10; i++){
        document.write("O valor do i " + i + "<br>");
    }
}
function moeda(atual){
    
    return atual.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}
function total(){
    let v = document.getElementById("valor").value;
    let j = document.getElementById("juros").value;
    let t = document.getElementById("meses").value;
    if (!Number (v)){
        alert("O campo Capital deve ser númreros.");
        document.getElementById("valor").value = "";
        document.getElementById("valor").focus();
        return;
    }
    if (!Number (j)){
        alert("O campo juros deve ser númreros.");
        document.getElementById("juros").value = "";
        document.getElementById("juros").focus();
        return;
    }
    if (!Number (t)){
        alert("O campo N.meses deve ser númreros.");
        document.getElementById("meses").value = "";
        document.getElementById("meses").focus();
        return;
    }
    let r = 0; 
    let texto = ""
    for(let i =1; i <=t; i++){
        r = v * (1 + (j/100));
        //document.write("Mês " + i + " - valor: " + moeda(r) + "<br>");
        texto += "Mês " + i + " - valor: " + moeda(r) + "<br>";
        v = r;
    }
    document.getElementById("mes").innerHTML = texto;
    document.getElementById("total").innerHTML = moeda(r);
   // document.write("Resultado: " + moeda(r));
}
function SomaNota(){
    let n1 = document.getElementById("b1").value;
    let n2 = document.getElementById("b2").value;
    let n3 = document.getElementById("b3").value;
    let n4 = document.getElementById("b4").value;

    let r =  Number(n1)+Number(n2)+Number(n3)+Number(n4);

    document.getElementById("resul").innerHTML = "Soma: " + r;

}
function media(){
    let n1 = document.getElementById("b1").value;
    let n2 = document.getElementById("b2").value;
    let n3 = document.getElementById("b3").value;
    let n4 = document.getElementById("b4").value;
    
    let r =  Number(n1)+Number(n2)+Number(n3)+Number(n4);

    document.getElementById("resul").innerHTML = "Resultado " + r /4;
   
}
function passa(){
    let n1 = document.getElementById("b1").value;
    let n2 = document.getElementById("b2").value;
    let n3 = document.getElementById("b3").value;
    let n4 = document.getElementById("b4").value;
    
    let r =  Number(n1)+Number(n2)+Number(n3)+Number(n4);

    document.getElementById("resul").innerHTML = "Resultado " + (24- r);
}
