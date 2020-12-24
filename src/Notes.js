import React,{useState , useEffect} from 'react';
import './Notes.css';

function Notes() {

    const[sem , setSem] = useState({value: "first"});
    const[branch , setBranch] = useState({value: "ce"});
    const[getNotes , setGetNotes] = useState(false);

    useEffect(() => {
        setGetNotes(false)
    }, [sem , branch])

    const handleSubmit = () => {
        setGetNotes(true);
    }
    const subList = (sem , branch) => {
        if(sem.value==="second" && branch.value ==="ce")
        {
            return (
                <>
                    <table id="customers">
  <tr>
    <th>Branch</th>
    <th>Notes Download Link</th>
    
  </tr>
  <tr>
    <td>CE</td>
    <td className="download"><a href="https://1drv.ms/b/s!AmH-WMOVk4ixhaNb7pjclzI_Km43dw?e=AcgjyV">Download</a></td>
    
  </tr>
  <tr>
    <td>IT</td>
    <td className="download"><a href="https://1drv.ms/b/s!AmH-WMOVk4ixhaNb7pjclzI_Km43dw?e=AcgjyV">Download</a></td>
  </tr>
  <tr>
    <td>ECE</td>
    <td className="download"><a href="https://1drv.ms/b/s!AmH-WMOVk4ixhaNb7pjclzI_Km43dw?e=AcgjyV">Download</a></td>
  </tr>
  <tr>
    <td>Mech</td>
    <td className="download"><a href="https://1drv.ms/b/s!AmH-WMOVk4ixhaNb7pjclzI_Km43dw?e=AcgjyV">Download</a></td>
  </tr>
  <tr>
    <td>EE</td>
    <td className="download"><a href="https://1drv.ms/b/s!AmH-WMOVk4ixhaNb7pjclzI_Km43dw?e=AcgjyV">Download</a></td>
  </tr>
  <tr>
    <td>Civil</td>
    <td className="download"><a href="https://1drv.ms/b/s!AmH-WMOVk4ixhaNb7pjclzI_Km43dw?e=AcgjyV">Download</a></td>
  </tr>
  <tr>
    <td>ECS</td>
    <td className="download"><a href="https://1drv.ms/b/s!AmH-WMOVk4ixhaNb7pjclzI_Km43dw?e=AcgjyV">Download</a></td>
  </tr>
</table>
                </>
            )
        }
    }

    return (
        <div className="notes">
            <div className="notes-container">
                <div className="note-01">
                <h3>Year </h3>
                <select onChange= {e => setSem({value: e.target.value})}>
                    <option value="first" >First</option>
                    <option value="second" >Second</option>
                    <option value="third" >Third</option>
                    <option value="fourth" >Fourth</option>
                </select>
                </div>
                <br />
               <div className="note-01"><h3>Branch</h3>
                <select onChange= {e => setBranch({value: e.target.value})}>
                    <option value="ce" >CE</option>
                    <option value="it" >IT</option>
                    <option value="mechanical" >Mechanical</option>
                    <option value="ecs" >ECS</option>
                    <option value="ece" >ECE</option>
                    <option value="civil" >Civil</option>
                </select>
                </div>
                <br />
                <button type="submit" onClick={handleSubmit} >Get Notes</button>
            </div>
            <div className="notes-list">
                {(getNotes)?subList(sem , branch): ""}
            </div>
        </div>
    )
}

export default Notes
