import { FormForgotPassword } from "@/components/ui/auth/form-forgot-password";

const ForgotPasswordPage = () => {
  return (
    <div className="p-5 w-full max-w-lg">
      <h1 className="text-2xl font-bold uppercase tracking-widest mb-8">
        Recuperar contraseña<span className="text-5xl">.</span>
      </h1>
      <FormForgotPassword />
    </div>
  );
};

export default ForgotPasswordPage;
