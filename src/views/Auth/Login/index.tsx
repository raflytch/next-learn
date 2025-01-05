import Link from "next/link";
import { useRouter } from "next/router";

const LoginView = () => {
  const { push } = useRouter();
  const handleLogin = () => {
    push("/product");
  };
  return (
    <div className="flex flex-col items-center gap-4">
      <h1>Login Page</h1>
      <button
        onClick={() => handleLogin()}
        className="bg-red-500 text-white p-4 rounded"
      >
        Login
      </button>
      <p>Belum punya akun?</p> <Link href="/auth/register">Register</Link>
    </div>
  );
};

export default LoginView;
