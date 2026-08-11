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

## AddPortfolio-0007 — Primer Tileset Real Del Office World

**Fecha:** 2026-08-11
**Autor:** Marco Antonio Cárdenas Sánchez
**Tipo:** Integración de asset local y fallback visual

Se incorpora el primer asset gráfico propio y local del Office World. El
tileset es deliberadamente pequeño y provisional: valida el flujo real de
preload, el contrato de `32 x 32 px`, la separación visual de piso, paredes,
alfombra y entrada, y la compatibilidad con las capas existentes.

### Implementación Registrada

- Tileset local `src/assets/tilesets/office/office-tileset.svg` con seis frames.
- Preload explícito desde `OfficeScene.preload()` antes de crear el World.
- Catálogo actualizado con texture key, URL Vite, manifest y origen `real`.
- Manifest con fallback `procedural` declarado para tiles y objetos futuros.
- Tilemap capaz de preferir el tileset real y usar un único fallback si falta.
- Capas existentes `Ground`, `Walls`, `WallUpper` y `Decoration` conservadas.
- Documentación de paths, índices, carga y sustitución en `docs/ASSETS.md`.

### Fuera Del Alcance

- No se modificaron Player, Furniture, Collision, Camera, Input ni React.
- No se agregaron assets externos, sprites de terceros ni dependencias nuevas.
- No se agregaron interacción, triggers, NPCs, audio, mobile controls ni mapa
  JSON de Tiled.

## AddPortfolio-0008 — Office Furniture Pixel Art

**Fecha:** 2026-08-11
**Autor:** Marco Antonio Cárdenas Sánchez
**Tipo:** Integración de Furniture local y composición visual

Se reemplazan los placeholders geométricos de Furniture por un spritesheet SVG
propio, manteniendo la perspectiva RPG 2D top-down 3/4 de `DEC-007`. La
implementación se limita a la representación visual de la oficina y no agrega
`InteractionSystem`.

### Implementación Registrada

- Spritesheet local `src/assets/sprites/objects/office/office-furniture.svg`.
- 17 frames propios de `64 x 64 px` para los objetos del Office World.
- Desk, PC, chair, bookshelf, projectTable y experienceDesk.
- Sofa, coffeeTable, whiteboard, plants, lamp y trophyShelf.
- Phone, filingCabinet, door y rug.
- Preload específico de Furniture integrado en `preloadOfficeAssets`.
- `OFFICE_ASSET_MANIFEST` actualizado con paths, frames, Collision, Depth,
  `source: 'real'` y fallback procedural.
- Furniture representado mediante `Container` con sombra y sprite con origen
  inferior para conservar `baseY`.
- `applyDepthSorting` conservado para Player, muebles altos y objetos dinámicos.
- Rug agregado como decoración sin Collision en la zona `Contact`.
- Fallback procedural único conservado si no carga el spritesheet.

### Fuera Del Alcance

- No se implementaron `InteractionSystem`, triggers, eventos de cercanía ni
  paneles React.
- No se modificaron funcionalmente Player, Input, Movement, Camera, Collision,
  Tilemap ni la arquitectura React + Phaser.
- No se agregaron dependencias, assets externos, logos, NPCs, diálogos, audio ni
  backend.

## AddPortfolio-0009 — Office World Composition Pass

**Fecha:** 2026-08-11
**Autor:** Marco Antonio Cárdenas Sánchez
**Tipo:** Pulido visual y compactación de composición

Se realiza una pasada de composición del Office World antes de implementar
`InteractionSystem`. El cambio conserva la arquitectura React + Phaser, la
perspectiva `DEC-007`, el Player, Collision, Camera, Tilemap y Depth sorting.

### Implementación Registrada

- World reducido de `1792 x 960` a `1536 x 800` mediante `TILEMAP_SIZE`.
- Tilemap reducido de `56 x 30` a `48 x 25` tiles sin migrar a Tiled JSON.
- Furniture reagrupado en una única oficina con rutas de circulación más cortas.
- About centrado alrededor de desk, PC, chair y bookshelf.
- Projects agrupado con projectTable y filingCabinet.
- Skills agrupado con bookshelf y whiteboard.
- Experience agrupado con experienceDesk, lamp y plantLarge.
- Achievements integrado con trophyShelf en la zona inferior central.
- Contact convertido en lounge con sofa, coffeeTable, rug, phone y plantSmall.
- `DEBUG_CONFIG.physics` centralizado y desactivado por defecto.
- Piso de madera con menor contraste y alfombras compactas sin bordes repetidos.
- Causa de la cuadrícula inferior localizada en el borde repetido del tile
  `floorCarpet`; corregida en el SVG y en el fallback procedural.
- Player scale, Camera zoom, Physics body, Input y Movement conservados.

### Fuera Del Alcance

- No se implementaron `InteractionSystem`, triggers, proximity detection ni
  contenido real de las zonas.
- No se modificó `DEC-007`, React, Phaser, Player, Collision central, Camera
  follow, Tiled JSON ni la arquitectura de preload.
- No se agregaron dependencias, assets externos, audio, backend ni UI final.

### Segunda Pasada Visual

La validación manual de navegador detectó que la primera composición todavía
tenía regiones vacías y Furniture aislado. Sin crear un nuevo identificador,
`AddPortfolio-0009` se continúa con estos ajustes:

- Alfombra superior izquierda reducida y asociada a la estación de Projects.
- Rug de Contact reducido a `150 x 52 px` y lounge agrupado con sofa,
  coffeeTable, phone y plantSmall.
- Sofa reducido de `210 x 94` a `184 x 82` únicamente en su visual.
- Bookshelf acercado a Skills y whiteboard para evitar un objeto aislado.
- Projects acercado mediante filingCabinet junto a projectTable.
- Experience compactado con experienceDesk, lamp y plantLarge.
- TrophyShelf acercado al núcleo inferior de la oficina.
- Door reubicada a la fila interior del borde, con doorway y umbral visibles.
- Primera posición del Player ajustada a `(820, 500)` sin cambiar escala ni
  comportamiento.
- WallUpper extendido una celda en los laterales superiores para reforzar
  corners sin cambiar Collision ni convertir paredes en bandas gruesas.

La aprobación visual final queda pendiente de una nueva revisión manual en
navegador.

### Pasada Final De Ajuste

La siguiente revisión manual encontró una superposición del Player con el
Furniture central y una relación débil entre projectTable, filingCabinet y la
alfombra de Projects. Sin abrir un nuevo bloque, `AddPortfolio-0009` queda
actualizado con estos ajustes finales:

- `PLAYER_START_POSITION` centralizado en `(820, 540)`.
- Alfombra de Projects reducida a `8 x 3` tiles y centrada bajo projectTable.
- filingCabinet movido a `(320, 560)` para formar parte de Projects sin cerrar
  la circulación.
- Camera, Player scale, Player Movement, Input, Collision y Depth Sorting sin
  cambios funcionales.

La aprobación visual final continúa pendiente de la próxima validación manual
de la oficina completa.

## AddPortfolio-0010 — InteractionSystem Y PortfolioPanel

**Fecha:** 2026-08-11
**Autor:** Marco Antonio Cárdenas Sánchez
**Tipo:** Interacción provisional y bridge Phaser-React

Se incorpora el primer flujo de interacción del Office World sobre la
composición de `AddPortfolio-0009`, sin modificar Player, Camera, Collision,
Depth sorting ni la composición visual.

### Implementación Registrada

- `InteractionType`, `InteractionDefinition` e `InteractionTarget` compartidos
  y tipados.
- Targets interactivos data-driven para About, Projects, Skills, Experience,
  Achievements y Contact.
- `Interaction Range` independiente de Collision.
- Selección del objeto interactivo más cercano por distancia.
- Prompt `[E] INTERACTUAR` sobre el Player cuando existe un target cercano.
- Pulsación discreta mediante `Phaser.Input.Keyboard.JustDown`.
- `InteractionBridge` por instancia de `PhaserGame`, sin EventBus global.
- Estado `activePanel` en React.
- `PortfolioPanel` provisional con contenido estático por zona.
- Cierre mediante botón `X` y tecla `Escape`.
- Phaser permanece montado al abrir y cerrar el panel.

### Flujo

```text
Player
  -> InteractionSystem
      -> InteractionBridge
          -> React activePanel
              -> PortfolioPanel
```

### Fuera Del Alcance

- No se implementaron triggers de dominio, NPCs, diálogos, quests, inventario,
  contenido real de portfolio ni funcionalidades específicas de cada zona.
- No se agregaron dependencias, assets, backend, APIs ni audio.
