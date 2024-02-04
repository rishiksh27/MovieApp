import React from "react"

// class Student extends React.Component{
//     render(){

//         console.log(this.props);
//         const {stuname,marks}=this.props;
//         return(
//           <>
//           <h1>Hello,{stuname}</h1>
//           <h1>You have secured {marks}</h1>
//    <hr/>
//           </>

//         )
// }
// }


function Student(props){
    const {stuname,marks}=props;
    return(
<>
<h1>Hello,{stuname}</h1>
 <h1>You have secured {marks}</h1>
 <hr/>
</>
    )
}
export default Student;

