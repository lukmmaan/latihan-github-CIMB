ketemu = 0

for (let i = 1; i < 50; i++) 
{
    if (i %3 ==0 && i %5 ==0) 
    {


        console.log("fizzbuzz")

        ketemu++
        if (ketemu ==2) 
        {
            continue //break satu kondisi doang tapi lanjut ke program berkutnya
        }
        console.log("bukan fizzbuzz pertama")
        // if (ketemu <2) {
        //     ketemu++;
        // }
        // else{
        //     break
        // }
    }
    else if( i %3 ==0)
    {
        console.log("fizz")
    }
    else if(i %5 ==0)
    {
        console.log("buzz")
    }
    else{
        console.log(i)
    }
}