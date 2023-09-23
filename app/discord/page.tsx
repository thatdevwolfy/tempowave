import { useEffect, useState } from "react";

const DiscordPage = () => {
  const [dotVisible, setDotVisible] = useState(true);

  useEffect(() => {
    // Redirect to your Discord invite link after a delay
    const redirectTimer = setTimeout(() => {
      window.location.href = "YOUR_DISCORD_INVITE_LINK_HERE";
    }, 5000); // 5000ms (5 seconds) delay

    // Toggle the visibility of the dot every 500ms (0.5 seconds)
    const dotTimer = setInterval(() => {
      setDotVisible((prev) => !prev);
    }, 500);

    // Cleanup timers on unmount
    return () => {
      clearTimeout(redirectTimer);
      clearInterval(dotTimer);
    };
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
      <div style={{ marginTop: "20px" }}>
        {dotVisible && <span style={{ fontSize: "2rem" }}>.</span>}
      </div>
      <div
        style={{
          width: "100%",
          height: "2px",
          background: "white",
          position: "relative",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            width: "0%",
            height: "100%",
            background: "green",
            position: "absolute",
            transition: "width 4s ease-in-out",
          }}
        ></div>
      </div>
    </div>
  );
};

export default DiscordPage;
