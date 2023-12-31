# woowa-pre-use
우아한테크코스 프리코스 활용 레포지토리입니다. 각 주차 별로 생성된 미션을 매우 간단한 웹 프로젝트로 만들어봅니다.

## 기술스택
- React
- Next JS 13
- TailWindCSS

## 1주차 미션 - 숫자 야구 만들기
[자세한 내용](https://github.com/leeyulgok/javascript-baseball-6)
![1주차 이미지](public/1주차.png)

위의 사진과 같이 사용자가 값을 입력하면 strike와 ball에 따라 바뀌도록 만들었습니다.
자세한 코드는 components/WeekOne.tsx 를 보면 나와있습니다.

---
## 2주차 미션 - 자동차 경주 게임
[자세한 내용](https://github.com/leeyulgok/javascript-racingcar-6)
![2주차 이미지](public/2주차.png)

미션과 100% 똑같지는 않지만, 웹 프로그램은 다음과 같습니다.
1. 참가자 입력(최대 5명)
   - '+'버튼을 누르면 참가자를 입력하는 input 태그 생성
   - '확정' 버튼을 통해 참가자를 확정
2. 경주시작 버튼으로 게임 시작
   - 경주가 시작되면 115를 가장 먼저 채우는 쪽이 승리(가장 끝에서 끝)
   - 승리자가 alert로 표시됨

---
## 3주차 미션 - 로또
[자세한 내용](https://github.com/leeyulgok/javascript-lotto-6)
![3주차 이미지](public/3주차.png)

이번 페이지도 기존 미션과 크게 다르지 않습니다.
(예외처리는 진행하지 않았습니다.)

1. 최대 5개까지 로또 번호 입력
  - '+' 버튼을 통해 로또 입력 칸 생성
  - '확정' 버튼을 통해 로또 등록
2. 추첨시작 버튼으로 추첨
  - 당첨 번호 및 보너스 번호 생성
  - 당첨 금액이 있으면 당첨 금액 제시
    (추첨시작 버튼은 계속 누를 수 있으며 누를 때 마다 당첨 번호 변경)
---
## 4주차 미션 - 크리스마스 프로모션
[자세한 내용]([https://github.com/leeyulgok/javascript-lotto-6](https://github.com/leeyulgok/javascript-christmas-6-leeyulgok)https://github.com/leeyulgok/javascript-christmas-6-leeyulgok)
![4주차 이미지](public/4주차.png)

이번 페이지도 아주 간단하게만 진행했습니다.

1. 이용방법
  - 날짜 선택 후 확정
  - 주문 수량 선택 후 주문하기
  - 해당되는 할인 혜택 및 주문금액 랜더링

2. 할인 혜택
  - 기존과는 줄여서 작게만 시도.
  - 평일/주말/특별/추가할인 4가지 할인혜택
---
자세한 후기는 티스토리에 업로드 예정
