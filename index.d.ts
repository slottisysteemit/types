export type Hunt = {
  huntId: string;

  start: number;
  name: string;

  bonuses?: Bonus[];

  reqavg?: string;
  winnings?: string;
};

export type Bonus = {
  bonusId: string;

  game: string;
  bet: number;
  payout?: number;
};
