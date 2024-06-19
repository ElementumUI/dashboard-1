"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const FormLogin = () => {
  const router = useRouter();

  return (
    <form className="space-y-5">
      <Input icon="fi-rr-envelope" placeholder="example@example.com" />
      <Input icon="fi-rr-key" placeholder="**********" type="password" />
      <div className="flex justify-end">
        <Link
          href="/auth/forgot-password"
          className="text-gray-500 hover:underline"
        >
          ¿Olvidaste tu contraseña?
        </Link>
      </div>
      <div>
        <Button
          type="button"
          className="w-full"
          onClick={() => router.push("/")}
        >
          Ingresar
        </Button>
      </div>
      <div>
        <p className="text-center">
          ¿No tienes una cuenta?{" "}
          <Link href="/auth/register" className="underline font-medium">
            Registrate
          </Link>
        </p>
      </div>
    </form>
  );
};
