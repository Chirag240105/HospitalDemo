"use client";

import { motion } from "framer-motion";
import DepartmentCard from "@/components/DepartmentCard";
import { DepartmentCategory, departments } from "@/lib/data";
import { useMemo, useState } from "react";

const filters = ["All", "Surgical", "Medical", "Diagnostic", "Women's Health"] as const;

export default function DepartmentsPage() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const filtered = useMemo(
    () => (active === "All" ? departments : departments.filter((department) => department.category === (active as DepartmentCategory))),
    [active],
  );

  return (
    <main id="main-content" className="bg-[#F7FBFF] pb-20 pt-28 text-[#1A1A2E]">
      <section className="relative overflow-hidden bg-[#0A2463] px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_20%,rgba(61,214,245,0.3),transparent_28%),linear-gradient(135deg,#0A2463,#061847)]" />
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} className="container-xl relative">
          <p className="font-mono-label text-sm text-[#3DD6F5]">16 Centers of Excellence</p>
          <h1 className="font-display mt-4 max-w-4xl text-5xl font-bold leading-tight sm:text-6xl">Departments built for complex, connected care.</h1>
        </motion.div>
      </section>

      <section className="container-xl mt-10">
        <div className="mb-8 flex gap-2 overflow-x-auto rounded-md border border-slate-200 bg-white p-2 shadow-sm" role="tablist" aria-label="Department filters">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              className={`whitespace-nowrap rounded-md px-5 py-3 text-sm font-black transition ${active === filter ? "bg-[#0A2463] text-white" : "text-slate-600 hover:bg-[#E8F4FD] hover:text-[#0A2463]"}`}
              role="tab"
              aria-selected={active === filter}
            >
              {filter}
            </button>
          ))}
        </div>
        <motion.div layout className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {filtered.map((department) => (
            <motion.div key={department.name} layout>
              <DepartmentCard department={department} expandable />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
