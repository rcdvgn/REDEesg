var data = new Date(); 
var ano = data.getFullYear();
document.getElementById("data").innerHTML = ano;

if ((localStorage.getItem("id")) == null || JSON.parse(localStorage.getItem("users")) == null)
{
    window.location.href = "menu.html";
}
else
{
    var id = localStorage.getItem("id");
    var users = JSON.parse(localStorage.getItem("users"));
}

var pi;
var pf;
var q;
var c;
var k1;
var k2;
var qind;
var tinf;
var li;
var lf;

var vddi;
var vddf;

var vei;

var vii;
var vif;

var qesi;
var qesf;

var tci;
var tcf;

function calcular()
{
    pi = parseFloat(document.getElementById("pi").value);
    pf = parseFloat(document.getElementById("pf").value);
    q = parseFloat(document.getElementById("q").value);
    c = parseFloat(document.getElementById("c").value);
    k1 = parseFloat(document.getElementById("k1").value);
    k2 = parseFloat(document.getElementById("k2").value);
    qind = parseFloat(document.getElementById("qind").value);
    tinf = parseFloat(document.getElementById("tinf").value);
    li = parseFloat(document.getElementById("li").value);
    lf = parseFloat(document.getElementById("lf").value);

    if (isNaN(pi) || isNaN(pf) || isNaN(q) || isNaN(c) || isNaN(k1) || isNaN(k2) || isNaN(qind) || isNaN(tinf) || isNaN(li) || isNaN(lf))
    {
        
        alert("Preencha todos os campos antes de continuar");
    }
    else
    {
        vddi = pi * q * c * k2 / 86400;
        vddf = pf * q * c * k2 * k1 / 86400;

        vei = qind;

        vii = tinf * li;
        vif = tinf * lf;

        qesi = vddi + vei + vii;
        qesf = vddf + vei + vif;

        tci = qesi / (li * 1000);
        tcf= qesf / (lf * 1000);
    
        document.getElementById("vdd").innerHTML = `: Incial = ${vddi.toFixed(2)},  Final = ${vddf.toFixed(2)}`;
        document.getElementById("vei").innerHTML = `: ${vei.toFixed(2)}`;
        document.getElementById("vi").innerHTML = `: Incial = ${vii.toFixed(2)},  Final = ${vif.toFixed(2)}`;

        
        document.getElementById("inicio").innerHTML = `Inicio Plano`;
        document.getElementById("final").innerHTML = `Final Plano`;
        document.getElementById("qesi").innerHTML = `Q<small>es</small> (l/s) = ${qesi.toFixed(2)}`;
        document.getElementById("qesf").innerHTML = `Q<small>es</small> (l/s) = ${qesf.toFixed(2)}`;
        document.getElementById("tci").innerHTML = `Tci (L/s.m) = ${tci.toFixed(4)}`;
        document.getElementById("tcf").innerHTML = `Tcf (L/s.m) = ${tcf.toFixed(4)}`;

        users[id].tci = tci;
        users[id].tcf = tcf;

        window.localStorage.setItem('users', JSON.stringify(users));
    }
}