import Toast from "./Toast";

export default function Toasts() {
    return (
        <div className="toasts-container">
            <div>
                <Toast 
                    message="Success"
                />
                <Toast 
                    message="Information"
                />
            </div>
            <div>
                <Toast 
                    message="Warning"
                />
                <Toast 
                    message="Error"
                />
            </div>
        </div>
    )
}