import React, { useRef, useEffect, useState } from "react";

const Canvas = (props) => {
  const canvasRef = useRef(null);

  const [position, setPosition] = useState({
    x: 100,
    y: 100,
  });

  const [dimensions, setDimensions] = useState({
    width: 30,
    height: 30,
  });

  const getPixelRatio = context => {
    var backingStore =
    context.backingStorePixelRatio ||
    context.webkitBackingStorePixelRatio ||
    context.mozBackingStorePixelRatio ||
    context.msBackingStorePixelRatio ||
    context.oBackingStorePixelRatio ||
    context.backingStorePixelRatio ||
    1;

    return (window.devicePixelRatio || 1) / backingStore;
};

  const draw = (ctx) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "red";
    ctx.fillRect(position.x, position.y, dimensions.width, dimensions.height);
    setPosition((prevState) => {
      let { y } = prevState;
      y += .01;
      return { ...prevState, y };
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let ratio = getPixelRatio(ctx);
    let width = getComputedStyle(canvas)
        .getPropertyValue('width')
        .slice(0, -2);
    let height = getComputedStyle(canvas)
        .getPropertyValue('height')
        .slice(0, -2);

    canvas.width = width * ratio;
    canvas.height = height * ratio;
    canvas.style.width = `100%`;
    canvas.style.height = `100%`;
    let animation;

    function render() {
      draw(ctx);
      animation = window.requestAnimationFrame(render);
    }
    render();

    return () => {
      window.cancelAnimationFrame(animation);
    };
  }, [draw]);

  return <canvas ref={canvasRef} {...props} />;
};

export default Canvas;
