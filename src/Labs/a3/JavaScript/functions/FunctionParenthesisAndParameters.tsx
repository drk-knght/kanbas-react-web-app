export default function functionParenthesisAndParameters(){
    const square  = (a: number) => a * a;
    const plusOne = (a: number) => a + 1;
    const twoSquared = square(2);
    const threePlusOne = plusOne(3);

    return (
        <div>
            <h3>Paranthesis and parameters</h3>
            twoSquared={twoSquared}<br/>
            square(2)= {twoSquared}<br/>
            threePlusOne={threePlusOne}<br/>
            plusOne(3)={threePlusOne}<br/>
        </div>
    );
}