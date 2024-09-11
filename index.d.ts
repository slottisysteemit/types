export type Hunt = {
  huntId: string;
  reqavg: string;
  winnings: string;

  bestX: string;

  name: string;
  start: string;

  bonuses: Bonus[];
};

export type NewHunt = {
  start: number;
  name: string;
};

export type UpdateHunt = Partial<NewHunt>;

export type Bonus = {
  bonusId: string;

  game: string;
  bet: string;
  payout?: string;
  x?: string;
};

export type NewBonus = {
  game: string;
  bet: number;
};

export type UpdateBonus = Partial<NewBonus & { payout: number }>;

export type Subscription = {
  id: string;
  current_period_end: number;
  cancel_at_period_end: boolean;
};

export type TwitchUser = {
  name: string;
  email: string;
  twitchId: string;
  profilePictureUrl: string;
};

export type TwitchToken = {
  expires_in: number;
  access_token: string;
  refresh_token: string;
};

export type User = TwitchUser & {
  userId: string;
  customerId: string;
  settings: Settings;
  customLayout?: string;
  subscription: Subscription;

  bonushunts: number;
};

export type Settings = {
  layout: string;
  boxColor: string;
  currency: string;
  textColor: string;
  marqueeSpeed: number;
  primaryColor: string;
  secondaryColor: string;
};

export type UpdateSettings = Partial<Settings>;

export type BillingInterval = "yearly" | "monthly";
