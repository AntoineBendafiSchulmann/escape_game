// Compte a reboure 
const departMinutes = 10
let temps = departMinutes * 60
//  récuperation de l'id
const timerElement = document.getElementById("timer")

//  appelle de manière répétée la fonction
setInterval(() => {
    let minutes = parseInt(temps / 60, 10)
    let secondes = parseInt(temps % 60, 10)

    minutes = minutes < 10 ? "0" + minutes : minutes
    secondes = secondes < 10 ? "0" + secondes : secondes

    timerElement.innerText = `${minutes}:${secondes}`
    temps = temps <= 0 ? 0 : temps - 1
    }, 1000)



var clue_click = document.getElementById('characlue_click');
var popup_click = document.getElementById('chara_click');

clue_click.addEventListener('click', function() {
    console.log('click');
    popup_click.style.display = 'block';
}
);

//après avoir cliqué sur la croix , le popup disparait
var close = document.getElementById('close');
close.addEventListener('click', function() {
    console.log('click');
    popup_click.style.display = 'none';
}
);




var clue_click2 = document.getElementById('characlue_click2');
var popup_click2 = document.getElementById('chara_click2');

clue_click2.addEventListener('click', function() {
    console.log('click');
    popup_click2.style.display = 'block';
}
);

//après avoir cliqué sur la croix , le popup disparait
var close2 = document.getElementById('close2');
close2.addEventListener('click', function() {
    console.log('click');
    popup_click2.style.display = 'none';
}
);




var clue_click3 = document.getElementById('characlue_click3');
var popup_click3 = document.getElementById('chara_click3');

clue_click3.addEventListener('click', function() {
    console.log('click');
    popup_click3.style.display = 'block';
}
);

//après avoir cliqué sur la croix , le popup disparait
var close3 = document.getElementById('close3');
close3.addEventListener('click', function() {
    console.log('click');
    popup_click3.style.display = 'none';
}
);


// si dans l'input codedev on écrit les caractères suivants "xwzh" on redirige vers la page room3d.html
var input = document.getElementById('codedev');

input.addEventListener('keyup', function() {
    if (input.value == "xwzh") {
        window.location.href = "room3d.html";
    }
});


//lorsqu'on passe la souris une pastille , le texte apparait avec l'héxadécimal de la couleur

var pastille_red = document.getElementsByClassName('pastille_red');
var pastille_green = document.getElementsByClassName('pastille_green');
var pastille_yellow = document.getElementsByClassName('pastille_yellow');
var pastille_orange = document.getElementsByClassName('pastille_orange');

var text_red = document.getElementById('hexa_hover_red');
var text_green = document.getElementById('hexa_hover_green');
var text_yellow = document.getElementById('hexa_hover_yellow');
var text_orange = document.getElementById('hexa_hover_orange');

pastille_red[0].addEventListener('mouseover', function() {
    console.log('mouseover');
    text_red.style.display = 'block';
}
);

pastille_red[0].addEventListener('mouseout', function() {
    console.log('mouseout');
    text_red.style.display = 'none';
}
);

pastille_green[0].addEventListener('mouseover', function() {
    console.log('mouseover');
    text_green.style.display = 'block';
}
);

pastille_green[0].addEventListener('mouseout', function() {
    console.log('mouseout');
    text_green.style.display = 'none';
}
);

pastille_yellow[0].addEventListener('mouseover', function() {
    console.log('mouseover');
    text_yellow.style.display = 'block';
}
);

pastille_yellow[0].addEventListener('mouseout', function() {
    console.log('mouseout');
    text_yellow.style.display = 'none';
}
);

pastille_orange[0].addEventListener('mouseover', function() {
    console.log('mouseover');
    text_orange.style.display = 'block';
}
);

pastille_orange[0].addEventListener('mouseout', function() {
    console.log('mouseout');
    text_orange.style.display = 'none';
}
);

// si on est en hover sur la class carre_red , popup apparait  et disparait si on sort de la class 

var clue_hover = document.getElementById('clue_hover');
var popup_hover = document.getElementById('popup_hover');

clue_hover.addEventListener('mouseover', function() {
    console.log('mouseover');
    popup_hover.style.display = 'block';
}
);

clue_hover.addEventListener('mouseout', function() {
    console.log('mouseout');
    popup_hover.style.display = 'none';
}
);

