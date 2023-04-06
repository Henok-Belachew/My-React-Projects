import Todo from "./Todo";
import InputField from "./inputField";
import './style.css'

export default function App () {
    return (
        <><h2 className="title">TODO LIST</h2><div className="container">

            <InputField />



            <section>

                {/* Creating instance of the component Todo */}
                <Todo />
                <Todo />

            </section>

        </div></> )
}

