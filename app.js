// 1-masala
function kub_hajmi(a) {
    var res = a ** 3;
    return res;
}
console.log(kub_hajmi(7));

// 2-masala
function belgi_top(arg, args) {
    return arg.includes(args);
}
console.log(belgi_top('nimaidr&93.22'));

// 3-masala
function birinchi_son(n) {
    var num = [];
    for (var i = 1; i <= n; i++) {
      num.push(i);
    }
    return num;
}
console.log(birinchi_son());

// 4-masala
function number_sum(number) {
    var sum = 0;
    var digits = number.toString().split('');
    for (var i = 0; i < digits.length; i++) {
      sum += parseInt(digits[i]);
    }
    return sum;
}
console.log(number_sum(4555));

// 5-masala
function kabisa_yili(year) {
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        if (year % 400 === 0) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    } else {
      return false;
    }
  }
  console.log(kabisa_yili(2024));

// 6-masala
function random_son(a, b) {
    var random = Math.floor(Math.random() * (b - a + 1)) + a;
    return random;
}
console.log(random_son(5, 70));

// 7-masala
function tortburchak_yuzi(balandlik, kengli) {
    var yuzi = balandlik * kengli;
    return yuzi;
}
console.log(tortburchak_yuzi(4, 5));

// 8-masala
function selsiyga_otish(f) {
    var selsiy = (f - 32) * 5 / 9;
    return selsiy;
}
console.log(selsiyga_otish(35));

// 9-masala
function checkTriangleType(side1, side2, side3) {
    if (side1 === side2 && side2 === side3) {
      return "Teng yonli";
    } else if (side1 === side2 || side2 === side3 || side1 === side3) {
      return "teng yonli";
    } else {
      return "Tengli yonli emas";
    }
}

// 10-masala
function min_num(a, b) {
    return Math.min(a, b);
}
console.log(min_num(34, 56));

// 11-masala
function aylana_radius(r) {
    var radius = Math.PI * r ** 2;
    return radius;
}
