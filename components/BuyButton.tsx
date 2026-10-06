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
      className={`group grid w-full cursor-default rounded-full border-2 border-[#3bff48] bg-[#3bff48] px-6 py-1.5 text-center text-[1.6rem] font-bold leading-[1.6] tracking-[-0.04em] text-black transition-[background-color,border-color,color,transform] duration-200 hover:border-[#7e4a95] hover:bg-[#7e4a95] hover:text-white sm:text-[2rem] ${className}`}
    >
      <span className="[grid-area:1/1] transition-[opacity,transform] duration-200 group-hover:-translate-y-1 group-hover:opacity-0">
        {label}
      </span>
      <span className="translate-y-1 opacity-0 transition-[opacity,transform] duration-200 [grid-area:1/1] group-hover:translate-y-0 group-hover:opacity-100">
        Contact
      </span>
    </button>
  );
}

export function SoldPill() {
  return (
    <p className="block w-full rounded-full border-[3px] border-[#875798] px-6 py-1.5 text-center text-[1.6rem] font-bold leading-[1.6] tracking-[-0.04em] text-[#e154fa] sm:text-[2rem]">
      Sold
    </p>
  );
}
