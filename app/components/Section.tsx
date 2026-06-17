export default function Section({ title, color, children }: any) {
    return (
        <div style={{
            background: color,
            padding: "24px",
            borderRadius: "16px",
            marginBottom: "24px"
        }}>
            <h2>{title}</h2>
            {children}
        </div>
    );
}
