export interface IValidator {
  publicKey: string;
  stake: number;
}

export interface IVoter {
  stake: number;
}

export const validator = (publicKey: string, voters: IVoter[]): IValidator =>
  Object.freeze({
    publicKey,
    stake: voters.reduce(
      (total: number, voter: IVoter) => total + voter.stake,
      0,
    ),
  });
