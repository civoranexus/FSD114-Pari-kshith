export default function ErrorBox({ msg }) {
  return (
    <div style={{
      padding: 12,
      border: "1px solid red",
      background: "#ffe5e5",
      borderRadius: 8
    }}>
      {msg}
    </div>
  );
}