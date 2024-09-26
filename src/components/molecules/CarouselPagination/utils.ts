enum EnumDotType {
  ACTIVE,
  INACTIVE,
  MEDIUM,
  SMALL,
  NONE,
}

const DotStyle = {
  [EnumDotType.INACTIVE]: {
    size: 12,
    transform: "scale(1)",
  },
  [EnumDotType.ACTIVE]: {
    size: 12,
    transform: "scale(1)",
  },
  [EnumDotType.MEDIUM]: {
    size: 8,
    transform: "scale(0.75)",
  },
  [EnumDotType.SMALL]: {
    size: 5,
    transform: "scale(0.25)",
  },
  [EnumDotType.NONE]: {
    size: 0,
    transform: "scale(0)",
  },
};

export const getDotStyle = ({ idx, curPage, maxPage }: any) => {
  let type = EnumDotType.SMALL;

  /*
  if (maxPage < 5) {
    //5개 이하인 경우는 단수이기 때문에 큰 Dot으로만 구성
    // return ( idx === curPage ) ? EnumDotType.ACTIVE : EnumDotType.INACTIVE;
    return DotStyle[idx === curPage ? EnumDotType.ACTIVE : EnumDotType.INACTIVE];
  }
*/

  if (idx > curPage) {
    if (idx > curPage + 3) {
      type = EnumDotType.NONE;
    } else {
      type = EnumDotType.ACTIVE;
    }
  } else if (idx < curPage) {
    if (idx < curPage - 1) {
      type = EnumDotType.NONE;
    } else {
      type = EnumDotType.ACTIVE;
    }
  } else {
    type = EnumDotType.ACTIVE;
  }

  /*  if (curPage <= 2) {
    // 현재 페이지가 3 이하일때는 별도로 배열을 지정해줌
    // 배열
    // 큰 큰 큰 중
    if (idx <= 3) {
      type = EnumDotType.MEDIUM;
      if (curPage === idx) {
        type = EnumDotType.ACTIVE;
      }
    } else if (idx === 4) {
      type = EnumDotType.SMALL;
    } else {
      type = EnumDotType.NONE;
    }
  }
  // 중 큰 큰 큰
  else if (curPage >= maxPage - 2) {
    if (idx >= maxPage - 2) {
      type = EnumDotType.MEDIUM;
      if (curPage === idx) {
        type = EnumDotType.ACTIVE;
      }
    } else if (idx === maxPage - 3) {
      type = EnumDotType.SMALL;
    } else {
      type = EnumDotType.NONE;
    }
  } else {
    //기타는 모두 동일한 로직으로 돌아가도록
    if (idx > curPage) {
      if (idx === curPage + 1) {
        type = EnumDotType.MEDIUM;
      } else if (idx === curPage + 2) {
        type = EnumDotType.SMALL;
      } else type = EnumDotType.NONE;
    } else if (idx < curPage) {
      if (idx === curPage - 1) {
        type = EnumDotType.MEDIUM;
      } else if (idx === curPage - 2) {
        type = EnumDotType.SMALL;
      } else type = EnumDotType.NONE;
    } else {
      type = EnumDotType.ACTIVE;
    }
  }*/

  /*else if (curPage === 4) {
//4번째 페이지 일때 배열은 별도로 지정해줌
// 배열
// 중 큰 큰 큰 중
if (idx < 4) {
  if (idx === 0) {
    type = EnumDotType.MEDIUM;
  } else {
    type = EnumDotType.INACTIVE;

    if (curPage === idx) {
      type = EnumDotType.ACTIVE;
    }
  }
} else if (curPage + 1 === idx) {
  type = EnumDotType.MEDIUM;
} else {
  type = EnumDotType.NONE;
}
} */

  return DotStyle[type];
};
