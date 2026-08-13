import Panel from "./Panel";
import OutputSection from "./OutputSection";
import TextRenderer from "./TextRenderer";

import smaple_image from "../assets/91391286.png";

export default function ResultView({result}){
    // console.log(result)
    return (
        <Panel align="column" className="mainwrapper">
            <p>Result received!</p>
            <Panel align="row">
                {/* Display the Annotated Image from the Backend */}
                <OutputSection title="How the image was understood">
                    <img className="annot_img" src={`data:image/png;base64,${result.output.annotated_image}`} />
                    {/* <img src={smaple_image} /> */}
                </OutputSection>
                {/* Display the machine generated text detected from the image */}
                <OutputSection title="Your Extracted Info">
                    <TextRenderer texts={result.output.texts} bboxes={result.output.bboxes} labels={result.output.labels} image_width={result.image_width} image_height={result.image_height}/>
                    {/* <img src={`data:${result.annotated_image}`} /> */}
                </OutputSection>
                {/* <OutputSection>
                    <img src={smaple_image} /> */}
                    {/* <img src={`data:${result.annotated_image}`} /> */}
                {/* </OutputSection> */}
            </Panel>
        </Panel>
    )
}