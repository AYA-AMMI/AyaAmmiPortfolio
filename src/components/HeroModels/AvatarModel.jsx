import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

const AvatarModel = () => {
    const group = useRef()
    const { scene, animations } = useGLTF('/models/aya.glb')
    const { actions, names } = useAnimations(animations, group)

    useEffect(() => {
        // Joue la première animation si elle existe
        if (names.length > 0) {
            actions[names[0]]?.reset().fadeIn(0.5).play()
        }
    }, [actions, names])

    return <primitive ref={group} object={scene} />
}

// Précharge le modèle
useGLTF.preload('/models/aya.glb')

export default AvatarModel