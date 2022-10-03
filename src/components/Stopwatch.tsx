// 1. display stopwatch component
// 2. make it start after the user makes their first click on the roll button
// 3. stop the timer after the user has won
// 4. modify the 

export default function Stopwatch(props: {timerRef: string}) {
    return (
        <div>
            🕓 {props.timerRef}
        </div>
    )
}