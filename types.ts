export interface Character {
  name: string;
  gender: string;
  age: number;
  mbti: string;
  keywords: string[];
  description: string;
  quote: string;
  weapon: string;
  role: string;
  ability: string;
  rank: string;
  appearance: string;
  code: string;
  factionId: string;
}

export interface Faction {
  id: string;
  name: string;
  description: string;
  location: string;
  color: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}