import { Carousel } from "react-bootstrap"
import { useState } from "react";


const HomeCarousel = () => { 

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    }

 return(
    <Carousel className="HomeCarousel" activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
            {/* Image */}
            <Carousel.Caption>

            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
)
}

export default HomeCarousel