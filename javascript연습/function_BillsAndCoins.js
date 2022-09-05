// 돈을 매개변수로 받으면 몇개의 지폐와 동전이 필요한지 최소 개수를 계산해주는 함수를 만드시오

// 출력예 )

// 12300인 경우
//  50000 X 0
//  10000 X 1
//  5000  X 0
//  1000 X 2
//  500 X 0
//  100 X 3

//  function BillAndCoin(money){
//   let bills50000 = 0
//   let bills10000 = 0
//   let bills5000 = 0
//   let bills1000 = 0
//   let coins500 = 0
//   let coins100 = 0
//   let coins50 = 0
//   let coins10 = 0
//   while(Math.sign(money)==1){
//     money = money-50000
//     if(Math.sign(money)==-1){
//       money = money+50000
//       break;
//     }
//     bills50000=bills50000+1
//   }
//   while(Math.sign(money)==1){
//     money = money-10000
//     if(Math.sign(money)==-1){
//       money = money+10000
//       break;
//     }
//     bills10000=bills10000+1
//   }
//   while(Math.sign(money)==1){
//     money = money-5000
//     if(Math.sign(money)==-1){
//       money = money+5000
//       break;
//     }
//     bills5000=bills5000+1
//   }
//   while(Math.sign(money)==1){
//     money = money-1000
//     if(Math.sign(money)==-1){
//       money = money+1000
//       break;
//     }
//     bills1000=bills1000+1
//   }
//   while(Math.sign(money)==1){
//     money = money-500
//     if(Math.sign(money)==-1){
//       money = money+500
//       break;
//     }
//     coins500=coins500+1
//   }
//   while(Math.sign(money)==1){
//     money = money-100
//     if(Math.sign(money)==-1){
//       money = money+100
//       break;
//     }
//     coins100=coins100+1
//   }
//   while(Math.sign(money)==1){
//     money = money-50
//     if(Math.sign(money)==-1){
//       money = money+50
//       break;
//     }
//     coins50=coins50+1
//   }
//   while(Math.sign(money)==1){
//     money = money-10
//     if(Math.sign(money)==-1){
//       money = money+10
//       break;
//     }
//     coins10=coins10+1
//   }
//   console.log(`오만원권 : ${bills50000}장`)
//   console.log(`만원권 : ${bills10000}장`)
//   console.log(`오천원권 : ${bills5000}장`)
//   console.log(`천원권 : ${bills1000}장`)

//   console.log(`500원 동전 : ${coins500}개`)
//   console.log(`100원 동전 : ${coins100}개`)
//   console.log(`50원 동전 : ${coins50}개`)
//   console.log(`10원 동전 : ${coins10}개`)
// }
// BillAndCoin(4039280)


let unit = [50000,10000,5000,1000,500,100,50,10]

function BillsAndCoins(money){
  for(let i=0;i<unit.length;i++){
    let number = Math.floor(money/unit[i])
    money = money-(unit[i]*number)
    console.log(`${unit[i]}원 : ${number}개`)
  }
}

BillsAndCoins(41571050)