import { NavItem } from "@/models/nav-item";
import Link from "next/link";

export default function NavItemComponent(props: NavItem) {
  return (
    <Link
      href={props.url}
      className={`relative flex flex-col px-5 py-4 gap-1 rounded-lg text-start active:scale-95 transition-all ${props.isActive
        ? "dark:bg-slate-700 bg-slate-100 shadow-xl shadow-white/20 dark:shadow-slate-500/10"
        : "hover:bg-slate-500/5 dark:hover:bg-slate-400/5"
        }`}
    >
      <p className="text-slate-700 dark:text-slate-400 text-sm leading-3">
        {props.subtitle}
      </p>
      <p className="text-black dark:text-white text-lg font-medium">
        {props.title}
      </p>
      {props.info}
      <span
        className={`absolute inset-y-4 -left-px w-1 rounded-full bg-gradient-to-b ${props.isActive
          ? "bg-indigo-500"
          : "bg-slate-600/20 dark:bg-slate-400/20"
          }`}
      ></span>
    </Link>
  );
}
