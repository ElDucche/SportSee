import Dashboard from "./components/Dashboard"
import Navbar from "./components/Navbar"
import SportMenu from "./components/SportMenu"

const App = () => {
    return (
        <div className="w-screen h-screen grid place-content-center place-items-center bg-slate-300">
            <div className='w-[1024px] m-auto h-[780px] grid  bg-white shadow-lg place-items-center border relative'>
                <SportMenu />
                <Navbar />
                <div className="mt-16">
                    <Dashboard />
                </div>
                <footer className="text-xs text-white absolute -rotate-90 -left-8 bottom-20 font-medium">Copiryght, SportSee 2020</footer>
            </div>
        </div>
    )
}

export default App