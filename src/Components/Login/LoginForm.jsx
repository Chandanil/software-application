import "./LoginForm.scss";
export const LoginForm = () => {
    return(
        <>
        <div className="login-form">
            <div className="cl-form">
            <div className="container-fluid">
            <form>
                <div className="cl-title">
                <h5>Agent Login</h5>
                <span>Hey, Enter your Details to get sign in to your account</span>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Product Code" className="form-control"/>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="User ID" className="form-control"/>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Password" className="form-control"/>
                </div>
                <button type="submit" className="cl-btn">Sign In</button>
            </form>
            </div>
            </div>
        </div>
        </>
    )
}