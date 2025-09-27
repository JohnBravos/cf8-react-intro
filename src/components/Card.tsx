import type {ReactNode} from "react";

type CardProps = {
    title: string
    children: ReactNode
}
const Card = ({title, children}: CardProps) => {
    return (
        <>
            <div className="card text-center">
                <h2>{title}</h2>

                {children}

                <p>Lorem ipsum.</p>
            </div>
        </>
    )
};

export default Card;