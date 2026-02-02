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
- Infraestructura externa: No necesaria 

## Cómo unirse a Red Sierra Sur

1. Consigue un dispositivo LoRa compatible  
2. Flashea MeshCore con el flasher web oficial  
3. Instala la app MeshCore (Android/iOS)  
4. Conéctate al nodo por Bluetooth  
5. Configura la región: EU868 Narrow  
6. Únete al room de Red Sierra Sur mediante QR o clave pública  

## Principios del proyecto

- Infraestructura construida por la comunidad  
- Comunicación independiente de operadores  
- Red distribuida, sin servidores de Internet  
- Resiliencia ante fallos de red  
- Software y conocimiento libre  

## Estado de la red

La red está en crecimiento. Cada nodo y cada repeater mejoran cobertura, rutas y robustez.

## Enlaces

- MeshCore: https://meshcore.co.uk  
- Comunidad / coordinación: https://discord.gg/Drc87vUQVm
- Código del proyecto: este repositorio

## Licencia

Código y contenido bajo licencia **GNU GPL v3**.
