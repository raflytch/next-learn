import Link from "next/link";

const RegisterView = () => {
  return (
    <>
      <h1>This Is Register Page</h1>
      <p>Sudah punya akun?</p> <Link href="/auth/login">Login</Link>
    </>
  );
};

export default RegisterView;
