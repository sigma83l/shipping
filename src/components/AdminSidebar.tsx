import Link from "next/link";

export default function AdminSidebar() {
  return (
    <div style={{ width: "200px", background: "#333", color: "#fff", padding: "10px", height: "100vh" }}>
      <h3>Admin Panel</h3>
      <ul style={{ listStyle: "none", padding: "0" }}>
        <li><Link href="/admin/dashboard">Dashboard</Link></li>
        <li><Link href="/admin/settings">Settings</Link></li>
      </ul>
    </div>
  );
}
