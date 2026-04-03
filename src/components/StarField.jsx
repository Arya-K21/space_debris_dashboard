import React, { useEffect, useRef } from 'react'

function StarField() {
  const starFieldRef = useRef(null)

  useEffect(() => {
    if (!starFieldRef.current) return

    const starField = starFieldRef.current
    const starCount = window.innerWidth > 1024 ? 100 : 50

    // Clear existing stars
    starField.innerHTML = ''

    // Generate random stars
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div')
      star.className = 'star'
      star.style.left = Math.random() * 100 + '%'
      star.style.top = Math.random() * 100 + '%'
      star.style.animationDelay = Math.random() * 3 + 's'
      star.style.opacity = Math.random() * 0.5 + 0.3
      starField.appendChild(star)
    }

    const handleResize = () => {
      // Regenerate stars on resize
      const newStarCount = window.innerWidth > 1024 ? 100 : 50
      if (starField.children.length !== newStarCount) {
        starField.innerHTML = ''
        for (let i = 0; i < newStarCount; i++) {
          const star = document.createElement('div')
          star.className = 'star'
          star.style.left = Math.random() * 100 + '%'
          star.style.top = Math.random() * 100 + '%'
          star.style.animationDelay = Math.random() * 3 + 's'
          star.style.opacity = Math.random() * 0.5 + 0.3
          starField.appendChild(star)
        }
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return <div className="star-field" ref={starFieldRef}></div>
}

export default StarField
