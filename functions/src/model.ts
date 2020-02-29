export interface Venue {
  name: string;
}

export interface Event {
  name: string;
  venue: Venue;
  doorOpenDate: Date;
  openDate: Date;
  closeDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface YokohamaArenaData {
  events: YokohamaArenaEventWrapper[];
}

export interface YokohamaArenaEventWrapper {
  event: YokohamArenaEvent;
}

export interface YokohamArenaEvent {
  date1: string;
  date2: Date;
  category: string;
  title: string;
  artist: string;
  ev_open: string;
  ev_start: string;
  ev_end: string;
  construction: Date;
  removal: string;
  suspending: string;
  path: string;
  ev_contact: string;
  company: string;
  url: string;
  artist_en: string;
  title_en: string;
  ticket_url_ja: string;
  ticket_url_en: string;
}
