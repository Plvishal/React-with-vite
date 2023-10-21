import { useState } from 'react';
function App() {
  const [color, setColor] = useState('#db5461');

  return (
    <>
      <div
        className="w-full h-screen direction-200 "
        style={{ backgroundColor: color }}
      ></div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2  rounded-xl">
          <button
            className="outline-none px-5 py-1 bg-red-600 text-white rounded-3xl"
            onClick={() => setColor('red')}
          >
            Red
          </button>
          <button
            className="outline-none px-5 py-1 bg-green-600 text-white rounded-3xl"
            onClick={() => setColor('green')}
          >
            Green
          </button>
          <button
            className="outline-none px-5 py-1 bg-yellow-600 text-white rounded-3xl"
            onClick={() => setColor('yellow')}
          >
            Yellow
          </button>
          <button
            className="outline-none px-5 py-1 bg-blue-600 text-white rounded-3xl"
            onClick={() => setColor('blue')}
          >
            Blue
          </button>
          <button
            className="outline-none px-5 py-1 bg-white-600 text-black rounded-3xl"
            onClick={() => setColor('white')}
          >
            White
          </button>
          <button
            className="outline-none px-5 py-1 bg-pink-600 text-white rounded-3xl"
            onClick={() => setColor('pink')}
          >
            Pink
          </button>
          <button
            className="outline-none px-5 py-1 bg-purple-600 text-white rounded-3xl"
            onClick={() => setColor('purple')}
          >
            Purple
          </button>
          <button
            className="outline-none px-5 py-1 bg-slate-600 text-white rounded-3xl"
            onClick={() => setColor('#6b717e')}
          >
            Slate Gray
          </button>
          <button
            className="outline-none px-5 py-1 bg-rose-600 text-white rounded-3xl"
            onClick={() => setColor('#881337')}
          >
            Misty Rose
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
