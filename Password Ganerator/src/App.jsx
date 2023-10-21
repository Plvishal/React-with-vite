import { useState } from 'react';
function App() {
  const [length, setLength] = useState(8);

  return (
    <>
      <div className="w-full max-w-md max-auto shadow-md rounded-lg px-4 my-8 text-orange-400 bg-gray-700">
        <h1 className="text-white text-center py-4 ">Password Genarator</h1>
        <div className="flex shadow rounded-lg  overflow-hidden mb-4">
          <input
            type="text"
            // value={password}
            className="outline-none w-full py-1 px-3"
            readOnly
          />
          <button className="outline-none bg-blue-950 text-white px-3 py-0.5 shrink-0">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className=" flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              className="curser-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length:{length}</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
