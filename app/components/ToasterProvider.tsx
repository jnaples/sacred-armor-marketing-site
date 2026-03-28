"use client";

import { Toaster, Toast, resolveValue } from "react-hot-toast";

function ToastBar({ t }: { t: Toast }) {
  const isError = t.type === "error";

  return (
    <div
      style={{
        boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
        borderRadius: 12,
        overflow: "hidden",
        border: "1px solid #443A37",
        backgroundColor: "#2a2d35",
        minWidth: 220,
        maxWidth: 320,
      }}
    >
      <div
        style={{
          backgroundImage: "url('/paper-bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "14px 18px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
        }}
      >
        {t.icon && <span style={{ fontSize: 16 }}>{t.icon}</span>}
        <span
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            color: isError ? "#e74c3c" : "#E8E6E3",
            textAlign: "center",
          }}
        >
          {resolveValue(t.message, t)}
        </span>
      </div>
    </div>
  );
}

export default function ToasterProvider() {
  return (
    <Toaster position="top-right">
      {(t) => <ToastBar t={t} />}
    </Toaster>
  );
}
