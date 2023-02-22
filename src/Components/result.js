import React from 'react';

const Result = () => {
  const [result, setresult] = useState("");
return (
    <div class= "calc-result">
    <form>
        <input type="text" value={result}></input>
    </form>
    </div>
)
}

export default Result;