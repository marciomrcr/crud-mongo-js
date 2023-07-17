import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import RemoveBtn from "./RemoveBtn";

export default function TopicsList() {
  return (
    <>
      <div
        className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start
      "
      >
        <div>
          <h2 className="font-bold text-2xl">Titulo</h2>
          <div>Descrição</div>
        </div>
        <div className="flex gap-2">
          <RemoveBtn />
          <Link href={"/editarTopico/123"}>
            <HiPencilAlt size={24} />
          </Link>
        </div>
      </div>
    </>
  );
}
