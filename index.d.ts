export type User = {
  email: string;
  userId: string;
  username: string;
  password?: string;
  twitchId?: string;

  customerId: string; // stripe customerId
};

export type Settings = {
  fontFamily: string;
  currency: string;
  public: boolean;
};

export type Session = {
  sessionId: string;
  twitchTokenData?: TwitchToken;
  user: User & { settings?: Settings };
};

export type RegisterUser =
  | {
      email: string;
      twitchId: string;
      username: string;
    }
  | {
      email: string;
      username: string;
      password: string;
    };

export type TwitchToken = {
  expiresIn: Date;
  accessToken: string;
  refreshToken: string;
};

export type Bonus = {
  x?: string;
  bet: string;
  game: string;
  bonusId: string;
  payout: string | null;
};

export type NewBonus = {
  bet: string;
  game: string;
};

export type UpdateBonus = Partial<NewBonus & { payout: string }>;

export type Hunt = {
  name: string;
  start: string;
  bestX: string;
  huntId: string;
  reqavg: string;
  bonuses: Bonus[];
  winnings: string;
  isActive: boolean;
  openedBonusCount: number;
};

export type CreateHunt = {
  name: string;
  start: string;
  userId: string;
};

export type UpdateHunt = {
  name: string;
  start: string;
};

export type Subscription = {
  status: string;
  subscriptionId: string;
  currentPeriodEnd: Date;
  cancelAtPeriodEnd: boolean;
};

export type SocketRoom = "hunt" | "viewer-battle";
export type BillingInterval = "yearly" | "monthly";
