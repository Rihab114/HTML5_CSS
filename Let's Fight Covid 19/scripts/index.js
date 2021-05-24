//Javascript for navigation bar effects on scroll
window.addEventListener("scroll",function(){
    const header = document.querySelector("header");
    header.classList.toggle('sticky',window.scrollY >0);
})

/////////Fonction of Animation

function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++ 
    if(char === splitText.length){
      complete();
      return;
    }
  }
  
  function complete(){
    clearInterval(timer);
    timer = null;
  }
  
  ///////////////Animation of "Stay at Home"
  const text = document.querySelector(".st1");
  const strText = text.textContent;
  const splitText = strText.split("");
  text.textContent = "";
  for(let i = 0; i < splitText.length; i++) {
    text.innerHTML += "<span>" + splitText[i] + "</span>";
  }
  
  let char = 0;
  let timer = setInterval(onTick, 1000);
  
  /////////////////
  
  ///////////////Animation of "Wash your hands"
  const text = document.querySelector(".st2");
  const strText = text.textContent;
  const splitText = strText.split("");
  text.textContent = "";
  for(let i = 0; i < splitText.length; i++) {
    text.innerHTML += "<span>" + splitText[i] + "</span>";
  }
  
  let char = 0;
  let timer = setInterval(onTick, 1000);
  var wsUrl;
  if (window.location.protocol == 'http:') {
      wsUrl = 'ws://';
  } else {
      wsUrl = 'wss://';
  }
  var ws = new WebSocket(wsUrl + window.location.host + "/Let's%20Fight%20Covid%2019/pages/Contact.html");
      
  ws.onmessage = function(event) {
    var mySpan = document.getElementById("chat");
    mySpan.innerHTML+=event.data+"<br/>";
  };
   
  ws.onerror = function(event){
      console.log("Error ", event)
  } 
  function sendMsg() {
      var msg = document.getElementById("msg").value;
      if(msg)
      {
          ws.send(msg);
      }
      document.getElementById("msg").value="";
  }
  
