export default function Navigation({setPage}) {
    function handleClick(event) {
        if(event.target.tagName === 'LI'){
            let pageName = event.target.innerText
            setPage(pageName)
        }
    }   

    return (
        <nav className="nav-menu">
            <ul onClick={handleClick} >
                <li>Badges</li>
                <li>Banners</li>
                <li>Cards</li>
                <li>Testimonials</li>
                <li>Tooltips</li>
                <li>Toasts</li>
            </ul>
        </nav>
    )
}