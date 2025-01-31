import './App.css';
import SideBar from './components/SideBar';

const App = () => {
  return (
    <div className="flex">
      <SideBar/>
      <section className="text-center text-green-500 font-bold ">
        <p>
          Hi Mom!
        </p>
      </section>
    </div>
  )
}

export default App