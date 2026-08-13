export default function OutputSection({title = "", children}){
    return (
        <div className="output_section">
            {title && <h3>{title}</h3>}
            <div className="display_area">
                {children}
            </div>
        </div>
    )
}