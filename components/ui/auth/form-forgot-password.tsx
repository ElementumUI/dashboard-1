"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const FormForgotPassword = () => {
  const router = useRouter();

  return (
    <form className="space-y-5">
      <Input icon="fi-rr-envelope" placeholder="example@example.com" />
      <div>
        <Button
          type="button"
          className="w-full"
          onClick={() => router.push("/")}
        >
          Enviar instrucciones
        </Button>
      </div>
      <div>
        <p className="text-center">
          ¿Ya tienes una cuenta?{" "}
          <Link href="/auth/login" className="underline font-medium">
            Ingresa
          </Link>
        </p>
      </div>
    </form>
  );
};
