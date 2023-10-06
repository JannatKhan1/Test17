import 'D:/Jannat/5.5 Interim Sem/MERN/React and node js/f1/src/components/style.css'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function F1()
{
    const myStyle = {
        color:"blue",
        backgroundColor:"black"
    }
    return(
        <div>
          <h1 style={{color:"red"}}>Inline Style</h1>
          <h1 style={myStyle}>Internal Styling</h1>
          <h1 class="c1">External styling</h1>
          <h1 class="text-center text-success bg-dark">Bootstrap style</h1>
        </div>    
    )
}
export default F1;