# text-to-voice

Demostración de transcripción de voz a texto en el navegador. Aunque el repositorio se llama text-to-voice, `index.js` utiliza `webkitSpeechRecognition` con idioma `es-MX`. Requiere permiso de micrófono y un navegador que implemente esa API.

## Estructura

- [index.html](index.html)
- [index.js](index.js)

## Preparación y uso

Sirve la raíz con un servidor estático; por ejemplo, si tienes Python 3:

```sh
python -m http.server 8000 --bind 127.0.0.1
```

Abre `http://127.0.0.1:8000/` y navega al ejemplo:

- [index.html](index.html)

Los recursos cargados desde servicios externos requieren conexión. La comprobación local debe incluir la consola del navegador y la carga de imágenes, scripts y estilos.

## Validación y estado

Esta guía se contrastó con el árbol de archivos y los manifiestos del repositorio. No se ha validado una ejecución completa contra servicios externos, bases de datos o hardware. Las versiones y los scripts mostrados describen el código actual; no implican que sus dependencias antiguas sigan siendo compatibles.

## Documentación previa

Se conserva como referencia histórica, incluidas las imágenes y atribuciones originales. Los enlaces a demos y servicios no se han comprobado.

"#Text to voice"

Application using speech recognition API with Javascript

![Text to voice example of text](https://github.com/EladioRocha/text-to-voice/blob/master/example.png)
