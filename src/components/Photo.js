import React from 'react'

const Photo = (props) => {
    //check if the media type is an image or videa
    const mediaType = props.imageData.media_type
    let mediaEmbed
    
    //if media type is an image
    if(mediaType === "image") {
        mediaEmbed = <img src={props.imageData.url} />
    }
    //if media type is a video
    else if (mediaType === "video") {
        mediaEmbed = 
            <iframe src={props.imageData.url}
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
        <div className="image-container">
            {/* grab the props from photo object stored in state */}
            <h3 className="image-title">{props.imageData.title}</h3>
            {mediaEmbed}
            <p className="image-caption">{props.imageData.explanation}</p>
        </div>
    )
}

export default Photo