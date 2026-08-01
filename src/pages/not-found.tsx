import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen sacred-gradient flex flex-col items-center justify-center text-center p-4">
      <h1 className="font-serif text-6xl text-gold mb-4">404</h1>
      <p className="font-sans text-xl text-foreground/80 mb-8">
        The path you seek cannot be found.
      </p>
      <Link href="/">
        <button className="parchment-bg px-8 py-3 rounded-full text-card-foreground font-serif uppercase tracking-widest border border-gold hover:bg-gold/10 transition-colors">
          Return Home
        </button>
      </Link>
    </div>
  );
}
