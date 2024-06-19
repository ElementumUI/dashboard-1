import { FormLogin } from "@/components/ui/auth/form-login";

const LoginPage = () => {
  return (
    <div className="p-5 w-full max-w-lg">
      <h1 className="text-2xl font-bold uppercase tracking-widest mb-8">
        Iniciar sesión<span className="text-5xl">.</span>
      </h1>
      <FormLogin />
    </div>
  );
};

export default LoginPage;
