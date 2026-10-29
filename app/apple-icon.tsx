import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0A1628",
        }}
      >
        <div
          style={{
            width: 124,
            height: 124,
            borderRadius: 62,
            background: "#3D6EA8",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#F1D56B",
            fontSize: 92,
            fontWeight: 700,
            lineHeight: 1,
          }}
        >
          +
        </div>
      </div>
    ),
    { ...size },
  );
}
