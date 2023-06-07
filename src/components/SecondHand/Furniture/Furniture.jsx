import React from "react";
import json from "./Post.json"
function Furniture(){
    const [detail, setDetail] = useState(json.results)
    return(
        <div>
            <div id="furniture-container">
            {detail &&  
          detail.map((value, index) => (
            <Tablet
              key={index}
              result={value}
            />
          ))}
            </div>
        </div>
    )



}
export default Furniture