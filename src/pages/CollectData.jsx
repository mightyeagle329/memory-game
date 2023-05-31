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
    navigate("/thank-you")
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
      <div className='grid grid-cols-3 gap-4'>
        <div className='col-span-3 bg-[#4e937a] rounded-2xl py-12 px-12 h-[250px]'>
          <h1 className='text-6xl mt-10 text-center text-white'>Instructions</h1>
        </div>
        <div className='col-span-3 mt-20 rounded-3xl h-[1310px]'>
          <form className='flex flex-col gap-4'>
            <div className='grid grid-cols-2 gap-12'>
              <div className="col-span-2">
                <input
                  value={formData.firstName}
                  readOnly
                  onFocus={(e) => onInputFocus("firstName", e.target.value)}
                  type='text'
                  placeholder='Nick Name'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-5xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-8 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  autoComplete='off'
                  required
                />
              </div>
              {/* <div>
                <input
                  value={formData.lastName}
                  readOnly
                  onFocus={(e) => onInputFocus("lastName", e.target.value)}
                  type='text'
                  placeholder='Last Name'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-5xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-8 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  autoComplete='off'
                  required
                />
              </div>
              <div>
                <input
                  value={formData.mobile}
                  readOnly
                  onFocus={(e) => onInputFocus("mobile", e.target.value)}
                  type='text'
                  placeholder='Mobile'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-5xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-8 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  autoComplete='off'
                  required
                />
              </div>
              <div>
                <input
                  value={formData.email}
                  readOnly
                  onFocus={(e) => onInputFocus("email", e.target.value)}
                  type='email'
                  placeholder='Email'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-5xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-8 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  autoComplete='off'
                  required
                />
              </div> */}
              {/* <div className='col-span-2 flex items-center mt-4 mb-8'>
                <input
                  checked={formData.messageMe}
                  onChange={onMessageMeChange}
                  id='default-checkbox'
                  type='checkbox'
                  className='w-16 h-16 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                />
                <label
                  htmlFor='default-checkbox'
                  className='ml-6 text-5xl font-medium text-gray-600 dark:text-gray-300'
                >
                  Yes! Message me!!!
                </label>
              </div> */}
              <div className='col-span-2'>
                <button
                  onClick={onSubmit}
                  type='button'
                  className='w-full focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-4xl px-20 py-8 m-auto mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
                >
                  Submit
                </button>
              </div>
            </div>
          </form>

          <div className='keyboard-wrapper m-auto absolute w-full left-0 p-12 bottom-4'>
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
        </div>
      </div>
    </div>
  )
}

export default CollectData
