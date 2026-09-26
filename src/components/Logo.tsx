type Props = {
  className?: string;
  ink?: string;
  bow?: string;
  accent?: string;
  title?: string;
};

/** Full Kavacha-Kundala mark with the Vijaya bow as a cap. */
export function Mark({ className, ink = "currentColor", bow = "#5E9C8F", accent = "#B0773F", title = "CodeDharma" }: Props) {
  return (
    <svg viewBox="24 18 92 90" className={className} role="img" aria-label={title}>
      <path d="M36 40 Q70 6 104 40" fill="none" stroke={bow} strokeWidth="5.5" strokeLinecap="round" />
      <path d="M36 40 q-5 1 -7 -4 M104 40 q5 1 7 -4" fill="none" stroke={bow} strokeWidth="4" strokeLinecap="round" />
      <path d="M70 32 L100 43 V65 C100 84 88 97 70 103 C52 97 40 84 40 65 V43 Z" fill="none" stroke={ink} strokeWidth="5.5" strokeLinejoin="round" />
      <path d="M61 55 L52 66 L61 77" fill="none" stroke={ink} strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M79 55 L88 66 L79 77" fill="none" stroke={ink} strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="70" cy="66" r="5.5" fill={accent} />
      <circle cx="43.09" cy="94" r="4.5" fill="none" stroke={accent} strokeWidth="3" />
      <circle cx="43.09" cy="103.5" r="2.1" fill={accent} />
      <circle cx="96.91" cy="94" r="4.5" fill="none" stroke={accent} strokeWidth="3" />
      <circle cx="96.91" cy="103.5" r="2.1" fill={accent} />
    </svg>
  );
}

/** Horizontal lockup: mark + wordmark. */
export function Lockup({ className = "", dark = false }: { className?: string; dark?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Mark className="h-11 w-auto" ink={dark ? "#DCE6E0" : "#1D2322"} />
      <span className={`font-serif text-2xl leading-none ${dark ? "text-patina" : "text-oxide"}`}>CodeDharma</span>
    </span>
  );
}
