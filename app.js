// let arr  =[2, 4, 6, 8];
// let arr2 = arr.map((curElem) => curElem*2).filter((curElem) => curElem>10).reduce((accumulator,curElem) =>{
//     return accumulator += curElem;
// });
// console.log(arr2);

// // if we want to store initial value in accumulator then use 

// let arr  =[2, 4, 6, 8];
// let arr2 = arr.map((curElem) => curElem*2).filter((curElem) => curElem>10).reduce((accumulator,curElem) =>{
//     return accumulator += curElem;
// },7);
// console.log(arr2);


 //////  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////                          
                ////////  How to flatten an Array  ////////////////////////

// const arr = [['zone1','zone2'],
// ['zone1','zone2'],
// ['zone1','zone2'],
// ['zone1','zone2']];

// let flatArr = arr.reduce((accumulator, curElem)=>{
//     return accumulator.concat(curElem);
// })
// console.log(flatArr);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        ///////////////////"USE STRICT"/////////////////////////////////
//  'use strict'
// x = "my name";
// console.log(x);///gives error

// x = "my name";
// console.log(x); // return myname

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


      ////////////// Call Back function ANd Higher order function //////////////////

    //   Call back - if we pass a function on another function as an argument , that function is called as callback.a
    //   High Order- the function takes another function as an argument called Higher order function.
    // Here calculator is HOF and add , subs and mul is Call back function.

    //   const add = (a,b) =>{
    //       return a+b;
    //   }
    //   const sub = (a,b) =>{
    //       return Math.abs(a-b);
    //   }

    //   const mul = (a,b) => {
    //       return a*b;
    //   }

    //   const calculator = (num1,num2, operator) => {
    //       return operator(num1,num2);

    //   }

    //   console.log(calculator(5,2,add));
    //   console.log(calculator(5,6,mul));
                      

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      ///////// Hositing in Javascript ///////////////////////////////
        
    //   we have a creation phase and a execution phase
    //   Hoisting in javascript is a mechanism where function and variables declaration are moved to
    //    the top of their scope  before the code execute.

    // for example
    
    // console.log(Myname);
    //  var myname;
    //  myname ="PArul";

     // How it works on on creation phase

    //  var myname = undefined;
    //  console.log(myname);
    //  myname = "PArul";

    //  //IN ES2015 hositing is avoided by using let  keyword
    //  instead of var (the other difference is that  variable declared
    //     with let are the local to the surrounded block, not  the intire function.)


    /////////////////////////////////////////////////////////////////////////////////////////////////////////


           // what is Scope chain and lexical Scoping /////////////////

        //    The scope chain is used to resolve the value of variable names in JS.(means kis variable ka kon sa value hoga ,ye scope chain
        //     hume btata h)
            
        //    Scope chain in js is lexically defined, which means we can see what the scope chain will be by looking at the Code( means hum code ko dekh k hi 
        //     pta lga skte h ki variable ki value kya hogi.)

        //     Lexical Scopping means now, the inner function can get access to their parent function variables
        //     but vice versa is not true.(means child function parent ke variable ko access kr skte h , but 
                // parent function child k variable ko access ni kr skte)

    //   For Example::

    //   let a = "hey";  // Global scope

    //   const first = () =>
    //   {
    //       let b = "how are you?"

    //       const second = () =>
    //       {
    //           let c = "i m ok";
    //           console.log(a+b+c);/// it'll give output
    //       }
    //       second();
    //     //   console.log(a+b+c);/// it'll give error that c is not defiend , that is lexical scopping.
    //   }
    //   first();

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

       ////////...what is Closures///////////////

    //    A closures is  the combination  of  a function bundled together with reference to its surrounding state(the lexical  enviorment)
    // A Closures  gives you access to an outer function's scope from an inner function.
    //In  Javascript a clousre is created everytime a function  is created, at function creation time.

    // For Example:

    // const outerfunction = (a) =>{
    //     let b = 10;
    //     const innerfunc = () =>{
    //         let sum = a+b;
    //         console.log(sum);
    //     }
    //     innerfunc();
    // }
    // outerfunction(5);

    // It is same like Lexical Scopping
///////////////////////////////////////////////////////////////////////////////////////   /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


         //Synchronous JavaScript Prog///
        //  Means if you are doing two works together , then jb tk ek kaam khtm ni ho jata ,tb tk 
        //  dusra start ni hota//xxxxxxxxxx

        // disadvantage// for example : work 1 takes 10 mins and work2 takes 5 min , then fr bhi phle work1 complete hoga and then work2.

        // const fun2 = () =>{
        //     console.log('function 2 is called');
        // }
        //  const func1 = () =>
        //  {
        //      console.log('funtion 1 is called');
        //      fun2();
        //      console.log('function 1 is  called again')
        //  }
        //  func1();

        //  output will be
        // funtion 1 is called
        // function 2 is called
        // function 1 is  called again



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        // Asynchronous Javascript ////
        // Means jitne bhi kaam vo simultanoulsy chlte rhege , kisi bhi task ko wait ni krna Pdega//
        // example - Infinte scolling
        // and so more

        // const func2 =()=>{
        //     setTimeout(() => {
        //         console.log("function 2 is called");
        //     },2000);
        // }
        // const func1 = () =>{
        //     console.log("function 1 is called");
        //     func2();
        //     console.log("function 1 is called again")
        // }
        // func1();

        //output will be
           //  function 1 is called
           // function 1 is called again
           // function 2 is called

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


          /// EVENT LOOPS IN JAVASCRIPT//////////////////////////
  
        //   There is 3 phases 
        //    Execution stack 
        //    web API/
        //    message queue


        //    So first whenever a fuction show it'll go on execution stack 
        //    and if function has any object function like set timeout etc , then that function will go
        //    on web API block .and for that time execution phase of that function will be deleted.a
        //    and other function will run till web API block hold set timeout function .
        //    as his time will end .it'll go on message queue and then if there is no pending work on execution 
        //    phase , it'll go on execeution phase and run.


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        // CURRYING ///////////////

        // When a function , instead of taking all arguments at one time , takes the first one and return a new 
        // function that takes the second one and return a new function which takes the third one and so fourth
        // untill all arguments have been  fullfiled.

        // // FOR Example                          OR        As we learn about Call Back and in call Back 
        //                                               if we return one line output then no need to write return

        // Sum(3)(5)(8)                                 const Sum = (num1) => (num2) => (num3) => console.log(num1+num2+num3);

        // function Sum(num1){
        //     return function(num2){
        //         return function(num3){
        //             console.log(num2+num1+num3);
        //         }
        //     }
        // }
        // Sum(3)(5)(3);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

         ////// Call Back Hell//////////////

        //  setTimeout(() =>{
        //      console.log("work 1 done");
        //      setTimeout(() =>{
        //          console.log("work 2 done");
        //          setTimeout(() => {
        //              console.log("work 3 done");
        //              setTimeout(() => {
        //                  console.log("work 4 done");
        //              },1000)
        //          },1000)
        //      },1000)
        //  },1000)
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    //////JSON///////////////

    // JSON.stringify turns a JAvascript object into json text stores the JSon text into String. eg:
//     var my_object = { key_1: "some text" , key_2: true, key_3:5};
//     var object_as_string = JSON.stringify(my_object);

//     console.log(object_as_string);
//     // OUTPUT
//     //{"key_1":"some text","key_2":true,"key_3":5}


//     //JSON.parse turns a string  of json text into javascript object eg:
//      var object_as_string_as_object = JSON.parse(object_as_string);
//      console.log(object_as_string_as_object) ;

     // OUTPUT
    //  { key_1: 'some text', key_2: true, key_3: 5 }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      /////////  PROMISES    //////////////////////////////////////

       ///////////  2 Condition => success => fail/
        // whenever we use fetch method it'll always return promises. Promise is all about like 
        // either we get the data after fetching or not .Promises contains 2 condition sucess or fail
   
        // And in 90% cases we only consume the Promises not create.
        // fetch() => fullfiles => reject

        // Project -- Best JOke of the Day
        

