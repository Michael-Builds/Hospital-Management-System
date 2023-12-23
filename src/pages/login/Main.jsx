import { useState, useEffect } from "react";
import { MdPerson } from "react-icons/md";
import { AiOutlineEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import Logo from "../../assets/sidelogo.png";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Login() {
    const [passwordVisible, setPasswordVisible] = useState(false);

    // State Management
    const [currentTime, setCurrentTime] = useState("");
    const [greeting, setGreeting] = useState("");
    const [loading, setLoading] = useState(false);
    const [userId, setUserID] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // Handle Click for Login 
    const handleLoginClick = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            if (
                (userId === "admin" || userId === "admin@gmail.com") &&
                password === "admin"
            ) {
                setLoading(false);
                Swal.fire("Fusion Flow", `You've Successfully Logged in as ${"admin"}`, "success");
                navigate("overview");
            } else {
                Swal.fire("Fusion Flow", `No user found, try again`, "error");
                setLoading(false);
                return;
            }

            // After loading, navigate to the next page
            setLoading(false);
            // Navigate logic here
        }, 2000); // Simulated loading time: 2 seconds
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    useEffect(() => {
        const updateTimeAndGreeting = () => {
            const now = new Date();
            const hours = now.getHours();

            let greetingMsg = "Hello";
            if (hours >= 0 && hours < 12) {
                greetingMsg = "Good Morning";
            } else if (hours >= 12 && hours < 16) {
                greetingMsg = "Good Afternoon";
            } else {
                greetingMsg = "Good Evening";
            }


            setGreeting(greetingMsg);
            setCurrentTime(now.toLocaleTimeString());
        };

        updateTimeAndGreeting();
        const interval = setInterval(updateTimeAndGreeting, 1000); // Update time and greeting every second

        return () => {
            clearInterval(interval); // Clean up interval on unmount
        };
    }, []);
    return (
        <div className="flex flex-col md:flex-row h-screen">
            <div className="lg:w-1/2  bg-white flex items-center">
                <div className="w-full lg:w-1/2 lg:mx-auto ">
                    <img
                        src={Logo}
                        alt="Logo"
                        width={280}
                        height={280}
                        className="mx-auto mb-4 flex items-center justify-center"
                    />
                    <h2 className="text-center text-xl mb-2 mt-4 font-quicksand text-gray-600 font-bold">
                        {greeting}
                    </h2>
                    <p className="text-center text-1xl mb-6 font-quicksand text-gray-400 ">
                        Please login to your account
                    </p>
                    <form
                        className="space-y-4"
                        onSubmit={(e) => handleLoginClick(e)}>
                        <div className="space-y-1 mb-2">
                            <label
                                htmlFor="username"
                                className="block text-gray-600 font-medium font-quicksand">
                                Email
                            </label>
                            <div className="relative">
                                <input
                                    required
                                    type="text"
                                    id="userId"
                                    name="userId"
                                    onChange={(e) => setUserID(e.target.value)}
                                    className="w-full text-gray border border-gray rounded-md p-2 pl-4 font-quicksand focus:outline-none focus:border-blue-500"
                                    placeholder="Email Address"
                                />
                                <MdPerson className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray" />
                            </div>
                        </div>
                        <div className="space-y-1 relative mb-8">
                            <label
                                htmlFor="password"
                                className="block text-gray-600 font-medium font-quicksand">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    required
                                    type={passwordVisible ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full text-gray border border-gray rounded-md p-2 pl-4 font-quicksand focus:outline-none focus:border-blue-500"
                                    placeholder="Enter your password"
                                />
                                {passwordVisible ? (
                                    <AiOutlineEye
                                        onClick={togglePasswordVisibility}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray"
                                    />
                                ) : (
                                    <AiFillEyeInvisible
                                        onClick={togglePasswordVisibility}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray"
                                    />
                                )}
                            </div>
                        </div>
                        <button
                            style={{ marginTop: '28px' }}
                            className=" py-2 px-4 rounded text-center w-full transition-colors duration-300 font-quicksand bg-gradient-to-b bg-primary text-white hover:bg-dark disabled:bg-primary"
                            type="submit"
                            disabled={loading}>
                            {loading ? "Please wait.. logging in" : "Login"}
                        </button>

                        <div className="text-center ">
                            <span className="hover:underline font-quicksand text-md font-semibold text-blue-500">
                                Forgot Password ?
                            </span>
                        </div>
                    </form>
                </div>
            </div>
            <div className="relative md:w-1/2 transition-colors duration-300 bg-gradient-to-r bg-dark  h-full">

                <div className="flex items-center justify-center mt-56 pl-12">
                    <h1 className="text-white font-bold text-6xl">{currentTime}</h1>
                </div>

                <div className="absolute mt-14 w-full">
                    <div className="p-3 pl-30 text-center">
                        <h1 className="text-white font-bold text-xl font-quicksand mb-2">Powered By</h1>
                        <h3 className="text-white text-base font-quicksand">Fusion Flow Technology</h3>

                    </div>
                </div>
            </div>


        </div>
    );
}
