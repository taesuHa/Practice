// meetAt 함수를 만들어주세요.
// 인자를 세개 받습니다.

// 첫번째 인자는 년도에 해당하는 숫자입니다.
// 두번째 인자는 월에 해당하는 숫자입니다.

// 세번째 인자는 일에 해당하는 숫자입니다.

// 년도 인자만 받았을 경우 → "1234년" 과 같은 형식의 문자열을 리턴 해주세요.

// 년도,월 인자를 받았을 경우 → 년도와 월을 조합해서 "1234년 5월" 과 같은 형식의 문자열을

// 리턴 해주세요.

// 년도,월,일 인자를 전부 받았을 경우 → 년도,월,일을 조합해서 "1234/5/6" 과 같은 형식의 문자열을

// 리턴 해주세요.

  
  function meetat(year, month, day){

    console.log(year,month,day)

    if (day){
      return `${year}/${month}/${day}`
    }
    if (month){
      return `${year}-${month}`
    }
    if (year){
      return `${year}년`
    }
  }

  console.log(meetat(2022,2))