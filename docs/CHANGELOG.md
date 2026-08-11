# Changelog

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
