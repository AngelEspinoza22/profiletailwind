
import React,{useState} from 'react'
import MyProgressBar from './ProgressBar'
import AddAPhoto from '@material-ui/icons/AddAPhoto'
import './Gallery.css'

const Upload = () =>{

  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ['image/png', 'image/jpeg'];

  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } 
    else {
      setFile(null);
      setError('Please select an image file (png or jpg)');
    }
  };

  return (
    <form>

      <h2 className="title-gallery">Recuerdos</h2>
        <label>
          <input className="btn btn-primary" type="file" onChange={handleChange} />
            <span className="span-style">
              <AddAPhoto fontSize="large" />
            </span>
          </label>
        
      <div className="output">
        { error && <div className="error">{ error }</div>}
        { file && <div>{ file.name }</div> }
        { file && <MyProgressBar file={file} setFile={setFile} /> }
      </div>

    </form>
  );
}

export default Upload;  