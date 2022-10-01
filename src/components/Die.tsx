import { nanoid } from 'nanoid'

export default function Die(props: {
    id: string,
    value: number,
    isHeld: boolean,
    handleClick: (id: string) => void
}) {
    function generateFace(value: number) {
        let pipElements = []

        // generate the dots (pips)
        for (let i: number = 0; i < value; i++){
            pipElements.push(<span key={nanoid()} className="pip"/>)
        }
        
        if (value >= 1 && value <= 3) {
            return <>
                {pipElements}
            </>
        }
        
        else if (value == 4 || value == 6) {
            return <>
                <div className="column">
                    {pipElements.splice(0, Math.ceil(pipElements.length / 2))}
                </div>
                <div className="column">
                    {pipElements}
                </div>
            </>
        } 

        else {
            return <>
                <div className="column">
                    {pipElements.slice(0,2)}
                </div>
                <div className="column">
                    {pipElements[3]}
                </div>
                <div className="column">
                    {pipElements.slice(3,5)}
                </div>
            </>
        }
    }

    return (
        <div 
            className={`die ${props.isHeld ? "is-held": ""} _${props.value}-face`}
            onClick={() => props.handleClick(props.id)}
        >
            {generateFace(props.value)}
        </div>
    )
}