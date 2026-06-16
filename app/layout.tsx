export default function RootLayout({ children }) {
  return (
    <html>
      <body>

        {/* NAVIGATION HERE */}
        <nav style={{ display: "flex", gap: "20px", padding: "20px" }}>
          <a href="/">Home</a>
          <a href="/experience">Experience</a>
          <a href="/projects">Projects</a>
          <a href="/contact">Contact</a>
        </nav>

        {children}

      </body>
    </html>
  );
}