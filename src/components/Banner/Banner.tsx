import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import aviaoImg from "../../assets/images/aviaoExpevia.png"

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(useGSAP)

export default function Banner(){

    const containerGeral = useRef<HTMLDivElement>(null)
    const containerPinado = useRef<HTMLDivElement>(null)
    const aviao = useRef<HTMLDivElement>(null)
    const menu = useRef<HTMLDivElement>(null)


    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerGeral.current,
                start: "top top",
                end: "bottom bottom",
                pin: containerPinado.current,
                scrub: 1
            }
        })

        const tlAviao = gsap.timeline()


        gsap.to(menu.current, {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.3
        })


        tlAviao.to(aviao.current, {
            ease: "linear",
            x: 50,
            duration: 0.3,
            yPercent: -50,
            rotate: "120deg"
        }).to(aviao.current, {
            ease: "linear",
            duration: 0.3,
            x: 100,
            yPercent: 150,
            rotate: "0deg"
        }).to(aviao.current, {
            duration: 0.5,
            x: 148,
            yPercent: 0,
            rotate: 0
        })


    })


    return (

        <div ref={containerGeral} className="h-[200vh]">
            {/* [clip-path:polygon(47.2916%_31.1111%,65.9896%_24.074%,71.8229%_72.9629%,53.125%_80%)] */}
            <div ref={containerPinado} className="h-screen bg-begeClaro relative ">
                <div className="h-full w-full flex flex-col ">
                    <div className="flex justify-end lg:px-paddingXpc px-paddinXcel  h-[10vh] items-center relative ">
                        <div ref={aviao} className="h-[7vh] absolute -left-14">
                            <img className="w-auto h-full object-cover" src={aviaoImg} alt="" />
                        </div>
                        <div ref={menu} className="flex gap-[8.9vh] -translate-y-full opacity-0">
                            <div className="text-lg text-laranjaPrincipal font-Bebas uppercase p-4 ">
                                Em grupo
                            </div>
                            <div className="text-lg text-laranjaPrincipal font-Bebas uppercase p-4 ">
                                Viagens
                            </div>
                            <div className="text-lg text-laranjaPrincipal font-Bebas uppercase p-4">
                                Informações
                            </div>
                        </div>
                    </div>  
                    <div className="flex flex-col items-center relative bg-red-700">
                        <div className="absolute z-20 bg-blue-700 h-[21.75vh] w-[16.3125vw] border-8 border-white border-solid right-[48%] rotate-12 top-[40vh]"></div>
                        <div className=" mt-[8.9vh] text-7xl font-Yatra text-laranjaPrincipal flex justify-center w-1/2 text-center relative z-20">
                            Com a ExpeVia sua viagem não fica só no papel
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
                
                {/* banner por cima */}
                <div className="h-full w-full flex flex-col absolute inset-0 bg-black [z-index:1000000] [clip-path:polygon(47.2916%_31.1111%,65.9896%_24.074%,71.8229%_72.9629%,53.125%_80%)] ">
                    <div className="flex justify-end lg:px-paddingXpc px-paddinXcel  h-[10vh] items-center relative ">
                        <div ref={aviao} className="h-[7vh] absolute -left-14">
                            <img className="w-auto h-full object-cover" src={aviaoImg} alt="" />
                        </div>
                        <div ref={menu} className="flex gap-[8.9vh] -translate-y-full opacity-0">
                            <div className="text-lg text-laranjaPrincipal font-Bebas uppercase p-4 ">
                                Em grupo
                            </div>
                            <div className="text-lg text-laranjaPrincipal font-Bebas uppercase p-4 ">
                                Viagens
                            </div>
                            <div className="text-lg text-laranjaPrincipal font-Bebas uppercase p-4">
                                Informações
                            </div>
                        </div>
                    </div>  
                    <div className="flex flex-col items-center relative bg-red-700">
                        <div className="absolute z-10 bg-blue-700 h-[50vh] w-[34vh] border-8 border-white border-solid -rotate-12 left-1/2 top-[17vh]"></div>
                        <div className=" mt-[8.9vh] text-7xl font-Yatra text-white flex justify-center w-1/2 text-center relative z-50">
                            Com a ExpeVia sua viagem não fica só no papel
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}