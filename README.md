# MiPortafolio

MiPortafolio es un portafolio profesional interactivo presentado como un
mundo RPG 2D con perspectiva top-down 3/4. La interfaz del portafolio está
construida con React y el mundo explorable está construido con Phaser.

## Estado actual

La implementación actual contiene una oficina provisional compacta con un
tileset y Furniture locales propios, un Player provisional basado en `Arcade
Sprite` y una única escena llamada `OfficeScene`. El Player se puede mover con
`WASD` y las flechas del
teclado, queda limitado por los bordes del World y colisiona con obstáculos
provisionales. La Camera sigue al Player dentro de un World mayor que el
viewport.
El Player distingue las cuatro direcciones, estados `idle` y `walk`, y utiliza
una sombra visual sin Collision.
El World incluye un Tilemap provisional con capas `Ground`, `Walls`,
`WallUpper` y `Decoration`, además de Furniture local con profundidad visual
basada en su `baseY`. La oficina utiliza un catálogo de assets y una
distribución data-driven con zonas semánticas e interacción provisional con
contenido base del portafolio. La composición actual agrupa las zonas dentro de una sola
oficina y mantiene el debug de Collision desactivado para la ejecución normal.

La interfaz React actual incluye la cabecera del portafolio, el contenedor del
mundo interactivo, dos paneles informativos provisionales y un
`PortfolioPanel` abierto desde Phaser. El contenido base está centralizado en
`src/data/portfolioData.ts`; no existen backend, API, base de datos ni
autenticación.

## Stack

- React
- TypeScript
- Vite
- Phaser

Phaser ya forma parte de las dependencias existentes. No se agregaron nuevas
dependencias para la implementación inicial.

## Arquitectura

React administra la interfaz del portafolio. Phaser administra el mundo RPG,
la escena, el personaje, el movimiento y la física. No existe dependencia de
runtime entre MiPortafolio y VegaSystem; VegaSystem podrá aparecer únicamente
como un proyecto del portafolio en el futuro.

La documentación autoritativa se encuentra en [`docs/`](./docs/):

- [`PROJECT_CONTEXT.md`](./docs/PROJECT_CONTEXT.md): contexto y alcance real.
- [`ARCHITECTURE.md`](./docs/ARCHITECTURE.md): arquitectura implementada.
- [`ASSETS.md`](./docs/ASSETS.md): catálogo, paths y convención de assets.
- [`DEVELOPMENT.md`](./docs/DEVELOPMENT.md): reglas y flujo de desarrollo.
- [`DECISIONS.md`](./docs/DECISIONS.md): decisiones aceptadas.
- [`CHANGELOG.md`](./docs/CHANGELOG.md): trazabilidad `AddPortfolio-NNNN`.

## Desarrollo

Instalar las dependencias existentes y ejecutar el entorno local:

```bash
npm install
npm run dev
```

Antes de realizar cambios importantes, leer `README.md` y todos los archivos
de `docs/`. Las verificaciones disponibles son:

```bash
npm run lint
npm run build
```

Los cambios significativos deben registrarse con un identificador
`AddPortfolio-NNNN` en el código, la documentación y, cuando corresponda, el
mensaje de commit.
