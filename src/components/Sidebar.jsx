import { useState } from "react"

import { NavLink, useNavigate } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"

import { MdLogout, MdInsertEmoticon, MdOutlineAssignment } from "react-icons/md"
import { FaBars, FaRegUserCircle } from 'react-icons/fa'
import { BsMap } from 'react-icons/bs'
import { TbFish } from 'react-icons/tb'
import { MdOutlineAdd } from 'react-icons/md'
import { ImCancelCircle } from 'react-icons/im'



const routes = [
    {
        path: "/dados",
        name: "Listar",
        icon: <MdOutlineAssignment />,
    },
    {
        path: "/peixes",
        name: "Cadastrar",
        icon: <MdOutlineAdd />,
    },
    {
        path: "/",
        name: "Mapa",
        icon: <BsMap />,
    },
    {
        path: "/usuarios",
        name: "Usuários",
        icon: <MdInsertEmoticon />,
    },
]

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(!isOpen)

    const showAnimation = {
        hidden: {
            width: 0,
            opacity: 0,
            transition: {
                duration: 0.3,
            },
        },
        show: {
            opacity: 1,
            width: "auto",
            transition: {
                duration: 0.5,
            },
        },
    }

    let navigate = useNavigate()
    const routeChange = () => {
        let path = '/login'
        navigate(path)
    }

    function clearUserData() {
        localStorage.clear()
    }

    function handleLogoutClick() {
        clearUserData()
        routeChange()
    }

    return (
        <div className="main-container">
            <motion.div
                animate={{
                    width: isOpen ? "200px" : "90px",
                    transition: {
                        duration: 0.5,
                        type: "spring",
                        damping: 10,
                    },
                }}
                className={`sidebar`}
            >
                <div className="top_section">
                    <AnimatePresence>
                        {isOpen && (
                            <motion.h1
                                variants={showAnimation}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                className="logo"
                            >
                                Logo
                            </motion.h1>
                        )}
                    </AnimatePresence>
                    <div className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>

                <section className="routes">
                    {routes.map((route) => (
                        <NavLink
                            activeClassName="active"
                            to={route.path}
                            key={route.name}
                            className="link"
                        >
                            <div className="icon">{route.icon}</div>
                            <AnimatePresence>
                                {isOpen && (
                                    <motion.div
                                        variants={showAnimation}
                                        initial="hidden"
                                        animate="show"
                                        exit="hidden"
                                        className="link-text"
                                    >
                                        {route.name}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </NavLink>
                    ))}
                </section>

                <section className="logout">
                    <div className="logout-icon">
                        <button onClick={handleLogoutClick}>
                            <MdLogout />
                        </button>
                    </div>
                </section>

            </motion.div>
            <main>{children}</main>
        </div>
    )
}

export default Sidebar