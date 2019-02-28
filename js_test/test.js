function testTime(func =(function(){return a;}), a = ''){
    var totalTime,
    hz,
    period,
    startTime = new Date,
    runs = 0;
  do {
    func(a);  // test code;
  runs++;
  totalTime = new Date - startTime;
  } while (totalTime < 1000);
  
  // преобразуем ms в секунды
  totalTime /= 1000;
  
  // period → сколько времени занимает одна операция
  period = totalTime / runs;
  
  // hz → количество операций в секунду
  hz = 1 / period;
  console.log(hz);
  // или можно записать короче
  // hz = (runs * 1000) / totalTime;
  }