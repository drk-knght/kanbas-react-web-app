import ES5Functions from "./ES5Functions"
import ArrowFunctions from "./ArrowFunctions"
import ImpliedReturn from "./ImpliedReturn";
import FunctionParenthesisAndParameters from "./FunctionParenthesisAndParameters"

function workingWithFunctions(){
    return (
        <div>
          <h2>Functions</h2>
            <ES5Functions/>
            <ArrowFunctions/>
            <ImpliedReturn/>
            <FunctionParenthesisAndParameters/>
        </div>
      );
}

export default workingWithFunctions;