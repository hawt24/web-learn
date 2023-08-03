import "./App.css";
import Card from "./Component/Card";

function App() {

 const Persons=[{
   name:"Kemal Siraj",
   bio:"I am konjoyeww",
   linkeln:"https://www.linkedin.com/in/kemal-siraj/"
 },{
  name:"Kemal Siraj",
  bio:"I am konjoyeww",
  linkeln:"https://www.linkedin.com/in/kemal-siraj/"
 }
];


  return (
    <div className="App">
      {
        Persons.map(person=>{
          return (
            <Card

            name={person.name}
            bio={person.bio}
            linkeln={person.linkeln}
     
           />
          )
        }
          
          )
      }
 

    </div>
  );
}

export default App;
