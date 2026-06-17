"use client";

const btnStyle = {
    padding: "6px 10px",
    borderRadius: "999px",
    border: "1px solid rgba(0,0,0,0.15)",
    textDecoration: "none",
    fontSize: "13px",
    color: "#111",
    background: "rgba(9, 87, 213, 0.15)",
    cursor: "pointer"
};

export default function Navbar() {
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
                background: "rgba(255,255,255,0.6)"
            }}
        >

            {/* LEFT LOGO (HOME BUTTON) */}
            <a
                href="/"
                style={{
                    textDecoration: "none",
                    color: "#111",
                    lineHeight: 1.1
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
            <div
                style={{
                    display: "flex",
                    gap: "8px",
                    flexWrap: "wrap",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    maxWidth: "70%"
                }}
            >
                <a href="/" style={btnStyle}>Home</a>
                <a href="/experience" style={btnStyle}>Experience</a>
                <a href="/projects" style={btnStyle}>Projects</a>

                <button
                    onClick={() => {
                        document.getElementById("contact")?.scrollIntoView({
                            behavior: "smooth"
                        });
                    }}
                    style={btnStyle}
                >
                    Contact
                </button>
            </div>

        </nav>
    );
}