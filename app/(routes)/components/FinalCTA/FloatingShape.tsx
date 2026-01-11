

const FloatingShape = ({ size, type, top, left, right, duration, delay }:any) => {
  const renderShape = () => {
    const baseClasses = "absolute blur-sm";
    const style = {
      width: `${size}px`,
      height: `${size}px`,
      top,
      left,
      right,
      animation: `float-rotate ${duration}s ease-in-out infinite`,
      animationDelay: `${delay}s`,
    };

    switch (type) {
      case 'circle':
        return (
          <div
            className={`${baseClasses} rounded-full bg-white/8`}
            style={style}
          />
        );
      case 'square':
        return (
          <div
            className={`${baseClasses} bg-white/6 rotate-45`}
            style={style}
          />
        );
      case 'triangle':
        return (
          <div
            className={`${baseClasses}`}
            style={style}
          >
            <div
              className="w-0 h-0 border-l-[150px] border-l-transparent border-r-[150px] border-r-transparent border-b-[260px] border-b-white/7"
            />
          </div>
        );
      default:
        return null;
    }
  };

  return renderShape();
};


export default FloatingShape