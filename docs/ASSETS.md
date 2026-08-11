# Assets Del Office World

## Estado Actual

`AddPortfolio-0007` incorpora el primer archivo gráfico propio del mundo. En
`AddPortfolio-0008` Furniture utiliza además un spritesheet local propio:

```text
src/assets/tilesets/office/office-tileset.svg
src/assets/sprites/objects/office/office-furniture.svg
```

Es un tileset pequeño, alineado a la cuadrícula, creado específicamente para
este repositorio. Utiliza formas simples y `shape-rendering="crispEdges"` para
mantener una apariencia pixel-style sin copiar arte externo. No representa el
arte definitivo de la oficina.

El Player continúa siendo un placeholder generado dentro de Phaser. Furniture
ya utiliza el spritesheet local de `AddPortfolio-0008`, con un fallback
procedural común para desarrollo si la textura no está disponible. No se
descargaron imágenes ni se utilizaron sprites de terceros.

## Convención Del Tileset

El archivo mide `192 x 32 px` y contiene seis frames horizontales de `32 x 32
px`. El orden es parte del contrato actual:

| Índice | Asset | Uso |
| --- | --- | --- |
| `0` | `floorWood` | Piso principal |
| `1` | `floorCarpet` | Alfombra y zonas diferenciadas |
| `2` | `wallBase` | Base física/visual de pared |
| `3` | `wallTop` | Parte superior elevada de pared |
| `4` | `wallCorner` | Esquinas de pared |
| `5` | `doorway` | Entrada inferior |

`TILE_SIZE` permanece centralizado en `src/game/world/worldConfig.ts` con el
valor `32`.

## Carga

El flujo actual es:

```text
OfficeScene.preload()
    -> preloadOfficeAssets()
        -> office-tileset.svg
        -> office-furniture.svg
OfficeScene.create()
    -> createOfficeWorld()
        -> createOfficeTilemap()
```

La URL se obtiene con `new URL(..., import.meta.url)` desde
`officeAssetCatalog.ts`, por lo que Vite controla su path final. No se carga
ningún archivo que no esté declarado en el repositorio.

## Composición AddPortfolio-0009

El mapa actual utiliza `48 x 25` tiles (`1536 x 800 px`) con `TILE_SIZE` de
`32`. El piso de madera usa una línea de unión de bajo contraste. El tile de
`floorCarpet` ya no dibuja un borde alrededor de cada celda; antes esa forma se
repetía en el parche de alfombra inferior derecho y producía la cuadrícula
visual observada. La corrección se hizo en `office-tileset.svg` y en su
fallback procedural, no ocultando la zona desde CSS.

Las alfombras se usan como parches compactos para apoyar Projects y Contact;
la zona Contact utiliza además un rug de `150 x 52 px` bajo el lounge. Las
coordenadas de Furniture continúan en `officeLayoutData.ts`, con circulación
abierta entre grupos y una sola habitación.

Si la textura real no está disponible, `createOfficeTilemap` muestra una
advertencia y genera un único tileset procedural de respaldo. El juego no
queda sin mapa, pero el respaldo sigue siendo provisional.

## Manifest

`OFFICE_ASSET_MANIFEST` centraliza para cada asset:

- `key` técnico;
- `type` de tile u objeto;
- path futuro o actual;
- frame y `tileIndex` cuando aplica;
- metadatos de Collision;
- `depthMode`;
- `source` (`real`, `placeholder` o `future`);
- fallback procedural cuando existe.

Los objetos de Furniture implementados utilizan:

```text
src/assets/sprites/objects/office/office-furniture.svg
```

El archivo mide `384 x 192 px` y contiene 17 frames de `64 x 64 px`.
`OFFICE_FURNITURE_FRAME_INDEX` mantiene el orden de los frames.

| Frame | Asset | Visual | Collision | Upper visual |
| --- | --- | --- | --- | --- |
| `0` | `desk` | Real | `160 x 28` desde layout | No |
| `1` | `pc` | Real | Ninguna | No |
| `2` | `chair` | Real | `34 x 22` desde layout | No |
| `3` | `bookshelf` | Real | `82 x 28` desde layout | No |
| `4` | `projectTable` | Real | `190 x 30` desde layout | No |
| `5` | `experienceDesk` | Real | `150 x 28` desde layout | No |
| `6` | `sofa` | Real | `180 x 36` desde layout | No |
| `7` | `coffeeTable` | Real | `100 x 20` desde layout | No |
| `8` | `whiteboard` | Real | Ninguna | Sí, capa fija |
| `9` | `plantSmall` | Real | `24 x 18` desde layout | No |
| `10` | `plantLarge` | Real | `28 x 22` desde layout | No |
| `11` | `lamp` | Real | Ninguna | No |
| `12` | `trophyShelf` | Real | `156 x 28` desde layout | No |
| `13` | `phone` | Real | Ninguna | No |
| `14` | `filingCabinet` | Real | `56 x 28` desde layout | No |
| `15` | `door` | Real | Ninguna | Sí, capa fija |
| `16` | `rug` | Real | Ninguna | No |

Los objetos actuales tienen `source: 'real'` y `fallback: 'procedural'`.
`source: 'placeholder'` y `source: 'future'` permanecen disponibles para
futuras entradas que todavía no tengan arte local.

La ruta del Player permanece en:

```text
src/assets/sprites/player/
```

## Wall Base Y Wall Upper

`Walls` utiliza `wallBase` y representa el borde inferior de la habitación.
Los límites externos de `Arcade Physics` siguen controlando la colisión del
perímetro. `WallUpper` utiliza `wallTop` y `wallCorner` en una capa superior,
sin ampliar el Physics body.

## Objetos Y Medidas

Los objetos se describen en `officeLayoutData.ts`. `x` e `y` son el punto
inferior de apoyo (`baseY`). `visualWidth` y `visualHeight` describen la forma
visible; `collision.width` y `collision.height` describen únicamente la zona
que toca el suelo.

Esta diferencia permite que un Player pueda pasar detrás de la parte superior
de un mueble sin atravesar su base.

Furniture se crea dentro de un `Phaser.GameObjects.Container` con origen lógico
en el borde inferior. El sprite se escala al `visualWidth` y `visualHeight` de
`OFFICE_OBJECTS`, por lo que el frame de 64 px no altera el contrato de
`baseY`. Los objetos dinámicos usan `applyDepthSorting`; el Player puede quedar
delante o detrás al cambiar su posición vertical. `whiteboard` y `door`
conservan `depthMode: 'upper'` porque son elementos visuales de pared.

La `PC` y el `phone` tienen identidad lógica independiente, pero no agregan
Collision ni `InteractionSystem`.

## Sustitución Por Arte Definitivo

Para sustituir el tileset:

1. Reemplazar el archivo de `src/assets/tilesets/office/` conservando seis
   frames de `32 x 32 px`, o actualizar explícitamente `OFFICE_TILE_INDEX`.
2. Conservar las claves `floorWood`, `floorCarpet`, `wallBase`, `wallTop`,
   `wallCorner` y `doorway`.
3. Actualizar `OFFICE_ASSET_MANIFEST` con el nuevo path y `source: 'real'`.
4. Mantener `Ground`, `Walls`, `WallUpper` y `Decoration` como contratos de
   capas.

Para sustituir Furniture:

1. Reemplazar `office-furniture.svg` conservando 17 frames de `64 x 64 px`, o
   actualizar `OFFICE_FURNITURE_FRAME_INDEX`.
2. Conservar el `spriteFrame` y el `asset key` de cada entrada del manifest.
3. Mantener `visualWidth`, `visualHeight`, `baseY` y `collision` en
   `officeLayoutData.ts` hasta que el nuevo arte requiera medidas justificadas.
4. Mantener el origen inferior del sprite y `applyDepthSorting`; no mover
   coordenadas a `OfficeScene`.

Para migrar a Tiled, colocar el mapa JSON en `src/assets/maps/`, cargarlo con
`this.load.tilemapTiledJSON` y conservar los nombres de capas y la convención
de `TILE_SIZE`. No es obligatorio usar Tiled todavía.
