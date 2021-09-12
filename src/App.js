import ToDo from "./components/ToDo";

function App() {
  return (
    <div>
      <h1>To Do List</h1>
      <ToDo text = 'Hello' />
      <ToDo text = 'Goodbye'/>
      <ToDo text = 'Good Afternoon' />
      
    </div>
    
  );
}

export default App;
