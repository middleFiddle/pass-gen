import Slider from "./Slider"
import Gauge from "./Gauge"
import Field from "./Field"
import Selectors from "./Selectors"

function App() {
    return (
        <main className="App min-h-screen font-mono-s font-heading flex flex-col justify-center space-y-12 items-center content-center">
            <Field />
            <div className=" bg-dark-gray-s container max-w-lg">
                <Slider />
                <Selectors />

                <Gauge />
            </div>
        </main>
    )
}

export default App
