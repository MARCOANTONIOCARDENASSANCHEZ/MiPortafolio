# Contexto Del Proyecto

## Identidad

`MiPortafolio` es un portafolio profesional interactivo. La experiencia se
presenta como un mundo RPG 2D con perspectiva top-down 3/4, inspirado
visualmente en la perspectiva de juegos como `Ragnarok Online`.

El identificador oficial para la trazabilidad de cambios es
`AddPortfolio-NNNN`. El establecimiento de esta documentación y el registro
de la implementación existente corresponden a `AddPortfolio-0001`.

## Objetivo

El objetivo es combinar una interfaz profesional tradicional con un mundo
explorable. React debe presentar la información del portafolio y Phaser debe
proporcionar la experiencia interactiva del mundo.

## Perspectiva Visual

La perspectiva aceptada es top-down 3/4: la Camera observa principalmente
desde arriba, pero los objetos, muebles, paredes y personajes deben conservar
volumen visible en sus frentes y laterales. Esta definición corresponde a
`DEC-007`.

Los gráficos actuales siguen siendo provisionales y todavía no implementan el
acabado visual definitivo ni un sistema completo de `Depth sorting` para todos
los objetos.

## Alcance Actual

El repositorio contiene una aplicación `React + TypeScript + Vite` integrada
con `Phaser`.

La implementación actual incluye:

- Una interfaz React provisional para presentar el portafolio.
- Un componente `PhaserGame` que crea y destruye la instancia de `Phaser.Game`.
- Una configuración de juego con viewport lógico de `960 x 540` y escala
  responsive mediante `Phaser.Scale.FIT`.
- Un World provisional compacto de `1536 x 800`, mayor que el viewport.
- Un Tilemap provisional ortogonal de `48 x 25` tiles con `TILE_SIZE` de `32`.
- Un tileset local propio provisional con piso, alfombra, paredes, esquinas y
  entrada, cargado antes de crear el Tilemap.
- Catálogo y manifest provisional de assets para tiles y objetos de oficina.
- Capas visuales `Ground`, `Walls`, `WallUpper` y `Decoration` generadas
  localmente.
- Furniture local propio separado del Tilemap, con `Collision` y `Depth` desde
  definiciones data-driven y fallback procedural común.
- Distribución provisional con zonas semánticas `About`, `Projects`, `Skills`,
  `Experience`, `Achievements` y `Contact`, con targets interactivos
  provisionales sin contenido final.
- `InteractionSystem` con rango independiente de Collision, selección del
  target más cercano, prompt `[E] INTERACTUAR` y pulsación discreta de `E`.
- Bridge por instancia `PhaserGame` para abrir un `PortfolioPanel` en React sin
  reiniciar Phaser ni utilizar un bus global.
- Una única escena registrada: `OfficeScene`.
- Una oficina provisional compacta con áreas funcionales agrupadas dentro de un
  mismo espacio.
- Un Player basado en `Phaser.Physics.Arcade.Sprite`, sin imagen externa.
- Un placeholder direccional para `down`, `up`, `left` y `right`.
- Estados de Animation `idle` y `walk` para las cuatro direcciones.
- Una Shadow visual sin Collision bajo el Player.
- Un Physics body reducido a la zona inferior del Player.
- Movimiento mediante `WASD` y las flechas del teclado.
- Input centralizado en `createKeyboardInput`.
- Movimiento del Player separado en `playerMovement`.
- Camera principal siguiendo al Player dentro de los límites del World.
- Límites externos implementados con `Arcade Physics`.
- Collision estática derivada de los objetos de oficina que declaran body.
- Debug de cuerpos de Physics centralizado y desactivado por defecto.
- Renderizado pixel-art centralizado con `pixelArt`, `antialias` y
  `roundPixels`.
- Lógica de velocidad diagonal normalizada y profundidad visual basada en la
  coordenada `y` del personaje.

## Fuera Del Alcance Actual

Actualmente no existen:

- Backend, API, base de datos o autenticación.
- Persistencia de progreso o estado del jugador.
- Contenido profesional completo y definitivo de Projects, Skills, Experience,
  Achievements, About o Contact.
- Sprites, tilesets o assets externos de terceros para el mundo.
- Spritesheet definitivo y animaciones artísticas del Player.
- Mapas JSON de Tiled cargados desde assets.
- Arte definitivo del Office Tileset y de los Furniture; los SVG actuales son
  bases gráficas propias y provisionales.
- Escenas adicionales o transiciones entre escenas.
- Sistema de interacción avanzado, triggers de dominio o persistencia de paneles.
- Dependencia de runtime con `VegaSystem`.

## Límites Del Proyecto

React es responsable principalmente de la interfaz del portafolio, ventanas,
paneles, overlays, proyectos, información profesional, contacto y elementos
UI.

Phaser es responsable principalmente del mundo RPG, escenas, `Player`,
movimiento, cámara, colisiones, objetos interactivos y zonas de interacción.
De esta lista, la implementación actual cubre la escena, `Player`, Direction,
Animation placeholder, Movement, Camera, Collision, Shadow visual e
InteractionSystem. El contenido de los paneles es una primera base estática y
no representa todavía la versión final del portafolio.

## Relación Con VegaSystem

`MiPortafolio` y `VegaSystem` son proyectos completamente independientes.
`VegaSystem` podrá mostrarse posteriormente como un proyecto dentro del
portafolio, pero no debe introducir una dependencia de runtime, una API
compartida obligatoria ni una dependencia de compilación entre ambos.

## Planificado

Las siguientes capacidades pertenecen a la dirección prevista del proyecto,
pero no forman parte de la arquitectura implementada en `AddPortfolio-0011`:

- Sustituir los sprites provisionales por arte definitivo del mundo.
- Completar el contenido de las zonas con información profesional definitiva.
- Configurar URLs públicas, CV y trayectoria laboral detallada cuando existan.
- Añadir más escenas y navegación entre zonas.
- Sustituir el Tilemap provisional por mapas y tilesets exportados desde Tiled.
- Añadir sprites definitivos, spritesheets y animaciones del Player.
- Completar el `Depth sorting` de paredes, muebles y objetos con partes
  superiores separadas.
- Sustituir el placeholder del Player por un spritesheet en
  `src/assets/sprites/player/`.

Estas ideas no deben interpretarse como funcionalidades disponibles ni como
decisiones arquitectónicas aprobadas para una implementación concreta.
