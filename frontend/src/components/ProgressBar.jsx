export default function ProgressBar({ percent }) {
  return (
    <div style={{ width: "100%", background: "#ddd", height: "20px" }}>
      <div
        style={{
          width: percent + "%",
          background: "green",
          height: "20px",
          color: "white",
          textAlign: "center"
        }}
      >
        {percent}%
      </div>
    </div>
  );
}
