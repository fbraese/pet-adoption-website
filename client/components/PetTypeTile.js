import React from "react"

const PetTypeTile = (props) => {
    const { id, type, description, imgUrl } = props.petType
    return (
        <div>
            <div>
                <img src={imgUrl} />
            </div>
            <h3>
                {type}
            </h3>
            {description}
        </div>
    )
}

export default PetTypeTile