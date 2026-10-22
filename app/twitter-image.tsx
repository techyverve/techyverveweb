import { ImageResponse } from "next/og";

export const alt = "TechyVerve — Software Development Company in Pune";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #ffffff 0%, #f5f5f5 60%, #f3e8ff 100%)",
          color: "#171717",
        }}
      >
        <div style={{ fontSize: 28, color: "#737373", letterSpacing: 4 }}>TECHYVERVE · KHARADI, PUNE</div>
        <div style={{ fontSize: 76, fontWeight: 600, lineHeight: 1.1, marginTop: 24 }}>
          We turn under-built ideas into shipped software.
        </div>
        <div style={{ fontSize: 30, color: "#525252", marginTop: 32 }}>
          Web · Mobile · ERP · Cloud
        </div>
      </div>
    ),
    size
  );
}
