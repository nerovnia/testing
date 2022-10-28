/**
 * 3.16. Дано двузначное число. Найти:
* а) число десятков в нем;
* б) число единиц в нем.
 */

function a3_17() {
  const x = 65459;
  const od = x%10;
  const des = (x%100 - od) / 10;
  console.log('Одиниць: ', od);
  console.log('Десятків: ', des);
}

a3_17();

/**
 * 3.18. Дано двузначное число. Получить число, образованное при перестановке цифр заданного числа.
 */
function a3_18() {
  const x=39;
  console.log(x.toString().split('').reverse().join(''));
}

a3_18();

/**
 * 3.19. Написать программу, в которую вводится трехзначное число и выводятся на экран его цифры (через запятую). Например, при вводе числа 123 программа должна вывести:
 */
 function a3_19() {
  const x=539;
  console.log(x.toString().split('').join());
}

a3_19();

/**
 * 3.20. Дано трехзначное число. Найти:
 * а) число единиц в нем;
 * б) число десятков в нем;
 * в) сумму его цифр;
 * г) произведение его цифр.
 */


 function a3_20() {
  let x = 654;

  let od = x % 10;
  let fdec = (x % 100 - od) ;
  let fsot = (x % 1000 - fdec - od);
  let dec = fdec / 10;
  let sot = fsot / 100;
  
  
  console.log(sot * dec * od);
  console.log(sot + dec + od);
}

a3_20();


/**
 * 3.26. Дано трехзначное число, в котором все цифры различны.Получить шесть чисел, образованных при перестановке цифр заданного числа.
 */

 function a3_26() {
  const x = 123;
  let s = x.toString();
  console.log('\nПеребір усіх варіантів');
  for(i=0;i<3; i++) {
    for(j=0;j<3;j++) {
      for(k=0;k<3;k++) {
        console.log([s[i] , s[j] , s[k]]);
      }
    }
  }

  console.log('\n\nЗгідно завдання');
  for(i=0;i<3; i++) {
    for(j=0;j<3;j++) {
      for(k=0;k<3;k++) {
        if((j!=i) && (k!==i) && (k !==j)) {
          console.log([s[i] , s[j] , s[k]]);
        }
      }
    }
  }
}

a3_26();


/**
 * 3.47. Даны целые числа h, m, s (0 < h ≤ 23, 0 ≤ m ≤ 59, 0 ≤ s
 * ≤ 59), указывающие момент времени: «h часов, m минут, s се- 
 * кунд». Определить угол (в градусах) между положением часовой 
 * стрелки в начале суток и в указанный момент времени.  
 */

 function a3_47() {
  const hours = 9;
  const mins = 0;
  const secs = 0;

   const hour = 30;
   const min = 0.5;
   const sec = 0.5/60;

  console.log('\n\nВідхилення складає:', hours * hour + mins * min + secs * sec);

}

a3_47();

/**
 * 3.50 Даны целые числа h, m (0 < h ≤ 12, 0 ≤ m ≤ 59), указы-
 * вающие момент времени: «h часов, m минут». Определить наи-
 * меньшее время (число полных минут), которое должно пройти до
 * того момента, когда часовая и минутная стрелки на циферблате:
 * а) совпадут;
 * б) расположатся перпендикулярно друг другу.
 */


 function a3_50() {
  const hours = 3;
  const mins = 30;
  
  let top_hours = 0;
  let down_hours = 0;
  let top_minutes = 0;
  let down_minutes = 0;
  let angle_top = 0;
  let angle_down = 0;
  
  const hour = 30;
  const min = 0.5;
  const sec = 0.5 / 60;

  let angle_hour = hours * hour + mins * min;
  let angle_mins = 360 / 60 * mins;
  let angle = angle_hour - angle_mins;

  if(angle < 0) {
    let minutes = 0;
    while(true) {
      if() {
        break;
      }      
      minutes++;
    }

  } else if(angle > 0) {

  } else 
    console.log('\n\nЧас за який положення стрілок співпадуть складає: 0 хвилин');

  console.log('\n\nВідхилення складає:', angle_hour, angle_mins, angle);
  
  function calcMinutes() {
    let minutes = 0;
  }

  // Получить минуты при соответствующем положении минутной стрелки
  function getMinutes(angle) {
    return angle*60/360;
  }
}

a3_50();




