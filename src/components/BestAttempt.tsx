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
        <div style={styles}>
            <p>
                <span>🏆 Best Roll{props.bestRoll > 1 ? "s" : ""}: {props.bestRoll}</span>
                &nbsp; &nbsp;
                <span>🏆 Best Time: {props.bestTime}</span>
            </p>
        </div>
    )
}