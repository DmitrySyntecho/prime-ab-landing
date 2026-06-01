// Static, CSS-only animated background. No "use client", no hooks, no JS loop —
// the orbs/rays/bauhaus drift purely via CSS keyframes, so this adds zero JS to
// the bundle and no main-thread work (no requestAnimationFrame, no listeners).
export function BackgroundFX() {
  return (
    <>
      <div className="bg-stage" aria-hidden />
      <div className="bg-rays" aria-hidden />
      <div className="bg-bauhaus" aria-hidden />
      <div className="bg-orb a" aria-hidden />
      <div className="bg-orb b" aria-hidden />
      <div className="bg-orb c" aria-hidden />
      <div className="bg-noise" aria-hidden />
    </>
  )
}
