import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-24 text-center">
      <h1 className="text-3xl font-bold text-white">That page isn’t in the store.</h1>
      <Link href="/" className="mt-6 inline-block text-[#da72ea] underline underline-offset-2">
        Back to the store
      </Link>
    </div>
  );
}
