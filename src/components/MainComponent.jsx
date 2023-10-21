import LoginForm from "./LoginForm";
import LoginPage from "./LoginPage";

export default function MainComponent({ isLoggedIn, onToggle }) {

  let content;

  (isLoggedIn) ? content = <LoginPage onLogout={onToggle} /> : content = <LoginForm onLogin={onToggle} />
    
    return (
        <div>
            {content}
        </div>
    ) 

    
}

