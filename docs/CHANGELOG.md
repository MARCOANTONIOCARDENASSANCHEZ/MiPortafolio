# Historial De Cambios

## AddPortfolio-0001 — Establecimiento Inicial

**Fecha:** 2026-08-11
**Autor:** Marco Antonio Cárdenas Sánchez
**Tipo:** Documentación y registro de implementación existente

Se establece la documentación base, la arquitectura y las reglas oficiales
de desarrollo del proyecto. Este registro documenta fielmente la
implementación inicial ya existente y no agrega nuevas funcionalidades.

### Implementación Registrada

- `React` para la interfaz del portafolio.
- `TypeScript` para el código de aplicación.
- `Vite` como herramienta de desarrollo y build.
- `Phaser` como motor del mundo RPG 2D.
- Integración React-Phaser mediante `PhaserGame`.
- Componente `PhaserGame` para crear y destruir `Phaser.Game`.
- Configuración y registro de `OfficeScene`.
- Escena `OfficeScene` como escena actual del mundo.
- Layout procedural de oficina en `officeLayout`.
- Personaje provisional creado por `createPlayer`.
- Movimiento mediante `WASD` y flechas.
- `Arcade Physics` sin gravedad.
- Límites y colisiones actuales mediante `setCollideWorldBounds` y los
  límites del mundo de la habitación.

### Documentación Registrada

- Contexto del proyecto y relación independiente con `VegaSystem`.
- Arquitectura real implementada y responsabilidades de módulos.
- Reglas de desarrollo, idioma y trazabilidad.
- Decisiones aceptadas `DEC-001` a `DEC-006`.

## AddPortfolio-0002 — Base Del Mundo RPG

**Fecha:** 2026-08-11
**Autor:** Marco Antonio Cárdenas Sánchez
**Tipo:** Arquitectura técnica del mundo RPG 2D

Se reorganiza la implementación existente para establecer una base técnica
escalable sin crear todavía la oficina definitiva ni sistemas de interacción.

### Implementación Registrada

- World provisional de `1824 x 984` frente a un viewport lógico de `960 x 540`.
- `Camera` principal siguiendo al Player dentro de los límites del World.
- Parámetros de `zoom` y `lerp` centralizados en `configureCamera`.
- Input centralizado para `WASD` y Arrow Keys.
- Movimiento del Player separado en `playerMovement` y expresado en píxeles por
  segundo.
- Límites externos de `Arcade Physics` centralizados en Collision.
- Cinco obstáculos estáticos provisionales para demostrar colisiones.
- Debug de cuerpos dinámicos y estáticos solo en modo de desarrollo.
- Integración React-Phaser y ciclo de vida de `PhaserGame` conservados.

### Fuera Del Alcance

- No se agregaron dependencias, assets externos, backend ni audio.
- No se implementaron `InteractionSystem`, objetos interactivos, inventario,
  diálogos, NPCs ni ventanas finales del portafolio.

## AddPortfolio-0003 — Perspectiva Visual

**Fecha:** 2026-08-11
**Autor:** Marco Antonio Cárdenas Sánchez
**Tipo:** Decisión arquitectónica documental

Se registra `DEC-007` como decisión aceptada para la perspectiva visual
top-down 3/4 del proyecto. No se modifica código ni se agrega funcionalidad.

- La Camera observará principalmente desde arriba.
- Los frentes y laterales conservarán volumen visual.
- La decisión deberá guiar Tiles, Sprites, Player, Furniture, Collision,
  Depth sorting, composición del mapa y Animations.
- No se adoptará una perspectiva isométrica real ni una vista completamente
  cenital sin aprobación explícita.

## AddPortfolio-0004 — Base De Assets Y Tilemap

**Fecha:** 2026-08-11
**Autor:** Marco Antonio Cárdenas Sánchez
**Tipo:** Fundación técnica de assets, Tilemap, capas y Depth sorting

Se incorpora una base provisional para el mundo RPG 2D top-down 3/4 sin
agregar arte definitivo, dependencias nuevas ni sistemas de interacción.

### Implementación Registrada

- Estructura de assets en `src/assets/` para mapas, tilesets, sprites, UI y
  placeholders.
- `TILE_SIZE` centralizado en `worldConfig.ts` con valor inicial `32 x 32`.
- Tilemap ortogonal procedural de `56 x 30` tiles.
- Capas reales `Ground`, `Walls` y `Decoration`.
- Furniture provisional separado del Tilemap y de Collision.
- `Depth sorting` centralizado mediante `applyDepthSorting`.
- Prueba visual de Player delante y detrás de Furniture según `baseY`.
- Configuración de pixel-art con `pixelArt`, `antialias` y `roundPixels`.
- Compatibilidad futura documentada para mapas JSON exportados desde Tiled.

### Fuera Del Alcance

- No se agregaron assets externos ni archivos de arte definitivos.
- No se implementaron spritesheets, animaciones finales, NPCs, diálogos,
  quests, inventario ni `InteractionSystem`.
- Collision continúa administrado por el sistema de `AddPortfolio-0002`.

## AddPortfolio-0005 — Base Visual Del Player

**Fecha:** 2026-08-11
**Autor:** Marco Antonio Cárdenas Sánchez
**Tipo:** Fundación visual del Player RPG 2D

Se reemplaza el gráfico único provisional por una estructura basada en
`Phaser.Physics.Arcade.Sprite`, sin descargar assets ni agregar dependencias.

### Implementación Registrada

- `Player` visual separado de Physics, Movement, Camera, Collision y Depth.
- Direcciones centralizadas `down`, `up`, `left` y `right`.
- Estados `idle` y `walk` para cada dirección.
- Placeholder local con diferencias visuales de frente, espalda, izquierda y
  derecha.
- Shadow visual sin Collision que acompaña al Player.
- Physics body de `18 x 12 px` enfocado en la zona inferior del personaje.
- Profundidad calculada desde `y + feetOffset` mediante `applyDepthSorting`.
- Ruta futura preparada en `src/assets/sprites/player/` para el spritesheet
  definitivo.

### Fuera Del Alcance

- No se agregó spritesheet artístico, audio ni asset externo.
- No se implementaron animaciones finales ni controles mobile.
- No se modificaron Camera, Collision, Tilemap ni React UI.

## AddPortfolio-0006 — Office Tileset Foundation

**Fecha:** 2026-08-11
**Autor:** Marco Antonio Cárdenas Sánchez
**Tipo:** Base visual y estructural del Office World

Se transforma la prueba de oficina en una composición provisional data-driven,
sin descargar assets, agregar dependencias ni implementar interacción.

### Implementación Registrada

- Catálogo centralizado de tiles, objetos, palette y manifest.
- Definiciones de `OFFICE_OBJECTS` con categoría, zona, visual, `baseY`,
  Collision y `depthMode`.
- Zonas semánticas `About`, `Projects`, `Skills`, `Experience`, `Achievements`
  y `Contact` sin triggers.
- Tilemap con `Ground`, `Walls`, `WallUpper` y `Decoration`.
- Floor de madera y dos áreas de alfombra provisionales.
- Wall Base y Wall Upper separados visualmente.
- Placeholders diferenciados para desk, PC, chair, bookshelf, project table,
  experience desk, sofa, whiteboard, plants, filing cabinet y trophy shelf.
- Collision derivada de la zona inferior de los muebles, separada de su visual.
- `upperLayer` centralizado para paredes y objetos elevados.
- Rutas futuras documentadas para `src/assets/tilesets/office/` y
  `src/assets/sprites/objects/`.

### Fuera Del Alcance

- No se agregaron assets artísticos definitivos ni mapas JSON de Tiled.
- No se implementaron triggers, `InteractionSystem`, NPCs, diálogos, audio ni
  UI final.
- No se modificó la arquitectura React + Phaser ni el Player de
  `AddPortfolio-0005`.
