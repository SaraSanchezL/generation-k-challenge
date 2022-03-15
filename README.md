# generation-k-challenge with JavaScript

## Reto VI Generación K 2022.

…¿Serás capaz de resolverlo?

- Durante siglos, en tiempos de guerra, se ha necesitado encriptar los mensajes para que el enemigo, en caso de interceptarlos, no entendiera de qué se trataba.
- Uno de los sistemas que se han utilizado es la codificación de Rejilla criptográfica.
- Los generales egipcios de Nekgikis VI, hijo del famoso Nekgikis V, usaban este método y, en una de las cámaras de la tumba del faraón, hemos encontrado un mensaje cifrado con este sistema.
- El mensaje que hemos encontrado es: lróaon. sg sdersoildsu.:.cc kiomamii

¿Podrías descifrar el mensaje usando código JavaScript?

1.  Sabemos que usaron una rejilla de 6 x 6 celdas.
2.  Sabemos que las celdas abiertas están en las posiciones:
    [1,1],[4,1],[2,2],[6,2],[5,3],[1,4],[4,4],[3,5],[6,5] para el grid en posición inicial (0
    grados)
3.  Podemos observar que cada vez que giramos la rejilla 90º en el sentido
    de las agujas del reloj la primera fila (eje x) pasa a ser la sexta columna
    (eje y), la segunda fila pasa a ser la quinta columna… y la sexta fila pasa a
    ser la primera columna.
4.  Una vez tienes todos los pares de coordenadas de todas las posiciones
    (0º, 90º, 180º y 270º) y ordenados, desencriptar el mensaje consiste en
    relacionar la posición de cada letra del mensaje con el par de
    coordenadas:: la primera letra del mensaje descifrado estará en la
    posición [1,1] la segunda letra del mensaje descifrado estará en la
    posición [4,1] la tercer letra del mensaje descifrado estará en la posición
    [2,2]...

#### Una vez lo resuelvas accede a la url e inscríbete, aportando el código de tu solución.
