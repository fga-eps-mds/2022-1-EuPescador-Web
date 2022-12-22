import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { MdLogout, MdInsertEmoticon, MdOutlineAssignment } from 'react-icons/md'
import { BsMap } from 'react-icons/bs'
import { FaCircle } from 'react-icons/fa'
import { GiDoubleFish } from 'react-icons/gi'
import { UserProps } from './Header'

import exit from '../assets/icons/sair_simbolo_web.svg'
import log from '../assets/icons/log_simbolo.svg'
import map from '../assets/icons/mapa_simbolo.svg'
import list from '../assets/icons/listagem_simbolo.svg'
import user from '../assets/icons/usuario_simbolo.svg'

const routesAdmin = [
  {
    path: '/dados',
    name: 'Listar',
    icon: list,
  },
  {
    path: '/',
    name: 'Mapa',
    icon: map,
  },
  {
    path: '/usuarios',
    name: 'Usuários',
    icon: user,
  },

  {
    path: '/logs',
    name: 'Logs',
    icon: log,
  },

]

const routesNotAdmin = [
  {
    path: '/dados',
    name: 'Listar',
    icon: list,
  },
  {
    path: '/',
    name: 'Mapa',
    icon: map,
  },
]


const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(isOpen) // Desativei a animação porque nao agrega valor ao produto e esta com bugs

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
      width: 'auto',
      transition: {
        duration: 0.3,
      },
    },
  }

  function fazRota() {
    const user = JSON.parse(localStorage.getItem('UserData')) as UserProps
    if (user.admin) {
      return (
        <section className="routes">
          {routesAdmin.map((route) => (
            <NavLink to={route.path} key={route.name} className="link">
              <div className="icon">
                <img src={route.icon} style={{width: "25px", height: "30px"}}/>
              </div>
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
      )
    } else {
      return (
        <section className="routes">
          {routesNotAdmin.map((route) => (
            <NavLink to={route.path} key={route.name} className="link">
              <div className="icon">
                <img src={route.icon} style={{width: "25px", height: "30px"}}/>
              </div>
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
      )
    }
  }

  const navigate = useNavigate()
  const routeChange = () => {
    const path = '/login'
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
          width: isOpen ? '300px' : '90px',
          transition: {
            duration: 0.5,
            type: 'spring',
            damping: 10,
          },
        }}
        className={`sidebar`}
      >
        <div>{fazRota()}</div>
        <section className="logout">
          <div className="logout-icon">
            <button onClick={handleLogoutClick}>
              <img src={exit} style={{width: "25px", height: "30px"}}/>
            </button>
          </div>
        </section>
      </motion.div>
      <main>{children}</main>
    </div>
  )
}

export default Sidebar
