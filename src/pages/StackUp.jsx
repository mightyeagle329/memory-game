import { useNavigate } from "react-router-dom"
import GamePlayVideo from "../assets/videos/middle.mp4"
import { useEffect } from "react"

const StackUp = () => {
    const navigate = useNavigate()

    const goNext = () => {
        navigate("/thank-you")
    }

    useEffect(() => {
        setTimeout(() => {
            goNext();
        }, 5000);
    })

    const nickname = 'leanne';

    const stackInfo = [
        ['Leanne G', 68],
        ['Leanne G', 68],
        ['Leanne G', 68],
        ['Leanne G', 68],
        ['Leanne G', 68],
        ['Leanne G', 68],
        ['Leanne G', 68],
        ['Leanne G', 68],
        ['Leanne G', 68],
        ['Leanne G', 68],
        ['Leanne G', 68],
        ['Leanne G', 68],
        ['Leanne G', 68],
        ['Leanne G', 68],
        ['Leanne G', 68],
        ['Leanne G', 68],
        ['Leanne G', 68],
        ['Leanne G', 68],
        ['Leanne G', 68],
        ['Leanne G', 68],
        ['Leanne G', 68],
        ['Leanne G', 68],
        ['Leanne G', 68],
        ['Leanne G', 68],
        ['Leanne G', 68],
        ['Leanne G', 68],
        ['Leanne G', 68],
        ['Leanne G', 68],
        ['Leanne G', 68],
        ['Leanne G', 68],
        ['Leanne G', 68],
        ['Leanne G', 68],
        ['Leanne G', 68],
        ['Leanne G', 68],
        ['Leanne G', 68],
        ['Leanne G', 68],
    ]

    return (
        <div className='w-[1080px] h-[1920px] top-0 fixed' onClick={goNext}>
            <div className='flex flex-col text-white text-center font-exdivabold mt-48'>
                <span className='m-0 p-0 uppercase font-extrabold [font-size:70px] [line-height:1em]'>how do you stack up?</span>
            </div>
            <div className="w-[940px] h-[1500px] bg-white border-black border-4 rounded-[20px] mx-auto mt-16 uppercase font-extrabold ">
                <div className="w-[940px] h-[1440px] px-[20px] py-[30px] [font-size:40px]">
                    <div className="w-full h-[70px] flex border-black border-b-2">
                        <div className="w-[60%] text-black text-left">GAMERTAG</div>
                        <div className="w-[40%] text-right [color:#107C10]">TIME</div>
                    </div>
                    <div className="h-[1380px] max-h-[1380px] overflow-hidden overflow-y-auto">
                        {stackInfo.map(([tag, time], index) => (
                            <div key={index} className="w-full h-[70px] flex border-gray border-b-2">
                                <div className="w-[60%] text-black text-left">{tag}</div>
                                <div className="w-[40%] text-right [color:#107C10]">{Math.floor(time / 60) + ':' + (time % 60 < 10 ? '0' + time % 60 : time % 60)}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StackUp
