import { useState } from "react"

function Card_Wrapper({children}){
  return(
    <div style={{border : "2px solid black", padding : 50}}>
      {children}
    </div>
  )
}

function TextComponent(){
  return(
    <>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, quis minus? Ab consectetur minima nihil, tenetur, aliquam officiis debitis eum et mollitia optio aliquid! Natus, ullam? Saepe nemo sed harum!
    </>
  )
}

function App() {
  // const [todos, setTodos] = useState([{
  //   id : 1,
  //   title: "Go to gym",
  //   description: "Need to hit the gym from 7-9PM"
  // }, {
  //   id : 2,
  //   title: "Go to Clas",
  //   description: "Need to go to the class from 4-7 PM"
  // }, {
  //   id : 3,
  //   title: "Eat foor",
  //   description: "Need to eat food from 2-4 PM"
  // }])

  return (
    <>
      <Card_Wrapper>
        Hello CNL
      </Card_Wrapper>
      
      
      <Card_Wrapper>
        <div>
          Welcome from CNL
        </div>
      </Card_Wrapper>
      
      <Card_Wrapper>
        <TextComponent />
      </Card_Wrapper>




    </>
  )
}

    // <div>
    //   {/* syntax : arr.map(() =>) */}
    //   {todos.map(todo => <Todo key = {todo.id} title={todo.title} description={todo.description} />)}
    // </div>

export default App