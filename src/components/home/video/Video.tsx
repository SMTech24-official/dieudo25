'use client'

import React, { useState, useRef } from 'react'
import { Play } from 'lucide-react'

export default function Video() {
    const [isHovering, setIsHovering] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null)

    const handleHover = () => {
        setIsHovering(true)
        if (videoRef.current) {
            videoRef.current.play()
        }
    }

    const handleHoverEnd = () => {
        setIsHovering(false)
        if (videoRef.current && !isPlaying) {
            videoRef.current.pause()
            videoRef.current.currentTime = 0
        }
    }

    const handlePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause()
            } else {
                videoRef.current.play()
            }
            setIsPlaying(!isPlaying)
        }
    }

    return (
        <div 
            className="w-full h-full border relative"
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverEnd}
        >
            <video 
                ref={videoRef}
                src="/carVideo.mp4" 
                className='w-full h-full object-cover'
                loop
                muted
                playsInline
            />
            <button
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-4 transition-opacity duration-300 ${isHovering || isPlaying ? 'opacity-0' : 'opacity-100'}`}
                onClick={handlePlay}
                aria-label={isPlaying ? 'Pause video' : 'Play video'}
            >
                <Play className="w-8 h-8 text-black" />
            </button>
        </div>
    )
}