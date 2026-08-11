# Contexto Del Proyecto

## Identidad

`MiPortafolio` es un portafolio profesional interactivo. La experiencia se
presenta como un mundo RPG 2D con vista superior, inspirado visualmente en la
perspectiva de juegos como `Ragnarok Online`.

El identificador oficial para la trazabilidad de cambios es
`AddPortfolio-NNNN`. El establecimiento de esta documentación y el registro
de la implementación existente corresponden a `AddPortfolio-0001`.

## Objetivo

El objetivo es combinar una interfaz profesional tradicional con un mundo
explorable. React debe presentar la información del portafolio y Phaser debe
proporcionar la experiencia interactiva del mundo.

## Alcance Actual

El repositorio contiene una aplicación `React + TypeScript + Vite` integrada
con `Phaser`.

La implementación actual incluye:

- Una interfaz React provisional para presentar el portafolio.
- Un componente `PhaserGame` que crea y destruye la instancia de `Phaser.Game`.
- Una configuración de juego con tamaño lógico de `960 x 540` y escala
  responsive mediante `Phaser.Scale.FIT`.
- Una única escena registrada: `OfficeScene`.
- Una oficina provisional dibujada con `Phaser.GameObjects.Graphics`.
- Un personaje provisional generado en memoria, sin imagen externa.
- Movimiento mediante `WASD` y las flechas del teclado.
- Límites de habitación implementados con los límites del mundo de
  `Arcade Physics`.
- Lógica de velocidad diagonal normalizada y profundidad visual basada en la
  coordenada `y` del personaje.

## Fuera Del Alcance Actual

Actualmente no existen:

- Backend, API, base de datos o autenticación.
- Persistencia de progreso o estado del jugador.
- Proyectos, ventanas, overlays u objetos interactivos conectados al mundo.
- Cámara personalizada o seguimiento de cámara.
- Sprites, tilesets o assets externos para el mundo.
- Escenas adicionales o transiciones entre escenas.
- Dependencia de runtime con `VegaSystem`.

## Límites Del Proyecto

React es responsable principalmente de la interfaz del portafolio, ventanas,
paneles, overlays, proyectos, información profesional, contacto y elementos
UI.

Phaser es responsable principalmente del mundo RPG, escenas, `Player`,
movimiento, cámara, colisiones, objetos interactivos y zonas de interacción.
De esta lista, la implementación actual cubre la escena, `Player`,
movimiento y colisiones. La cámara, los objetos y las zonas de interacción
están definidos como responsabilidades del dominio Phaser, pero aún no están
implementados.

## Relación Con VegaSystem

`MiPortafolio` y `VegaSystem` son proyectos completamente independientes.
`VegaSystem` podrá mostrarse posteriormente como un proyecto dentro del
portafolio, pero no debe introducir una dependencia de runtime, una API
compartida obligatoria ni una dependencia de compilación entre ambos.

## Planificado

Las siguientes capacidades pertenecen a la dirección prevista del proyecto,
pero no forman parte de la arquitectura implementada en `AddPortfolio-0001`:

- Incorporar sprites y assets del mundo.
- Añadir objetos interactivos y zonas de interacción.
- Conectar la exploración con paneles React del portafolio.
- Añadir más escenas y navegación entre zonas.

Estas ideas no deben interpretarse como funcionalidades disponibles ni como
decisiones arquitectónicas aprobadas para una implementación concreta.
