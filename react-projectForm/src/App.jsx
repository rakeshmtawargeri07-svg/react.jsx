
import './App.css'
import { useForm } from "react-hook-form"


function App() {

const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log("submitting the form ",data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label >first name: </label>
        <input 
        className={errors.firstName ? "error" : "input error"}
        { ...register("firstName", { 
          required: true ,
          minLength: {value:3,message:"min len least 3 characters"},
          maxLength: {value:5,message:"max len is 5 characters"} }) } />
          {errors.firstName && <p className="error">{errors.firstName.message}</p>}
      </div>
      <br></br>

      <div>
        <label >middle name: </label>
        <input 
        className={errors.middleName ? "error" : "input error"}
        { ...register("middleName", { 
          minLength: {value:2,message:"min len least 2 characters"},
          maxLength: {value:20,message:"max len is 20 characters"} }) } />
          {errors.middleName && <p className="error">{errors.middleName.message}</p>}
      </div>
      <br></br>

      <div>
        <label >last name: </label>
        <input { ...register("lastName") } />
      </div>
      <br/>
      <input type='submit'/>

    </form>
  )
}

export default App
