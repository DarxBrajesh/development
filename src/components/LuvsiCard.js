import React,{useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const TinderCard = ({ title, content, onSwipe }) => {
    const [isDragging, setIsDragging] = useState(false);
    const [dragStartX, setDragStartX] = useState(0);
    const [translateX, setTranslateX] = useState(0);
  
    const handleMouseDown = (event) => {
      setIsDragging(true);
      setDragStartX(event.clientX);
    };
  
    const handleMouseMove = (event) => {
      if (!isDragging) return;
  
      const offsetX = event.clientX - dragStartX;
      setTranslateX(offsetX);
    };
  
    const handleMouseUp = () => {
      setIsDragging(false);
  
      if (translateX > 100) {
        onSwipe('right');
      } else if (translateX < -100) {
        onSwipe('left');
      }
  
      setTranslateX(0);
    };
  
    return (
      <Card
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{
          width: 300,
          height: 400,
          background:'#DC378F',
          position: 'relative',
          transform: `translateX(${translateX}px)`,
          transition: isDragging ? 'none' : 'transform 0.3s ease-in-out',
          cursor: 'grab',
          userSelect: 'none',
          marginLeft:'5px',
          zIndex: isDragging ? 2 : 1,
        }}
      >
        <CardContent>
          <Typography variant="h6">{title}</Typography>
          <Typography>{content}</Typography>
        </CardContent>
      </Card>
    );
  };

export default TinderCard;
