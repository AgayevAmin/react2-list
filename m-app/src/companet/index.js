function Index(props){
    return (
       props.data.map((element)=>{
          return(
             <div style={{
                border: '1px solid #000',
                margin: '10px',
                width: '500px', 
                backgroundColor: 'black',
                color: 'white'
 
             }}
          >
          <h2>Name: {element.name}</h2>
          <h2>Username: {element.username}</h2>
       </div>
       ) 
    })
    
    )
 }
export default Index;