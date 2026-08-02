import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Feranmi Oresajo — Mobile & web developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#faf6ee",
          backgroundImage:
            "repeating-linear-gradient(to bottom, transparent 0px, transparent 43px, #e0d8c8 43px, #e0d8c8 44px)",
          padding: "72px 88px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 88,
            top: 0,
            bottom: 0,
            width: 2,
            backgroundColor: "#1c4f7c",
            opacity: 0.3,
            display: "flex",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", paddingLeft: 56 }}>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              letterSpacing: 6,
              color: "#8a7f6b",
              textTransform: "uppercase",
            }}
          >
            Mobile &amp; web developer
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 132,
              lineHeight: 1,
              color: "#26221b",
              letterSpacing: -4,
              marginTop: 28,
            }}
          >
            Feranmi Oresajo
            <span style={{ color: "#1c4f7c" }}>.</span>
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 36,
              lineHeight: 1.4,
              color: "#5c5445",
              marginTop: 36,
              maxWidth: 860,
            }}
          >
            I make buttons that actually work. Flutter, Next.js, React.
          </div>

          <div
            style={{
              display: "flex",
              gap: 40,
              marginTop: 52,
              fontSize: 26,
              color: "#8a7f6b",
            }}
          >
            <span style={{ display: "flex" }}>appmd.dev</span>
            <span style={{ display: "flex" }}>github.com/Ferousco-dev</span>
            <span style={{ display: "flex" }}>Lagos, Nigeria</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
