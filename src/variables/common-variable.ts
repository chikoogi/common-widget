export const PLATFORM_NAME = {
  NETFLIX: "Netflix",
  DISNEY_PLUS: "Disney+",
  APPLE_TV: "Apple TV",
  WAVVE: "Wavve",
  WATCHA: "Watcha",
};

export const PLATFORM_ID = {
  NETFLIX: 8,
  DISNEY_PLUS: 337,
  APPLE_TV: 350,
  WAVVE: 356,
  WATCHA: 97,
};

export const PLATFORM_ID_NAME = {
  [PLATFORM_ID.NETFLIX]: PLATFORM_NAME.NETFLIX,
  [PLATFORM_ID.DISNEY_PLUS]: PLATFORM_NAME.DISNEY_PLUS,
  [PLATFORM_ID.APPLE_TV]: PLATFORM_NAME.APPLE_TV,
  [PLATFORM_ID.WAVVE]: PLATFORM_NAME.WAVVE,
  [PLATFORM_ID.WATCHA]: PLATFORM_NAME.WATCHA,
} as const;

export const WATCH_RATING_NAME = {
  ALL: "전체관람가",
  TWELVE: "12세",
  FIFTEEN: "15세",
  NINETEEN: "19+",
};

export const WATCH_RATING_ID = {
  ALL: "ALL",
  TWELVE: "12",
  FIFTEEN: "15",
  NINETEEN: "19",
};

export const WATCH_RATING_ID_NAME = {
  [WATCH_RATING_ID.ALL]: WATCH_RATING_NAME.ALL,
  [WATCH_RATING_ID.TWELVE]: WATCH_RATING_NAME.TWELVE,
  [WATCH_RATING_ID.FIFTEEN]: WATCH_RATING_NAME.FIFTEEN,
  [WATCH_RATING_ID.NINETEEN]: WATCH_RATING_NAME.NINETEEN,
};

export const GENRE_ID = {
  ACTION_ADVENTURE: 10759,
  COMEDY: 35,
  ANIMATION: 16,
  CRIME: 80,
  DOCUMENTARY: 99,
  DRAMA: 18,
  FAMILY: 10751,
  KIDS: 10762,
  MYSTERY: 9648,
  NEWS: 10763,
  REALITY: 10764,
  SF: 10765,
  SOAP: 10766,
  TALK: 10767,
  WAR_POLITICS: 10768,
  WESTERN: 37,
};

export const GENRE_NAME = {
  ACTION_ADVENTURE: "액션 & 어드벤쳐",
  COMEDY: "코미디",
  ANIMATION: "애니메이션",
  CRIME: "범죄",
  DOCUMENTARY: "다큐멘터리",
  DRAMA: "드라마",
  FAMILY: "가족",
  KIDS: "키즈",
  MYSTERY: "미스테리",
  NEWS: "뉴스",
  REALITY: "리얼리티",
  SF: "SF, 판타지",
  SOAP: "연속극",
  TALK: "토크",
  WAR_POLITICS: "전쟁, 정치",
  WESTERN: "서부",
};

export const GENRE_ID_NAME = {
  [GENRE_ID.ACTION_ADVENTURE]: [GENRE_NAME.ACTION_ADVENTURE],
  [GENRE_ID.COMEDY]: [GENRE_NAME.COMEDY],
  [GENRE_ID.ANIMATION]: [GENRE_NAME.ANIMATION],
  [GENRE_ID.CRIME]: [GENRE_NAME.CRIME],
  [GENRE_ID.DOCUMENTARY]: [GENRE_NAME.DOCUMENTARY],
  [GENRE_ID.DRAMA]: [GENRE_NAME.DRAMA],
  [GENRE_ID.FAMILY]: [GENRE_NAME.FAMILY],
  [GENRE_ID.KIDS]: [GENRE_NAME.KIDS],
  [GENRE_ID.MYSTERY]: [GENRE_NAME.MYSTERY],
  [GENRE_ID.NEWS]: [GENRE_NAME.NEWS],
  [GENRE_ID.REALITY]: [GENRE_NAME.REALITY],
  [GENRE_ID.SF]: [GENRE_NAME.SF],
  [GENRE_ID.SOAP]: [GENRE_NAME.SOAP],
  [GENRE_ID.TALK]: [GENRE_NAME.TALK],
  [GENRE_ID.WAR_POLITICS]: [GENRE_NAME.WAR_POLITICS],
  [GENRE_ID.WESTERN]: [GENRE_NAME.WESTERN],
};

export const FILTER_SORT_ID = {
  FAVORITE_SORT: "popularity",
  RECENTLY: "new",
  RATING_SORT: "rating",
  NAME_SORT: "name",
};

export const FILTER_SORT_ID_NAME = {
  [FILTER_SORT_ID.FAVORITE_SORT]: "인기 순",
  [FILTER_SORT_ID.RECENTLY]: "최신 공개 순",
  [FILTER_SORT_ID.RATING_SORT]: "제목 순",
  [FILTER_SORT_ID.NAME_SORT]: "별점 순",
};

export const DUMMY_CONTENT = {
  actors: ["1", "2"],
  age: "19",
  genre: [1, 2, 3],
  id: "1",
  name: "1",
  platform: [1, 2, 3],
  poster: "fSFDsj4ch7rZBberDouL7Ucab1F.jpg",
  synopsis:
    "쓸쓸한 어둠이 드리웠던 비극의 시대, 1945년 봄. 생존이 전부였던 두 청춘이 인간의 탐욕으로 탄생한 괴물들과 사투를 벌인다.",
  trailer: "EtaV2rM80D8",
  date: "2023",
};

export const DUMMY_CONTENT2 = {
  actors: ["1", "2"],
  age: "19",
  genre: [1, 2, 3],
  id: "2",
  name: "2",
  platform: [1, 2, 3],
  poster: "tKUTpdyg0wGfIYplIAfkN6hDbRw.jpg",
  synopsis:
    "쓸쓸한 어둠이 드리웠던 비극의 시대, 1945년 봄. 생존이 전부였던 두 청춘이 인간의 탐욕으로 탄생한 괴물들과 사투를 벌인다.",
  trailer: "EtaV2rM80D8",
  date: "2023",
};

export const DUMMY_CONTENT3 = {
  actors: ["1", "2"],
  age: "19",
  genre: [1, 2, 3],
  id: "3",
  name: "3",
  platform: [1, 2, 3],
  poster: "nc7PyyFvxlZRoVfepghycxYAHPM.jpg",
  synopsis:
    "쓸쓸한 어둠이 드리웠던 비극의 시대, 1945년 봄. 생존이 전부였던 두 청춘이 인간의 탐욕으로 탄생한 괴물들과 사투를 벌인다.",
  trailer: "EtaV2rM80D8",
  date: "2023",
};

export const DUMMY_CONTENT4 = {
  actors: ["1", "2"],
  age: "19",
  genre: [1, 2, 3],
  id: "4",
  name: "4",
  platform: [1, 2, 3],
  poster: "q8pNUabN9eV4to3vm2jG7aWVXp2.jpg",
  synopsis:
    "쓸쓸한 어둠이 드리웠던 비극의 시대, 1945년 봄. 생존이 전부였던 두 청춘이 인간의 탐욕으로 탄생한 괴물들과 사투를 벌인다.",
  trailer: "EtaV2rM80D8",
  date: "2023",
};

export const DUMMY_PERSON = {
  cast: [],
  crew: [],
  id: 114843,
  name: "클레어 반 더 붐",
  profilePath: "1CXZLmtimJksArEZ5afDIH6prwW.jpg",
};
