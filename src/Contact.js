const Contact = () => {
    return(
        <div className="contacts">
            <h2>contact us</h2>
            <form style={{display:"flex",flexDirection:"column"}}>
             <input type="text" required placeholder="Full Name"/>
             <input type="email" required placeholder="Email"/>
             <textarea required placeholder="Enter your subject"></textarea>
             <button className="button2">Send Email</button>
            </form>
            
        </div>
    );
}

export default Contact;