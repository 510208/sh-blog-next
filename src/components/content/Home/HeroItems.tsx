export function HeroTitle({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
      {children}
    </h1>
  );
}

export function HeroSubtitle({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-2xl md:text-4xl text-white/40 line-clamp-3 overflow-hidden">
      {children}
    </p>
  );
}
