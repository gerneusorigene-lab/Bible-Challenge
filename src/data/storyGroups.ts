import type { Level } from './questions';

/**
 * Question records are grouped into player-facing Bible stories. Most records
 * are already complete stories and therefore remain single-question groups.
 * Closely related records share a group so selecting a story launches every
 * related question in a randomized session.
 */
const GROUPS: Record<string, string[]> = {
  creation: ['b2', 'b3'],
  eden: ['b4', 'b5'],
  noah: ['b1', 'b7'],
  abraham: ['b9', 'b10', 'b11', 'b68'],
  jacob: ['b12', 'b13', 'b58'],
  joseph: ['b14', 'b15'],
  moses: ['b16', 'b17', 'b18', 'b19', 'b20', 'b21', 'b22', 'b23'],
  solomon: ['b29', 'b65'],
  elijah: ['b30', 'b31'],
  nativity: ['b36', 'b37', 'b48'],
  passion: ['b45', 'b52', 'b53', 'b61', 'b46'],
  pentecost: ['b47', 'i59', 'i62'],
  david: ['i1', 'i3', 'i49', 'i64'],
  paulMinistry: ['i17', 'i19', 'i20', 'i21', 'i41'],
  transfiguration: ['b55', 'i37'],
  jonah: ['b32', 'i38'],
  job: ['b64', 'i29', 'a45'],
  ruth: ['b26', 'i58'],
  revelationChurches: ['a9', 'a10', 'a20', 'a26', 'a33', 'a41', 'a53'],
  romans: ['a2', 'a3', 'a31'],
  abrahamicCovenant: ['a21', 'a47'],
};

const GROUP_BY_LEVEL = new Map<string, string>();
Object.entries(GROUPS).forEach(([groupId, levelIds]) => {
  levelIds.forEach((levelId) => GROUP_BY_LEVEL.set(levelId, groupId));
});

export type StoryGroup = {
  id: string;
  representative: Level;
  levels: Level[];
};

export function groupLevelsIntoStories(levels: Level[]): StoryGroup[] {
  const levelIds = new Set(levels.map((level) => level.id));
  const groups = new Map<string, Level[]>();

  levels.forEach((level) => {
    const configuredGroup = GROUP_BY_LEVEL.get(level.id);
    const groupId = configuredGroup && GROUPS[configuredGroup].some((id) => levelIds.has(id))
      ? configuredGroup
      : level.id;
    const members = groups.get(groupId) ?? [];
    members.push(level);
    groups.set(groupId, members);
  });

  return Array.from(groups.entries()).map(([id, members]) => ({
    id,
    representative: members[0],
    levels: members,
  }));
}
