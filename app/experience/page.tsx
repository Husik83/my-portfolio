"use client";

export default function Experience() {
    return (
        <main style={{ position: "relative", minHeight: "100vh" }}>

            {/* BACKGROUND */}
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundImage: "url('/hero.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "blur(12px) brightness(0.6)",
                    transform: "scale(1.1)",
                    zIndex: -1
                }}
            />

            {/* PAGE WRAPPER */}
            <div
                style={{
                    maxWidth: "1000px",
                    margin: "0 auto",
                    color: "#fff",
                    padding: "40px 24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "22px"
                }}
            >

                {/* TITLE */}
                <h1 style={{
                    fontSize: "45px",
                    fontWeight: 500,
                    marginBottom: "20px"
                }}>
                    Experience
                </h1>

                {/* DOWNLOAD RESUME */}
                <a
                    href="/Husik_Martirosyan_resume.pdf"
                    download
                    style={{
                        display: "block",
                        padding: "20px 40px",
                        background: "#24552f",
                        borderRadius: "16px",
                        color: "white",
                        fontWeight: 600,
                        fontSize: "18px",
                        textDecoration: "none",
                        marginBottom: "40px",
                        marginRight: "750px",
                        transition: "0.3s"
                    }}
                    onMouseOver={(e) =>
                        (e.currentTarget.style.background = "#29b24b")
                    }
                    onMouseOut={(e) =>
                        (e.currentTarget.style.background = "#1f8f3a")
                    }
                >
                    Download Resume
                </a>

                {/* ===== PROFESSIONAL SUMMARY ===== */}
                <Section title="Professional Summary" color="#eaf0ed">
                    <p>
                        Placeholder text: Strategic education leader focused on system-level transformation,
                        leadership development, and large-scale program implementation.
                    </p>
                </Section>

                {/* ===== EDUCATION ===== */}
                <Section title="Education" color="#eaf0ed">
                    <p style={{ fontWeight: 700, color: "#000" }}>Master’s Degree - Education Leadership</p>
                    <p>University Name (Placeholder)</p>
                </Section>

                {/* ===== PROFESSIONAL EXPERIENCE ===== */}
                <Section title="Professional Experience" color="#eaf0ed">

                    <ExperienceRow role="Head of Region" period="2022–2025" />
                    <ExperienceRow role="Education Program Lead" period="2020–2022" />
                    <ExperienceRow role="Teacher Leader" period="2018–2020" />
                    <ExperienceRow role="Project Coordinator" period="2016–2018" />

                </Section>

                {/* ===== OTHER WORK EXPERIENCE ===== */}
                <Section title="Other Work Experience" color="#eaf0ed">
                    <p>Placeholder text for additional roles, consulting, volunteering, etc.</p>
                </Section>

                {/* ===== CERTIFICATES ===== */}
                <Section title="Certificates" color="#eaf0ed">
                    <ul style={{ color: "#111", fontWeight: 500 }}>
                        <li>Leadership Development Certificate</li>
                        <li>Education Policy Training</li>
                        <li>Program Management Certification</li>
                    </ul>
                </Section>

                {/* ===== SKILLS ===== */}
                <Section title="Skills" color="#eaf0ed">

                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "20px"
                    }}>

                        <SkillBox title="Leadership" />
                        <SkillBox title="Policy Design" />

                    </div>

                    <div style={{ marginTop: "20px" }}>
                        <SkillBox title="Strategic Planning" />
                    </div>

                </Section>

            </div>
        </main>
    );
}

/* ===== SECTION COMPONENT ===== */
function Section({ title, color, children }: any) {
    return (
        <div style={{
            background: color,
            padding: "24px",
            borderRadius: "16px",
            marginBottom: "24px"
        }}>
            <h2 style={{
                color: "#16a34a",
                fontSize: "22px",
                fontWeight: 800,
                marginBottom: "12px"
            }}>
                {title}
            </h2>
            <div style={{ color: "#111", fontSize: "15px", lineHeight: 1.6 }}>
                {children}
            </div>
        </div>
    );
}

/* ===== EXPERIENCE ROW ===== */
function ExperienceRow({ role, period }: any) {
    return (
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 0",
            borderBottom: "1px solid rgba(0,0,0,0.1)"
        }}>

            {/* LEFT TEXT */}
            <div style={{ fontWeight: 700, color: "#111", fontSize: "16px" }}>
                {role}
            </div>

            {/* RIGHT PERIOD BOX */}
            <div style={{
                padding: "6px 12px",
                borderRadius: "999px",
                background: "rgba(0,0,0,0.08)",
                fontSize: "13px",
                color: "#111",
                fontWeight: 500
            }}>
                {period}
            </div>

        </div>
    );
}

/* ===== SKILL BOX ===== */
function SkillBox({ title }: any) {
    return (
        <div style={{
            padding: "16px",
            borderRadius: "12px",
            background: "#ffffff",
            fontWeight: 700,
            color: "#16a34a",
            fontSize: "16px",
            textAlign: "center",
            boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
        }}>
            {title}
        </div>
    );
}