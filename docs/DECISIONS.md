# Decisiones

Las siguientes decisiones están aceptadas y forman parte del contexto
arquitectónico de `MiPortafolio`. No deben cambiarse sin aprobación explícita.

## DEC-001 — React + Phaser

**Estado:** Aceptada
**Decisión:** React administra la UI del portafolio y Phaser administra el
mundo RPG interactivo.  
**Motivo:** Permite mantener la interfaz profesional desacoplada del ciclo de
juego y reservar a Phaser la simulación 2D.

## DEC-002 — Portafolio Como Mundo Interactivo

**Estado:** Aceptada  
**Decisión:** La experiencia principal será explorar un mundo RPG 2D con vista
superior.  
**Motivo:** La exploración funciona como modelo de navegación para presentar
proyectos, información profesional y contacto.

## DEC-003 — Sin Backend Inicialmente

**Estado:** Aceptada  
**Decisión:** No introducir API, base de datos ni autenticación hasta que
exista una necesidad concreta.  
**Motivo:** La primera etapa puede funcionar como una experiencia estática y
local sin complejidad de servidor.

## DEC-004 — Independencia De VegaSystem

**Estado:** Aceptada  
**Decisión:** `MiPortafolio` y `VegaSystem` permanecen como proyectos
independientes.  
**Motivo:** `VegaSystem` podrá mostrarse como un proyecto del portafolio sin
crear una dependencia de runtime o de compilación.

## DEC-005 — Trazabilidad AddPortfolio

**Estado:** Aceptada  
**Decisión:** Los cambios significativos deben poder rastrearse entre código,
documentación y Git mediante `AddPortfolio-NNNN`.  
**Motivo:** Permite relacionar una implementación con su contexto, decisiones
y registro histórico.

## DEC-006 — Idioma

**Estado:** Aceptada  
**Decisión:** La documentación, los comentarios y las explicaciones se
escriben en español, conservando en inglés los nombres técnicos establecidos.
  
**Motivo:** Centraliza el contexto del proyecto en el idioma de trabajo sin
alterar APIs ni identificadores técnicos.

## DEC-007 — Perspectiva Visual Top-Down 3/4

**Estado:** Aceptada
**Decisión:** `MiPortafolio` utilizará una perspectiva RPG 2D top-down 3/4.
La Camera mostrará el escenario principalmente desde arriba, mientras los
objetos, muebles, paredes y personajes conservarán volumen visual visible en
sus frentes y laterales.
**Motivo:** Acercar la experiencia visual al concepto de los mockups del
proyecto y evitar una vista completamente cenital tipo tablero.

Esta decisión debe considerarse al diseñar `Tiles`, `Sprites`, `Player`,
`Furniture`, `Collision`, `Depth sorting`, composición del mapa y
`Animations`. No se debe cambiar a una perspectiva isométrica real ni a una
vista totalmente cenital sin aprobación explícita.
