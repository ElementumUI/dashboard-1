"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const FormRegister = () => {
  const router = useRouter();

  return (
    <form className="space-y-5">
      <Input icon="fi-rr-user" placeholder="Jorge Luis Trejo" />
      <Input icon="fi-rr-envelope" placeholder="example@example.com" />
      <Input icon="fi-rr-key" type="password" placeholder="**********" />
      <Input icon="fi-rr-key" type="password" placeholder="**********" />
      <div>
        <Button
          type="button"
          className="w-full"
          onClick={() => router.push("/")}
        >
          Registrate
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
