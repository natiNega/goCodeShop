import { useState } from "react";

// const ToggleButton = () => {
//   const [show, setShow] = useState(true);
//   // const click_but = ({string}) => onClick &&
//   return (
//     <div>
//       <button onClick={() => setShow(!show)}>Click Here</button>
//       {show && <h1>Hello</h1>}
//     </div>
//   );
// };

const ChangImg = () => {
    const [img,setImg] = useState(false);
    return(
        <>
        
    {img && <img src="https://m.media-amazon.com/images/I/51aRceSWyHL.jpg"></img>}
    <button onClick={() => setImg (!img) } >ShowPic</button>
   
    </>
 )}

export default ChangImg;
// export default ToggleButton;
