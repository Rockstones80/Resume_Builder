

const Login = () => {
  return (
    <div className=" flex ">
        <div>
          <div>
            <p className=" text-xl font-bold ">Resum<span>o</span></p>
            <p> Securely login to your Resumo </p>
          </div>
          <form>
            <div className="flex gap-4 mb-4">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                className="flex-1 border border-gray-300 rounded-md p-2"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                className="flex-1 border border-gray-300 rounded-md p-2"
              />
            </div>
            </form>

          
        </div>
        <div>
          
        </div>
    </div>
  )
}

export default Login
