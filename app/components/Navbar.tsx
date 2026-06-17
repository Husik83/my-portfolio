"use client";

import { useRouter, usePathname } from "next/navigation";
const btnStyle = {
    padding: "8px 14px",
    borderRadius: "999px",
    border: "1px solid rgba(0,0,0,0.15)",
    textDecoration: "none",
    fontSize: "14px",
    color: "#111",
    background: "rgba(9, 87, 213, 0.15)",
    cursor: "pointer",
};

export default function Navbar() {
    // ✅ hooks go HERE
    const router = useRouter();
    const pathname = usePathname();

    return (
        <nav
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "16px 24px",
                boxSizing: "border-box",
                zIndex: 1000,
                backdropFilter: "blur(10px)",
                background: "rgba(255,255,255,0.6)",
            }}
        >
            {/* LEFT LOGO */}
            <a
                href="/"
                style={{
                    textDecoration: "none",
                    color: "#111",
                    lineHeight: 1.1,
                }}
            >
                <div style={{ fontWeight: 800, fontSize: "14px" }}>
                    Husik
                </div>
                <div style={{ fontWeight: 700, fontSize: "14px", marginTop: "-2px" }}>
                    Martirosyan
                </div>
            </a>

            {/* RIGHT NAV */}
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <a href="/" style={btnStyle}>Home</a>
                <a href="/experience" style={btnStyle}>Experience</a>
                <a href="/projects" style={btnStyle}>Projects</a>

                <button
                    onClick={() => {
                        if (pathname === "/") {
                            document.getElementById("contact")?.scrollIntoView({
                                behavior: "smooth",
                            });
                        } else {
                            router.push("/");

                            // wait for page to load then scroll
                            setTimeout(() => {
                                document.getElementById("contact")?.scrollIntoView({
                                    behavior: "smooth",
                                });
                            }, 300);
                        }
                    }}
                    style={btnStyle}
                >
                    Contact
                </button>
            </div>
        </nav>
    );
}