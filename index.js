const btnRecord = document.querySelector('.btn-record'),
  textarea = document.querySelector('textarea')
  recognition = new webkitSpeechRecognition()

let recording = false,
  finalText = ''

recognition.continuous = true
recognition.interimResults = true
recognition.lang = "es-MX"

recognition.onstart = function() {
  recognizing = true;
  finalText = ''
}

recognition.onresult = function(event) {  
  for (let i = event.resultIndex; i < event.results.length; i++) {
    if(event.results[i].isFinal) {
      finalText += event.results[i][0].transcript
    }

    textarea.innerText = event.results[i][0].transcript
  }
}
recognition.onerror = function(event) {
  console.log(event)
}
recognition.onend = function() {
  textarea.innerText = finalText
}

function processVoice() {
  if(!recording) {
    recognition.start()
    btnRecord.innerText = 'Detener'
  } else {
    recognition.stop()
    btnRecord.innerText = 'Empezar a grabar'
  }

  recording = !recording
}

btnRecord.addEventListener('click', processVoice)