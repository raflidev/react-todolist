import { useEffect, useState } from "react";

function App() {

  const [kegiatan, setKegiatan] = useState("");
  const [todo, setTodo] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault()
    setTodo([...todo, kegiatan])
    setKegiatan("")
  }

  const todolist = []

  todo.forEach(data => {
    todolist.push(<div className="border border-black rounded p-4">
      {data}
    </div>
    )
  })

  return (
    <div className="bg-gray-800 h-screen">
      <div className="text-white">
        <div className="flex h-screen">
          <div className="w-full lg:w-3/12 m-auto">
            <div className="space-y-3 w-full">
              <h1 className="font-bold text-xl text-center">TodoList</h1>
              <div className="flex">
                <div className="w-full">
                  <form action="" className="text-black space-y-3" onSubmit={submitHandler}>
                    <input type="text" className="px-5 py-2 rounded w-full" value={kegiatan} onChange={(e) => setKegiatan(e.target.value)}  placeholder="Tuliskan kegiatan" name="asd" id="" />
                    <div className="text-center text-white bg-blue-500 px-4 py-2 rounded">
                      <input type="submit" value="Submit" />
                    </div> 
                  </form>
                  <div className="mt-3 rounded h-64 p-3 text-black bg-white space-y-3 overflow-auto">
                    {todolist}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
