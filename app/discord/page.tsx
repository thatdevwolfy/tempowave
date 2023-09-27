"use client";

import { useEffect } from "react";

const DiscordPage = () => {
  useEffect(() => {
    // Redirect to your Discord invite link after a delay (replace with your link)
    setTimeout(() => {
      window.location.href = "https://discord.gg/S425NmR5mg";
    }, 1500); // 1500ms (1.5 seconds) delay before redirect
  }, []);

  return (
    <div
      style={{
        background: "black",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h1 style={{ fontSize: "2rem" }}>Redirecting...</h1>
    </div>
  );
};

export default DiscordPage;
