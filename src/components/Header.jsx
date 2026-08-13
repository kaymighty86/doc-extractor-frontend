import homeIcon from "../assets/home-icon.svg";

export default function Header({onClickHome}){
    return (
        <div className="app_header">
            <button onClick={onClickHome}><img src={homeIcon}/></button>
            <h1 className='app_name'>DOC EXTRACTOR</h1>
        </div>
    )
}