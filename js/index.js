// Your code goes here


//TEXT CHANGE ON MOUSE OVER
const funBusHeader = document.querySelector('.funHeader');
funBusHeader.addEventListener('mouseover', function (){
    funBusHeader.textContent = "It's really not that fun!"
})

//ALERT WHEN FIRST SIGN UP BUTTON IS PRESSED
const buttons = document.querySelector('.btn');
buttons.addEventListener('click', function (e){
    alert('SIGGNNNN UPPPPPP')
    e.stopPropagation();
})

//ALERT WHEN H2 LET'S GO IS PRESSED
const letsGo = document.querySelector('.letsGo');
letsGo.addEventListener('click', function (e){
    alert('LETTSSS GOOOOOOOO')
    
})


//TOGGLES transform: scale(1.3); MAKES IMAGE LARGES ON DBLCLICK
const middleImage = document.querySelector('#middleImg');
middleImage.addEventListener('dblclick', function (e){
    middleImage.classList.toggle('large');
})


//NAV PREVENT DEFAULT
const NavPrevent = document.querySelector('.nav');
NavPrevent.addEventListener('click', function(event){
 alert(`NAV button was clicked without refresh!`);
 // This will prevent the form from submitting to action_page.php
  event.preventDefault();
});

//CHANGES BACKGROUND TO RED
const background = document.querySelector('.html');
background.addEventListener('contextmenu', function (){
    background.classList.toggle('red');
})

//ALERTS KEY PRESSED
const pressedKey = document.querySelector('.html');
pressedKey.addEventListener('keydown', function (e){
    alert(`A key was pressed down! This is the event: ${e.key}`)
})

//ALERT WHEN MOUSE OUT OF IMAGE
const mouseout = document.querySelector('.adventureIMG')
mouseout.addEventListener('mouseout', function(){
    alert(`MOUSE OUT`)
})

//MOUSE ENTER
const mouseEnter = document.querySelector('.funImg')
mouseEnter.addEventListener('mouseenter', function(){
    alert('MOUSE ENTER')
})

//MOUSE MOVE
const wheel = document.querySelector('.d')
wheel.addEventListener('mousemove', function(){
    wheel.classList.toggle('red');
})