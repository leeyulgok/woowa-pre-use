import MENU_LIST from "./menuList";

type OrderMenu = {
  orderItems: { food: string; count: number }[];
  totalPrice: number;
};

class EventDiscount {
  private date: Date;
  private orderMenu: OrderMenu;
  private gift: string | null;

  constructor(orderMenu: OrderMenu, date: Date) {
    this.orderMenu = orderMenu;
    this.date = date;
    this.gift = null;
  }

  private parseDate(): { month: number; date: number; day: number } {
    return {
      month: this.date.getMonth() + 1,
      date: this.date.getDate(),
      day: this.date.getDay(),
    };
  }

  private weekDayDiscount(): number {
    const WEEKDAY_DISCOUNT = 1000;
    const { day } = this.parseDate();
    let discount = 0;
    if (day >= 0 && day <= 4) {
      this.orderMenu.orderItems.forEach(item => {
        const menuItem = MENU_LIST[item.food];
        if (menuItem && menuItem.category === 'desserts') {
          discount += WEEKDAY_DISCOUNT;
        }
      });
    }
    return discount;
  }

  private weekendDiscount(): number {
    const WEEKEND_DISCOUNT = 2000;
    const { day } = this.parseDate();
    let discount = 0;
    if (day === 5 || day === 6) {
      this.orderMenu.orderItems.forEach(item => {
        const menuItem = MENU_LIST[item.food];
        if (menuItem && menuItem.category === 'mains') {
          discount += WEEKEND_DISCOUNT;
        }
      });
    }
    return discount;
  }

  private specialDiscount(): number {
    const { month, date } = this.parseDate();
    const CHRISTMAS_DAY = 25;
    return (month === 12 && date === CHRISTMAS_DAY) ? 1000 : 0;
  }

  private checkForGiftEvent(): void {
    if (this.orderMenu.totalPrice > 120000) {
      this.gift = '샴페인';
    }
  }

  public totalDiscount(): number {
    const weekDay = this.weekDayDiscount();
    const weekend = this.weekendDiscount();
    const special = this.specialDiscount();

    this.checkForGiftEvent();

    let totalDiscount = weekDay + weekend + special;

    if (this.gift) {
      totalDiscount += 10000;
    }

    return totalDiscount;
  }

  public finalTotalPrice(): number {
    return this.orderMenu.totalPrice - this.totalDiscount();
  }

  public getGift(): string | null {
    return this.gift;
  }
}

export default EventDiscount;
