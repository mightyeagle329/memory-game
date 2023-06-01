import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Keyboard from "react-simple-keyboard"
import "react-simple-keyboard/build/css/index.css"

const CollectData = () => {
  const navigate = useNavigate()
  const [emailEntered, setEmailEntered] = useState("")
  const [keyboardIns, setKeyboardIns] = useState(null)
  const [loading, setLoading] = useState(false)
  const [keyLayoutName, setKeyLayoutName] = useState("default")
  const [focusedInput, setFocusedInput] = useState("")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    messageMe: false,
  })

  const goNext = () => {
    navigate("/stack-up")
  }

  const onKeyboardInit = (keyboard) => {
    setKeyboardIns(keyboard)
  }

  const setValueToInput = (value) => {
    const updated = { ...formData }

    switch (focusedInput) {
      case "firstName":
        updated.firstName = value
        break
      case "lastName":
        updated.lastName = value
        break
      case "email":
        updated.email = value
        break
      case "mobile":
        updated.mobile = value
        break

      default:
        break
    }

    setFormData((prevState) => ({
      ...prevState,
      ...updated,
    }))

    keyboardIns.setInput(value)
  }

  const onChange = (value) => {
    setValueToInput(value)
  }

  const onKeyPress = (button) => {
    if (button === "{shift}" || button === "{lock}") {
      handleShift()
    } else if (button === "{numbers}" || button === "{abc}") {
      handleNumbers()
    }

    let currentInputValue = ""
    switch (focusedInput) {
      case "firstName":
        currentInputValue = formData.firstName
        break
      case "lastName":
        currentInputValue = formData.lastName
        break
      case "email":
        currentInputValue = formData.email
        break
      case "mobile":
        currentInputValue = formData.mobile
        break

      default:
        break
    }

    let specialValue = null
    switch (button) {
      case "{@}":
        specialValue = currentInputValue + "@"
        break
      case "{.}":
        specialValue = currentInputValue + "."
        break
      case "{-}":
        specialValue = currentInputValue + "-"
        break
      case "{_}":
        specialValue = currentInputValue + "_"
        break
      case "{.com}":
        specialValue = currentInputValue + ".com"
        break
      case "{#}":
        specialValue = currentInputValue + "#"
        break
      case "{+}":
        specialValue = currentInputValue + "+"
        break

      default:
        break
    }

    if (specialValue) {
      // keyboardIns.setInput(specialValue)
      setValueToInput(specialValue)
    }
  }

  const handleShift = () => {
    const currentLayout = keyLayoutName
    const shiftToggle = currentLayout === "default" ? "shift" : "default"

    setKeyLayoutName(shiftToggle)
  }

  const handleNumbers = () => {
    const currentLayout = keyLayoutName
    const numbersToggle = currentLayout !== "numbers" ? "numbers" : "default"

    setKeyLayoutName(numbersToggle)
  }

  const onInputFocus = (inputName, inputValue) => {
    keyboardIns.setInput(inputValue)
    setFocusedInput(inputName)
  }

  const onMessageMeChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      ...{ messageMe: e.target.checked },
    }))
  }

  const onSubmit = () => {
    console.log("formData", formData)
    goNext()
  }

  const focusedStyle = { outline: "1px solid #2196f3", boxShadow: "0px 0px 7px #2196f3" }

  return (
    <div>
      <input
        value={formData.firstName}
        readOnly
        onFocus={(e) => onInputFocus("firstName", e.target.value)}
        type='text'
        placeholder='ENTER YOUR GAMERTAG'
        className='w-[835px] text-center px-16 py-12 rounded-[30px] border-black border-4 mt-[100px] [color:#999999] [font-size:50px] font-bold'
        autoComplete='off'
        required
      />
      <div className="mt-[90px]">
        <Keyboard
          layoutName={keyLayoutName}
          onChange={onChange}
          disableButtonHold={true}
          onKeyPress={onKeyPress}
          onInit={onKeyboardInit}
          stopMouseUpPropagation={true}
          stopMouseDownPropagation={true}
          layout={{
            default: [
              "q w e r t y u i o p",
              "a s d f g h j k l",
              "{shift} z x c v b n m {backspace}",
              "{numbers} {@} {-} {_} {=} {#} {+} {.} {.com}",
            ],
            shift: [
              "Q W E R T Y U I O P",
              "A S D F G H J K L",
              "{shift} Z X C V B N M {backspace}",
              "{numbers} {@} {-} {_} {=} {#} {+} {.} {.com}",
            ],
            numbers: ["1 2 3", "4 5 6", "7 8 9", "{abc} 0 {backspace}"],
          }}
          display={{
            "{numbers}": "123",
            "{ent}": "return",
            "{escape}": "esc ⎋",
            "{tab}": "tab ⇥",
            "{backspace}": "⌫",
            "{capslock}": "caps lock ⇪",
            "{shift}": "⇧",
            "{controlleft}": "ctrl ⌃",
            "{controlright}": "ctrl ⌃",
            "{altleft}": "alt ⌥",
            "{altright}": "alt ⌥",
            "{metaleft}": "cmd ⌘",
            "{metaright}": "cmd ⌘",
            "{abc}": "ABC",
            "{@}": "@",
            "{-}": "-",
            "{_}": "_",
            "{.}": ".",
            "{.com}": ".com",
            "{#}": "#",
            "{+}": "+",
            "{=}": "=",
            "{☺}": "☺",
            "{space}": "space",
            "{return}": "return",
          }}
        />
      </div>
      <button onClick={onSubmit} className="bg-[#9BF00B] flex justify-center items-center px-12 py-3 m-auto mt-48 rounded-lg [font-size:50px] font-extrabold [color:#054B16]">
        <span>SUBMIT</span>
        <span className="w-[50px]"></span>
        <svg width="24" height="35" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.52975 5.74727L4.35512 10.8279H0.543686L3.74641 5.74727L0.543686 0.666626H4.35512L7.52975 5.74727Z" fill="#054A17" />
        </svg>
      </button>
    </div>
  )
}

export default CollectData
