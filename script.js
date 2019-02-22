
function sequence(start = 0, step = 1) {
    let callNumber = start;
    return function() {
      var returnValue = callNumber;
      callNumber += step;
      return returnValue;
    }
  }

function take(gen, n){
    var arr = [];
    for(var i = 0; i < n; i++){
        arr[i] = gen();
    }
    return arr;
}

function map(fn, array){
    var arr = [];
    for(var i = 0; i < array.length; i++){
        arr[i] = fn(array[i]);
    }
    return arr;
}

function fmap(a, gen){
    var num;
    return function (){
        num = gen.apply(null, arguments);
        return a(num);
    }
}

function partial(fn){
    var arr = [];
    arr = [].slice.call(arguments, 1);

    return function (){
        var arr2 = [];
        arr2 = arr.concat([].slice.call(arguments));
        return fn.apply(null, arr2); // arguments + arr;
    }
}

function partialAny(fn){
    var arr = [];
    arr = [].slice.call(arguments, 1);s
    return function (){
        var arr2 = [];
        arr2 = arr2.concat(arr);
        var j = 0;
        for(var i = 0; i < arr2.length; i++){
           if(arr2[i] == undefined){
               arr2[i] = arguments[j];
               j++;
           }
        }
        arr2 = arr2.concat([].slice.call(arguments, j));
        return fn.apply(null, arr2);
    }
}

function bind(fun, context){
    var arr = [];
    return function (){
        var arr2 = [];
        arr2 = arr.concat([].slice.call(arguments));
        return fun.apply(context, arr2);
    }
}


function pluck(arr_obj, arg){
    let arr = [];
    for(var i = 0; i < arr_obj.length; i++){
        arr[i] = arr_obj[i][arg];
    }
    return arr;
}


function filter(arr_arg, fun){
    var arr = [];
    for(let i = 0, j = 0; i < arr_arg.length; i++){
        if(fun(arr_arg[i])){
            arr[j] = arr_arg[i];
            j++;
        }
    }
    return arr;
}

function count(obj){
    let size = 0;
    for(let key in obj){
        size++;
    }
    return size;
}

var arr = [
    {name: 'Сурат', value: 6200},
    {name: 'Касабланка', value: 4410},
    {name: 'Сидней', value: 4410},
    {name: 'Гонконг', value: 7380},
    {name: 'Александрия', value: 4960}
];

let c = 'value';

arr.sort(function(a, b){
    
    return b[c] - a[c];
});

////////////////////////////////////////////////////////////////////////////////////////

function Hamburger(size, stuffing){
    if(!(size == 'small' || size =='lagre')){
        throw 'Неверный размер';
    }
    if(!(stuffing == 'cheese' || stuffing == 'salad' || stuffing == 'potato')){
        throw 'Неверная начинка';
    }
    this.size = size;
    this.stuffing = stuffing;
    this.topping = {'mayo': false, 'spice': false};
}

Hamburger.SIZE_SMALL = 'small';
Hamburger.SIZE_LARGE = 'lagre';
Hamburger.STUFFING_CHEESE = 'cheese';
Hamburger.STUFFING_SALAD = 'salad';
Hamburger.STUFFING_POTATO = 'potato';
Hamburger.TOPPING_MAYO = 'mayo';
Hamburger.TOPPING_SPICE = 'spice';
Hamburger.PRICE = {'small': 50, 'lagre': 100, 'cheese': 10, 'salad': 20, 'potato': 15, 'mayo': 20, 'spice': 15};
Hamburger.CALORIES = {'small': 20, 'lagre': 40, 'cheese': 20, 'salad': 5, 'potato': 10, 'mayo': 5, 'spice': 0};


Hamburger.prototype.addTopping = function(topping){
    if(!(topping == 'mayo' || topping == 'spice')){
        throw 'Неправильная начинка';
    }
    if(this.topping[topping]){
        throw 'Добавка уже есть';
    }
    this.topping[topping] = true;
} 

Hamburger.prototype.removeTopping = function(topping){
    if(!(topping == 'mayo' || topping == 'spice')){
        throw 'Неправильная начинка';
    }
    if(!this.topping[topping]){
        throw 'Добавка уже отсуствует';
    }
    this.topping[topping] = false;
}

Hamburger.prototype.getToppings = function(){
    let arr = [];
    if(this.topping['mayo']){
        arr.push('mayo');
    }
    if(this.topping['spice']){
        arr.push('spice');
    }
    return arr;
}

Hamburger.prototype.getSize = function(){
    return this.size;
}

Hamburger.prototype.getStuffing = function(){
    return this.stuffing;
}

Hamburger.prototype.calculatePrice = function(){
    let toppingSpice = 0;
    if(this.topping['mayo']){
        toppingSpice = Hamburger.PRICE['mayo'];
    }
    if(this.topping['spice']){
        toppingSpice = Hamburger.PRICE['spice'];
    }
    return Hamburger.PRICE[this.size] + Hamburger.PRICE[this.stuffing] + toppingSpice;
}

Hamburger.prototype.calculateCalories = function(){
    let toppingCalories = 0;
    if(this.topping['mayo']){
        toppingCalories = Hamburger.CALORIES['mayo'];
    }
    if(this.topping['spice']){
        toppingCalories = Hamburger.CALORIES['spice'];
    }
    return Hamburger.CALORIES[this.size] + Hamburger.CALORIES[this.stuffing] + toppingCalories;
}

function typeOfPlus(arg){
    let type = Object.prototype.toString.call(arg);
    type = type.slice(8, -1);
    return type;
}

function deepCopy(arg){
    if(typeOfPlus(arg) == 'Object'){
        var a = {};
    }
    if(typeOfPlus(arg) == 'Array'){
        var a = [];
    }
    for(let key in arg){
        if(typeof arg[key] == 'object' && arg[key] != null){
            a[key] = deepCopy(arg[key]);
        }else{
            a[key] = arg[key];
        }
    }
    return a;
}

