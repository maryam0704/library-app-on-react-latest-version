

const LoginForm = ({onLogin}) => {
   
    const handleSubmit = (event) => {
        event.preventDefault();
        onLogin();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input type="text" />
            </label>
            <br />
            <label>
                Password:
                <input type="password" />
            </label>
            <br />
            <button type="submit">Log In</button>
        </form>
    );
};

export default LoginForm;
