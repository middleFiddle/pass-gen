import { useEffect, useRef, useState } from "react"
import Slider from "./Slider"
import Gauge from "./Gauge"
import Field from "./Field"
import Selectors from "./Selectors"
import Button from "./Button"
import { generateString } from "../lambda/generateString"

const alphaUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const alphaDown = alphaUp.toLowerCase()
const symbols = "~!@#$%^&*_+=-.,?"
const numerals = "1234567890"

function App() {
    const [inclUp, setInclUp] = useState(false)
    const [inclDown, setInclDown] = useState(false)
    const [inclNum, setInclNum] = useState(false)
    const [inclSym, setInclSym] = useState(false)
    const [length, setLength] = useState(0)

    const [value, setValue] = useState("")
    const [copied, setCopied] = useState(false)

    const booleans: boolean[] = [inclUp, inclDown, inclSym, inclNum]
    const index: number = booleans.filter((e) => e === true).length

    const handleSubmit = (e) => {
        e.preventDefault()
        setCopied(false)
        let pool: string = ""
        if (inclUp) {
            pool += alphaUp
        }
        if (inclDown) {
            pool += alphaDown
        }
        if (inclNum) {
            pool += numerals
        }
        if (inclSym) {
            pool += symbols
        }

        const result = generateString(length, pool)
        setValue(result)
    }

    return (
        <main className="App min-h-screen font-mono-s text-heading flex flex-col justify-center space-y-12 items-center content-center">
            <h1 className="text-gray-s text-heading">Password Generator</h1>
            <Field value={value} copied={copied} setCopied={setCopied} />
            <div className=" bg-dark-gray-s container max-w-lg px-3 pb-3 ">
                <div className="p-4 space-y-8">
                    <Slider
                        setLength={setLength}
                        length={length}
                        setCopied={setCopied}
                    />
                    <Selectors
                        setInclUp={setInclUp}
                        setInclDown={setInclDown}
                        setInclNum={setInclNum}
                        setInclSym={setInclSym}
                        setCopied={setCopied}
                    />
                    <Gauge index={index} />
                    <Button handleSubmit={handleSubmit} />
                </div>
            </div>
        </main>
    )
}

export default App
