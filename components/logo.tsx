import Image from "next/image"

interface LogoProps {
  variant?: "dark" | "light"
  className?: string
  showTagline?: boolean
}

export function Logo({ variant = "light", className = "", showTagline = true }: LogoProps) {
  const logoSrc =
    variant === "dark"
      ? "/images/prime-line-av-logo-dark-bg.svg"
      : "/images/prime-line-av-logo-light-bg.svg"

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Image
        src={logoSrc}
        alt="Prime Line AV"
        width={180}
        height={67}
        className="h-10 w-auto"
      />
      {showTagline && (
        <span className={`text-xs ${variant === "dark" ? "text-gray-400" : "text-gray-600"}`}>
          When Everything Is Just Perfect
        </span>
      )}
    </div>
  )
}

export function LogoMark({ className = "", variant = "light" }: { className?: string; variant?: "dark" | "light" }) {
  const logoSrc =
    variant === "dark"
      ? "/images/prime-line-av-logo-dark-bg.svg"
      : "/images/prime-line-av-logo-light-bg.svg"

  return (
    <Image
      src={logoSrc}
      alt="Prime Line AV"
      width={200}
      height={75}
      className={`h-12 w-auto ${className}`}
    />
  )
}
