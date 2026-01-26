export default function Badge({colorTheme = "gray", border = "pill"}) {
    return (
        <i className={`badge ${colorTheme} ${border}`}>Badge</i>
    )
}