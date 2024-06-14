import Dashboard from "./components/Dashboard"
import Navbar from "./components/Navbar"
import SportMenu from "./components/SportMenu"

const App = () => {
    return (
            <div className='w-full m-auto h-screen grid  bg-white shadow-lg place-items-center border relative'>
                <SportMenu />
                <Navbar />
                <div className="mt-16 w-4/5">
                    <Dashboard />
                </div>
                <footer className="text-xs text-white absolute -rotate-90 -left-8 bottom-20 font-medium">Copiryght, SportSee 2020</footer>
            </div>
    )
}

export default App