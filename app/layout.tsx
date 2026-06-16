import Navbar from "./components/Navbar";

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "system-ui, -apple-system, sans-serif",
          background: "#f1ebeb",
          color: "#111",
          lineHeight: 1.5
        }}
      >
        <Navbar />

        <div
          style={{
            paddingTop: "70px",
            maxWidth: "1400px",
            margin: "0 auto"
          }}
        >
          {children}
        </div>
      </body>
    </html>
  );
}