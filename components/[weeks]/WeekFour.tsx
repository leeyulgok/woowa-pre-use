import React, { FC, useState } from "react";
import dynamic from "next/dynamic";
import MENU_LIST from "../utils/menuList";
import OrderedMenu from "../utils/OrderedMenu";
import EventDiscount from "../utils/EventDiscount";

import "react-calendar/dist/Calendar.css";

type WeekFourProps = {
  title: string;
};

type tileDisabledProps = {
  date: Date;
  view: string;
};

const Calendar = dynamic(() => import("react-calendar"), { ssr: false });

const WeekFour: FC<WeekFourProps> = ({ title }) => {
  const [value, setValue] = useState<Date>(new Date(2023, 11, 1));
  const [isReservation, setIsReservation] = useState<boolean>(false);
  const [isOrdered, setIsOrdered] = useState<boolean>(false);
  const [orderQuantities, setOrderQuantities] = useState({});
  const [orderedMenu, setOrderedMenu] = useState<OrderedMenu | null>(null);
  const [eventDiscount, setEventDiscount] = useState<EventDiscount | null>(
    null
  );

  const tileDisabled = ({ date, view }: tileDisabledProps) => {
    if (isReservation) return true;

    if (
      view === "month" &&
      (date.getFullYear() !== 2023 || date.getMonth() !== 11)
    ) {
      return true;
    }
    return false;
  };

  const checkReservation = () => {
    setIsReservation(true);
  };

  const getMenuItemsByCategory = (category: string) => {
    return Object.values(MENU_LIST).filter(
      (item) => item.category === category
    );
  };

  const handleQuantityChange = (foodName: string, quantity: string) => {
    const parsedQuantity = parseInt(quantity, 10);
    if (!isNaN(parsedQuantity)) {
      setOrderQuantities({ ...orderQuantities, [foodName]: parsedQuantity });
    }
  };

  const handleOrder = () => {
    const orderItems = Object.entries(orderQuantities)
      .map(([food, count]) => ({
        food,
        count: count as number,
      }))
      .filter((item) => item.count > 0);

    const newOrderedMenu = new OrderedMenu(orderItems);
    const newEventDiscount = new EventDiscount(newOrderedMenu, value);

    setOrderedMenu(newOrderedMenu);
    setEventDiscount(newEventDiscount);
    setIsOrdered(true);
  };

  return (
    <main className="mainContainer p-2">
      <div className="headContainer">
        <h1>{title} - 크리스마스 프로모션</h1>
      </div>
      <div className="mainContentsContainer w-full h-full border border-black flex p-1">
        <div className="mainLineContainer flex">
          <div className="calendarContainer border border-black m-1">
            <Calendar
              onClickDay={setValue}
              value={value}
              tileDisabled={tileDisabled}
            />
            <button
              className="calendarButton border border-black w-full"
              onClick={checkReservation}
              disabled={isReservation}
            >
              확정
            </button>
          </div>
          {isReservation ? (
            <div className="menuContainer items-center justify-center border border-black w-full h-full m-1">
              <div className="menuHeader">
                <h1>메뉴판</h1>
              </div>
              <div className="menuListBox flex">
                <div className="appetizers border border-black w-full h-full m-1 p-2">
                  <div className="categoryTitle m-2">
                    <h3>에피타이저</h3>
                  </div>
                  {getMenuItemsByCategory("appetizers").map((item) => (
                    <div
                      className="foods border border-black p-2 m-2"
                      key={item.name}
                    >
                      <div className="name">{item.name}</div>
                      <div className="price">{item.price}</div>
                      <div className="countBox">
                        <label htmlFor={item.name}>개수</label>
                        <input
                          type="number"
                          className="border border-black m-1"
                          name={item.name}
                          min={0}
                          max={20}
                          onChange={(e) =>
                            handleQuantityChange(item.name, e.target.value)
                          }
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mains border border-black w-full h-full m-1">
                  <div className="categoryTitle m-2">
                    <h3>메인</h3>
                  </div>
                  {getMenuItemsByCategory("mains").map((item) => (
                    <div
                      className="foods border border-black p-2 m-2"
                      key={item.name}
                    >
                      <div className="name">{item.name}</div>
                      <div className="price">{item.price}</div>
                      <div className="countBox">
                        <label htmlFor={item.name}>개수</label>
                        <input
                          type="number"
                          className="border border-black m-1"
                          name={item.name}
                          min={0}
                          max={20}
                          onChange={(e) =>
                            handleQuantityChange(item.name, e.target.value)
                          }
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="desserts border border-black w-full h-full m-1">
                  <div className="categoryTitle m-2">
                    <h3>디저트</h3>
                  </div>
                  {getMenuItemsByCategory("desserts").map((item) => (
                    <div
                      className="foods border border-black p-2 m-2"
                      key={item.name}
                    >
                      <div className="name">{item.name}</div>
                      <div className="price">{item.price}</div>
                      <div className="countBox">
                        <label htmlFor={item.name}>개수</label>
                        <input
                          type="number"
                          className="border border-black m-1"
                          name={item.name}
                          min={0}
                          max={20}
                          onChange={(e) =>
                            handleQuantityChange(item.name, e.target.value)
                          }
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="drinks border border-black w-full h-full m-1">
                  <div className="categoryTitle m-2">
                    <h3>음료</h3>
                  </div>
                  {getMenuItemsByCategory("drinks").map((item) => (
                    <div
                      className="foods border border-black p-2 m-2"
                      key={item.name}
                    >
                      <div className="name">{item.name}</div>
                      <div className="price">{item.price}</div>
                      <div className="countBox">
                        <label htmlFor={item.name}>개수</label>
                        <input
                          type="number"
                          className="border border-black m-1"
                          name={item.name}
                          min={0}
                          max={20}
                          onChange={(e) =>
                            handleQuantityChange(item.name, e.target.value)
                          }
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="orderBox">
                <button
                  className="orderButton border border-black m-1 p-1"
                  onClick={handleOrder}
                >
                  주문하기
                </button>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        {isOrdered && orderedMenu && eventDiscount ? (
          <div className="resultContainer m-2 p-1 border border-black w-1/3">
            <div className="orderList">
              <h1>주문한 메뉴</h1>
              <div className="orderMenu">
                {orderedMenu.getOrderItems().map((item, index) => (
                  <p key={index}>{`${item.food}: ${item.count}개`}</p>
                ))}
              </div>
            </div>
            <div className="discountBox">
              <h1>할인내역</h1>
              <div className="defaultBox">
                <p>할인 금액: {eventDiscount.totalDiscount()}원</p>
                {eventDiscount.getGift() ? <p>선물: 샴페인</p> : null}
              </div>
            </div>
            <div className="finalOrderPrice">
              <h1>총 금액</h1>
              <div className="price">{eventDiscount.finalTotalPrice()}원</div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </main>
  );
};

export default WeekFour;
