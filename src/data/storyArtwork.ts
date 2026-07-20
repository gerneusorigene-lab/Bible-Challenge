import noahArtwork from "@/assets/images/beginner/noahs_ark_v1.png";
import abrahamArtwork from "@/assets/images/beginner/abraham_under_the_stars_v1.png";
import jacobArtwork from "@/assets/images/beginner/jacobs_ladder_v1.png";

import josephArtwork from "@/assets/images/intermediate/joseph_in_egypt_v1.png";
import mosesArtwork from "@/assets/images/intermediate/burning_bush_v1.png";
import davidArtwork from "@/assets/images/intermediate/david_and_goliath_v1.png";

export function getStoryArtwork(id: string): string | undefined {
  const key = id.toLowerCase();

  if (key.includes("noah")) return noahArtwork;
  if (key.includes("abraham")) return abrahamArtwork;
  if (key.includes("jacob")) return jacobArtwork;

  if (key.includes("joseph")) return josephArtwork;
  if (key.includes("moses")) return mosesArtwork;
  if (key.includes("david")) return davidArtwork;

  // No artwork yet
  return undefined;
}