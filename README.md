# MiPortafolio

MiPortafolio es un portafolio profesional interactivo presentado como un
mundo RPG 2D con vista superior. La interfaz del portafolio está construida
con React y el mundo explorable está construido con Phaser.

## Estado actual

La implementación inicial contiene una oficina provisional dibujada sin
assets externos, un personaje provisional y una única escena llamada
`OfficeScene`. El personaje se puede mover con `WASD` y las flechas del
teclado, y queda limitado por los bordes de la habitación mediante `Arcade Physics`.

La interfaz React actual incluye la cabecera del portafolio, el contenedor del
mundo interactivo y dos paneles informativos provisionales. Todavía no existen
proyectos interactivos, ventanas, overlays, objetos interactivos, cámara
personalizada, backend, API, base de datos ni autenticación.

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
