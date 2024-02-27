export type Hunt = {
  huntId: string;

  start: number;
  name: string;

  bonuses?: Bonus[];
};

export type ProcessedHunt = {
  huntId: string;

  start: string;
  name: string;

  bonuses?: Bonus[];

  reqavg: string;
  winnings: string;
};

export type NewHunt = {
  start: number;
  name: string;
};

export type UpdateHunt = Partial<NewHunt>;

export type Bonus = {
  bonusId: string;

  game: string;
  bet: number;
  payout?: number;
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

export type User = TwitchUser & {
  userId: string;
  customerId: string;
  customLayout?: string;
};

export type Settings = {
  layout: string;
  boxColor: string;
  currency: string;
  textColor: string;
  primaryColor: string;
  secondaryColor: string;
};

export type UpdateSettings = Partial<Settings>;

export type BillingInterval = "yearly" | "monthly" | "triennially";
