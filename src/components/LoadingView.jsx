import loading_icon from "../assets/loading-icon.svg";
import Panel from "./Panel"

export default function LoadingView(){
    return (
        <Panel className='loading_panel mainwrapper'>
            <p>Understanding the document's layout ...</p>
            <img src={loading_icon} className="loading_icon"/>
        </Panel>
    )
}