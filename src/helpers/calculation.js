export const calculation = (values) => {
    console.log(values);
    let total = 0;
    if (typeof(values.bill)==='number'){
        if (typeof(values.persons)==='number'){
            total = ((values.bill*(values.tip/100))+values.bill)/values.persons;
            
            console.log(':::8');
            if (typeof(values.tip)==='number'){ 
                total = ((values.bill*(values.tip/100))+values.bill)/values.persons;
                values = {...values, tipAmount: ((values.bill*(values.tip/100))/values.persons) ,total: total}
                
            }else{
                values = {...values, total: values.bill/values.persons}
            }
        }
    }else{
        values ={...values, total:0}
        console.log('ELSE');
    }
    return values;
}

