# sierrasur.github.io

![Red Sierra Sur](https://i.imgur.com/uIHBBtC.png)

[Red Sierra Sur](https://sierrasur.github.io) es una red comunitaria de comunicaciones digitales basada en **MeshCore** y tecnología **LoRa**, desplegada en la provincia de Jaén.

Permite intercambiar mensajes por radio **sin Internet ni operadores de telecomunicaciones**, usando dispositivos personales que forman una red mallada autónoma.

## Qué es esta red (modelo MeshCore)

Red Sierra Sur es una **red de mensajería digital cifrada sobre LoRa**, construida con dispositivos que ejecutan **MeshCore**.

No es una red P2P totalmente simétrica. En MeshCore existen **roles dentro de la red**, lo que mejora la eficiencia del enrutamiento:

- **Companions / Nodos**  
  Dispositivos de usuario. Envían y reciben mensajes de otros nodos y pueden participar en salas de chat (rooms).

- **Repeaters**  
  Nodos configurados para priorizar el reenvío de mensajes. Mejoran alcance, rutas y estabilidad de la red.

- **Rooms**  
  Espacios lógicos de comunicación (canales). Los usuarios se unen a ellos mediante QR o clave pública. El cifrado y la pertenencia se gestionan a nivel de room.

No hay servidores de Internet ni infraestructura externa, pero sí existe una **estructura lógica interna** que organiza cómo se mueve la información dentro de la red.

## Para qué sirve

- Comunicación local fuera de Internet  
- Coordinación en emergencias o caídas de red  
- Zonas rurales con mala cobertura  
- Red comunitaria resiliente  
- Experimentación técnica con redes distribuidas sobre LoRa  

## Características técnicas

- Firmware: MeshCore  
- Tecnología física: LoRa  
- Banda usada: EU868 Narrow
- Arquitectura: Red mesh con roles (companion / repeater / room)   
- Organización de comunicaciones: Rooms cifradas  
- Dependencia de Internet: Ninguna para operar la red

## Cómo unirse a Red Sierra Sur

1. Consigue un dispositivo LoRa compatible  
2. Flashea MeshCore con el flasher web oficial  
3. Instala la app MeshCore (Android/iOS)  
4. Conéctate al nodo por Bluetooth  
5. Configura la región: EU868 Narrow , SF 8, CR 8
6. Únete al room de Red Sierra Sur mediante QR o clave pública

## Principios del proyecto

- Infraestructura construida por la comunidad  
- Comunicación independiente de operadores  
- Red distribuida, sin servidores de Internet  
- Resiliencia ante fallos de red  
- Software y conocimiento libre  

## Estado de la red

La red está en crecimiento. Cada nodo y cada repeater mejoran cobertura, rutas y robustez.

Si quieres añadir un repetidor a la malla recomendamos utilizar **[notación maidenhead](https://en.wikipedia.org/wiki/Maidenhead_Locator_System)** con una aproximación mínima de ocho (en ciudad) o seis caracteres (campo abierto o muy buena altura).

**Ejemplo**: [IM87CS57](https://www.fun-funk.net/aprs4web/locator/?qth=IM8757CS)

![Repetidor en ciudad](https://i.imgur.com/Ezr2Tar.png)

## Enlaces

- Nuestra web: https://sierrasur.github.io
- Comunidad / coordinación: [Foro / Discussions](https://github.com/sierrasur/sierrasur.github.io/discussions)
- MeshCore: https://meshcore.co.uk  
- Flasher de dispositivos: https://flasher.meshcore.co.uk/
- Mapa de red: https://meshcore.co.uk/map.html

## Licencia

Código y contenido de este proyecto bajo licencia **GNU GPL v3**.
