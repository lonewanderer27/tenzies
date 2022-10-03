export default function BestAttempt(
    props: {
        bestRoll: number,
        bestTime: string
    }
) {
    const styles = {
        color: 'green'
    }

    return (
        <>
            {props.bestRoll != 0 && props.bestTime ? 

            <div style={styles}>
                <p>
                    {props.bestRoll != 0 && <span>🏆 Best Roll{props.bestRoll > 1 ? "s" : ""}: {props.bestRoll}</span>}
                    &nbsp; &nbsp;
                    {props.bestTime != "00:00:00" && <span>🏆 Best Time: {props.bestTime}</span>}
                </p>
            </div>
            
            :

            <div/>
            }
        </>
    )
}