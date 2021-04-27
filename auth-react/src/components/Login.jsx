import React, {useState, useCallback} from 'react'
import {auth, db} from '../firebase'
import {withRouter} from 'react-router-dom'


const Login = (props) => {
    const [email, setEmail] = useState('prueba@prueba.com');
    const [pass, setPass] = useState('123456');
    const [ error, setError] = useState(null);
    const [registro, setRegistro] = useState(true);

    const procesarDatos = e => {
        e.preventDefault()
        if(!email.trim()) {
            setError('Ingrese Email')
            return
        }
        if(!pass.trim()) {
            setError('Ingrese Contraseña')
            return
        }
        if(pass.length < 6) {
            setError('La contraseña debe tener mas de 6 caracteres')
            return
        }
        setError(null);

        if(registro) {
            registrar()
        }else {
            login();
        }
    }

    const login = useCallback(async() => {
            try {
              const res = await auth.signInWithEmailAndPassword(email, pass);
              setEmail('');
              setPass('');
              setError(null);
              props.history.push('/admin')
            } catch (error) {
                console.log(error);
                if(error.code === 'auth/invalid-email'){
                    setError('Email no valido')
                }
                if(error.code === 'auth/user-not-found'){
                    setError('El email no existe')
                }
                if(error.code === 'auth/wrong-password'){
                    setError('Contraseña incorrecta')
                }
            }
        },
        [email, pass, props.history],
    )

    const registrar = useCallback(async() => {
            try {
               const res = await auth.createUserWithEmailAndPassword(email, pass);
               await db.collection('usuarios').doc(res.user.email).set({
                   email: res.user.email,
                   uid: res.user.uid
               })
               await db.collection(res.user.uid).add({
                   name: 'Tarea de ejemplo',
                   uid: res.user.uid
               })
               setEmail('');
               setPass('');
               setError(null);
               props.history.push('/admin')
            } catch (error) {
                console.log(error);
                if(error.code === 'auth/invalid-email'){
                    setError('Formato de Email inválido')
                }
                if(error.code === 'auth/email-already-in-use') {
                    setError('Email ya utilizado.')
                }
            }
        },
        [email, pass, props.history],
    )

    return (
        <div className='mt-5'>
            <h3 className="text-center">
                {
                    registro ? 'Registrate!' : 'Logueate!'
                }
            </h3>
            <hr/>
            <div className="row justify-content-center">
                <div className="col-12 col-sm-8 col-md-6 col-xl-4">
                    <form onSubmit={procesarDatos}>
                        {
                            error && (
                                <div className="alert alert-danger">
                                    {error}
                                </div>
                            )
                        }
                        <input 
                            type="email" 
                            className="form-control mb-2"
                            placeholder='Ingrese un Email'
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                        />
                        <input 
                            type="password" 
                            className="form-control mb-2"
                            placeholder='Ingrese una Contraseña'
                            onChange={e => setPass(e.target.value)}
                            value={pass}
                        />
                        <button 
                            className="btn btn-dark btn-lg btn-block" 
                            type='submit'>
                            {
                                registro ? 'Registrarse' : 'Loguearse'
                            }
                        </button>
                        <button 
                            className="btn btn-info btn-sm btn-block"
                            onClick={() => setRegistro(!registro)}
                            type='button'
                        >
                        {
                            registro ? '¿Ya estas registrado? Logueate!' : '¿No tienes cuenta? Registrate!'
                        }
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Login);
