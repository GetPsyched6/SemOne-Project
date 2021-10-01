function a() {
    document.getElementById("clr").style.color="dodgerblue";
    document.getElementById("clr").style.textShadow="0px 0px 0px rgba(36, 36, 36, 0)";
    document.getElementById("abt").style.color="dodgerblue";
    document.getElementById("abt").style.textShadow="0px 0px 0px rgba(36, 36, 36, 0)";
    document.getElementById("cc").style.color="dodgerblue";
    document.getElementById("cc").style.textShadow="0px 0px 0px rgba(36, 36, 36, 0)";
    document.getElementById("name").innerHTML = "Aurora Lake"
    var body = document.getElementsByTagName('body')[0];
    body.style="background-image: url(1.jpg); background-repeat: no-repeat; background-attachment: fixed; background-size: cover";

}

function c() {
    document.getElementById("clr").style.color="crimson";
    document.getElementById("clr").style.textShadow="0px 0px 0px rgba(36, 36, 36, 0)";
    document.getElementById("abt").style.color="crimson";
    document.getElementById("abt").style.textShadow="0px 0px 0px rgba(36, 36, 36, 0)";
    document.getElementById("cc").style.color="crimson";
    document.getElementById("cc").style.textShadow="0px 0px 0px rgba(36, 36, 36, 0)";
    document.getElementById("name").innerHTML = "Abstract Red"
    var body = document.getElementsByTagName('body')[0];
    body.style="background-image: url(3.jpg); background-repeat: no-repeat; background-attachment: fixed; background-size: cover";

}

function e() {
    document.getElementById("clr").style.color="plum";
    document.getElementById("clr").style.textShadow="0px 0px 0px rgba(36, 36, 36, 0)";
    document.getElementById("abt").style.color="plum";
    document.getElementById("abt").style.textShadow="0px 0px 0px rgba(36, 36, 36, 0)";
    document.getElementById("cc").style.color="plum";
    document.getElementById("cc").style.textShadow="0px 0px 0px rgba(36, 36, 36, 0)";
    document.getElementById("name").innerHTML = "Lakeside Mountain"
    var body = document.getElementsByTagName('body')[0];
    body.style="background-image: url(2.jpg); background-repeat: no-repeat; background-attachment: fixed; background-size: cover";

}
function f() {
    document.getElementById("clr").style.color="steelblue";
    document.getElementById("clr").style.textShadow="0px 0px 0px rgba(36, 36, 36, 0)";
    document.getElementById("abt").style.color="steelblue";
    document.getElementById("abt").style.textShadow="0px 0px 0px rgba(36, 36, 36, 0)";
    document.getElementById("cc").style.color="steelblue";
    document.getElementById("cc").style.textShadow="0px 0px 0px rgba(36, 36, 36, 0)";
    document.getElementById("name").innerHTML = "Mojave Desert"
    var body = document.getElementsByTagName('body')[0];
    body.style="background-image: url(4.jpg); background-repeat: no-repeat; background-attachment: fixed; background-size: cover";

}
function g() {
    document.getElementById("clr").style.color="deepskyblue";
    document.getElementById("clr").style.textShadow="0px 0px 0px rgba(36, 36, 36, 0)";
    document.getElementById("abt").style.color="deepskyblue";
    document.getElementById("abt").style.textShadow="0px 0px 0px rgba(36, 36, 36, 0)";
    document.getElementById("cc").style.color="deepskyblue";
    document.getElementById("cc").style.textShadow="0px 0px 0px rgba(36, 36, 36, 0)";
    document.getElementById("name").innerHTML = "Midnight Ray"
    var body = document.getElementsByTagName('body')[0];
    body.style="background-image: url(5.jpg); background-repeat: no-repeat; background-attachment: fixed; background-size: cover";

}
function h() {
    document.getElementById("clr").style.color="deeppink";
    document.getElementById("clr").style.textShadow="2px 2px 5px rgb(36, 36, 36)";
    document.getElementById("abt").style.color="deeppink";
    document.getElementById("abt").style.textShadow="2px 2px 5px rgb(36, 36, 36)";
    document.getElementById("cc").style.color="deeppink";
    document.getElementById("cc").style.textShadow="2px 2px 5px rgb(36, 36, 36)";
    document.getElementById("name").innerHTML = "Yosemite Stone"
    var body = document.getElementsByTagName('body')[0];
    body.style="background-image: url(image2.jpg); background-repeat: no-repeat; background-attachment: fixed; background-size: cover";

}

function dollar() {
    var x = parseInt(document.getElementById("rupee").value);
    var y = parseFloat(0.014 * x);
    var z=y.toFixed(3);
    document.getElementById("dollar").value = z +" Dollars";
}
function cd() {
    var x = parseInt(document.getElementById("rupee").value);
    var y = parseFloat(0.017 * x);
    var z = y.toFixed(3);
    document.getElementById("cdollar").value = z +" Canadian Dollars";
}
function euro() {
    var x = parseInt(document.getElementById("rupee").value);
    var y = parseFloat(0.011 * x);
    var z = y.toFixed(3);
    document.getElementById("euro").value = z +" Euros";
}
function pnd() {
    var x = parseInt(document.getElementById("rupee").value);
    var y = parseFloat(0.0098 * x);
    var z = y.toFixed(3);
    document.getElementById("pound").value = z +" Pounds Sterling";
}
function yen() {
    var x = parseInt(document.getElementById("rupee").value);
    var y = parseFloat(1.4752 * x);
    var z = y.toFixed(3);
    document.getElementById("yen").value = z +" Japanese Yen";
}
function ad() {
    var x = parseInt(document.getElementById("rupee").value);
    var y = parseFloat(0.0176 * x);
    var z = y.toFixed(3);
    document.getElementById("adollar").value = z +" Australian Dollars";
}
function sws() {
    var x = parseInt(document.getElementById("rupee").value);
    var y = parseFloat(0.0127 * x);
    var z = y.toFixed(3);
    document.getElementById("franc").value = z +" Swiss Francs";
}
function dhs() {
    var x = parseInt(document.getElementById("rupee").value);
    var y = parseFloat(0.0504 * x);
    var z = y.toFixed(3);
    document.getElementById("aed").value = z +" Emirati Dirhams";
}
function kr() {
    var x = parseInt(document.getElementById("rupee").value);
    var y = parseFloat(0.1159 * x);
    var z = y.toFixed(3);
    document.getElementById("krona").value = z +" Swedish Kronas";
}
function oz() {
    var x = parseInt(document.getElementById("rupee").value);
    var y = parseFloat(0.0000080186 * x);
    var z = y.toFixed(7);
    document.getElementById("auoz").value = z +" Gold Ounces";
    var a=document.getElementById("rupee").value;
    var b=a.substr(-7);
    if(b!=" Rupees")
    document.getElementById("rupee").value+=" Rupees";
}
