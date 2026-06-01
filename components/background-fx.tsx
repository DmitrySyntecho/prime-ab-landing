// Static, pure-CSS background. No client JS: the orbs and gradient drift via
// CSS keyframes only — no requestAnimationFrame loop, no mousemove listeners,
// no DOM particles. Keeps the look light for mobile PageSpeed.
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
