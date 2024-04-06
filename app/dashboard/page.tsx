// Lado del servidor 
import { getServerSession } from "next-auth";
import Image from "next/image";
import { ButtonSignOut } from "./components/ButtonSignOut";

const DashboardPage = async () => {
  const session = await getServerSession();

  return (
    <div className="place-items-center grid w-full min-h-screen">
      <section>
        <h1 className="font-medium text-3xl">Bienvenido {session?.user?.name}</h1>
        <Image src={session?.user?.image! || ""} width={100} height={100} alt="avatar user" className="rounded-full" />
      </section>
      <ButtonSignOut />
    </div>
  );
};
export default DashboardPage;
