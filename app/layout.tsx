type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <nav style={{ display: "flex", gap: "20px", padding: "20px" }}>
          <a href="/">Home</a>
          <a href="/experience">xperience</a>
          <a href="/projects">Projects</a>
          <a href="/contact">Contact</a>
        </nav>

        {children}
      </body>
    </html>
  );
}