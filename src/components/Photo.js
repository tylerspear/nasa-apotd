import React from 'react'

const Photo = (props) => {
    //check if the media type is an image or videa
    const mediaType = props.image.media_type
    let mediaEmbed
    
    //if media type is an image
    if(mediaType === "image") {
        mediaEmbed = <img src={props.image.url} />
    }
    //if media type is a video
    else if (mediaType === "video") {
        mediaEmbed = 
            <iframe src={props.image.url}
            frameBorder='0'
            allow='autoplay; encrypted-media'
            allowFullScreen
            />
    }
    //error handling
    else {
        mediaEmbed = <div>Error: unknown media type</div>
    }

    return (
        <div>
            {/* grab the props from photo object stored in state */}
            <h3>{props.image.title}</h3>
            {mediaEmbed}
        </div>
    )
}

export default Photo