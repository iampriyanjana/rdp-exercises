import React from 'react';

function Commit(){

        fetch("https://whatthecommit.com/index.json")
         .then((resp)=>resp.json())
         .then((data)=>{
            console.log(data.commit_message);
         });
    return (
        <div>
            
        </div>
    )
}
export default Commit;