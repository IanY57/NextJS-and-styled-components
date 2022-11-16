import Image from "next/image"
import { StyledCard } from "./styles/Card.styled"

export const Card = ({item: {id, title, body, image}}) => {
  return (
    <StyledCard layout={id % 2 === 0 && 'row-reverse'}>
        <div>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
        <div>
<Image src={`/images/${image}`} width="1125" height="800" alt='' />
        </div>
    </StyledCard>
  )
}
