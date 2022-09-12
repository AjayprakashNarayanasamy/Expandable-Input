import React , {useState} from 'react';

import './style.css';

export default function App() {


  const [ arr , setArr] = useState([
    "Name" , "Age" , "Exp"
  ])

  const [profile  , setProfile] = useState({
    "Name":"",
    "Age":"",
    "Exp":""
  })

  console.log(profile)


  const [ arr1 , setArr1] = useState([])

  const[splice , setSplice] = useState() 


  const handleChange = (e) =>
  {
    setProfile({...profile , [e.target.name]:e.target.value})
  }



  const handleClick = (data) =>
  {
  

    if(!arr1.includes(data))
    {
      setArr1([...arr1 , data])
      console.log(data)
      console.log(arr1)
    }else{
      
      
      var copy = [...arr1]
      console.log(copy , "Copy ")

      // var copyArr1 =  arr1.splice(arr1.indexOf(data), 1)
 
     var data =    copy.splice(arr1.indexOf(data) , 1)
     console.log(data)
        console.log(copy , "Copy ")
        setArr1(copy)
  

    //   var selectedProfilesCopy = [...selectedProfiles]
    //   if (index > -1) {
    //     // console.log(index)
    //     selectedProfilesCopy.splice(index, 1)
    //     setSelectedProfiles(selectedProfilesCopy)
    //   }
    //   console.log("Splice",data)
    //   console.log(arr1)
    
    //   console.log("INdex" , splice )
   
    //  console.log("copyArr1",copyArr1)
    //  setArr1(copyArr1)


    }


  }



  


  return (

 



    <div>


     {


arr.map((data)=>(
  <>
  <div onClick={()=>handleClick(data)}>+{data}</div>
  <></>
  {console.log("Return",arr1.includes(data))}
  {arr1.includes(data) ? <input  onChange ={(e)=>handleChange(e)} type="text" name={data} value={profile[data]} placeholder={data}/>:null}
  </>

))



     }
     





 
    </div>
  );
}

