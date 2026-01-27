import Banner from "./Banner"

export default function Banners() {
    return (
        <div className="banners-container">
            <Banner  
                theme='success'
                message='multiline'
            />
            <Banner 
                theme='warning'
                message='multiline'
            />
            <Banner 
                theme="error"
                message='multiline'
            />
            <Banner 
                theme="neutral"
                message='singleline'
            />
        </div>
    )
}