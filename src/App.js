import './App.css';
import {useState} from 'react';

//TODO undo sadece son itemi geri getiriyoru bunun nedenini anla ve sorunu coz

function App() {

  const [points,setPoints] = useState([])

const handleClick = (e) => {
  console.log(e.clientX,e.clientY)
  setPoints([...points,{
    x:e.clientX,
    y:e.clientY
  }])
  console.log(points)
}

const [rPoints, setRpoints] = useState([])

const redo = (e) => {
  e.stopPropagation()
  const data = [...points]
  const redoItem = data.pop()
  setRpoints([...data,redoItem])
  setPoints(data)

}

const undo = (e) => {
  e.stopPropagation()
  setPoints([...rPoints])
}

 return (
  <div className="App" onClick={handleClick}>
    {points.map((point)=>(
      <div className="point" style={{left:point.x,top:point.y}}></div>
    ))}
    <header className="header">
      <button onClick={redo} disabled={points.length==0}>
        Redo
      </button>
      <button onClick={undo} disabled={rPoints.length==0}>
        Undo
      </button>
    </header>
    </div>
  );
}




export default App;
