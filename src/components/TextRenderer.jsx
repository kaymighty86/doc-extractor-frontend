import OCRSpan from "./OCRSpan"

export default function TextRenderer({texts = [], bboxes = [], labels = [], image_width = 0, image_height = 0}){

    const style = {
        width: `${image_width}px`,
        height: `${image_height}px`
    }

    return (
        <div className="ocr_output" style={style}>
            {
                texts.map((text, id) => {
                    //position texts based on bbox coord
                    return <OCRSpan key={id} text={text} bbox={bboxes[id]} label={labels[id]}/>
                })
            }
        </div>
    )
}