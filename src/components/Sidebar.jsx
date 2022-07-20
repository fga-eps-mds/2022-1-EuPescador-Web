import { useState } from "react"

import { NavLink } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"

import { FaBars, FaRegUserCircle } from 'react-icons/fa'
import { BsClipboardData, BsMap } from 'react-icons/bs'
import { TbFish } from 'react-icons/tb'

const routes = [
    {
        path:"/",
        name: "Início",
        icon: <BsMap />,
    },
    {
        path:"/usuario",
        name: "Usuário",
        icon: <FaRegUserCircle />,
    },
    {
        path:"/peixes",
        name: "Peixes",
        icon: <TbFish />,
    },
    {
        path:"/dados",
        name: "Dados",
        icon: <BsClipboardData />,
    },
]

const Sidebar = ({children}) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(!isOpen)

    const showAnimation = {
        hidden: {
          width: 0,
          opacity: 0,
          transition: {
            duration: 0.5,
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

    return (
        <div className="main-container">
            <motion.div
                animate={{
                    width: isOpen ? "200px" : "45px",
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
                            Eu Pescador
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
                                className="link_text"
                            >
                                {route.name}
                            </motion.div>
                        )}
                  </AnimatePresence>
                </NavLink> 
                    ))}
                </section>
            </motion.div>
            <main>{children}</main>
        </div>
    )
}

export default Sidebar