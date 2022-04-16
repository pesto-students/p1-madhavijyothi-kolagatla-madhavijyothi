function createStack() 
{
    const items =[];
    return{
     //   items:[],
        push(item)
         {
             items.push(item);
            
        },
        pop() {
            return items.pop();
    }
};
}
const stack=createStack();
stack.push(10);
stack.push(5);
stack.pop();
//we can push or pop but dont have permission
stack.items;