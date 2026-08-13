export default function Panel({className, align="column", children}){
    const classes = `panel ${align == "column"? "column_align":"row_align"} ${className != undefined? className : ""}`

    return (
      <div className={classes}>{children}</div>
    )
}