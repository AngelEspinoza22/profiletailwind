

import React from 'react'

const GalleryModal = (props) => {

    return (
        <div>
            <input type="checkbox" id="my-modal-gallery" class="modal-toggle" ref={props.inputRef}/> 

            <div className="modal">
                <div className="modal-box style-modal">
                    {props.children} 
                    <div className="modal-action">
                        <label for="my-modal-gallery" className="btn">Close</label>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default GalleryModal
