import React from "react";
import image from "../media/images/slideshow_placeholder.jpg" 
import image2 from "../media/images/slideshow_2.jpg"
import image3 from "../media/images/slideshow_3.jpg"

const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 2500;

const images = [
    'https://images.unsplash.com/photo-1516714819001-8ee7a13b71d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1534844978-b859e5a09ad6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    'https://images.unsplash.com/photo-1512099053734-e6767b535838?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1028&q=80'
]

function Slideshow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshowcontainer">
        <div className="slideshow">
        <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
            <div className="slide">
                <img src={image}/>
            </div>
            <div className="slide">
                <img src={image2}/>
            </div>
            <div className="slide">
                <img src={image3}/>
            </div>
        </div>
        </div>
    </div>
  );
}

export default Slideshow;