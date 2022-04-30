function CallBackTeaser(callback, param){
    console.log(`Calling the callback function`);
    setTimeout(()=>{callback(param)}, 0);//Calling the function asynchronously, passing the callback function as the first argument
    console.log(`callback function completed execution`);
    }
    function consoleMyDetails(person){
    if(person){
    console.log(`Hi, my name is ${person.name}, i am ${person.job} & super exited about ${person.hobby}`);
    }
    }
    CallBackTeaser(consoleMyDetails, {'name': 'madhavi',
    'job':'Developer',
    'hobby':'learning new technologies.'
    });

//     RESULT:
//     Calling the callback function
// callback function completed execution
// Hi, my name is madhavi, i am Developer & super exited about learning new technologies.

