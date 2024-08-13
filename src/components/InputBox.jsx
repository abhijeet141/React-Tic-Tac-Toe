export function InputBox(props){
    return(
        <>
        <div>
            <input onChange={props.onChange} type="number" placeholder="Enter Size" className="text-left w-52 p-2 border rounded m-2 text-white sm:w-48" />
        </div>
        </>
    )
}