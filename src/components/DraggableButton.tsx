import React, { useState, useRef, useEffect } from 'react';

interface DraggableButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  [key: string]: any;
}

const DraggableButton: React.FC<DraggableButtonProps> = ({ 
  children, 
  className = '', 
  onClick,
  ...props 
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isReturning, setIsReturning] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);
  const originalPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      
      const deltaX = e.clientX - dragStart.x;
      const deltaY = e.clientY - dragStart.y;
      
      setPosition({ x: deltaX, y: deltaY });
    };

    const handleMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
        setIsReturning(true);
        
        // Return to original position
        setTimeout(() => {
          setPosition({ x: 0, y: 0 });
          setTimeout(() => {
            setIsReturning(false);
          }, 500);
        }, 100);
      }
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragStart]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleClick = (e: React.MouseEvent) => {
    // Only trigger onClick if we weren't dragging
    if (!isDragging && onClick) {
      onClick();
    }
  };

  return (
    <button
      ref={buttonRef}
      className={`glass-button ${isDragging ? 'dragging' : ''} ${isReturning ? 'returning' : ''} ${className}`}
      onMouseDown={handleMouseDown}
      onClick={handleClick}
      style={{
        transform: `translate(${position.x}px, ${position.y}px) ${isDragging ? 'scale(1.1) rotate(5deg)' : ''}`,
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default DraggableButton;