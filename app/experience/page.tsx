"use client";
import Section from "../components/Section";
import { useFirstLoad } from "../components/useFirstLoad";
import { useEffect, useState } from "react";
export default function Experience() {
    const [showBg, setShowBg] = useState(false);
    useEffect(() => {
        // background first
        setShowBg(true);
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
                filter: "brightness(0.55)",
                opacity: 1,
                transform: "none"
            }}
        />

        // content after 1 second
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 600);

        return () => clearTimeout(timer);
    }, []);
    const [showContent, setShowContent] = useState(false);
    const firstLoad = useFirstLoad();
    const [loaded, setLoaded] = useState(false);


    useEffect(() => {
        setShowBg(true);
    }, []);
    return (
        <main style={{ position: "relative", minHeight: "100vh" }}>


            {/* BACKGROUND */}
            <div
                style={{
                    position: "fixed",
                    inset: 0,
                    zIndex: -2,
                    backgroundImage: "url('/hero.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "brightness(0.45)",
                    transform: "translateZ(0)", // forces GPU render, prevents flicker
                }}
            />

            {/* PAGE WRAPPER */}
            <div
                style={{
                    maxWidth: "1000px",
                    margin: "0 auto",
                    opacity: showContent ? 1 : 0,
                    transform: showContent ? "translateY(0px)" : "translateY(20px)",
                    transition: "opacity 0.8s ease, transform 0.8s ease"
                }}
            >

                {/* TITLE */}
                <h1 style={{
                    fontSize: "clamp(28px, 5vw, 45px)",
                    fontWeight: 500,
                    marginBottom: "20px",
                    color: "white"
                }}>
                    Experience
                </h1>

                {/* DOWNLOAD RESUME */}
                <a
                    href="/Husik_Martirosyan_resume.pdf"
                    download
                    style={{
                        display: "inline-block",
                        alignSelf: "flex-start",
                        padding: "20px 40px",
                        background: "#24552f",
                        borderRadius: "16px",
                        color: "white",
                        fontWeight: 600,
                        fontSize: "18px",
                        textDecoration: "none",
                        marginBottom: "30px",
                        transition: "0.3s"
                    }}
                    onMouseOver={(e) =>
                        (e.currentTarget.style.background = "#29b24b")
                    }
                    onMouseOut={(e) =>
                        (e.currentTarget.style.background = "#24552f")
                    }
                >
                    Download Resume
                </a>

                {/* ===== SUMMARY ===== */}
                <Section title="Summary" color="#eaf0ed">
                    <p style={{ color: "#444", margin: 0, lineHeight: "1.6" }}>
                        10+ years of experience in program management, educator development,
                        and stakeholder engagement across school and nonprofit education settings.
                        Experienced in designing student-led educational initiatives, leading cross-functional teams,
                        and building collaborative learning ecosystems that support whole-child development and academic growth.
                        Passionate about empowering educators and students through transformational leadership
                        and sustainable programs aligned with innovative and inclusive educational approaches.
                    </p>
                </Section>

                {/* ===== PROFESSIONAL EXPERIENCE ===== */}
                <Section title="Professional Experience" color="#eaf0ed">
                    <div>
                        {/* ROLE 1 */}
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "-6px" }}>
                            <h3 style={{
                                fontSize: "18px",
                                fontWeight: 800,
                                color: "#4e4b4b",
                                margin: 0,
                                flex: "1"
                            }}>
                                School Turnaround Officer | Seroond Catalyst Program
                            </h3>
                            <div style={{ padding: "6px 12px", borderRadius: "999px", background: "rgba(0,0,0,0.08)", fontSize: "13px", color: "#111", fontWeight: 500 }}>
                                2025–2026
                            </div>
                        </div>
                        <div style={{ fontSize: "16px", fontWeight: 700, color: "#24954e", marginBottom: "10px" }}>
                            Teach For Armenia
                        </div>
                        <ul style={{ fontSize: "14px", color: "#444", lineHeight: "1.6", margin: "0 0 24px 20px", padding: 0 }}>
                            <li>Contributed to the implementation and refinement of a school turnaround model across three public schools.</li>
                            <li>Led SEL integration into school culture and instructional processes, ensuring methodological consistency.</li>
                            <li>Designed and facilitated learning sessions for educators, students, and parents to strengthen SEL and student-centered practices.</li>
                            <li>Cultivated strong partnerships with school leadership, teachers, and the communities, promoting shared ownership.</li>
                            <li>Synthesized qualitative and quantitative data to monitor impact and inform continuous improvement strategies.</li>
                        </ul>

                        {/* ROLE 2 */}
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "-6px" }}>
                            <h3 style={{
                                fontSize: "18px",
                                fontWeight: 800,
                                color: "#4e4b4b",
                                margin: 0,
                                flex: "1"
                            }}>
                                Head of Region
                            </h3>
                            <div style={{ padding: "6px 12px", borderRadius: "999px", background: "rgba(0,0,0,0.08)", fontSize: "13px", color: "#111", fontWeight: 500 }}>
                                2021–2024
                            </div>
                        </div>
                        <div style={{ fontSize: "16px", fontWeight: 700, color: "#24954e", marginBottom: "10px" }}>
                            Teach For Armenia
                        </div>
                        <ul style={{ fontSize: "14px", color: "#444", lineHeight: "1.6", margin: "0 0 24px 20px", padding: 0 }}>
                            <li>Drove the organization's strategies and core programs delivery in the Region (Tavush, Lori, Shirak, Gegharkunik marzes).</li>
                            <li>Led regional teams of 8 direct reports and 75 Teacher-Leaders, expanded program reach to 14k students.</li>
                            <li>Built strong partnerships with Government bodies, CSOs, community leaders, donors) to ensure program sustainability.</li>
                            <li>Managed program functional and operational budgets with 95%+ accuracy in resource allocation.</li>
                            <li>Supported the organization’s fundraising efforts by translating programmatic narratives into compelling stories for proposals.</li>
                        </ul>

                        {/* ROLE 3 */}
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "-6px" }}>
                            <h3 style={{
                                fontSize: "18px",
                                fontWeight: 800,
                                color: "#4e4b4b",
                                margin: 0,
                                flex: "1"
                            }}>
                                Senior Leadership Development Manager
                            </h3>
                            <div style={{ padding: "6px 12px", borderRadius: "999px", background: "rgba(0,0,0,0.08)", fontSize: "13px", color: "#111", fontWeight: 500 }}>
                                2019–2020
                            </div>
                        </div>
                        <div style={{ fontSize: "16px", fontWeight: 700, color: "#24954e", marginBottom: "10px" }}>
                            Teach For Armenia
                        </div>
                        <ul style={{ fontSize: "14px", color: "#444", lineHeight: "1.6", margin: "0 0 24px 20px", padding: 0 }}>
                            <li>Led a team of 5 Teacher Coaches to coach 35 Teacher-Leaders, bringing TFA Student Vision to life.</li>
                            <li>Oversaw the implementation of core programs and projects, aligning with organizational goals and donor priorities.</li>
                            <li>Established efficient and tech-supported data workflows, providing periodic programmatic reports.</li>
                            <li>Established goals and KPIs for teams, providing professional development opportunities to team members.</li>
                        </ul>

                        {/* ROLE 4 */}
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "-6px" }}>
                            <h3 style={{
                                fontSize: "18px",
                                fontWeight: 800,
                                color: "#4e4b4b",
                                margin: 0,
                                flex: "1"
                            }}>
                                Teacher-Leader
                            </h3>
                            <div style={{ padding: "6px 12px", borderRadius: "999px", background: "rgba(0,0,0,0.08)", fontSize: "13px", color: "#111", fontWeight: 500 }}>
                                2016–2018
                            </div>
                        </div>
                        <div style={{ fontSize: "16px", fontWeight: 700, color: "#24954e", marginBottom: "10px" }}>
                            Teach For Armenia | Teacher Leadership Program
                        </div>
                        <ul style={{ fontSize: "14px", color: "#444", lineHeight: "1.6", margin: "0 0 0 20px", padding: 0 }}>
                            <li>Taught History and Geography at Yaghdan Secondary School, maintained a high level of academic and leadership progress.</li>
                            <li>Developed hands-on learning experiences with modern teaching methods shared with school staff.</li>
                            <li>Designed and delivered workshops for peer teachers, providing in-class and extracurricular materials.</li>
                            <li>Organized debates and intellectual game competitions with neighboring schools’ high school students.</li>
                        </ul>
                    </div>
                </Section>

                {/* ===== OTHER WORK EXPERIENCE ===== */}
                <Section title="Other Work Experience" color="#eaf0ed">
                    <div>
                        {/* ROLE 1 */}
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                            <div>
                                <h3 style={{ fontSize: "18px", fontWeight: 800, color: "#4e4b4b", margin: 0 }}>
                                    Fellow at Boston City Hall
                                </h3>
                                <div style={{ fontSize: "14px", fontWeight: 600, color: "#24954e", marginTop: "2px" }}>
                                    Professional Fellows Program: U.S. Department of State
                                </div>
                            </div>
                            <div style={{ padding: "6px 12px", borderRadius: "999px", background: "rgba(0,0,0,0.08)", fontSize: "13px", color: "#111", fontWeight: 500, whiteSpace: "nowrap" }}>
                                Oct–Nov 2018
                            </div>
                        </div>

                        {/* ROLE 2 */}
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0px" }}>
                            <div>
                                <h3 style={{ fontSize: "18px", fontWeight: 800, color: "#4e4b4b", margin: 0 }}>
                                    TALMA Program Teacher
                                </h3>
                                <div style={{ fontSize: "14px", fontWeight: 600, color: "#24954e", marginTop: "0px" }}>
                                    HaShalom Public School | Jerusalem, Israel
                                </div>
                            </div>
                            <div style={{ padding: "20px 12px", borderRadius: "999px", background: "rgba(0,0,0,0.08)", fontSize: "13px", color: "#111", fontWeight: 500, whiteSpace: "nowrap" }}>
                                June-July 2018
                            </div>
                        </div>
                        {/* ROLE 2 */}
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                            <div>
                                <h3 style={{ fontSize: "18px", fontWeight: 800, color: "#4e4b4b", margin: 0 }}>
                                    Project Manager
                                </h3>
                                <div style={{ fontSize: "14px", fontWeight: 600, color: "#24954e", marginTop: "0px" }}>
                                    Centre for Community Mobilization and Support NGO
                                </div>
                            </div>
                            <div style={{ padding: "20px 12px", borderRadius: "999px", background: "rgba(0,0,0,0.08)", fontSize: "13px", color: "#111", fontWeight: 500, whiteSpace: "nowrap" }}>
                                2014-2018
                            </div>

                        </div>
                        {/* ROLE 2 */}
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                            <div>
                                <h3 style={{ fontSize: "18px", fontWeight: 800, color: "#4e4b4b", margin: 0 }}>
                                    Project Coordinator
                                </h3>
                                <div style={{ fontSize: "14px", fontWeight: 600, color: "#24954e", marginTop: "0px" }}>
                                    World Vision Armenia Stepanavan Area Development Program
                                </div>
                            </div>
                            <div style={{ padding: "20px 12px", borderRadius: "999px", background: "rgba(0,0,0,0.08)", fontSize: "13px", color: "#111", fontWeight: 500, whiteSpace: "nowrap" }}>
                                2012-2014
                            </div>

                        </div>
                    </div>
                </Section>

                {/* ===== EDUCATION ===== */}
                <Section title="Education" color="#eaf0ed">
                    <div>
                        {/* ROLE 1 */}
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "-4px" }}>
                            <h3 style={{ fontSize: "18px", fontWeight: 800, color: "#4e4b4b", margin: 0 }}>
                                Master of Pedagogy
                            </h3>
                            <div style={{ padding: "0px 12px", borderRadius: "999px", background: "rgba(0,0,0,0.08)", fontSize: "13px", color: "#111", fontWeight: 500 }}>
                                2016–2018
                            </div>
                        </div>
                        <div style={{ fontSize: "16px", fontWeight: 700, color: "#24954e", marginBottom: "6px" }}>
                            Shirak State University
                        </div>


                        {/* ROLE 2 */}
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "-6px" }}>
                            <h3 style={{ fontSize: "18px", fontWeight: 800, color: "#4e4b4b", margin: 0 }}>
                                Master of Public Administration
                            </h3>
                            <div style={{ padding: "6px 12px", borderRadius: "999px", background: "rgba(0,0,0,0.08)", fontSize: "13px", color: "#111", fontWeight: 500 }}>
                                2014–2016
                            </div>
                        </div>
                        <div style={{ fontSize: "16px", fontWeight: 700, color: "#24954e", marginBottom: "3px" }}>
                            Vanadzor State University
                        </div>
                        <ul style={{ fontSize: "14px", color: "#444", lineHeight: "1.6", margin: "0 0 2px 20px", padding: 0 }}>
                            <li>Thesis: ‘The Problem of Social State in Armenia’. Full Scholarship for academic excellence and a Diploma with Honor</li>
                        </ul>

                        {/* ROLE 3 */}
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "-6px" }}>
                            <h3 style={{ fontSize: "18px", fontWeight: 800, color: "#4e4b4b", margin: 0 }}>
                                Bachelor of Management
                            </h3>
                            <div style={{ padding: "6px 12px", borderRadius: "999px", background: "rgba(0,0,0,0.08)", fontSize: "13px", color: "#111", fontWeight: 500 }}>
                                2010–2014
                            </div>
                        </div>
                        <div style={{ fontSize: "16px", fontWeight: 700, color: "#24954e", marginBottom: "3px" }}>
                            Vanadzor State University
                        </div>
                        <ul style={{ fontSize: "14px", color: "#444", lineHeight: "1.6", margin: "0 0 24px 20px", padding: 0 }}>
                            <li>Full scholarship for academic excellence and a Diploma with Distinction.</li>
                        </ul>


                    </div>
                </Section>

                {/* ===== CERTIFICATES ===== */}
                <Section title="Certificates" color="#eaf0ed">
                    <p style={{ color: "#444", margin: 0, lineHeight: "1.6" }}>
                        Product Management Certification, Armenian Code Academy, (2025)<br />
                        Coach Educator Certification. Coach Educator Maturation Program by Aephoria (2023)
                    </p>

                </Section>
                {/* ===== SKILLS ===== */}
                <Section title="Skills" color="#eaf0ed">

                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                        gap: "20px"
                    }}>

                        {/* BOX 1 */}
                        <div style={{
                            padding: "16px",
                            borderRadius: "12px",
                            background: "#ffffff",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                            color: "#24552f"
                        }}>
                            <h3 style={{ margin: 0, fontSize: "16px", fontWeight: 700 }}>
                                Productivity
                            </h3>

                            <p style={{ fontSize: "13px", marginTop: "10px", lineHeight: "1.5", color: "#166534" }}>
                                Microsoft Office, Google Workspace, <br />
                                Salesforce, Asana, Jira, Canva, Padlet, <br />
                                ERP tools and AI tools.
                            </p>
                        </div>

                        {/* BOX 2 */}
                        <div style={{
                            padding: "16px",
                            borderRadius: "12px",
                            background: "#ffffff",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                            color: "#24552f"
                        }}>
                            <h3 style={{ margin: 0, fontSize: "16px", fontWeight: 700 }}>
                                Programming
                            </h3>

                            <p style={{ fontSize: "13px", marginTop: "10px", lineHeight: "1.5", color: "#166534" }}>
                                Python, JavaScript (React, Next.js), HTML, CSS.

                            </p>
                        </div>

                        {/* BOX 3 */}
                        <div style={{
                            padding: "16px",
                            borderRadius: "12px",
                            background: "#ffffff",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                            color: "#24552f"
                        }}>
                            <h3 style={{ margin: 0, fontSize: "16px", fontWeight: 700 }}>
                                Languages
                            </h3>

                            <p style={{ fontSize: "13px", marginTop: "10px", lineHeight: "1.5", color: "#166534" }}>
                                Armenian (Native), English (Fluent), Russian (Proficient), Spanish (Intermediate).
                            </p>
                        </div>

                    </div>

                </Section>
            </div>
        </main>
    );
}