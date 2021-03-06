import { CharacterInfo } from "types/types";

const sampleCharacterDatas: CharacterInfo[] = [
  {
    prefix: "misogi",
    element: "fire",
    rarity: "5",
    name: "미소기",
    flipType: "special",
    class: "debuffer",
    gender: "female",
    race: ["human"],
    rating: 2.25,
    board2: false,
    skill: {
      name: "트릭 보머",
      weight: 400,
      text: [
        "전방에 폭탄을 던져 명중한 적에게 화속성 데미지 + 공격력 다운 효과",
      ],
      effect: "x18 6hit, 공격력-30% (30s)",
    },
    leader: {
      name: "트랩 엑스퍼트",
      text: [
        "화속성 캐릭터의 공격력+50% & 풍속성 내성+15%",
        "자신이 스킬을 발동할 때마다, 화속성 캐릭터의 공격력+30% [최대+90%]",
      ],
    },
    ability1: [
      "화속성 캐릭터의 풍속성 내성+15%",
      "자신이 스킬을 발동할 때마다, 화속성 캐릭터의 풍속성 내성+5% [최대+10%]",
    ],
    ability2: [
      "1체의 적의 약화 효과 1개당, 화속성 캐릭터의 그 적에 대한 공격력+16% [최대+80%]",
    ],
    ability3: [
      "메인 캐릭터로 편성 시, 배틀 시작 시, 자신의 스킬 게이지+100% & 『트릭 보머』에 「명중한 적에게 화속성 내성 다운 효과」를 추가",
      "메인 캐릭터로 편성 시, 자신이 스킬을 발동할 때마다, 화속성 캐릭터의 풍속성 내성+5% [최대+10%]",
      "메인 캐릭터로 편성 시, 1체의 적의 약화 효과 1개당, 화속성 캐릭터의 그 적에 대한 공격력+12% [최대+60%]",
    ],
    obtain: "normal",
  },

  {
    prefix: "marina3",
    element: "fire",
    rarity: "5",
    name: "마리나(2주년)",
    flipType: "sword",
    class: "attacker",
    gender: "female",
    race: ["human"],
    rating: 4.96,
    board2: false,
    skill: {
      name: "시스템 스타워커",
      weight: 570,
      text: [
        "전방에 레이저포를 일제 소사하면서 폭풍과 같이 베어 명중한 적에게 화속성 데미지 / 화속성 캐릭터에 스킬 데미지 업 효과",
      ],
      effect: "",
    },
    leader: {
      name: "내가 우리편이야!!",
      text: [
        "화속성 캐릭터 전원의 스킬 데미지 합계 +100% 당, 화속성 캐릭터의 공격력+10% [최대+200%]",
        "파티에 화속성 캐릭터를 6개 편성했을 때, 파워 플립 할 때마다, 화속성 캐릭터의 스킬 게이지+10% (CT: 15초)",
      ],
    },
    ability1: [
      "메인 캐릭터로 편성 시,화속성 캐릭터 전원의 스킬 데미지 합계 +100% 당, 자신의 공격력+150%",
    ],
    ability2: [
      "메인 캐릭터로 편성 시, 배틀 시작 시, 자신의 스킬 게이지+100%",
      "메인 캐릭터로 편성 시, 화속성 캐릭터가 스킬을 발동할 때마다, 자신의 스킬 데미지+10% [최대+120%]",
    ],
    ability3: [
      "메인 캐릭터로 편성 시, 화속성 캐릭터가 스킬을 발동할 때마다, 그 캐릭터의 스킬 데미지+37.5% [최대+150%]",
    ],
    obtain: "limited",
  },
  {
    prefix: "amelia2",
    element: "water",
    rarity: "5",
    name: "아멜리아(1.5주년)",
    flipType: "shooting",
    class: "attacker",
    gender: "female",
    race: ["human", "water"],
    rating: 4.63,
    board2: true,
    skill: {
      name: "머메이드 러쉬",
      weight: 450,
      text: [
        "가장 가까운 적을 향해 기관총을 난사하여 명중한 적에게 수속성 데미지 / 파워 플립 데미지 업 효과",
      ],
      effect: "",
    },
    leader: {
      name: "어디든 갈 수 있어!",
      text: [
        "수속성 캐릭터의 공격력+80% ",
        "파티에 수속성 캐릭터를 6개 편성했을 때, 배틀 시작 시, 피버 게이지+1500 ",
        "파티에 수속성 캐릭터를 6개 편성했을 때, 피버할 때마다, 9번 플립할 때까지 콤보 부스트 효과 [콤보+10]",
      ],
    },
    ability1: [
      "메인 캐릭터로 편성 시, 피버할 때마다, 자신의 공격력+40% [최대+120%] & 파워 플립 데미지+20% [최대+60%]",
    ],
    ability2: [
      "메인 캐릭터로 편성 시, 걸려 있는 컨디션에 의한 파워 플립 데미지 업 효과 1개당, 자신의 공격력+25% [최대+125%]",
    ],
    ability3: [
      "메인 캐릭터로 편성 시, 피버할 때마다, 20초간 자신의 공격력+100% & 파워 플립 데미지+75%",
    ],
    ability4: ["피버할 때마다, 자신의 공격력+20% [최대+60%]"],
    ability5: ["피버할 때마다, 20초간 자신의 공격력+45%"],
    ability6: ["피버할 때마다, 20초간 파워 플립 데미지+30%"],
    obtain: "limited",
  },
  {
    prefix: "suizen",
    element: "water",
    rarity: "5",
    name: "스이젠",
    flipType: "support",
    class: "debuffer",
    gender: "male",
    race: ["human", "yokai"],
    rating: 2.3,
    board2: true,
    skill: {
      name: "자수충독과 같도다",
      weight: 600,
      text: [
        "자신의 주변에 저주의 마법진을 펼쳐 잠시동안 다가온 적에게 수속성 데미지 + 독 효과 ",
      ],
      effect: "x1.75, 독뎀7500 (40s)",
    },
    leader: {
      name: "천지음양의 이치",
      text: ["수속성 캐릭터의 최대 HP+40% & 공격력+40%"],
    },
    ability1: ["자신의 HP+20%"],
    ability2: ["독 효과중인 적에 대한 수속성 캐릭터의 공격력+50%"],
    ability3: [
      "메인 캐릭터로 편성 시, 수속성 캐릭터가 독 효과중인 적에게 주는 데미지+25%",
    ],
    ability4: ["독 효과중인 적에게 수속성 캐릭터가 받는 데미지 5% 감소"],
    ability5: ["수속성 캐릭터가 독 효과중인 적에게 주는 직접공격 데미지+30%"],
    ability6: ["수속성 캐릭터가 독 효과중인 적에게 주는 데미지+7.5%"],
    obtain: "normal",
  },
  {
    prefix: "silty",
    element: "wind",
    rarity: "5",
    name: "실티",
    flipType: "sword",
    class: "attacker",
    gender: "female",
    race: ["human"],
    rating: 4.39,
    board2: true,
    skill: {
      name: "엔릴 해방",
      weight: 340,
      text: [
        "질풍같은 검놀림으로 전방과 후방의 적에게 풍속성 데미지 [콤보 수에 따라 데미지 업]",
      ],
      effect: "x21, 콤보당+0.5%",
    },
    leader: {
      name: "사디아의 긍지",
      text: [
        "10콤보 이상인 동안 풍속성 캐릭터의 공격력+85% / 풍속성 캐릭터의 공격력+80%",
      ],
    },
    ability1: ["자신의 공격력+55%"],
    ability2: ["10콤보 이상인 동안 자신의 공격력+80%"],
    ability3: [
      "메인 캐릭터로 편성 시, 자신에게 연격 효과 [2회 / 합계 데미지+20%]",
    ],
    ability4: ["10콤보 이상인 동안, 자신의 공격력+40%"],
    ability5: [
      "풍속성 캐릭터가 스킬을 발동할 때마다, 콤보+5 / 자신의 스킬 데미지+10%",
    ],
    ability6: [
      "200회 직접공격할 때마다, 60초간 자신에게 연격 효과 [3회 / 합계 데미지+60%]",
    ],
    obtain: "normal",
  },
  {
    prefix: "sera2",
    element: "thunder",
    rarity: "5",
    name: "세라(수영복)",
    flipType: "shooting",
    class: "attacker",
    gender: "female",
    race: ["human", "machine"],
    rating: 4.0,
    board2: false,
    skill: {
      name: "퍼레이디엄 블라스트",
      weight: 490,
      text: [
        "전방을 향해 바이크에서 미사일을 연사하여, 그 주위의 적에게 번개 데미지",
        "발사 시, 피버 중이 아닌 경우, 추가로 피버게이지 업",
        "발사 시, 피버 중인 경우, 스킬의 위력 업",
      ],
      effect: "",
    },
    leader: {
      name: "대해적용 신식경호배치",
      text: [
        "뇌속성 캐릭터의 공격력+60%",
        "피버할 때마다, 뇌속성 캐릭터의 공격력+30% [최대+90%]",
        "피버가 종료될 때마다, 피버게이지+300",
      ],
    },
    ability1: [
      "배틀 시작 시, 자신의 스킬게이지+50%",
      "피버할 때마다, 뇌속성 캐릭터의 공격력+10% [최대+30%]",
    ],
    ability2: ["피버할 때마다, 뇌속성 캐릭터의 스킬 데미지+30% [최대+90%]"],
    ability3: [
      "메인 캐릭터로 편성 시, 피버할 때마다, 뇌속성 캐릭터의 공격력+40% [최대+120%] & 스킬 게이지+20%",
    ],
    obtain: "limited",
  },
  {
    prefix: "bulleta",
    element: "light",
    rarity: "5",
    name: "바렛타",
    flipType: "shooting",
    class: "supporter",
    gender: "female",
    race: ["human", "machine"],
    rating: 4.95,
    board2: true,
    skill: {
      name: "HEAVENS TORCH",
      weight: 460,
      text: [
        "에너지 포를 충전하고, 전방으로 빔을 쏘아 명중한 적에게 광속성 데미지 / 파워 플립 데미지 업 효과",
      ],
      effect: "x18 30hit, 파워 플립+100% (20s)",
    },
    leader: {
      name: "Way of Life",
      text: ["광속성 캐릭터의 공격력+100% / 파워 플립 데미지+70%"],
    },
    ability1: [
      "자신이 HP 80% 이상인 동안 파워 플립 데미지+50% / 자신이 리더일 때, 자신의 공격력+30%",
    ],
    ability2: [
      "20콤보 할 때마다 10초간 파워 플립 데미지+50% & 플립 때까지 관통 효과",
    ],
    ability3: [
      "메인 캐릭터로 편성 시, 40콤보 할 때마다 10초간 파워 플립 데미지+250%",
    ],
    ability4: ["자신의 공격력+20% / 자신이 리더일 때, 자신의 공격력+20%"],
    ability5: [
      "자신이 광속성 캐릭터일 때, 5회 플립할 때마다, 콤보+5 (CT: 10초) / 자신의 공격력+10%",
    ],
    ability6: [
      "자신이 광속성 캐릭터일 때, 5회 파워 플립 Lv2 를 발동할 때마다, 콤보+40 (CT: 20초)",
    ],
    obtain: "normal",
  },
  {
    prefix: "love2",
    element: "dark",
    rarity: "5",
    name: "라브(할로윈)",
    flipType: "sword",
    class: "attacker",
    gender: "female",
    race: ["human", "machine"],
    rating: 4.39,
    board2: false,
    skill: {
      name: "자율기구 레퀴엠",
      weight: 550,
      text: [
        "가장 가까운 적을 향해 돌진하여, 적과 접촉했을 때, 혹은 일정 시간이 경과했을 때, 자신의 주위를 낫으로 베어 암속성 데미지 / 파티 전체의 스킬 데미지 업 효과",
      ],
      effect: "",
    },
    leader: {
      name: "미숙해도 한걸음씩",
      text: [
        "암속성 캐릭터의 공격력+50%",
        "암속성 캐릭터가 스킬을 발동할 때마다, 그 캐릭터의 스킬 데미지+40%",
        "파티에 암속성 캐릭터를 6개 편성했을 때, 암속성 캐릭터가 스킬을 발동할 때마다, 그 캐릭터의 스킬 차지 속도+5% [최대+15%]",
      ],
    },
    ability1: ["배틀 시작 시, 자신의 스킬 게이지+100%"],
    ability2: [
      "자신이 스킬을 발동할 때마다, 자신의 스킬 데미지+50% [최대+200%]",
    ],
    ability3: [
      "메인 캐릭터로 편성 시, 자신이 스킬을 발동할 때마다, 암속성 캐릭터의 스킬 데미지+30% [최대+120%]",
      "메인 캐릭터로 편성 시, 파티에 암속성 캐릭터를 6개 편성했을 때, 자신이 스킬을 발동할 때마다, 자신의 스킬 차지 속도+4% [최대+16%]",
    ],
    obtain: "limited",
  },
  {
    prefix: "hanabi",
    element: "fire",
    rarity: "4",
    name: "하나비",
    flipType: "fighter",
    class: "balance",
    gender: "female",
    race: ["human"],
    rating: 4.7,
    board2: true,
    skill: {
      name: "붉은모란",
      weight: 290,
      text: ["특제 폭탄을 꺼내어 부딪친 적과 그 주위의 적에게 화속성 데미지"],
      effect: "x4.62, 멀티볼 5개",
    },
    leader: {
      name: "시노비의 비법",
      text: ["배틀 시작 시 화속성 캐릭터의 공격력+30% & 스킬 게이지+100%"],
    },
    ability1: ["30콤보 할 때마다 자신의 공격력+12% [최대+60%]"],
    ability2: [
      "20번 공을 플립 할 때마다 총 5회까지 화속성 캐릭터 최대 HP의 3%회복",
    ],
    ability3: [
      "메인 캐릭터로 편성 시, 자신이 스킬을 발동할 때, 10초간 자신에게 연격 효과 [2회 / 합계 데미지+40%]",
    ],
    ability4: ["5회 대시 할 때마다, 자신의 스킬 게이지+5% (CT: 20초)"],
    ability5: ["20회 직접공격 할 때마다, 자신의 스킬 데미지+5% [최대+50%]"],
    ability6: [
      "스킬 게이지가 어빌리티나 스킬의 효과로 인해 증가 할 때마다, 자신의 스킬 데미지+5% [최대+60%]",
    ],
    obtain: "normal",
  },
  {
    prefix: "soties",
    element: "water",
    rarity: "4",
    name: "소티에스",
    flipType: "shooting",
    class: "supporter",
    gender: "female",
    race: ["human"],
    rating: 3.75,
    board2: true,
    skill: {
      name: "애드 움",
      weight: 520,
      text: [
        "알터 디바이스 포격으로 필드 전체에 수속성 데미지 (약점 파괴 없음) / 파티 전체에 공격력 업 효과",
      ],
      effect: "x12+? 3hit, 공격력+50% (20s)",
    },
    leader: {
      name: "계승된 소원",
      text: ["수속성 캐릭터의 공격력+50% / 파워 플립 데미지+95%"],
    },
    ability1: ["피버할 때마다, 20초간 파워 플립 데미지+100%"],
    ability2: [
      "파워 플립 데미지 업 효과 시간+7.5% / 수속성 캐릭터의 공격력 업 효과 시간+7.5%",
    ],
    ability3: [
      "메인 캐릭터로 편성 시, 피버할 때마다, 20초간 파워 플립 데미지+100% & 9회 플립할 때까지 콤보 부스트 효과 [콤보+6]",
    ],
    ability4: ["배틀 시작 시, 자신의 스킬 게이지+35%"],
    ability5: ["피버중이 아닌 경우, 10회 파워 플립 할 떄마다, 피버 게이지+20"],
    ability6: ["피버할 때마다, 10초간 파워 플립 데미지+50%"],
    obtain: "etc",
  },
  {
    prefix: "midi",
    element: "wind",
    rarity: "4",
    name: "미디",
    flipType: "sword",
    class: "attacker",
    gender: "female",
    race: ["human", "machine"],
    rating: "-",
    board2: true,
    skill: {
      name: "인젝션 스톰",
      weight: 550,
      text: [
        "가장 가까운 적에게 공을 날려 명중한 적에게 풍속성 데미지 / 아군에게 스피드 업 효과",
      ],
      effect: "x16 12hit, 스피드업+20% (12s)",
    },
    leader: {
      name: "트라이 허리케인",
      text: [
        "풍속성 캐릭터의 공격력+50% / 10 콤보 이상인 동안, 풍속성 캐릭터의 직접공격 데미지+120%",
      ],
    },
    ability1: ["10회 대시 할 때마다, 자신의 직접공격 데미지+37.5% [최대+150%]"],
    ability2: [
      "자신이 스킬을 발동할 때마다, 자신의 직접공격 데미지+40% [최대+160%]",
    ],
    ability3: [
      "메인 캐릭터로 편성 시, 스피드 업 효과 중, 풍속성 캐릭터의 공격력+80%",
    ],
    ability4: ["배틀 시작 시, 자신의 스킬 게이지+35%"],
    ability5: ["10회 대시할 때마다, 자신의 직접공격 데미지+12.5% [최대+50%]"],
    ability6: ["10회 대시할 때마다, 자신의 직접공격 데미지+12.5% [최대+50%]"],
    obtain: "normal",
  },
  {
    prefix: "rhams",
    element: "thunder",
    rarity: "4",
    name: "람스",
    flipType: "special",
    class: "attacker",
    gender: "female",
    race: ["dragon"],
    rating: 4.0,
    board2: true,
    skill: {
      name: "토르해머",
      weight: 390,
      text: [
        "가장 가까운 적에게 낙뢰를 떨어뜨리고, 그 주위의 적에게 뇌속성 데미지 [마비 효과중인 적에게의 데미지 업]",
      ],
      effect: "x22.5, 마비+25%",
    },
    leader: {
      name: "공존의 꿈",
      text: ["뇌속성 캐릭터의 스킬 데미지+150%"],
    },
    ability1: ["자신의 스킬 데미지+50%"],
    ability2: [
      "자신이 스킬을 발동 할 때마다, 자신의 스킬 데미지+30% [최대+120%]",
    ],
    ability3: [
      "메인 캐릭터로 편성 시, 자신이 스킬을 발동 할 때마다 파티 전체의 스킬 데미지+30% [최대+120%]",
    ],
    ability4: ["자신의 스킬 데미지+40%"],
    ability5: ["배틀 시작 시, 자신의 스킬 게이지+35%"],
    ability6: [
      "파티에 뇌속성 캐릭터를 6명 이상 편성했을 때, 2회 스킬을 발동 시, 한 번만 자신의 스킬 게이지+40%",
    ],
    obtain: "normal",
  },
  {
    prefix: "dear",
    element: "light",
    rarity: "4",
    name: "디아",
    flipType: "support",
    class: "supporter",
    gender: "female",
    race: ["human", "machine"],
    rating: 4.0,
    board2: true,
    skill: {
      name: "♪『플립 히어로즈』",
      weight: 490,
      text: [
        "마음을 담은 노래의 힘으로 참전자 전원에게 공격력 업 효과 / 피버 게이지 증가",
      ],
      effect: "피버+45+?, 공격력+75%, 20s",
    },
    leader: {
      name: "♪'Lullaby for salvation'",
      text: [
        "광속성 캐릭터의 공격력+40% / 피버 중 광속성 캐릭터의 공격력+100%",
      ],
    },

    ability1: ["피버 모드 시간+15%"],
    ability2: ["피버 중 파티 전체의 공격력+35%"],
    ability3: [
      "메인 캐릭터로 편성 시, 피버할 때마다 5초간 광속성 캐릭터에 재생 효과 [효과 180회복]",
      "메인 캐릭터로 편성 시, 피버 중, 광속성 캐릭터의 공격력+30%",
    ],
    ability4: ["배틀 시작 시, 자신의 스킬 게이지+35%"],
    ability5: ["피버 중, 파티 전체의 공격력+15%"],
    ability6: ["피버 중, 파티 전체의 직접공격 데미지+30%"],
    obtain: "etc",
  },
  {
    prefix: "eliya",
    element: "light",
    rarity: "4",
    name: "에리야",
    flipType: "shooting",
    class: "attacker",
    gender: "female",
    race: ["human", "spirit"],
    rating: 4.59,
    board2: true,
    skill: {
      name: "루미너스 스플래시",
      weight: 420,
      text: [
        "자신의 정면에 부채꼴로 광탄을 날려 명중한 적에게 광속성 데미지 [자신의 강화 효과 수에 따라 데미지 업] / 자신의 HP를 회복 [정령 종족에 효과 업]",
      ],
      effect: "x27.9 13hit, 버프 개당+10%, 회복 6% (정령 9%)",
    },
    leader: {
      name: "정열과 광채",
      text: ["광속성 캐릭터의 스킬 데미지+150%"],
    },

    ability1: [
      "자신이 스킬을 발동할 때 자신의 공격력+5% [최대+25%] & 스킬 게이지+10%",
    ],
    ability2: ["자신이 HP를 회복할 때마다 자신의 스킬 데미지+18% [최대+90%]"],
    ability3: [
      "메인 캐릭터로 편성 시, 광속성 캐릭터가 스킬을 발동할 때마다 자신의 스킬 데미지+12% [최대+60%] & 자신의 스킬 게이지+10%",
    ],
    ability4: ["자신의 스킬 데미지+35%"],
    ability5: ["배틀 시작 시, 자신의 스킬 게이지+35%"],
    ability6: ["스킬을 발동할 때마다, 총 10회까지 자신의 최대 HP의 3% 회복"],
    obtain: "normal",
  },
  {
    prefix: "arly2",
    element: "dark",
    rarity: "4",
    name: "아리(1주년)",
    flipType: "fighter",
    class: "attacker",
    gender: "female",
    race: ["demon"],
    rating: 3.83,
    board2: true,
    skill: {
      name: "소울 리퍼 스쿼드",
      weight: 470,
      text: [
        "가장 가까운 적을 향해 돌진하여, 최초 접촉한 적에게 마조각을 이용한 신격으로 암속성 데미지 / 발동 시 자신의 HP가 30% 미만이면, 공격이 히트할 경우 추가로 파티 전체의 HP를 회복 [암속성 캐릭터에 효과 업]",
      ],
      effect: "x20 12hit, 회복 6% (암속성 9%)",
    },
    leader: {
      name: "새로운 걸음",
      text: [
        "암속성 캐릭터의 공격력+60% ",
        "파티 캐릭터 전원이 HP 이하인 동안, 암속성 캐릭터의 공격력+90%",
      ],
    },

    ability1: [
      "남은 HP가 적을수록 공격력 업 [최대 HP에서 1% 감소할 때마다 자신의 공격력+0.8% [최대+80%]]",
    ],
    ability2: [
      "파티 캐릭터 전원이 HP 50% 이하인 동안, 암속성 캐릭터의 공격력+30% / 배틀 시작 시, 암속성 캐릭터에 HP의 10%의 데미지",
    ],
    ability3: [
      "메인 캐릭터로 편성 시, 암속성 캐릭터의 남은 HP가 적을수록 공격력 증가 [최대 HP에서 1% 감소할 때마다, 그 캐릭터의 공격력+0.6% [최대+60%]]",
      "메인 캐릭터로 편성 시, 암속성 캐릭터가 HP 50% 이상인 동안, 암속성 캐릭터가 스킬을 발동할 때마다, 그 캐릭터에 최대 HP의 5% 데미지",
    ],
    ability4: [
      "파티 캐릭터 전원의 HP가 50% 이하인 동안, 암속성 캐릭터의 공격력+20%",
    ],
    ability5: [
      "파티 캐릭터 전원의 HP가 50% 이하인 동안, 암속성 캐릭터의 전속성 내성+10%",
    ],
    ability6: [
      "자신이 암속성 캐릭터일 때, 자신의 HP가 30% 이하가 되었을 때, 한 번만 자신의 스킬 게이지+40%",
    ],
    obtain: "limited",
  },
  {
    prefix: "foura",
    element: "thunder",
    rarity: "3",
    name: "포우라",
    flipType: "support",
    class: "healer",
    gender: "female",
    race: ["human"],
    rating: 3.57,
    board2: true,
    skill: {
      name: "발리언트 비전",
      weight: 550,
      text: [
        "점술의 힘으로 참전자 전원의 HP를 회복 [뇌속성 캐릭터에 효과 업] / 파티 전체에 재생 효과",
      ],
      effect: "회복 6% (뇌 9%), 재생90 (10s=5틱)",
    },
    leader: {
      name: "수정 구슬의 인도",
      text: ["뇌속성 캐릭터의 공격력+15% & 받는 회복량+18%"],
    },

    ability1: ["뇌속성 캐릭터의 HP+6%"],
    ability2: ["뇌속성 캐릭터가 받는 회복량+8%"],
    ability3: [
      "메인 캐릭터로 편성 시, 뇌속성 캐릭터가 HP를 회복할 때마다 그 캐릭터의 공격력+5% [최대+50%]",
    ],
    ability4: ["뇌속성 캐릭터의 HP+3%"],
    ability5: [
      "뇌속성 캐릭터의 HP가 회복될 때마다, 그 캐릭터의 수속성 내성+0.5% [최대+5%]",
    ],
    ability6: [
      "뇌속성 캐릭터의 HP가 회복될 때마다, 그 캐릭터의 공격력+1% [최대+10%]",
    ],
    obtain: "normal",
  },
  {
    prefix: "jalil",
    element: "dark",
    rarity: "3",
    name: "자릴",
    flipType: "shooting",
    class: "debuffer",
    gender: "male",
    race: ["human"],
    rating: 3.33,
    board2: true,
    skill: {
      name: "카말 시프라",
      weight: 420,
      text: [
        "전방위에 차크람을 던져 명중한 적에게 암흑 데미지 + 암속성 내성 다운 효과",
      ],
      effect: "x33.75 15hit, 내성-20% (15s)",
    },
    leader: {
      name: "사월의 비기",
      text: ["배틀 시작 시 암속성 캐릭터의 스킬 데미지+60% & 스킬 게이지+20%"],
    },

    ability1: ["자신의 공격력+20%"],
    ability2: ["자신이 스킬을 발동할 때마다 자신의 공격력+15% [최대+45%]"],
    ability3: [
      "메인 캐릭터로 편성 시, 배틀 시작 시 자신의 스킬 데미지+20% & 스킬 게이지+100%",
    ],
    ability4: ["자신의 공격력+15%"],
    ability5: ["배틀 시작 시, 자신의 스킬 게이지+25%"],
    ability6: ["자신의 스킬 게이지 최대치+10%"],
    obtain: "normal",
  },
  {
    prefix: "posit",
    element: "wind",
    rarity: "2",
    name: "포지트",
    flipType: "support",
    class: "supporter",
    gender: "male",
    race: ["beast"],
    rating: 4.91,
    board2: false,
    skill: {
      name: "오울 블라스트",
      weight: 550,
      text: [
        "아군에 부유 효과 / 참전자 전원에게 공격력 업 + 스킬 데미지 업 효과",
      ],
      effect: "부유 9s, 공격력+40%, 스킬뎀+70%, 15s",
    },
    leader: {
      name: "없음",
      text: ["-"],
    },
    ability1: ["부유 효과 중, 파티 전체의 공격력+15%"],
    ability2: ["파티 전체의 부유 효과 시간+20%"],
    ability3: ["없음"],
    obtain: "etc",
  },
];

export default sampleCharacterDatas;
