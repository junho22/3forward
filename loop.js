//4. 반복문(for, while, do~while문)
// 1)for (초기값; 조건식; 증감) {
  // 반복실행될 명령문 코드 }
  const data = parseInt(prompt("데이터 입력", 0));
  let sum = 0;
  for(let i=1; i <=data; i++){
      sum += i;   
  }
  console.log("합은=>" + sum );
  //alert("합은" + sum);
  //document.getElementById("result").innerHTML= "합=" + sum;
  
  // 2) for(변수 of 객체) {
    // 반복실행될 명령문 코드 } // ES6
  const a = [40, 70, 90, 100, 30];
  let hap = 0;
  for(let val of a){
      hap += val;
  }
  console.log('결과 : ' + hap);
  
  // 3) while (조건식) {
    //  반복실행될 명령문 코드 }
  let i = 1;
  hap = 0;
  while(i <= data){
     hap += i;
     i++;
  } 
  console.log(`1~${data}까지 합 = ${hap}`);
  
  // 4) do {
    //  반복실행될 명령문 코드 }
  // while (조건식);
  
  // 기타 : break, continue;
  i = 1;
  hap = 0;
  while(i <= data){
      hap += i;
      if(hap >= 50) break;
      i++;
   } 
   console.log(`합이 50넘는${i}값 합 = ${hap}`);
  
   i = 0;
   hap = 0;
   while(i <data){
      i++;
      if(i%2==0) continue;
      hap += i;
  
    } 
    console.log(`홀수의 합 = ${hap}`); 