import { useState } from 'react'; 
import styles from './login.module.css'
import { useDispatch } from 'react-redux'; // Para disparar uma ação
import { createUser } from '../../redux/user/slice'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export function Login() {
  const dispatch = useDispatch(); // dispara uma ação
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const navigate = useNavigate();

  function handleLogin(e){
    e.preventDefault()
    
    if(name === "" || email === "") {
      toast.error("Campos vazios. Digite os dados do usuário.")
      return ;
    } 

    dispatch(createUser({
      name: name,
      email: email
    })) // chamando a action para ser executada passando as informações necessárias

    navigate("/painel")
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
          <Link to="/painel">
            <h1 className={styles.title}>Dev Login</h1>
          </Link>

          <form onSubmit={handleLogin} className={styles.form}>
            <input 
              type="text" 
              className={styles.input}
              value={name}
              onChange={ event => setName(event.target.value)}
              placeholder='Digite seu nome....'
            />
            <input 
              type="text" 
              className={styles.input}
              value={email}
              onChange={ event => setEmail(event.target.value)}
              placeholder='Digite seu email...'
            />

            <button type="submit">Acessar</button>
          </form>
      </main>
    </div>
  )
}
