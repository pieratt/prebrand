const sections = [
  {
    title: "Definitions",
    body: "“Brand” means the name, url, logo, images, files, or other unforeseen deliverables produced by PBS as part of the Brand Sale.",
  },
  {
    title: "Agreement",
    body: "Subject to the terms of this Agreement, PBS grants to You an exclusive, non-transferable license to use the Brand in an unlimited number of applications. You can modify or manipulate the Brand. You can combine the Brand with other images or words and make derivative works from it.",
  },
  {
    title: "Ownership",
    body: "Subject to the purchase of the Brand, You own the copyright and all intellectual property rights inherent in or relating to the Brand, while PBS shall have a worldwide, perpetual, non-exclusive, royalty-free license to use and display the Brand as part of its portfolio and merchandise.",
  },
  {
    title: "Indemnification",
    body: "You agree to indemnify, hold harmless, and defend PBS and its owners, officers, agents, and affiliates from and against any and all claims, lawsuits and proceedings (collectively “Claims”), and all expenses, costs (including attorney's fees), judgments, damages and other liabilities resulting from such Claims, that arise or result from Your use of the Brand.",
  },
  {
    title: "Payment and Taxes",
    body: "All payments under this Agreement are due to PBS upon Your purchase of the Brand. Each party shall be responsible for all taxes (including, but not limited to, taxes based upon its income) or levies imposed on it under applicable laws, regulations and tax treaties as a result of this Agreement and any payments made hereunder (including those required to be withheld or deducted from payments); provided that You shall be responsible for any value added tax, use tax, sales tax, or similar tax, and shall pay or reimburse PBS for the same upon invoice. Each party shall furnish evidence of such paid taxes as is sufficient to enable the other party to obtain any credits available to it, including original tax withholding certificates.",
  },
];

export function Terms() {
  return (
    <article className="mx-auto max-w-2xl">
      <h1 className="text-[2.2rem] font-bold tracking-tight text-white">Pre-Brand Sales Agreement</h1>
      <p className="mt-5 text-[1.08rem] leading-relaxed text-[#e7e7e7]">
        This Agreement (the “Sale”) is between Internetland Company DBA Pre-Brand Store (“PBS”) and
        You (including your agents and affiliates).
      </p>
      <div className="mt-8 space-y-7">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-[1.25rem] font-bold text-white">{section.title}</h2>
            <p className="mt-2 text-[1.05rem] leading-relaxed text-[#e7e7e7]">{section.body}</p>
          </section>
        ))}
        <section>
          <h2 className="text-[1.25rem] font-bold text-white">Miscellaneous</h2>
          <h3 className="mt-3 font-bold text-white">Compliance with Applicable Laws.</h3>
          <p className="mt-2 text-[1.05rem] leading-relaxed text-[#e7e7e7]">
            You agree that You will comply with all applicable laws and regulations with respect to
            the Brand, including without limitation all export control laws and regulations.
          </p>
          <h3 className="mt-4 font-bold text-white">Entire Agreement.</h3>
          <p className="mt-2 text-[1.05rem] leading-relaxed text-[#e7e7e7]">
            The terms and conditions stated here set the entire agreement of the parties and replace
            and supersede all other contracts, agreements, and understandings, written or oral,
            relating to the subject matter hereof.
          </p>
        </section>
      </div>
    </article>
  );
}
