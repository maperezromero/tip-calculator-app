export const calculation = (values) => {
    console.log(values);
    let total = 0;
    if (values.bill.slice(-1)==='.' && typeof(Number(values.bill.slice(0,-1)))==='number'){
        values = {...values, bill: values.bill}
        if (typeof(values.persons)==='number'){
            total = (((values.bill*(values.tip/100))+values.bill)/values.persons).toFixed(2);
            if (typeof(values.tip)==='number'){ 
                total = (((values.bill*(values.tip/100))+values.bill)/values.persons).toFixed(2);
                values = {...values, tipAmount: ((values.bill*(values.tip/100))/values.persons).toFixed(2) ,total: total}
                
            }else{
                values = {...values, total: (Number(values.bill)/values.persons).toFixed(2)}
            }
        }
    }else if (typeof(Number(values.bill))==='number'){
        console.log('DENTRO ELSE');
        if (typeof(values.persons)==='number'){
            total = (((values.bill*(values.tip/100))+values.bill)/values.persons).toFixed(2);
            if (typeof(values.tip)==='number'){ 
                total = (((Number(values.bill)*(values.tip/100))+Number(values.bill))/values.persons).toFixed(2);
                values = {...values, tipAmount: ((values.bill*(values.tip/100))/values.persons).toFixed(2), total: total}
                
            }else{
                values = {...values, total: (Number(values.bill)/values.persons).toFixed(2)}
            }
        }
    }else{
        console.log('ENTRO');
        values ={...values, total:0}
    }
    return values;
}

