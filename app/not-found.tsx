import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-5">
      <h1 className="text-9xl font-black">404</h1>
      <h2 className="text-2xl font-medium mb-10 text-center">
        ¡Ooooops página no encontrada!
      </h2>
      <Link href="/" className="hover:underline">
        Regresar a inicio
      </Link>
    </div>
  );
};

export default NotFoundPage;
