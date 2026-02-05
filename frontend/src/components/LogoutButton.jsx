export default function LogoutButton() {
  return (
    <button
      onClick={() => {
        localStorage.clear();
        window.location.href = "/login";
      }}
    >
      Logout
    </button>
  );
}