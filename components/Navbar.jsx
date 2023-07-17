import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-slate-800 py-3">
      <Link href={"/"}>
        <Image
          src="/logo-white.png"
          alt="Logo"
          height={32}
          width={80}
          className="ml-4"
        />
      </Link>
      <Link href={"/addTopico"} className="bg-white p-2 mr-4 rounded">
        Novo Tópico
      </Link>{" "}
    </nav>
  );
}
