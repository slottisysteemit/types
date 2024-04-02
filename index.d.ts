export type Hunt = {
  huntId: string;
  reqavg: string;
  winnings: string;

  bestX: string;

  name: string;
  start: string;

  bonuses: Bonus[];
};

export type UpdateHunt = Partial<NewHunt>;
export type NewHunt = {
  start: number;
  name: string;
};

export type Bonus = {
  bonusId: string;

  game: string;
  bet: string;
  payout?: string;
  x?: string;
};

export type UpdateBonus = Partial<NewBonus & { payout: number }>;
export type NewBonus = {
  game: string;
  bet: number;
};

export type Subscription = {
  id: string;
  current_period_end: number;
  cancel_at_period_end: boolean;
};

// Twitch
export type TwitchUser = {
  email: string;
  twitchId: string;
  display_name: string;
  profilePictureUrl: string;
};

export type TwitchToken = {
  expires_in: number;
  access_token: string;
  refresh_token: string;
};

export type User = {
  settings: Settings;
  subscription: Subscription;

  email: string;
  userId: string;
  username: string;
  twitchId?: string;
  customerId: string;
};

export type UserWithPassword = User & {
  password: string;
};

export type UpdateSettings = Partial<Settings>;
export type Settings = {
  layout: string;
  boxColor: string;
  currency: string;
  textColor: string;
  marqueeSpeed: number;
  primaryColor: string;
  secondaryColor: string;
};

export type BillingInterval = "yearly" | "monthly" | "triennially";
