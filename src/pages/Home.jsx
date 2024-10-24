import About from "@/components/About";
import Login from "@/components/Login";
import Modal from "@/components/Modal"
import { useState } from "react"

const Home = () => {
    const [active, setActive] = useState(null);
    const openModal = (data) => setActive(data);
    const closeModal = () => setActive(null);

    return (
        <div className="mt-14 bg-gray-200 w-full min-h-[90vh] flex justify-center items-center">
            <div className="w-full ">
                <div className="flex gap-5  items-center justify-center ">
                    <button
                        onClick={() => openModal('login')}
                        className="transform bg-black transition duration-500 hover:scale-125 hover:bg-gray-600 flex justify-center items-center text-white p-2 px-5">Login</button>
                    <button onClick={() => openModal("about")} className="transform bg-black transition duration-500 hover:scale-125 hover:bg-gray-600  flex justify-center items-center text-white p-2 px-5">About</button>
                </div>

                <Modal isOpen={active === "login"} onClose={closeModal}
                    width="500px"
                    height="auto"
                    color="lightblue"
                // placement="center"
                >
                    <Login />
                </Modal>

                <Modal isOpen={active === "about"} onClose={closeModal}
                    width="500px"
                    height="50%"
                    color="red"
                // placement="left"
                >
                    <About />
                </Modal>

            </div>
        </div>

    )
}

export default Home