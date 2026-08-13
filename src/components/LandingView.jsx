import Panel from "./Panel"
import OutputSection from "./OutputSection";
import { useState } from "react";

export default function LandingView({onSubmitImage}){

    const [docUploaded, setDocUploaded] = useState({
        file: undefined,
        url: undefined
    })

    function handleImageSelected(event){
        const file = event.target.files[0]

        if(file){
            const url = URL.createObjectURL(file)  // create object URL of the file
            setDocUploaded({
                file,
                url
            })
        }
    }

    function sumbitForm(event){
        event.preventDefault();

        const formData = new FormData(event.currentTarget)
        onSubmitImage(formData)
    }

    return (
        <Panel align="column">
            <form className="upload_form" onSubmit={sumbitForm}>
                <input className='image_upload' type="file" accept='image/*' name="file" onChange={handleImageSelected} required/>
                <button>Retrieve Text & Layout</button>
            </form>
            {docUploaded.file && <div>
                <OutputSection title="Your Document">
                    <img src={docUploaded.url}/>
                </OutputSection>
            </div>}
        </Panel>
    )
}