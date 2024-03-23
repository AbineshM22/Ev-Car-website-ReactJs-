import Background from './components/Background/Background';
import { useState } from 'react';
 import NavBar from './components/NavBar/NavBar';
 import Hero from './components/Hero/Hero';
 import { useEffect } from 'react';
// import NavBar from './components/NavBar/NavBar';

const App = () => {
    let herodata=[
        {text1:"Drive into",text2:"what you love"},
        {text1:"Indulge",text2:"your passions"},
        {text1:"Give in to",text2:"your passions"}


    ]
    const [heroCount,setheroCount]=useState(0);
    const [playStatus,setPlayStatus]=useState(true);
    useEffect(()=>{
      setInterval(()=>{
        setheroCount((count)=>{return count===2?0:count+1})
      },2000)  
    },[])
    return (
        <div>
            <Background playStatus={playStatus} heroCount={heroCount}></Background>
            <NavBar/>
            <Hero
            setPlayStatus={setPlayStatus}
            herodata={herodata[heroCount]}
            heroCount={heroCount}
            setheroCount={setheroCount}
            playStatus={playStatus} />
                    </div>
    );
}

export default App;

