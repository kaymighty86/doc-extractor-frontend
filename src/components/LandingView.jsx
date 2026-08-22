import Panel from "./Panel"
import OutputSection from "./OutputSection";
import { useState } from "react";

export default function LandingView({onSubmitImage, error}){

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
        <Panel align="column" className="mainwrapper">
            {error && <p className="error_toast">{error}</p>}
            <p style={{textAlign: "center", padding: "0px 1rem"}}>Upload an Image Document to Retrieve the Formated Texts from the Image</p>
            <form className="upload_form" onSubmit={sumbitForm}>
                <input className='image_upload' type="file" accept='image/*' name="file" onChange={handleImageSelected} required/>
                <button>Retrieve Text & Layout</button>
            </form>
            {docUploaded.file && <div>
                <p style={{textAlign: "center"}}>Click the Button Above ☝️ to start the process.</p>
                <OutputSection title="Document Preview">
                    <img src={docUploaded.url}/>
                </OutputSection>
            </div>}
        </Panel>
    )
}