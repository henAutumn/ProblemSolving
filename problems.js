// Always have a plan
// -Making a plan gives you structure, helps to give you a path to take. Even if it quickly becomes 
//     clear it is not the right path, its a way to get yourself jumpstarted 

// Restate the problem
// -This is a great way to make the problem clear, and concise. Also a great way to figure out what
// is being asked and what is needed. Rubberducking

// Divide the problem
// - Break the problem up into smaller sections, this can help with the mental block that may come 
// from how large a problem may seem. You may not know how to get from A to C, but you can walk 
// from A to B, then from B to C
// 
// Start with what you know
// -Once the problem is in smaller pieces, you might be able to solve one of those smaller problems. 
// Starting with what you know might be helpful in getting momentum to solve a problem

// Reduce the problem
//  -If you are finding the constraints of the question too difficult to navigate, try taking one away. 
//  If you can't get a reversed string back, can you get an array of strings back first? 

// Look for analogies
//     -If you cant find a way to a solution, try creating an analogy solution. What would give you a 
//     similar result that youve already done before

// Experiment
// -Sometimes theres only so much prep we can do with a problem, and were going to have to dive in. 
// Just trying a solution and finding out its wrong,
// gives you good clues as to what works and what doesnt
/**
 * Don't get frustrated
    -Being incorrect is a large part of development. Getting better means that you have tried many ways
    to do something and gotten used to where the pitfalls are. If youve started to get frustrated, that 
    means youve started deviating from your plan and techniques. Step away, take a break and make a better
    plan when you come back. Getting frustrated demotivates you and makes you feel like youre not making 
    progress
 * 

 /* Make a function that takes in two arrays, 
    and adds the first array to the second.
 
    Needs: 
    Function with two parameters
    Two arrays
    return

    Tools:
    *How can we add two arrays together*
    .push()
    for Loop


 */

 let arr1 =['Tortie', 'Calico', 'Mainecoon', 'Burmese'];
 let arr2=['Poodle', 'Beagle', 'Golden', 'Terrier'];

 function allAnimals (one, two){ 
     for( i=0; i< one.length; i++){
         two.push(one[i])
        }
        return two
    }
    let newArray = allAnimals(arr1, arr2);
    console.log(newArray); 