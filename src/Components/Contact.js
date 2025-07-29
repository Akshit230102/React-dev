const Contact = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold m-2 p-2"> Contact Us</h1>
      <form>
        <input className="border-black border-1 m-2 p-2" type="text" placeholder="name" ></input>
        <input className="border-black border-1 m-2 p-2" type="text" placeholder="message" ></input>
        <button className="border-black border-1 m-2 p-2 rounded-xl"> Submit </button>
      </form>
    </div>
  )
}

export default Contact
