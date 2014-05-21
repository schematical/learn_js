var Learn = {
    init:function(){
        if(!window._lession_num){
            window._lession_num = 0;
        }
        Learn.next();
    },
    next:function(int_lession){
        if(int_lession){
            if(!Learn.Lessions[int_lession]){
                return  console.error("No lesion '" + int_lession + "'");
            }
            window._lession_num = int_lession;
        }else{
            if(Learn.Lessions[window._lession_num] && !Learn.Lessions[window._lession_num].test()){
                return;
            }
            window._lession_num += 1;
        }
        Learn.Lessions[window._lession_num].start();
    },
    test:function(){
        Learn.Lessions[window._lession_num].test();
    },
    Lessions: {
        1:{
            start:function(){

                console.log("Hello! You successfully opened the developer console");
                console.log("Type 'next();' to continue");
            },
            test:function(){
                return true;

            }
        },
        2:{
            start:function(){

                console.log('Create an object named "Bob" with a property of "weight". Type "next()" when you are done');
            },
            test:function(){
                if(!window.Bob){
                    console.error("I cant find your 'Bob' object");
                    return;
                }
                console.log("Great you have created an Object Named 'Bob'");


                if(!window.Bob.weight){
                    console.error("I cant find Bob's 'weight' property");
                    return;
                }

                console.log("Bob has a weight of '" + window.Bob.weight + "'");



                return true;
            }
        },
        3:{
            start:function(){
                window._weight_gained = null;
                window.gainWeight = function(person){
                    if(!persion || !person.weight){
                        return console.error("Invalid first parameter passed in. Does the object you passed in have a 'weight' property?");
                    }
                    person.weight += 10;
                    window._weight_gained = person;
                    console.log("Putting on weight");
                }

                console.log('We have created a function called "gainWeight". Pass Bob into it ');
            },
            test:function(){

                if(!window._weight_gained){
                    console.error("Have you run the function?");
                    return;
                }

                console.log("The weight has been gained. See: ", window._weight_gained);
                console.log("On to the next lesion");

                return true;
            }
        },
        4:{
            start:function(){

                console.log('Create an Object "Bob" with a property "fav_foods". Set this to an Array of Strings. Add at least 3 foods. When you are done type "next();"');
            },
            test:function(){
                if(!window.Bob){
                    console.error("I cant find your 'Bob' object");
                    return;
                }
                console.log("Great you have created an Object Named 'Bob'");


                if(!window.Bob.fav_foods){
                    console.error("I cant find Bob's 'fav_foods' property");
                    return;
                }
                console.log("And Bob has Fav Foods");

                console.log("Success!! On to the next lesion");
                return true;
            }
        },
        5:{
            start:function(){
                window.fav_foods = window.Bob.fav_foods;
                window._fav_foods = [];
                window.eat_me = function(i){
                    window._fav_foods.push(i);
                    console.log("Eating: " + i);
                }
                console.log('Create a for loop that iterates through the Array and passes each food into the function "eat_me" as the first parameter. Type "next();" when you are finished.');
            },
            test:function(){
                if(window._fav_foods.length == 0){
                    return console.error("Have you run the loop? So far there seems to be nothing here");
                }
                for(var i in window.fav_foods){
                    if(!window._fav_foods[i] || window._fav_foods[i] != window.fav_foods[i]){
                        window._fav_foods = [];
                        console.error("Food at pos " + i + " does not match!");
                        return false;
                    }
                    console.log("Food at pos " + i + " matches!");
                }
                console.log("Success!! On to the next lesion");
                return true;
            }
        },
        6:{
            start:function(){

                console.log('Create a function called "loseWeight"  that takes a parameter of "person" which is assumed to be an Object and subtracts 15 from its "weight" property');
            },
            test:function(){
                if(!window.loseWeight){
                    console.error("I cant find your 'loseWeight' function");
                    return;
                }
                console.log("Great you have created an Function Named 'loseWeight'");
                var test_weight = Math.floor(Math.random() * 100) + 100;
                var test_obj ={
                    weight:test_weight
                };
                console.log("Testing 'loseWeight' with ", test_obj);
                window.loseWeight(test_obj);
                if(test_obj.weight + 15 != test_weight){
                    console.error("The weight property should be '" + (test_weight  - 15) + "' and is instead '" + test_obj.weight + "'");
                    return;
                }

                console.log("Your function worked!!! ");


                return true;
            }
        },
        6:{
            start:function(){
                window.Person = function(){
                    return this;

                }
                console.log('Create an object named Fred by initializing the Person function. When you are done click next');
            },
            test:function(){
                if(!window.Fred){
                    console.error("I cant find Fred");
                    return;
                }
                if(!window.Fred instanceof window.Person){
                    console.error("Fred is NOT an 'instance' of a Person");
                    return;
                }


                return true;
            }
        }
    }
}
window.next = Learn.next;
window.test = Learn.test;

Learn.init();