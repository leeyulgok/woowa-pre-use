export default class Lotto {
  private numbers: number[];

  constructor(numbers: number[]) {
    this.validate(numbers);
    this.numbers = numbers;
  }

  private validate(numbers: number[]): void {
    const LOTTO_LENGTH = 6;
    const set = new Set(numbers);
    const newNumbers = [...set];

    if (newNumbers.length !== LOTTO_LENGTH) {
      throw new Error(
        "[ERROR] 로또 번호는 6자리의 중복되지 않은 숫자여야 합니다."
      );
    }
  }

  public getNumbers(): number[] {
    return this.numbers;
  }
}
