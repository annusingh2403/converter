import React, {useState} from 'react';
import './App.css';

function App() {

  // const [name, setName] = useState(null);
  // const [print, setPrint] = useState(false);

  // const handleInput = (e) => {
  //   e.preventDefault();
  //   setName(e.target.value);
  //   setPrint(false);
  // }
  let text = "Enter Dog Age"
  const [age, setAge] = useState();
  const [value, setValue] = useState(text);
  const [humanAge, setHumanAge] = useState();

  const handleChange = (e) => {
    e.preventDefault();
    setAge(e.target.value);
  }

  const handleClick = () => {
    let humanAge = (age - 2) * 4 + 21;
    setHumanAge(humanAge);
    console.log(value);
    setValue(value);
    console.log(humanAge);
  }

  return (
    <>
    <div className='main'>
    <h1>Dog age to Human Age Converter</h1>
    <div>
      <input type="number" name='age' placeholder={value} onChange={handleChange} />
      <button onClick={handleClick}>Click</button>
        <h3>Human Age : <span className='human-age'>{humanAge}</span></h3>
    </div>
      {/* <div>
        <div style={{textAlign: 'center',color: 'steelblue',fontWeight: 600, letterSpacing:'2px'}}>
            <p style={{boxShadow: '0px 3px 4px .5px gray',width: '20rem',margin: '0 auto'}}><span style={{color: "tomato"}}>W</span>elcome</p>
        </div>
        <div className='minione'>
            <input type="text" placeholder='Name' onChange={handleInput}/>
            <button type='submit' onClick={() => setPrint(true)}>Click</button>
            <div className='name'>
                {print ? <div>  <img style={{width: '10rem'}} src="https://scontent.fbho4-1.fna.fbcdn.net/v/t39.30808-6/279926330_1376922682807728_1599240952028023856_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=e3f864&_nc_ohc=0DpXo-zbslwAX8CKvhL&_nc_ht=scontent.fbho4-1.fna&oh=00_AT9GtFpmw9V1p5LI6g_poRjnMUxNhJOsw75uOao67i4fGw&oe=633A5819" alt="" /><br/> <span style={{color:'steelblue',fontFamily: 'Dancing Script',fontSize: '35px',marginLeft: '10px'}}><br/> {name}</span></div> : null}
                {print ? <div>So jao bhaiya ji 😴 Good Night</div> : null}
            </div>
        </div>
      </div> */}
      <p>If you have to say something you can email me just click the button below</p>
      <form action="mailto:annusingh2403@gmail.com" method='post'>
        <button>Email Me</button>
      </form>
    </div>
    
  </>
  );
}

export default App;
