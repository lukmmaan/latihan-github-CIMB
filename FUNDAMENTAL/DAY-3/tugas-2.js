let hasil = ''
for (let i = 0; i <5; i++) 
{
    for (let j = 0; j < 5; j++) //nulis bintang kesamping. jika J=0, *. J=1,**. J=2,***. J=3,****. J=4,*****
    {
        hasil+= '*'
    }
    hasil+="\n" //

}
console.log(hasil)