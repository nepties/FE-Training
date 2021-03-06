import { EquipmentInfo } from "types/types";

const sampleEquipmentDatas: EquipmentInfo[] = [
  {
    prefix: "haniwaSpear",
    element: "fire",
    rarity: "5",
    name: "하니크레토스",
    hp: { min: 146, max: 358 },
    atk: { min: 218, max: 536 },
    basic: [
      "[기본]",
      "파티에 화속성 캐릭터를 6개 편성했을 때, 자신의 공격력+65%",
    ],
    max: [
      "[MAX]",
      "파티에 화속성 캐릭터를 6개 편성했을 때, 자신의 공격력+130%",
    ],
    awaken: [
      "각성 Lv3 : 파티에 화속성 캐릭터를 6개 편성했을 때, 관통 효과 중, 자신의 공격력+90%",
      "각성 Lv5 : 파티에 화속성 캐릭터를 6개 편성했을 때, 관통 효과 중, 자신의 공격력+180%",
    ],
    obtain: ["하니와 카니발 보상"],
    gacha: "nonGacha",
  },
  {
    prefix: "beastSword",
    element: "water",
    rarity: "5",
    name: "물망의 죄검",
    hp: { min: 269, max: 403 },
    atk: { min: 154, max: 230 },
    basic: [
      "[기본]",
      "자신이 수속성 캐릭터일 때, 자신의 스킬 데미지+30%",
      "자신이 수속성 캐릭터일 때, 자신이 스킬을 발동할 때마다, 자신의 스킬 데미지+30% [최대+90%]",
    ],
    max: [
      "[MAX]",
      "자신이 수속성 캐릭터일 때, 자신의 스킬 데미지+60%",
      "자신이 수속성 캐릭터일 때, 자신이 스킬을 발동할 때마다, 자신의 스킬 데미지+60% [최대+180%]",
    ],
    obtain: ["스토리 이벤트 「백수의 왕관」"],
    gacha: "nonGacha",
  },
];

export default sampleEquipmentDatas;
