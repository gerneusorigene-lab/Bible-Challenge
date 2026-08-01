/**
 * useSyncStatus
 *
 * Tiny Zustand store that holds the current cloud-sync state so any component
 * can read it without prop drilling.  Updated exclusively by useProgressSync.
 */
import { create } from 'zustand';

export type SyncStatus = 'idle' | 'syncing' | 'synced' | 'error';

interface SyncStatusStore {
  /** Current cloud-sync state */
  status: SyncStatus;
  /** Unix timestamp (ms) of the last successful save, or null if never synced */
  lastSyncedAt: number | null;
  /** Internal setters — only useProgressSync should call these */
  setStatus: (status: SyncStatus) => void;
  setLastSyncedAt: (ts: number) => void;
}

export const useSyncStatus = create<SyncStatusStore>((set) => ({
  status: 'idle',
  lastSyncedAt: null,
  setStatus: (status) => set({ status }),
  setLastSyncedAt: (ts) => set({ lastSyncedAt: ts }),
}));
