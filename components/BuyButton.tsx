"use client";

export function BuyButton({
  label = "Add to Cart →",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <button
      type="button"
      className={`group block w-full rounded-full border-2 border-[#3bff48] bg-[#3bff48] px-6 py-2 text-center text-[1.6rem] font-bold leading-[1.6] tracking-[-0.04em] text-black transition-colors hover:border-[#7e4a95] hover:bg-[#7e4a95] hover:text-white sm:text-[2rem] ${className}`}
    >
      <span className="group-hover:hidden">{label}</span>
      <span className="hidden group-hover:inline">Contact</span>
    </button>
  );
}

export function SoldPill() {
  return (
    <p className="block w-full rounded-full border-[3px] border-[#875798] px-6 py-2 text-center text-[1.6rem] font-bold leading-[1.6] tracking-[-0.04em] text-[#e154fa] sm:text-[2rem]">
      Sold
    </p>
  );
}
