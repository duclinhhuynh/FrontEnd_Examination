import Link from "next/link";
export default function Home() {
  return (
    <div className="flex">
      <h1>page Hello work</h1>
      <div><Buttons/></div>
    </div>
  );
}
function Buttons() {
  return (
    <div className="flex gap-2 max-sm:flex-col max-sm:w-full max-sm:mt-8">
      {(
        <Link href="/Login">
          <button
            aria-label="Dashboard"
            className="max-sm:w-full text-sm border border-sky-500 text-white bg-sky-500 p-[8px] px-6 rounded-md">
            Login Page
          </button>
        </Link>
      )}
    </div>
  );
}
