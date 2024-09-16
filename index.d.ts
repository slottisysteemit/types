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

  order: number;
};

export type NewBonus = {
  game: string;
  bet: number;
  order: number;
};

export type UpdateBonus = Partial<NewBonus & { payout: number }>;

export type Subscription = {
  id: number;
  customerId: string;
  subscriptionId: string;
};

export type User = {
  name: string;
  avatar: string;
  userId: string;
  customerId: string;
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
