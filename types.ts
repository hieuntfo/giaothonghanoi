export interface TimeSlot {
  start: string; // Format "HH:mm"
  end: string;   // Format "HH:mm"
}

export interface BanSchedule {
  date: string; // Format "DD/MM"
  slots: TimeSlot[];
}

export enum StreetStatus {
  BANNED = 'BANNED',
  RESTRICTED = 'RESTRICTED',
  NORMAL = 'NORMAL'
}

export interface StreetInfo {
  name: string;
  type: StreetStatus;
  description?: string;
}

export interface RouteGuide {
  from: string;
  to: string;
  path: string;
}