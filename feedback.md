## 2021. 1. 10.

- Class component에서 this 바인딩
- Component 별로 파일 나누기
- ES module의 import/export (default, named)
- Arrow function
- Function component
- prop, derived from prop, state
- React hook
- useState
- useEffect

숙제

- Prettier로 VSCode에서 저장할 때마다 자동으로 formatting 되도록 하기

## 2022. 1. 15.

- 복습
- install prettier locally and add .prettierc
- Create React App
  - https://levelup.gitconnected.com/what-does-create-react-app-actually-do-73c899443d61
  - Web Front-end project
  - webpack: bundle (App.js, Square.jsx, .. -> prod.min.js)
  - babel: transpile (recent js -> old/legacy js)
  - tsc: (.ts -> .js)
  - static type language (c, java, c++), dynamic type language (js, python)
- TypeScript
  - https://create-react-app.dev/docs/adding-typescript
    - typescript:
    - @types/\*: type definitions for js projects
  - [TypeScript: Handbook - The TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
  - `const {b: newB} = a`
  - primitive type, array, function
  - react event handler
  - types.ts
  - union type (|)

숙제

- 매일매일 코딩테스트 꾸준히 풀기 (하루에 1 ~ 2개)
  - 코딩테스트 완전분석 책 가져가기
  - Leetcode easy [Problems - LeetCode](https://leetcode.com/problemset/all/?difficulty=EASY&page=1)
  - 프로그래머스 lv1 https://programmers.co.kr/learn/challenges?tab=all_challenges (한글)
- MUI (Material UI): React UI (Component) Library
- React Router: https://create-react-app.dev/docs/adding-a-router

## 2022. 1. 23.

## 2022. 2. 5.

- toggle button 동작, 스타일 수정
- 컴포넌트 이름
- 변수 이름
  - 소문자로 시작. array는 s 추가
- 파일 구조
  - https://create-react-app.dev/docs/importing-a-component/#absolute-imports
- MobX (State Management Library (Redux, Recoil))
  - https://ko.mobx.js.org/README.html
  - MobX, mobx-react-lite (함수형 컴포넌트만 지원) / mobx-react (클래스 컴포넌트도 지원)
  - 사용하지 않을 때의 문제점 1) prop drilling (사실 React Context API로 해결 가능), 2) inefficient rendering
- index.ts
  파일 위치 변경시 수정해야 하므로 사용하는것을 추천하지 않음

숙제

- emotion과 같은 CSS in JS 라이브러리의 장점?
- MobX 공부
- prisma로 백엔드 만들어보기
