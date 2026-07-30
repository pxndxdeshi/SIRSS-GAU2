import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { AdminDashboardScreen } from "@/features/dashboard/screens/admin-dashboard-screen";
import { CitizenDashboardScreen } from "@/features/dashboard/screens/citizen-dashboard-screen";
import { DriverDashboardScreen } from "@/features/dashboard/screens/driver-dashboard-screen";
import { AdminLayout } from "@/features/dashboard/layouts/admin-layout";
import { CitizenLayout } from "@/features/dashboard/layouts/citizen-layout";
import { redirect } from "next/navigation";
import { getAnnouncements } from "@/features/announcements/services/announcement.service";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  const role = session.user?.role?.toUpperCase();

  if (role === "ADMIN") {
    const announcements = await getAnnouncements();
    return (
      <AdminLayout>
        <AdminDashboardScreen initialAnnouncements={announcements} />
      </AdminLayout>
    );
  }
  if (role === "DRIVER") {
    redirect("/driver");
  }
  
  return (
    <CitizenLayout>
      <CitizenDashboardScreen />
    </CitizenLayout>
  );
}
