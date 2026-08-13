import { useEffect, useRef } from "react"
import OCRSpan from "./OCRSpan"

export default function TextRenderer({texts = [], bboxes = [], labels = [], image_width = 0, image_height = 0}){

    const textRendererRef = useRef();

    useEffect(()=>{
        // scale the height of this renderer relative to how much the width of the image has changed (because this element scales dynamically as set with css)
        const computed_width = parseInt((window.getComputedStyle(textRendererRef.current).width).slice(0,-2));  // get the computed element width and remove the "px" suffix
        const width_diff_percent = (computed_width - image_width)/image_width;  // get the rate of change of the width
        const height_diff = image_height * width_diff_percent
        textRendererRef.current.style.height = `${image_height + height_diff}px`;  // scale the height
    }, [image_width, image_height])

    return (
        <div className="ocr_renderer" ref={textRendererRef}>
            {
                texts.map((text, id) => {
                    //position texts based on bbox coord
                    return <OCRSpan key={id} text={text} bbox={bboxes[id]} image_width={image_width} image_height={image_height} label={labels[id]}/>
                })
            }
        </div>
    )
}