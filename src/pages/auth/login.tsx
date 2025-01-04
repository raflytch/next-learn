import Link from "next/link";
import { useRouter } from "next/router";

const LoginPage = () => {
  const { push } = useRouter();
  const handleLogin = () => {
    push("/product");
  };

  return (
    <>
      <h1>Login Page</h1>
      <button onClick={() => handleLogin()}>Login</button>
      <p>Belum punya akun?</p> <Link href="/auth/register">Register</Link>
    </>
  );
};

export default LoginPage;
