// props:{author: "", content: ""}

export function Button(props){
    console.log(props)
    return(
    <div>
        <p><strong>{props.author}</strong></p>
        <p>{props.content}</p>
    </div>
    )
}
 