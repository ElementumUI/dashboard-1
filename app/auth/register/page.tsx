import { FormRegister } from "@/components/ui/auth/form-register";

const RegisterPage = () => {
  return (
    <div className="p-5 w-full max-w-lg">
      <h1 className="text-2xl font-bold uppercase tracking-widest mb-8">
        Crear cuenta<span className="text-5xl">.</span>
      </h1>
      <FormRegister />
    </div>
  );
};

export default RegisterPage;
