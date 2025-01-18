import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import {Suspense} from "react";
import CanvasLoader from "../components/CanvasLoader.jsx";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constants/index.js";
import Basketball from "../components/Basketball.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import Cube from "../components/Cube.jsx";
import Rings from "../components/Rings.jsx";
import Computer from "../components/Computer.jsx";
import {Leva, useControls} from "leva";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";

const Hero = () => {
    // const controls = useControls('computer',{
    //     positionx : {
    //     value : 0, min : -10, max : 10,
    // },
    //         positiony : {
    //             value : 0, min : -10, max : 10,
    //         },
    //         positionz : {
    //             value : 0, min : -10, max : 10,
    //         },
    //         rotationx : {
    //             value : 0, min : -10, max : 10,
    //         },
    //         rotationy : {
    //             value : 0, min : -10, max : 10,
    //         },
    //         rotationz : {
    //             value : 0, min : -10, max : 10,
    //         },
    //         scalex : {
    //             value : 0, min : -10, max : 10,
    //         },
    //         scaley : {
    //             value : 0, min : -10, max : 10,
    //         },
    //         scalez : {
    //             value : 0, min : -10, max : 10,
    //         },
    //     }
    //     );

    const isSmall = useMediaQuery({maxWidth:480});
    const isMobile = useMediaQuery({maxWidth: 768});
    const isTablet = useMediaQuery({minWidth: 768, maxWidth:1024});

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    return (
        <section className="min-h-screen w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
                    Hi, I am Andy <span className="waving-hand">✋</span> 😊
                </p>
                <p className="hero_tag text-gray_gradient">
                    A Computer Science Major!
                </p>
            </div>

            <div className="w-full h-full absolute inset-0">
                {/*<Leva/>*/}
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader/>}>
                        <PerspectiveCamera makeDefault position={[0, 0, 20]}/>
                        {/*<HackerRoom*/}
                        {/*    // scale={0.07}*/}
                        {/*    // position={[0, 0, 0]} rotation={[0,280,0]}*/}
                        {/*    position={sizes.deskPosition}*/}
                        {/*    rotation={[0, -Math.PI, 0]}*/}
                        {/*    scale={sizes.deskScale}*/}
                        {/*/>*/}
                        <HeroCamera isMobile={isMobile}>
                            <Computer
                                // scale={0.07}
                                // position={[0, 0, 0]} rotation={[0,280,0]}
                                position={[0, -4, 0]}
                                scale={11}
                            />
                        </HeroCamera>


                        <group>
                            <Basketball position={sizes.targetPosition}/>
                            <ReactLogo position={sizes.reactLogoPosition}/>
                            <Rings position={sizes.ringPosition}/>
                            <Cube position={sizes.cubePosition}/>

                        </group>
                        <ambientLight intensity={2}/>
                        <directionalLight position={[10, 10, 10]} intensity={0.5}/>

                    </Suspense>

                </Canvas>
            </div>

            <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                <a href="#contact" className="w-fit">
                    <Button name = "Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96"/>
                </a>
            </div>
        </section>
    )
}
export default Hero
