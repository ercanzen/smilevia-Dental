export function MotionBackground() {
  return <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 opacity-[.35] [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:46px_46px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"/>
    <div className="absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#4da8ff]/25 blur-[110px] motion-safe:animate-[drift_16s_ease-in-out_infinite]"/>
    <div className="absolute -right-24 bottom-[-10%] h-[380px] w-[380px] rounded-full bg-[#5b7fe0]/20 blur-[110px] motion-safe:animate-[drift_20s_ease-in-out_infinite_reverse]"/>
  </div>
}
