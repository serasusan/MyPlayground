export const Task = (props) => {
    return(
    
    <div className="task" >
        <div className="taskName">      
          <h3 style={{ color: props.completed ? "#1D2B53" : "black", textDecoration: props.completed? 'line-through':'none'}}>{props.taskName}</h3>
        </div>
        <div className="buttons">
        <button class="button-17" role="button" onClick={ () => props.completeTask(props.id)} style={{margin:'10px'}}>Complete</button>
        <button class="button-17" role="button" onClick={() => props.deleteTask(props.id)}> X </button>
        </div>

    </div>
    );
}