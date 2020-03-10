const array = [80,90,100]

// 0 - 59 : F
// 60-69 : D
// 70- 79 : C
//80-89 : B
//90-100 :A


console.log(calculategrade(array))

function calculategrade(marks) 
{
    let avg = calculateaverage(marks)
    if (avg>100) 
    {
        return 'A'    
    }
    if (avg> 90) 
    {
        return 'B'    
    }
    if (avg >70) 
    {
        return 'C'    
    }
    if (avg > 60) 
    {
        return 'D'    
    }
    if(avg>50)
    {
        return 'E'
    }
    else
    {
        return 'F'
    }
    
}

function calculateaverage(array) 
{
    let c = 0
    for (let i = 0; i < array.length; i++) 
    {
        c = c +array[i]
    }
    return c/array.length
}

