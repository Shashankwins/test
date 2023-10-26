let arr=["1","2","2","1","1","3"];
let obj={};

let count;
for(let i=0;i<arr.length;i++)
{
    count=0;
    for(let j=0;j<arr.length;j++)
    {
        if(arr[i]==arr[j])
        {
            count=count+1;
        }
        else
        {
            continue;
        }
    }
    console.log(arr[i]+" comes "+count+" times")
}