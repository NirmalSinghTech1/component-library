import Badge from './Badge'

export default function Badges(){

    const badgeThemes = [
        'gray',
        'red',
        'yellow',
        'green',
        'blue',
        'indigo',
        'purple',
        'pink'
    ]

    return (
        <div className="badges-container">
            <div>
                {
                    badgeThemes.map(badge => {
                    return <Badge key={badge} colorTheme={badge} border="pill" />
                    })
                }
            </div>
            <div>
                {
                    badgeThemes.map(badge => {
                    return <Badge key={badge} colorTheme={badge} border="square" />
                    })
                }
            </div>
        </div>
    )
}