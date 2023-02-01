
 
function jumpTeam1() {
  let arr1 = [p1_1, p2_1, p3_1, p4_1, p5_1, p6_1]
  let array1 = []
  console.log(arr1);
  for(let i = 0; i < 6; i++) {
    array1.push (arr1[i].innerText) 
    console.log(array1); 
  }

  var k=1;//шаг
  for(i=0;i<k;i++) array1.unshift(array1.pop());
    console.log(array1);
  for (let i = 0; i < 6; i++){
    arr1[i].innerHTML = array1[i];
  }
}

function jumpTeam2() { 
  arr2 = [p1_2, p2_2, p3_2, p4_2, p5_2, p6_2]
  let array2 = []
  console.log(arr2);
  for(let i = 0; i < 6; i++) {
    array2.push ( arr2[i].innerText)
    console.log(array2);
  }
  
  var k=1;//шаг
  for(i=0;i<k;i++) array2.unshift(array2.pop());
    console.log(array2);
  for (let i = 0; i < 6; i++){
    arr2[i].innerHTML = array2[i];
  }
}




// alert(`первый розыгрыш подает игрок ${pitcher.innerHTML}`)
attack_1.onclick = function () {
  jumpTeam1()
}
attack_2.onclick = function () {
  jumpTeam2()
}

// let player = prompt('кто начал?')
// function attack () {
// } 

// function block () {}
block_1.onclick = function() {
  alert(`Команда "1" отбила. Мяч идет дальше`)
  // block()
}
block_2.onclick = function() {
  alert(`Команда "2" отбила. Мяч идет дальше`)
  // block()
}




// function pitch() {}
pitch_1.onclick = function () {
  let arr1 = [p1_1, p2_1, p3_1, p4_1, p5_1, p6_1]
  let array1 = []
  for(let i = 0; i < 6; i++) {
    array1.push (arr1[i].innerText) 
  }
  alert(`Игрок ${array1[4]} подал мяч`)
  
}
pitch_2.onclick = function () {
  let arr2 = [p1_2, p2_2, p3_2, p4_2, p5_2, p6_2]
  let array2 = []
  for(let i = 0; i < 6; i++) {
    array2.push (arr2[i].innerText) 
  }
  alert(`Игрок ${array2[1]} подал мяч`)
}



// function error () {
//   //
// }
//error
error_1.onclick = function() {
  alert(`Команда "1" допустила ошибку. Мяч переходит противнику. Команда "2"  получает 1 балл`)
  counter2()
}

error_2.onclick = function() {
  alert(`Команда "2" допустила ошибку. Мяч переходит противнику. Команда "1"  получает 1 балл`)
  
  counter1()
}




// function change () {
  
// }



let count1 = 0 
//////////   count   /////////////////////

function counter1 () {
  
  if (count1 < 25) {
  let count1 = ct1.innerHTML
  // ct1.innerHTML = count1;
  count1 ++
  console.log(count1)
  }
  
}

function counter2 () {
  for (let i = 0; i < 25; i++) {
  let count2 = ct2.innerHTML
  // ct2.innerHTML = count2;
  }
  // count2 ++
}