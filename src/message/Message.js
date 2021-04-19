function Message (props){
    return(

        <div>
            <h3> Hello, my name is {props.fname} {props.lname} </h3>
            <h4> {props.description} </h4>
        </div>
    )
} 

export default Message;