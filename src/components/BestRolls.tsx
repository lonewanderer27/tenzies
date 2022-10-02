export default function BestRolls(props: {attempt: number}) {
    const styles = {
        color: 'green'
    }

    return (
        <div style={styles}>
            <p>
                🏆 Best Attempt: {props.attempt} roll{props.attempt > 1 ? "s" : ""}
            </p>
        </div>
    )
}