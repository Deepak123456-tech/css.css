function fun(){
    let arr=[
        {name:"deepak",age:21},
        {name:"rahul",age:22},
        {name:"sonu",age:20},
        {name:"monu",age:23},
        {name:"anju",age:21}
    ];
    let trs="";
    for(let item of arr){
        trs+=`<tr>
        <td>${item.name}</td>
        <td>${item.age}</td>
        </tr>`;
    }
    let table=`
    <table border="1px" class="`
}