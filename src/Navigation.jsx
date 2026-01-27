export default function Navigation({setPage, currentPage}) {

    function handleClick(event) {
        if(event.target.tagName === 'LI'){
            let pageName = event.target.innerText
            setPage(pageName)
        }
    }   

    return (
        <nav className="nav-menu">
            <ul onClick={handleClick} >
                <li className={currentPage === 'Badges' ? 'active' : undefined}>Badges</li>
                <li className={currentPage === 'Banners' ? 'active' : undefined}>Banners</li>
                <li className={currentPage === 'Cards' ? 'active' : undefined}>Cards</li>
                <li className={currentPage === 'Testimonials' ? 'active' : undefined}>Testimonials</li>
                <li className={currentPage === 'Tooltips' ? 'active' : undefined}>Tooltips</li>
                <li className={currentPage === 'Toasts' ? 'active' : undefined}>Toasts</li>
            </ul>
        </nav>
    )
}