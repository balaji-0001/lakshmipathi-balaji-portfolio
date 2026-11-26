import { person } from "@/resources";
import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const title = url.searchParams.get("title") || person.name;

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        padding: "56px 64px",
        background: "linear-gradient(135deg, #090d16 0%, #0f172a 60%, #082f49 100%)",
        color: "#f8fafc",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          fontSize: "24px",
          color: "#22d3ee",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        <span>{person.city}</span>
        <span>·</span>
        <span>Portfolio</span>
      </div>

      <div
        style={{
          display: "flex",
          fontSize: "60px",
          fontWeight: 700,
          lineHeight: 1.15,
          letterSpacing: "-0.03em",
          maxWidth: "1040px",
        }}
      >
        {title}
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "24px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "84px",
            height: "84px",
            borderRadius: "20px",
            background: "#0f172a",
            border: "2px solid #22d3ee",
            color: "#22d3ee",
            fontSize: "34px",
            fontWeight: 700,
          }}
        >
          {person.initials}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <span style={{ fontSize: "34px", fontWeight: 600 }}>{person.name}</span>
          <span style={{ fontSize: "24px", color: "#94a3b8" }}>{person.role}</span>
        </div>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  );
}
