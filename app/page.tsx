"use client";
import { useScrollReveal } from "./hooks/useScrollReveal";

export default function Home() {
  useScrollReveal();
  return (
    <main>

      {/* HERO */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
          paddingTop: "10px", // 👈 IMPORTANT adjustment
          position: "relative",
          overflow: "hidden"
        }}
      >

        {/* FULL BACKGROUND IMAGE */}
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.45)"
        }} />

        {/* LEFT CONTENT */}
        <div
          style={{
            maxWidth: "700px",
            transform: "translateY(-180px)" // 👈 moves text up
          }}
        >
          <h1 style={{
            fontSize: "72px",
            color: "white",
            fontWeight: 400,
            letterSpacing: "0px",
            marginLeft: "40px",
            marginBottom: "10px",
          }}>
            Husik Martirosyan
          </h1>

          <p style={{
            fontSize: "20px",
            marginTop: "0px",
            marginRight: "90px",
            color: "white",
            marginLeft: "40px",
            opacity: 0.85
          }}>
            At the intersection of educational leadership,
            policy, and large-scale school transformation.
          </p>
        </div>

      </section>
      {/* MISSION */}
      <section style={{
        padding: "50px 20px",
        background: "#fff",
        marginTop: "7px",
        marginBottom: "7px",
      }}>
        <div style={{
          maxWidth: "900px",
          margin: "0 auto",
          transform: "translateY(-40px)"
        }}>

          <h2 style={{
            fontSize: "17px",
            letterSpacing: "3px",
            color: "#136a26",
            marginBottom: "0px",
            fontWeight: 800,
          }}>
            MISSION
          </h2>

          <p style={{
            fontSize: "17px",
            lineHeight: "1.4",
            fontWeight: 700,
            color: "#666"

          }}>
            My mission is to advance educational excellence and contribute
            to systemic change that makes learning environments more
            innovative and impactful in Armenia.
          </p>
          <h2 style={{
            fontSize: "16px",
            letterSpacing: "3px",
            color: "#999",
            marginBottom: "10px",
            marginTop: "50px"
          }}>
            ABOUT ME
          </h2>
          <p style={{
            marginTop: "20px",
            marginBottom: "20px",
            fontSize: "16px",
            color: "#666",
            lineHeight: "1.6",
            maxWidth: "950px",
            textAlign: "justify",
            fontWeight: 400,
          }}>
            I believe sustainable transformation happens when leadership,
            policy, and community engagement work together.

          </p>

          <p style={{
            marginTop: "20px",
            marginBottom: "20px",
            fontSize: "16px",
            color: "#666",
            lineHeight: "1.6",
            maxWidth: "950px",
            textAlign: "justify",
            fontWeight: 400,
          }}>

            I come from Stepanavan in Lori, Armenia, and for more than a decade,
            I have dedicated my work to education, community development,
            and strengthening civil society. My journey began with a simple belief
            that education can change the trajectory of my life, and that of others.
          </p>

          <p style={{
            marginTop: "20px",
            marginBottom: "0px",
            fontSize: "16px",
            color: "#666",
            lineHeight: "1.6",
            maxWidth: "950px",
            textAlign: "justify",
            fontWeight: 400,
          }}>
            Through my work in the non-profit sector, I have focused on expanding opportunities for youth, supporting non-formal education, and contributing to good governance in Armenia by strengthening public accountability and transparency.

            A defining chapter of my journey was my experience with Teach For Armenia, where I served for nearly six years, including three as Head of Region, having an impact on more than 14000 students.

            I have also worked with World Vision Armenia on community-based development in rural regions and collaborated with global networks of US Government alumni and the Teach For ALL network.

            Today, my leadership is guided by empathy, resilience, and a belief in collective impact. I try to stay close to people, grounded in their realities, while working toward long-term systemic change.
          </p>

        </div>
      </section>

      {/* IMPACT */}
      <section style={{ padding: "50px 20px", background: "#f6f6f6" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>

          <h2 style={{ fontSize: "16px", letterSpacing: "3px", color: "#999" }}>
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

      {/* AREAS OF EXPERTISE */}
      <section style={{
        padding: "30px 20px",
        background: "#fafafa"
      }}>
        <div style={{
          maxWidth: "900px",
          marginBottom: "10",
          marginLeft: "10",
          margin: "0 auto",
        }}>

          <h2 style={{
            fontSize: "16px",
            letterSpacing: "3px",
            color: "#999",
            marginBottom: "40px",
            textAlign: "center"
          }}>
            AREAS OF EXPERTISE
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "30px"
          }}>

            {/* Card 1 */}
            <div style={{
              background: "#fff",
              padding: "30px",
              borderRadius: "16px",
              border: "1px solid #eee"
            }}>
              <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>
                Innovation Strategy
              </h3>
              <p style={{ fontSize: "14px", color: "#666", lineHeight: "1.6" }}>
                Design and launch AI-driven initiatives that transform education.
              </p>
            </div>

            {/* Card 2 */}
            <div style={{
              background: "#fff",
              padding: "30px",
              borderRadius: "16px",
              border: "1px solid #eee"
            }}>
              <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>
                Organizational Learning
              </h3>
              <p style={{ fontSize: "14px", color: "#666", lineHeight: "1.6" }}>
                Use data to guide strategic decisions and drive continuous improvement.
              </p>
            </div>

            {/* Card 3 */}
            <div style={{
              background: "#fff",
              padding: "30px",
              borderRadius: "16px",
              border: "1px solid #eee"
            }}>
              <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>
                Executive Coaching
              </h3>
              <p style={{ fontSize: "14px", color: "#666", lineHeight: "1.6" }}>
                Advise leaders on change management and leadership development.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        style={{
          padding: "50px 20px",
          textAlign: "center",
          background: "#174433",
          color: "white"
        }}>
        <h2 style={{ fontSize: "15px", letterSpacing: "3px", color: "#aaa" }}>
          CONTACT
        </h2>

        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "16px",
          marginTop: "20px",
          fontSize: "15px"
        }}>

          <a
            href="mailto:husiktfa@gmail.com"
            style={{
              color: "white",
              textDecoration: "none"
            }}
          >
            husiktfa@gmail.com
          </a>

          <span style={{ opacity: 0.5 }}>•</span>

          <a
            href="https://www.linkedin.com/in/husik-martirosyan-947999131/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none"
            }}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              style={{
                transition: "transform 0.2s ease"
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <rect width="24" height="24" rx="4" fill="#0A66C2" />
              <path
                fill="#fff"
                d="M7 10h2v7H7v-7zm1-3a1.3 1.3 0 1 1 0 2.6A1.3 1.3 0 0 1 8 7zM11 10h2v1.1c.4-.7 1.3-1.3 2.6-1.3 2.3 0 3.4 1.4 3.4 3.8V17h-2v-3.3c0-1.1-.2-2-1.5-2s-1.5.9-1.5 2V17h-2v-7z"
              />
            </svg>
          </a>

          <span style={{ opacity: 0.5 }}>•</span>

          <span>Yerevan, Armenia</span>

        </div>
      </section>
      {/* FOOTER */}
      <footer style={{
        padding: "20px",
        textAlign: "center",
        fontSize: "14px",
        color: "#9d9696",
        background: "#fff",
        borderTop: "1px solid #eee"
      }}>
        © 2026, Husik Martirosyan. All rights reserved.
      </footer>

    </main >
  );
}
