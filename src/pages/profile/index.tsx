import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const ProfilePage = () => {
  const { data, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      {data && data.user ? (
        <div>
          <p className="text-lg">
            <strong>Email:</strong> {data.user.email}
          </p>
          <p className="text-lg">
            <strong>Full Name:</strong> {data.user.name}
          </p>
        </div>
      ) : (
        <p className="text-red-500">You are not logged in.</p>
      )}
    </div>
  );
};

export default ProfilePage;
