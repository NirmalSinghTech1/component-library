import Tooltip from "./Tooltip"

export default function Tooltips() {
    return (
        <div className="tooltips-container">
            <div>
                <Tooltip
                    theme="black"
                    style="bold"
                />
                <Tooltip
                    theme="blue"
                    style="bold"
                />
                <Tooltip
                    theme="pink"
                    style="bold"
                />
                <Tooltip
                    theme="green"
                    style="bold"
                />
            </div>
            <div>
                <Tooltip
                    theme="black"
                    style="light"
                />
                <Tooltip
                    theme="blue"
                    style="light"
                />
                <Tooltip
                    theme="pink"
                    style="light"
                />
                <Tooltip
                    theme="green"
                    style="light"
                />
            </div>
        </div>
    )
}