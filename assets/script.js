//establish current time

dayjs().format()
var currentTime = dayjs().hour()

//give values to each timeblock

var nineam = 9;
var tenam = 10;
var elevenam = 11;
var twelvepm = 12;
var onepm = 13;
var twopm = 14;
var threepm = 15;
var fourpm = 16;
var fivepm = 17;

//check timeblock values against current time and change color based on 
//if event has passed or is upcoming or us current

$('#9ambox').ready(function() {
    if (nineam === currentTime) {
        $('#9ambox').css("background-color", "red");
    }
    else if(nineam < currentTime) {
        $('#9ambox').css("background-color", "grey");
    }
    else if(nineam > currentTime) {
        $('#9ambox').css("background-color", "#77dd77");
    }
    
});

$('#10ambox').ready(function() {
    if (tenam === currentTime) {
        $('#10ambox').css("background-color", "red");
    }
    else if(tenam < currentTime) {
        $('#10ambox').css("background-color", "grey");
    }
    else if(tenam > currentTime) {
        $('#10ambox').css("background-color", "#77dd77");
    }
    
});

$('#11ambox').ready(function() {
    if (elevenam === currentTime) {
        $('#11ambox').css("background-color", "red");
    }
    else if(elevenam < currentTime) {
        $('#11ambox').css("background-color", "grey");
    }
    else if(elevenam > currentTime) {
        $('#11ambox').css("background-color", "#77dd77");
    }
    
});

$('#12pmbox').ready(function() {
    if (twelvepm === currentTime) {
        $('#12pmbox').css("background-color", "red");
    }
    else if(twelvepm < currentTime) {
        $('#12pmbox').css("background-color", "grey");
    }
    else if(twelvepm > currentTime) {
        $('#12pmbox').css("background-color", "#77dd77");
    }
    
});

$('#1pmbox').ready(function() {
    if (onepm === currentTime) {
        $('#1pmbox').css("background-color", "red");
    }
    else if(onepm < currentTime) {
        $('#1pmbox').css("background-color", "grey");
    }
    else if(onepm > currentTime) {
        $('#1pmbox').css("background-color", "#77dd77");
    }
    
});

$('#2pmbox').ready(function() {
    if (twopm === currentTime) {
        $('#2pmbox').css("background-color", "red");
    }
    else if(twopm < currentTime) {
        $('#2pmbox').css("background-color", "grey");
    }
    else if(twopm > currentTime) {
        $('#2pmbox').css("background-color", "#77dd77");
    }
    
});

$('#3pmbox').ready(function() {
    if (threepm === currentTime) {
        $('#3pmbox').css("background-color", "red");
    }
    else if(threepm < currentTime) {
        $('#3pmbox').css("background-color", "grey");
    }
    else if(threepm > currentTime) {
        $('#3pmbox').css("background-color", "#77dd77");
    }
    
});

$('#4pmbox').ready(function() {
    if (fourpm === currentTime) {
        $('#4pmbox').css("background-color", "red");
    }
    else if(fourpm < currentTime) {
        $('#4pmbox').css("background-color", "grey");
    }
    else if(fourpm > currentTime) {
        $('#4pmbox').css("background-color", "#77dd77");
    }
    
});

$('#5pmbox').ready(function() {
    if (fivepm === currentTime) {
        $('#5pmbox').css("background-color", "red");
    }
    else if(fivepm < currentTime) {
        $('#5pmbox').css("background-color", "grey");
    }
    else if(fivepm > currentTime) {
        $('#5pmbox').css("background-color", "#77dd77");
    }
    
});

//save events to local storage

var nineamPlan = document.querySelector('#9ambox');

nineamPlan.addEventListener('input', function(event) {
    localStorage.setItem('nineamPlan', nineamPlan.innerhtml)
});

var tenamPlan = document.querySelector('#10ambox');

tenamPlan.addEventListener('input', function(event) {
    localStorage.setItem('tenamPlan', tenamPlan.innerhtml)
});

var elevenamPlan = document.querySelector('#11ambox');

elevenamPlan.addEventListener('input', function(event) {
    localStorage.setItem('elevenamPlan', elevenamPlan.innerhtml)
});

var twelvepmPlan = document.querySelector('#12pmbox');

twelvepmPlan.addEventListener('input', function(event) {
    localStorage.setItem('twelvepmPlan', twelvepmPlan.innerhtml)
});

var onepmPlan = document.querySelector('#1pmbox');

onepmPlan.addEventListener('input', function(event) {
    localStorage.setItem('onepmPlan', onepmPlan.innerhtml)
});

var twopmPlan = document.querySelector('#2pmbox');

onepmPlan.addEventListener('input', function(event) {
    localStorage.setItem('twopmPlan', twopmPlan.innerhtml)
});

var threepmPlan = document.querySelector('#3pmbox');

threepmPlan.addEventListener('input', function(event) {
    localStorage.setItem('threepmPlan', threepmPlan.innerhtml)
});

var fourpmPlan = document.querySelector('#4pmbox');

onepmPlan.addEventListener('input', function(event) {
    localStorage.setItem('fourpmPlan', fourpmPlan.innerhtml)
});

var fivepmPlan = document.querySelector('#5pmbox');

fivepmPlan.addEventListener('input', function(event) {
    localStorage.setItem('fivepmPlan', fivepmPlan.innerhtml)
});



