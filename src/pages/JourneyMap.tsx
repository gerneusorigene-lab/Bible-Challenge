import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  Circle,
  Lock,
  PlayCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { useLanguage } from "@/hooks/useLanguage";
import { useSound } from "@/hooks/useSound";
import { LEVELS } from "@/data/questions";
import { groupLevelsIntoStories } from "@/data/storyGroups";
import { useGameState } from "@/hooks/useGameState";
import { getLocalizedText } from '@/utils/localizedText';

type StoryNode = {
  id: string;
  title: string;
  status: "completed" | "current" | "pending" | "locked";
};

export default function JourneyMap() {
  const [, setLocation] = useLocation();
  const { playClick } = useSound();
  const { language, t } = useLanguage();
  const { allTimeCorrectLevels } = useGameState();

  const journeyLevels = LEVELS.filter(
    (level) => level.difficulty === "Beginner",
  );

  const groupedStories = groupLevelsIntoStories(journeyLevels);

  let currentFound = false;

  const stories: StoryNode[] = groupedStories.map((story) => {
    const completed = story.levels.every((level) =>
      allTimeCorrectLevels.includes(level.id),
    );

    let status: StoryNode["status"];

    if (completed) {
      status = "completed";
    } else if (!currentFound) {
      status = "current";
      currentFound = true;
    } else {
      status = "pending";
    }

    return {
      id: story.id,
      title: getLocalizedText(story.representative.topic, language),
      status,
    };
  });

  const getIcon = (status: StoryNode["status"]) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="text-green-400" size={28} />;
      case "current":
        return <PlayCircle className="text-yellow-400" size={28} />;
      case "locked":
        return <Lock className="text-gray-500" size={28} />;
      default:
        return <Circle className="text-slate-400" size={28} />;
    }
  };

  const getStatusLabel = (status: StoryNode["status"]) => {
    switch (status) {
      case "completed":
        return t("completed");
      case "current":
        return t("current");
      case "locked":
        return t("locked");
      default:
        return t("not_started");
    }
  };

  return (
    <main className="min-h-[100dvh] bg-[radial-gradient(circle_at_top,#0a3761_0%,#071f3d_38%,#031327_100%)] px-4 pb-16 pt-24 text-white">
      <div className="mx-auto max-w-xl">
        <button
          type="button"
          onClick={() => {
            playClick();
            setLocation("/levels?difficulty=Beginner");
          }}
          className="mb-8 flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2 transition hover:bg-white/10"
        >
          <ArrowLeft size={18} />
          {t("back")}
        </button>

        <div className="mb-10 text-center">
          <BookOpen className="mx-auto mb-3 text-yellow-400" size={48} />

          <h1 className="font-serif text-4xl font-bold">
            {t("journey_map")}
          </h1>

          <p className="mt-2 text-white/70">
            {t("journey_map_intro")}
          </p>
        </div>

        <div className="relative">
          <div className="absolute bottom-4 left-6 top-4 w-1 rounded-full bg-white/20" />

          <div className="space-y-8">
            {stories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, x: -25 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="relative flex items-center gap-5"
              >
                <div className="z-10 rounded-full bg-[#071f3d] p-1">
                  {getIcon(story.status)}
                </div>

                <div
                  className={`flex-1 rounded-2xl border p-4 ${
                    story.status === "current"
                      ? "border-yellow-400/50 bg-yellow-400/10 shadow-[0_0_24px_rgba(250,204,21,0.12)]"
                      : story.status === "completed"
                        ? "border-green-400/30 bg-green-400/5"
                        : "border-white/10 bg-white/5"
                  }`}
                >
                  <div className="font-serif text-xl">{story.title}</div>

                  <div className="mt-1 text-sm text-white/60">
                    {getStatusLabel(story.status)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}