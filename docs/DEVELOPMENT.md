# Desarrollo

## Lectura Obligatoria

Antes de realizar cambios importantes, cualquier desarrollador o agente IA
debe leer, en conjunto, los siguientes archivos:

- `README.md`
- `docs/PROJECT_CONTEXT.md`
- `docs/ARCHITECTURE.md`
- `docs/DECISIONS.md`
- `docs/DEVELOPMENT.md`

La documentación de `docs/` es el contexto autoritativo del proyecto.

## Reglas Generales

- Escribir en español la documentación, los comentarios y las explicaciones.
- Mantener en inglés los nombres de tecnologías, archivos, carpetas, clases,
  métodos, variables, APIs, identificadores técnicos y términos cuyo nombre
  técnico esté establecido en inglés.
- Usar `AddPortfolio-NNNN` como sistema oficial de trazabilidad.
- No cambiar decisiones aceptadas sin aprobación explícita.
- No agregar dependencias nuevas sin justificar primero su necesidad.
- No introducir backend inicialmente.
- Mantener `MiPortafolio` independiente de `VegaSystem`.
- Actualizar la documentación cuando un cambio afecte arquitectura,
  comportamiento o estructura.
- No eliminar referencias históricas `AddPortfolio-NNNN` durante una limpieza
  o refactorización.

## Trazabilidad De Código

Todo bloque funcional significativo agregado o modificado debe estar rodeado
por un bloque de trazabilidad. Un identificador representa una unidad lógica,
no una línea individual. El mismo identificador puede aparecer en varios
archivos relacionados.

```ts
// ==========================================================================
// BEGIN AddPortfolio-NNNN
// Autor: Marco Antonio Cárdenas Sánchez
// Fecha: YYYY-MM-DD
//
// Propósito:
// Explicación breve de qué hace este bloque.
//
// Descripción:
// Explicación de por qué existe y cuál es su papel dentro del sistema.
// ==========================================================================

// código

// ==========================================================================
// END AddPortfolio-NNNN
// ==========================================================================
```

Si se modifica un bloque existente, conservar su referencia histórica e
indicar dentro de la documentación qué `AddPortfolio-NNNN` original se está
modificando. En archivos que no admiten comentarios `//`, como CSS, usar la
forma de comentario equivalente sin cambiar el contenido de la trazabilidad.

## Comandos

Instalar las dependencias declaradas:

```bash
npm install
```

Iniciar el entorno de desarrollo:

```bash
npm run dev
```

Ejecutar el análisis estático:

```bash
npm run lint
```

Ejecutar la comprobación de TypeScript y el build de producción:

```bash
npm run build
```

## Estructura Relevante

```text
src/
├── App.tsx
├── game/
│   ├── PhaserGame.tsx
│   ├── config.ts
│   ├── index.ts
│   ├── entities/createPlayer.ts
│   ├── scenes/OfficeScene.ts
│   └── world/officeLayout.ts
└── main.tsx
```

Los cambios deben ser pequeños, respetar la separación React-Phaser y evitar
modificar archivos que no estén relacionados con el objetivo del cambio.
