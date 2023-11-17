import MENU_LIST from "./menuList";

type OrderedItem = {
  food: string;
  count: number;
};

class OrderedMenu {
  private orderItems: OrderedItem[];
  private totalPrice: number;

  constructor(orderItems: OrderedItem[]) {
    this.orderItems = orderItems;
    this.totalPrice = 0;
    this.calculateTotalPrice();
  }

  public getOrderItems(): OrderedItem[] {
    return this.orderItems;
  }

  public getTotalPrice(): number {
    return this.totalPrice;
  }

  private calculateTotalPrice(): void {
    this.totalPrice = this.orderItems.reduce((total, item) => {
      const price = this.findPrice(item.food);
      return price ? total + price * item.count : total;
    }, 0);
  }

  private findPrice(foodName: string): number | null {
    return MENU_LIST[foodName] ? MENU_LIST[foodName].price : null;
  }
}

export default OrderedMenu;
