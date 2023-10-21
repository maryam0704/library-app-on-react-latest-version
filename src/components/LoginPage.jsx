

const LoginPage = ({  onLogout } ) => {
    
    return (
        <div>
                 <h1>Welcome to the App!</h1>
                    <button onClick={onLogout}>Logout</button>
                </div>
           
    );
};

export default LoginPage;
