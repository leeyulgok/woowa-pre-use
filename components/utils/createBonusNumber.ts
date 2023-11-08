import Lotto from "./Lotto"

export const createBonusNumber = (Lotto: Lotto) => {
  while(true) {
    let bonusNumber: number = Math.floor(Math.random() * (45 - 1 + 1)) + 1;
  
    if(Lotto.getNumbers().includes(bonusNumber)) continue;

    return bonusNumber;
  }
}