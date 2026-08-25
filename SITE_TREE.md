# Main site tree and design audit

Reference language: `/portfolio/` and `/ctrl/` — warm ivory surfaces, a restrained
blue/magenta accent pair, oversized Sora headlines, concise editorial copy,
dark pill-shaped actions, and a persistent profile/navigation rail.

## Public portfolio surface

```text
/
├── /portfolio/                         Prototyping portfolio [reference]
├── /ctrl/                              Controls portfolio [reference]
├── /projects.html                      Project index [older → unified]
│   ├── /project-satellite-MPC.html     Satellite rendezvous / MPC [older → unified]
│   ├── /project-krk-GameTheory.html    KRK game-theory solver [older → unified]
│   └── /project-inverted-pendulum.html Inverted-pendulum hardware [older → unified]
├── /research.html                      Research index [older → unified]
└── /cv.html                            Embedded CV [utility-only → unified]
```

The homepage and every page marked “older” were brought into the shared visual
system. `/portfolio/` keeps its project-specific layouts and `/ctrl/` keeps its
technical console language; both remain the design anchors.

## Archived coursework (kept distinct)

The `Assignments/`, `E-Assignments/`, `Writ2E/`, `me10x/`, `me127/`, and `me18/`
trees are older course artifacts rather than pages in the portfolio navigation.
They are intentionally excluded from the main-site redesign so their original
submission context and layouts remain intact.
