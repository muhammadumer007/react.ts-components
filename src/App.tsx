import UMButton from './Components/UMButton';
import './App.css';
import Table from './Components/Table'
import UMinput from './Components/UMinput';


     
function val(UMinput: { value: any; }){


  
  console.log(UMinput.value)

}
let click=()=>{
  console.log();
  

}

    
    function App() {
      
      let data = [
      
        {
          userId: 1,
          id: 7,
          title: "illo expedita consequatur quia in",
          completed: false,
        },
        {
          userId: 1,
          id: 8,
          title: "quo adipisci enim quam ut ab",
          completed: true,
        },
        {
          userId: 1,
          id: 9,
          title: "molestiae perspiciatis ipsa",
          completed: false,
        },
        {
          userId: 1,
          id: 10,
          title: "illo est ratione doloremque quia maiores aut",
          completed: true,
        },
        {
          userId: 1,
          id: 11,
          title: "vero rerum temporibus dolor",
          completed: true,
        },
        {
          userId: 1,
          id: 12,
          title: "ipsa repellendus fugit nisi",
          completed: true,
        },
        {
          userId: 1,
          id: 13,
          title: "et doloremque nulla",
          completed: false,
        },
        {
          userId: 1,
          id: 14,
          title: "repellendus sunt dolores architecto voluptatum",
          completed: true,
        },

        {
          userId: 1,
          id: 19,
          title: "molestiae ipsa aut voluptatibus pariatur dolor nihil",
          completed: true,
        },
        {
          userId: 1,
          id: 20,
          title: "ullam nobis libero sapiente ad optio sint",
          completed: true,
        },

      ];

    
    
      return (
        <div className="App">
          <Table
            label="Data"
            cols={[
              {
                heading: "Id",
                key: "id",
              },
              {
                heading: "Title",
                key: "title",
              },
              {
                
                key: "completed",
              },
            ]}
            datasourse={data}
          />
 
        
 <UMButton label="ADDD"  ok={click} />
 <UMinput value=''   type ='text' onChange={val} />

        </div>
      );
  }
  
export default App;
