const recognition = new webkitSpeechRecognition()
recognition.continuous = true
recognition.interimResults = true
recognition.lang = "es-MX"

recognition.onstart = function() {
  recognizing = true;
  console.log("empezando a escuchar");
}
recognition.onresult = function(event) {  
  for (var i = event.resultIndex; i < event.results.length; i++) {
    if(event.results[i].isFinal) {
      console.log(event.results[i][0].transcript)
    }
  }
  
  //texto
}
recognition.onerror = function(event) {
}
recognition.onend = function() {
  // recognizing = false;
  console.log("terminó de escuchar, llegó a su fin");

}

recognition.start()

setTimeout(() => {
  recognition.stop()
}, 5000)