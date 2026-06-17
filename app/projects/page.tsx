"use client";

import { useEffect, useState } from "react";
import { useFirstLoad } from "../components/useFirstLoad";


export default function Projects() {
    const firstLoad = useFirstLoad();
    const [showBg, setShowBg] = useState(false);
    const [loaded, setLoaded] = useState(false);
    <img
        src="/hero.jpg"
        alt=""
        decoding="async"
        fetchPriority="high"
        style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(0.45)",
            opacity: 1,
            transform: "none"
        }}
    />

    useEffect(() => {
        if (firstLoad) {
            setShowBg(true);
        } else {
            setShowBg(true);
        }
    }, [firstLoad]);
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowMessage(true);
        }, 1000); // 1.5 seconds

        return () => clearTimeout(timer);
    }, []);

    return (
        <main style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>

            {/* BACKGROUND IMAGE */}
            <div
                style={{
                    position: "fixed",
                    inset: 0,
                    zIndex: -2,
                    backgroundImage: "url('/hero.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "brightness(0.55)",
                    transform: "translateZ(0)", // forces GPU render, prevents flicker
                }}
            />

            {/* DARK OVERLAY */}
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "rgba(0,0,0,0.35)",
                    zIndex: -1
                }}
            />

            {/* MESSAGE CARD */}
            <div
                style={{
                    height: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "20px"
                }}
            >
                <div
                    style={{
                        padding: "30px 40px",
                        borderRadius: "18px",
                        background: "rgba(255,255,255,0.92)",
                        boxShadow: "0 10px 40px rgba(0,0,0,0.25)",
                        textAlign: "center",
                        maxWidth: "500px",
                        opacity: showMessage ? 1 : 0,
                        transform: showMessage ? "scale(1)" : "scale(0.85)",
                        transition: "all 0.6s ease"
                    }}
                >
                    <h2 style={{ margin: 0, fontSize: "22px", color: "#24552f" }}>
                        This page is under development
                    </h2>

                    <p style={{ marginTop: "10px", fontSize: "16px", color: "#333" }}>
                        See you soon!
                    </p>
                </div>
            </div>

        </main>
    );
}