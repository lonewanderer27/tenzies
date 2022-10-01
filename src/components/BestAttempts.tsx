export default function BestAttempts(props: {attempt: number}) {
    const styles = {
        color: 'green'
    }

    return (
        <div style={styles}>
            <p>
                🏆 Best Attempt: {props.attempt} move{props.attempt > 1 ? "s" : ""}
            </p>
        </div>
    )
}