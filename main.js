// IN STRING - It counts the number of characters including space
    let sampleString = "Dennielle Valdez";
    // alert(sampleString.length);

// IN ARRAY - It counts the number of characters including space
    let sampleArray = ["Den", "Bryan", "Rogie"];
    // alert(sampleArray.length);

// toUpperCase and toLowerCase
    // alert(sampleString.toUpperCase());
    // alert(sampleString.toLowerCase());

// .REPLACE
    // alert(sampleString.replace('Dennielle', 'Pau' ));

// SLICE -extracts a part of your string. Two parameters (start , end)
    // // RESULT: Denni
    // alert(sampleString.slice(0, 5));
    // alert(sampleString.substring(0, 4));

// ARRAY METHODS
    // let sampleArrayNumbers = [1, 12, 15, 18, 20];

    // let checkNumbers = (num) => {
    //     return num < 21;
    // };

    // alert(sampleArrayNumbers.every(checkNumbers));

//.FILL (will fill or change the Array content)
    // RESULT: Jeffrey, Bryan, Rogie
    // alert(sampleArray.fill('Jeffrey', 0 ,2));

//.FILTER
    // let sampleArrayNumbers = [1, 12, 15, 18, 20];
    // RESULT: 1, 12

    // Normal

    // let checkNumbers = (num) => {
    //         return num < 15;
    //     };

    //     alert(sampleArrayNumbers.filter(checkNumbers));

    // OR //

    // alert(sampleArrayNumbers.filter(
    //         (num) => {
    //             return num < 15;
    //         }
    //     )
    // );


//.FIND - will appear only the first number found
    // RESULT: 1

    // Normal

    // let checkNumbers = (num) => {
    //         return num < 15;
    //     };

    //     alert(sampleArrayNumbers.find(checkNumbers));

     // OR //

    // alert(sampleArrayNumbers.find(
    //         (num) => {
    //             return num < 15;
    //         }
    //     )
    // );

// 

    let animals = ['dog', 'cat', 'bird', 'pig'];

    // USING NORMAL LOOP

        // for (let i = 0; i < animals.length; i++) {
        //     alert(animals[i]);
        // };

    // animals.forEach (showAnimals);

        // let showAnimals = (name, number) => {
        //     alert(`${number} ${name}`);
        // };

    // Normal For each

        // animals.forEach(
        //     (name) => {
        //         alert(`${name}`);
        //     }
        // );

// .PUSH -allows you to add in your array
    // RESULT: dog, cat, bird, pig, kangaroo, Monkey

    animals.push('Kangaroo');
    animals.push('Monkey');

    // alert(animals);

// .POP - removes the last item in your array
    // RESULT: dog, cat, bird

    animals.pop();
    animals.pop();
    animals.pop();

    // alert(animals);


// TODO LIST //

// let todo = ["Sleep", "Jogging", "Shop", "Eat", "Code", "Magbreak"];
// // let todo = localStorage.getItem("todo").split(",");
// let todo = [];

// if(localStorage.getItem("todo")){
//     todo = localStorage.getItem("todo").split(",");
// }


// let container = document.querySelector("#todo-list");

// // todo.forEach(
// //     (task) => {
// //         container.innerHTML += `<li>${task}</li>`;
// //     }
// // );

// // COMBINATION CODE FOR ADD AND REMOVE//

//     const showList = () => {
//         container.innerHTML = "";
//         todo.forEach(
//             (task) => {
//                 container.innerHTML += `<li>${task}</li>`;
//             }
//         );
//     }

// // ADD TO DO
//     const addTodo = () => {
//         let newItem = document.querySelector("#create-todo").value;
//         todo.push(newItem);
//         // alert(todo); to check if its working
        
//         // 1st WAY
//         // container.innerHTML += `<li>${newItem}</li>`;

//         // 2nd WAY
//         // container.innerHTML = "";
//         // todo.forEach(
//         //     (task) => {
//         //         container.innerHTML += `<li>${task}</li>`;
//         //     }
//         // );
//         showList();
//         localStorage.setItem("todo", todo);
    // }

// REMOVE  TO DO

    // const removeTodo = () => {
    //     todo.pop();
    // //     container.innerHTML = "";
    // //     todo.forEach(
    // //         (task) => {
    // //             container.innerHTML += `<li>${task}</li>`;
    // //         }
    // //     );
    //     showList();
    //     localStorage.setItem("todo", todo);
    // // }
    // }

    // showList();
    


// WEB API //

// 1. SET ITEM
    // setItem is a method not changeable. Only Name and Sample Name
    
    // localStorage.setItem("name", "Sample Name");
    // localStorage.setItem("name2", "Sample Name");

// 2. GET ITEM

    // let data = localStorage.getItem("name");

    // alert(data);

let todo = [];

if(localStorage.getItem("todo")){
    todo = localStorage.getItem("todo").split(",");
};

let container = document.querySelector("#todo");

const removeItem = (xIndex) => {
    let xValue = xIndex;
    let catcher = [xValue];
    todo.splice(catcher,1);
    localStorage.setItem("todo", todo);
    showList();
}

// COMBINATION CODE FOR ADD AND REMOVE//
    const showList = () => {
        let z = 0;
        let x = 0;
        container.innerHTML = "";
        todo.forEach(
            (task) => {
                container.innerHTML += 
                    `<li id="removeBtn${z++}"><i>${task}</i>
                    <button style = "height:20px; padding: 1px; font-size:10px;"; onclick="removeItem(${x++})">x</button></li>`;
            }
        );
    };

    // const showList = () => {
    //     container.innerHTML = "";
    //     todo.forEach(
    //         (task) => {
    //             container.innerHTML += `<li>${task}</li>`;
    //         }
    //     );
    // };


// ADD TO DO
    const addTodo = () => {
        let newItem = document.querySelector("#create-todo").value;
        todo.push(newItem);
        showList();
        localStorage.setItem("todo", todo);
    };

// REMOVE  TO DO

    const removeTodo = ( ) => {
        // todo.splice(index, 1);
        todo.pop();
        showList();
        localStorage.setItem("todo", todo);
    };

    showList();

// SEARCH FUNCTIONALITY 

const filterSearch = () => {
    container.innerHTML = "";
    const searchString = document.querySelector("#find-todo").value.toLowerCase();

    const filterSearch = todo.filter ( value => {
        return value.toLowerCase().includes(searchString);
    });
    if (filterSearch.length > 0) {
        for (let index = 0; index < filterSearch.length; index++) {
            container.innerHTML += `<li>${filterSearch[index]}</li>`;
        }
    } else {
        container.innerHTML = `<h3>ITEM NOT FOUND</h3>`;
    }

    if (filterSearch.length === todo.length) {
        container.innerHTML = `<h3>SEARCH BAR IS EMPTY</h3>`;
    };
};

showList();
    
// SEARCH FUNCTIONALITY (with adventListener)


// document.getElementById("find-todo").addEventListener("keyup",function(){
//     let text = this.value.toLowerCase();

//     let filteredTodo = todo.filter(task => task.toLowerCase().includes(text));
        
//     if(this.value === " "){
//         showList();
//     }else{
//         if (filteredTodo.length === 0) {
//             container.innerHTML = "";
//         }else{
//             container.innerHTML = "";
//             filteredTodo.forEach(task => {
//                 container.innerHTML += `<li>${task}</li>`;
//             });
//         }
//     }
// });



