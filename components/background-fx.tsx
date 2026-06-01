// Static, CSS-only background. No "use client", no hooks, no JS loop —
// just a fixed color gradient plus a few soft, slowly-drifting orbs via CSS
// keyframes, so this adds zero JS to the bundle and no main-thread work
// (no requestAnimationFrame, no listeners). The heavy full-viewport rotating
// layers (conic rays + spinning bauhaus pattern) were removed for performance.
export function BackgroundFX() {
  return (
    <>
      <div className="bg-stage" aria-hidden />
      <div className="bg-orb a" aria-hidden />
      <div className="bg-orb b" aria-hidden />
      <div className="bg-orb c" aria-hidden />
      <div className="bg-noise" aria-hidden />
    </>
  )
}
