/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Tobalation (https://sketchfab.com/tobalation)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/retro-computer-3a496376915846459d77fc14fdd6c1e0
Title: Retro computer
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Computer = (props) => {
    const { nodes, materials } = useGLTF('/models/retro_computer.glb')
    const computerRef = useRef();
    return (
        <group {...props} dispose={null} ref={computerRef}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={0.364}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_4.geometry}
                        material={materials.TextureGrid}
                        position={[0, 0, -0.031]}
                        rotation={[0.087, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_6.geometry}
                        material={materials.TextureGrid}
                        position={[0, 0.5, 0.031]}
                        rotation={[0.087, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_8.geometry}
                        material={materials.TextureGrid}
                        position={[0.875, 0.063, 0.75]}
                        rotation={[0.087, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_10.geometry}
                        material={materials.TextureGrid}
                        position={[0, 0.062, 0.813]}
                        rotation={[0.087, 0, 0]}
                    />
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/models/retro_computer.glb')


// rembrandt
//
// city
// Made by @NikkitaFTW & contributors inspired by the gltfjsx cli

export default Computer;
