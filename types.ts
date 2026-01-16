export interface TimeSlot {
  start: string; // Format "HH:mm"
  end: string;   // Format "HH:mm"
}

export interface BanSchedule {
  date: string; // Format "DD/MM"
  slots: TimeSlot[];
}

export interface RouteGuide {
  from: string;
  to: string;
  path: string;
}

// --- New Data Structure Types ---

export interface Road {
  name: string;
  type: 'forbidden' | 'restricted';
  color: string;
  origin: string;      // Point A address
  destination: string; // Point B address
  note: string;
  // Pre-calculated coordinates to simulate the Directions API result for curves
  cachedPath?: [number, number][];
}

export interface RoadGroup {
  group: string;
  roads: Road[];
}