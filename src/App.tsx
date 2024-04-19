import Dashboard from "./components/Dashboard"
import Navbar from "./components/Navbar"
import SportMenu from "./components/SportMenu"

const App = () => {
    return (
        <div className=''>
            <SportMenu />
            <Navbar />
            <div className="w-screen h-screen grid place-content-center place-items-center">
                <Dashboard />
            </div>
        </div>
    )
}

export default App