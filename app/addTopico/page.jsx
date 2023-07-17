export default function page() {
  return (
    <form className="flex flex-col gap-3">
      <input
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Titulo"
      />
      <input
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Descrição"
      />
      <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit rounded-md hover:bg-green-700">
        Novo Tópico
      </button>
    </form>
  );
}
