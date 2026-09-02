interface LogoProps {
  /** Rendered height in px — width follows automatically to keep the logo's real aspect ratio. */
  height?: number;
  withWordmark?: boolean;
}

/**
 * Renders /public/logo.png. Drop your logo file in as `public/logo.png`
 * and it shows up everywhere this component is used — currently the
 * navbar and footer. A plain <img> is used (not next/image) since we
 * don't know your logo's exact pixel dimensions in advance, and forcing
 * a fixed width/height would distort or crop a non-square logo.
 */
export default function Logo({ height = 40, withWordmark = false }: LogoProps) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        flexShrink: 0,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.png"
        alt="TechyVerve logo"
        style={{
          height,
          width: "auto",
          maxWidth: height * 3,
          objectFit: "contain",
          flexShrink: 0,
          display: "block",
        }}
      />
      {withWordmark && (
        <span style={{ fontSize: 18, fontWeight: 700, whiteSpace: "nowrap" }}>TechyVerve</span>
      )}
    </span>
  );
}
