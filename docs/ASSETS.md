# Assets Del Office World

## Estado Actual

`AddPortfolio-0007` incorpora el primer archivo gráfico propio del mundo:

```text
src/assets/tilesets/office/office-tileset.svg
```

Es un tileset pequeño, alineado a la cuadrícula, creado específicamente para
este repositorio. Utiliza formas simples y `shape-rendering="crispEdges"` para
mantener una apariencia pixel-style sin copiar arte externo. No representa el
arte definitivo de la oficina.

Los muebles, objetos y Player continúan siendo placeholders generados dentro
de Phaser. No se descargaron imágenes ni se utilizaron sprites de terceros.

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
OfficeScene.create()
    -> createOfficeWorld()
        -> createOfficeTilemap()
```

La URL se obtiene con `new URL(..., import.meta.url)` desde
`officeAssetCatalog.ts`, por lo que Vite controla su path final. No se carga
ningún archivo que no esté declarado en el repositorio.

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

Los paths de objetos futuros son:

```text
src/assets/sprites/objects/<asset-key>.png
```

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

## Sustitución Por Arte Definitivo

Para sustituir el tileset:

1. Reemplazar el archivo de `src/assets/tilesets/office/` conservando seis
   frames de `32 x 32 px`, o actualizar explícitamente `OFFICE_TILE_INDEX`.
2. Conservar las claves `floorWood`, `floorCarpet`, `wallBase`, `wallTop`,
   `wallCorner` y `doorway`.
3. Actualizar `OFFICE_ASSET_MANIFEST` con el nuevo path y `source: 'real'`.
4. Mantener `Ground`, `Walls`, `WallUpper` y `Decoration` como contratos de
   capas.

Para migrar a Tiled, colocar el mapa JSON en `src/assets/maps/`, cargarlo con
`this.load.tilemapTiledJSON` y conservar los nombres de capas y la convención
de `TILE_SIZE`. No es obligatorio usar Tiled todavía.
