import Header from "./components/Header"
import Main from "./components/Main"
import Sidebar from "./components/Sidebar"


const App = () => {
  return (
    <div className="bg-background text-primary-foreground flex h-[100vh]">
      <Sidebar />
      <div>
        <Header />
        <Main />
      </div>
    </div>
  )
}

export default App