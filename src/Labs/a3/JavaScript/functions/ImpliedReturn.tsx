
export default function impliedReturn(){
    const multiply= (a:number, b:number)=> a*b;
    const fourTimesFive=multiply(4,5);
    console.log(fourTimesFive);

    return(
        
        <div>
            <h3>Implied Return</h3>
            fourTimeFive={fourTimesFive}<br/>
            multiply(4,5)={fourTimesFive}<br/>
            
        </div>
    );
}

