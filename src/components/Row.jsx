export default function Row({lable, value}){
    return(
        <div className="row">
            <span className="rowLablel">{lable}</span>
            <span className="rowValue">{value}</span>
        </div>
    )
}