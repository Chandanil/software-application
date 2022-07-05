import React from 'react'
import {useState, useEffect} from  "react";
export const DocumentForm = () => {
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()
    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const inputFileRef = React.useRef();
    const onBtnClick = () => {
        /*Collecting node-element and performing click*/
        inputFileRef.current.click();
        
      };

      const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
    }
    const uploadDoc =[
        {value: 1},
        {value: 2},
        {value: 3},
        {value: 4},
    ];
    return(
        <>
        <div className="document-form">
            <form>
                <div className="form-group">
                    <label>Photo</label>
                    <div className="row">
                        {uploadDoc?.map((item,index)=>{
                        return(
                            <div className="col-sm-6 col-lg-3">
                            <div className='form-group'>
                            <input type="file" ref={inputFileRef} className="form-control"
                              onChange={onSelectFile}  hidden />
                              {selectedFile &&  <img src={preview} className="uploaded-img" /> }
                            <button type="button" onClick={onBtnClick} className="upload-btn"><i className="icon fa fa-cloud-upload"></i>Upload Now</button>
                                </div>
                        </div>
                        );
                        })}
                    </div>
                </div>
            </form>
        </div>
        </>
    )
}