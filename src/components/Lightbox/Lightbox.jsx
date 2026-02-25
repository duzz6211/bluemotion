import { useEffect, useCallback, useState } from 'react'
import Icon from '../Icon/Icon'

export default function Lightbox({ images, currentIndex, isOpen, onClose }) {
  const [activeIndex, setActiveIndex] = useState(currentIndex || 0)

  useEffect(() => {
    if (typeof currentIndex === 'number') {
      setActiveIndex(currentIndex)
    }
  }, [currentIndex])

  const goToPrev = useCallback(() => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1))
  }, [images])

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0))
  }, [images])

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowLeft') {
        goToPrev()
      } else if (e.key === 'ArrowRight') {
        goToNext()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose, goToPrev, goToNext])

  if (!isOpen || !images || images.length === 0) return null

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div className="lightbox" onClick={handleBackdropClick}>
      <div className="lightbox-content">
        <button className="lightbox-close" onClick={onClose} aria-label="닫기">
          <span>&times;</span>
        </button>

        <div className="lightbox-image-wrapper">
          {images.length > 1 && (
            <button className="lightbox-prev" onClick={goToPrev} aria-label="이전 이미지">
              <Icon name="chevronLeft" className="icon-lg" />
            </button>
          )}

          <div className="lightbox-image">
            <img
              src={images[activeIndex]?.src || images[activeIndex]}
              alt={images[activeIndex]?.alt || `이미지 ${activeIndex + 1}`}
            />
          </div>

          {images.length > 1 && (
            <button className="lightbox-next" onClick={goToNext} aria-label="다음 이미지">
              <Icon name="chevronRight" className="icon-lg" />
            </button>
          )}
        </div>

        {images.length > 1 && (
          <>
            <div className="lightbox-counter">
              {activeIndex + 1} / {images.length}
            </div>

            <div className="lightbox-indicators">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  className={`lightbox-dot${idx === activeIndex ? ' active' : ''}`}
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`이미지 ${idx + 1}로 이동`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
