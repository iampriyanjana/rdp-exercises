import {useState} from 'react';

function Deets(){
    const [firstName,setFirstName]= useState('');
    const [lastName,setLastName] = useState('');
    const [email,setEmail] = useState('');

    return (
         <>
          <form>
             <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)}></input>
              <br/>
              <input type="text" value={lastName} onChange={e => setLastName(e.target.value)}></input>
              <br/>
              <input type="text" value={email} onChange={e => setEmail(e.target.value)}></input>
              <br/>
              <button onClick={
                ()=> alert(`${JSON.stringify({ firstName, lastName, email })}`)
              }>Sign Up</button>
          </form>
          
         </>

    );
}
export default Deets;