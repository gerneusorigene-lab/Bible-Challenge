export const STORY_ARTWORK: Record<string, string> = {
  creation: "/assets/images/beginner/creation.webp",
  eden: "/assets/images/beginner/adam_eve.webp",
  noah: "/assets/images/beginner/noahs_ark.webp",
  abraham: "/assets/images/beginner/abraham_under_the_stars.webp",
  jacob: "/assets/images/beginner/jacobs_ladder.webp",

  joseph: "/assets/images/intermediate/joseph_in_egypt.webp",
  moses: "/assets/images/intermediate/burning_bush.webp",
  david: "/assets/images/intermediate/david_and_goliath.webp",
  jonah: "/assets/images/intermediate/jonah.webp",

  default: "/assets/images/ui/story_placeholder.webp",
};

export function getStoryArtwork(id: string) {
    return STORY_ARTWORK[id] ?? STORY_ARTWORK.default;
}