export default function Section({ title, color, children }: any) {
    return (
        <div style={{
            background: color,
            padding: "24px",
            borderRadius: "16px",
            marginBottom: "24px"
        }}>
            <h2 style={{
                color: "#24552f",
                marginTop: 0,
                marginBottom: "16px",
                fontSize: "22px"
            }}>
                {title}
            </h2>
            {children}
        </div>
    );
}
