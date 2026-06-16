"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 }
};

export default function Home() {
  return (
    <main style={{ fontFamily: "system-ui", color: "#111" }}>

      {/* NAV */}
      <div style={{
        position: "fixed",
        top: 0,
        width: "100%",
        padding: "20px 40px",
        display: "flex",
        justifyContent: "space-between",
        fontSize: "14px",
        background: "rgba(255,255,255,0.8)",
        backdropFilter: "blur(10px)"
      }}>
        <div>Husik Martirosyan</div>
        <div style={{ display: "flex", gap: "20px" }}>
          <span>About</span>
          <span>Experience</span>
          <span>Impact</span>
          <span>Contact</span>
        </div>
      </div>

      {/* HERO */}
      <section style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 24px",
        position: "relative",
        overflow: "hidden"
      }}>

        {/* background image layer */}
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.4)"
        }} />

        {/* content */}
        <div style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "900px",
          color: "white"
        }}>

          <h1 style={{
            fontSize: "76px",
            fontWeight: 400,
            letterSpacing: "-2px",
            lineHeight: 1.05
          }}>
            Husik Martirosyan
          </h1>

          <p style={{
            fontSize: "22px",
            marginTop: "20px",
            maxWidth: "700px",
            opacity: 0.9
          }}>
            Educational systems leader working at the intersection of leadership,
            policy, and large-scale school transformation.
          </p>

          <p style={{
            marginTop: "20px",
            fontSize: "14px",
            opacity: 0.7
          }}>
            Yerevan · Education Systems · Leadership · Policy
          </p>

        </div>

      </section>

      {/* IMPACT */}
      <section style={{ padding: "140px 40px", background: "#f6f6f6" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>

          <h2 style={{ fontSize: "12px", letterSpacing: "3px", color: "#999" }}>
            IMPACT
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "30px",
            fontSize: "18px",
            marginTop: "30px"
          }}>
            <div>14,000+ students impacted</div>
            <div>75 educators coached</div>
            <div>4 regions of Armenia</div>
            <div>Government + NGO partnerships</div>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section style={{
        padding: "140px 40px",
        textAlign: "center",
        background: "#111",
        color: "white"
      }}>
        <h2 style={{ fontSize: "12px", letterSpacing: "3px", color: "#aaa" }}>
          CONTACT
        </h2>

        <p style={{ fontSize: "20px", marginTop: "20px" }}>
          husiktfa@gmail.com · LinkedIn · Armenia
        </p>
      </section>

    </main>
  );
}