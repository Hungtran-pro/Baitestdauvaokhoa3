//Bài 1.1

// let arrA = [];
// let arrB = [];
// let arrAns = [];
// let lengthA = prompt('Nhập số lượng mảng A');
// for(let i = 0; i < lengthA; i++){
//     arrA[i] = prompt('Nhập phần tử');
// }
// let lengthB = prompt('Nhập số lượng mảng B');
// for(let i = 0; i < lengthB; i++){
//     arrB[i] = prompt('Nhập phần tử');
// }
// for(let i = 0; i < lengthA; i++){
//     if(arrB.indexOf(arrA[i]) == -1){
//         arrAns.push(arrA[i]);
//     }
// }

// for(let i = 0; i < lengthB; i++){
//     if(arrA.indexOf(arrB[i]) == -1){
//         arrAns.push(arrB[i]);
//     }
// }
// console.log(arrAns);

// Bài 1.2
// class doibong {
//     constructor(name, points, GD){
//         this.name = name;
//         this.points = points;
//         this.GD = GD;
//     }
// }

// let numberOfTeam = prompt('Nhập số lượng đội bóng');
// while(isNaN(numberOfTeam)){
//     numberOfTeam = prompt('Nhập số lượng đội bóng');
// }
// let team = [];
// let bangXepHang = [];
// for(let i = 0; i < numberOfTeam; i++){
//     let check = true;
//     let nameTmp, pointsTmp, GDTmp;
//     while(check){
//         nameTmp = prompt('Nhập tên đội bóng');
//         pointsTmp = prompt('Nhập điểm đội bóng');
//         while(isNaN(pointsTmp)){
//             pointsTmp = prompt('Nhập điểm đội bóng');
//         }
//         GDTmp = prompt('Nhập GD đội bóng');
//         while(isNaN(GDTmp)){
//             GDTmp = prompt('Nhập GD đội bóng');
//         }
//         check = false;
//         for(let j = 0; j < team.length; j++){
//             if(nameTmp == team[j].name){
//                 check = true;
//                 break;
//             }
//         }
//     }
//     team[i] = new doibong(nameTmp, pointsTmp, GDTmp);
// }

// for(let i = 0; i < team.length - 1; i++){
//     for(let j = i + 1; j < team.length; j++){
//         if(team[i].points < team[j].points){
//             [team[i], team[j]] = [team[j], team[i]];
//         }
//         else if(team[i].points == team[j].points){
//             if(team[i].GD > team[j].GD){
//                 [team[i], team[j]] = [team[j], team[i]];
//             }
//             else if(team[i].GD == team[j].GD){
//                 if(team[i].name > team[j].name){
//                     [team[i], team[j]] = [team[j], team[i]];
//                 }
//             }
//         }
//     }
// }
// console.log(team);
