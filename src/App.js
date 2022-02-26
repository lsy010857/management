import './App.css';
import Customer from './components/Customer';

const customers=[
  {
  'id' :1,
  'image': 'https://placeimg.com/64/64/any',
  'name':'홍동',
  'birthday' : '000108'
  }, {
    'id' :2,
    'image': 'https://placeimg.com/64/64/any',
    'name':'홍동',
    'birthday' : '000108'
    },
    {
      'id' :3,
      'image': 'https://placeimg.com/64/64/any',
      'name':'홍동',
      'birthday' : '000108'
      }
]
function App() {  
  return (
    <div>{
    customers.map(c => {
      return (
        <Customer
        key={c.id}
         id ={c.id}
         name={c.name}
         image={c.image}
         birthday={c.birthday}
         />
      )
    })
  }</div>
  );
}


export default App;
