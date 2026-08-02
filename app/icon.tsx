import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default async function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#26221b",
          borderRadius: 64,
          color: "#faf6ee",
          fontSize: 38,
          letterSpacing: -1,
        }}
      >
        F
        <span style={{ color: "#74add6" }}>.</span>
      </div>
    ),
    size,
  );
}
