import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Building2, Info } from 'lucide-react';
import { useLocation } from 'wouter';
import { useLanguage } from '@/hooks/useLanguage';
import { useSound } from '@/hooks/useSound';

const copy = {
  en: {
    title: 'About',
    tagline: 'Three Truths & One Lie',
    developedBy: 'Developed by',
    company: 'Belleus Educational Games',
    location: 'Ottawa, Canada',
    description:
      "Bible Challenge is more than a game—it's a mission to help people everywhere discover, learn, and remember the Word of God in an enjoyable and meaningful way. Designed for players of all ages, it combines fun, challenge, and biblical learning to strengthen faith and knowledge.",
    vision:
      "From its very first release, Bible Challenge is available in four languages. My vision is to expand it into many more so that people around the world can experience God's Word in their own language. With your encouragement, feedback, and support, together we can make this vision a reality.",
    version: 'Version 1.0.0',
    copyright: '© 2026 Belleus Educational Games',
    back: 'Back to Settings',
  },
  fr: {
    title: 'À propos',
    tagline: 'Trois vérités et un mensonge',
    developedBy: 'Développé par',
    company: 'Belleus Educational Games',
    location: 'Ottawa, Canada',
    description:
      "Bible Challenge est bien plus qu'un jeu : c'est une mission qui vise à aider les gens du monde entier à découvrir, apprendre et retenir la Parole de Dieu d'une manière agréable et enrichissante. Conçu pour les joueurs de tous âges, il combine plaisir, défi et apprentissage biblique afin de renforcer la foi et la connaissance.",
    vision:
      "Dès sa toute première version, Bible Challenge est disponible en quatre langues. Ma vision est de l'offrir dans de nombreuses autres langues afin que les gens du monde entier puissent découvrir la Parole de Dieu dans leur propre langue. Grâce à vos encouragements, vos commentaires et votre soutien, nous pouvons ensemble faire de cette vision une réalité.",
    version: 'Version 1.0.0',
    copyright: '© 2026 Belleus Educational Games',
    back: 'Retour aux paramètres',
  },
  es: {
    title: 'Acerca de',
    tagline: 'Tres verdades y una mentira',
    developedBy: 'Desarrollado por',
    company: 'Belleus Educational Games',
    location: 'Ottawa, Canadá',
    description:
      'Bible Challenge es mucho más que un juego: es una misión para ayudar a personas de todo el mundo a descubrir, aprender y recordar la Palabra de Dios de una manera entretenida y significativa. Diseñado para jugadores de todas las edades, combina diversión, desafío y aprendizaje bíblico para fortalecer la fe y el conocimiento.',
    vision:
      'Desde su primera versión, Bible Challenge está disponible en cuatro idiomas. Mi visión es ampliarlo a muchos más para que personas de todo el mundo puedan conocer la Palabra de Dios en su propio idioma. Con su ánimo, sus comentarios y su apoyo, juntos podemos hacer realidad esta visión.',
    version: 'Versión 1.0.0',
    copyright: '© 2026 Belleus Educational Games',
    back: 'Volver a configuración',
  },
  pt: {
    title: 'Sobre',
    tagline: 'Três verdades e uma mentira',
    developedBy: 'Desenvolvido por',
    company: 'Belleus Educational Games',
    location: 'Ottawa, Canadá',
    description:
      'Bible Challenge é muito mais do que um jogo: é uma missão para ajudar pessoas de todo o mundo a descobrir, aprender e lembrar a Palavra de Deus de forma agradável e significativa. Criado para jogadores de todas as idades, combina diversão, desafios e aprendizado bíblico para fortalecer a fé e o conhecimento.',
    vision:
      'Desde o seu primeiro lançamento, Bible Challenge está disponível em quatro idiomas. Minha visão é expandi-lo para muitos outros, para que pessoas em todo o mundo possam conhecer a Palavra de Deus em seu próprio idioma. Com o seu incentivo, seus comentários e seu apoio, juntos podemos transformar essa visão em realidade.',
    version: 'Versão 1.0.0',
    copyright: '© 2026 Belleus Educational Games',
    back: 'Voltar às configurações',
  },
} as const;

export default function About() {
  const [, setLocation] = useLocation();
  const { language } = useLanguage();
  const { playClick } = useSound();
  const text = copy[language as keyof typeof copy] ?? copy.en;

  const goBack = () => {
    playClick();
    setLocation('/settings');
  };

  return (
    <main className="relative min-h-[100dvh] overflow-hidden sacred-gradient px-4 pb-10 pt-24">
      <motion.section
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 mx-auto flex w-full max-w-xl flex-col items-center text-center"
      >
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 bg-slate-950/35 text-gold shadow-xl backdrop-blur">
          <Info size={31} />
        </div>

        <h1 className="mb-6 font-serif text-3xl font-black uppercase tracking-[0.12em] text-gold sm:text-4xl">
          {text.title}
        </h1>

        <div className="w-full rounded-3xl border border-white/20 bg-slate-950/35 p-7 shadow-2xl backdrop-blur-md sm:p-9">
          <BookOpen size={42} className="mx-auto mb-4 text-gold" />

          <h2 className="font-serif text-3xl font-black text-white">
            Bible Challenge
          </h2>

          <p className="mt-2 font-serif text-lg font-bold text-gold/85">
            {text.tagline}
          </p>

          <div className="mx-auto mt-6 max-w-lg space-y-5 text-center leading-7 text-white/75">
            <p>{text.description}</p>
            <p>{text.vision}</p>
          </div>

          <div className="my-7 h-px bg-white/15" />

          <div className="flex flex-col items-center justify-center text-center text-white/75">
            <p className="text-xs uppercase tracking-widest text-gold/80">
              {text.developedBy}
            </p>

            <Building2 size={22} className="my-3 text-gold" />

            <p className="font-serif text-lg font-bold">
              {text.company}
            </p>

            <p className="mt-1 font-serif text-sm font-semibold text-white/65">
              {text.location}
            </p>
          </div>

          <p className="mt-7 text-sm font-semibold text-white/60">
            {text.version}
          </p>

          <p className="mt-1 text-xs text-white/40">
            {text.copyright}
          </p>
        </div>

        <motion.button
          type="button"
          whileTap={{ scale: 0.97 }}
          onClick={goBack}
          className="mt-8 flex items-center gap-2 rounded-full border border-gold/40 bg-slate-950/35 px-6 py-3 font-serif font-bold text-gold shadow-lg backdrop-blur transition-colors hover:bg-gold/10"
        >
          <ArrowLeft size={18} />
          {text.back}
        </motion.button>
      </motion.section>
    </main>
  );
}
