export default function OCRSpan({text = "", bbox = [], image_width = 0, image_height = 0, label=""}){
    // Change the color and style of the text based on its label
    let additional_style
    switch (label){
        case "header":
            additional_style = {
                backgroundColor: "#0dac6a",
                color: "white",
                fontWeight: "bold"
            }
            break;
        case "question":
            additional_style = {
                color: "#0dac6a",
                fontWeight: "bold"
            }
            break;
        default:
            additional_style = {}
            break;
    }

    // create the style of the word
    const style = {
        display: "inline-block",
        position: "absolute",
        top: `${(bbox[1] / image_height) * 100}%`,  //convert the bbox to 0 - 100% of the parent element coordinate
        left: `${(bbox[0] / image_width) * 100}%`,
        ...additional_style
    }

    return (
        <span style={style}>{text}</span>
    )
}