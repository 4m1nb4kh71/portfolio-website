import { Component } from "react";
import { profilepic,ecomhome,bloghome } from "../../static/images"; 
import { Link } from "react-router-dom";
import "./mainpage.css";
class Mainpage extends Component{

fadein = ()=>{
        /************SCROLL ANIMATION****************** */
    const animated = Array.from(document.getElementsByClassName('animated')) ;
    
    const appearOptions = {

        threshold:0,
        rootMargin:"0px 0px 200px 0px",
    };
    const appearOnScroll = new IntersectionObserver(function(entries,appearOnScroll){

    entries.forEach(entry =>{
    
        if(entry.isIntersecting){
            
            entry.target.classList.add('appear');
            entry.target.classList.remove('disappear');
            return;
        }
        
        entry.target.classList.add('disappear');
        entry.target.classList.remove('appear');
           
          
            
        
            
        
    })

    },appearOptions);

    animated.forEach(element =>{
        appearOnScroll.observe(element);
    })

}
componentDidMount =() => {
    this.fadein();
}

    render(){
        return(

            <div className="main_page">
                {/* --------------------------------------------section 1-----------------------------------------*/}
                <div className="section1">
                   <div className='combo'>

                        <div className="circle">
                            <img src ={profilepic} />
                        </div>

                        <div className="greeting">
                           <div><h1>Hi there ! <br/> i'm <span className="secTextColor">Amin Bakhti</span></h1></div>
                            <div className="icons">
                                <a href ="https://github.com/4m1nb4kh71" target="_blank" className="github">
                                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                                </a>
                                <a href ="https://web.facebook.com/amin.bakhti.9406/" target="_blank" className="github">
                                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                                </a>
                                <a href ="https://www.instagram.com/4m1nb4k/" target="_blank" className="github">
                                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
                                </a>
                            </div>
                        </div>
                       

                   </div>
                   
                    
                    <div className="whatido">
                        <div className="txt">

                            <p >What i do ?</p>
                        </div>
                        <div className="whatido_content">
                            <p >
                                I <span className="secTextColor">create</span> new things, <span className="secTextColor">build</span> new projects,
                                <span className="secTextColor"> solve</span> problems that i encounter while doing it, 
                                <span className="secTextColor"> make</span> them come to life then, i<span className="secTextColor"> do</span> it again. 
                            </p>

                        </div>
                        
                    </div>

                </div>
               {/* -------------------------------------------------section 2----------------------------------------------------/*/}
                <div className="section2">
                    <div className="main_grid">
                        <div className="about_me">
                            <div className="moreabtme">
                                <h2 className="label secTextColor">More about me</h2>
                                <p>
                                    I learn new technologies and build new projects to stay up to date with what's going on.
                                   
                                </p>
                                <p>
                                    Also, creating things and figuring out how they work is a way of having fun for me.
                                </p>
                            </div>
                            <div className="expertise">
                            <h2 className="label secTextColor">Expertise</h2>
                                <p>
                                    Fullstack developer mainly with Django + React. 
                                </p>
                                <div className="skills">
                                    <p className="tag">python</p><p className="tag">javascript</p><p className="tag">Django</p><p className="tag">React</p><p className="tag">PHP</p><p className="tag">HTML/CSS</p>
                                </div>
                            </div>


                        </div>
                        <div className="social_links">


                                <h2 className="label secTextColor">Find me here</h2>
                                <a href="">Facbook</a><br/>
                                <a href="#">Instagram</a><br/>
                        </div>
                    </div>

                </div>
                {/* -------------------------------------------------section 3----------------------------------------------------*/}
                
                <div className="section3" id="projects">
                   <div className="projects_container">
                        <div className="title">
                            <p >Projects</p>
                        </div>
                        <div className="projects_content">
                            <div className="card animated delay1 " >
                                <Link to='/project/1'>
                                    <div className="card_content">
                                        <div className="card_img_container">
                                            <img className="img" src={ecomhome}/>
                                        </div>
                                        <div className="card_text_content">
                                            <div className="card_title">
                                                <h3 className="secTextColor">Online Store</h3>
                                            </div>
                                            <div className="card_desc">
                                                <p>Online store with paypal payments integration.</p>
                                            </div>
                                        </div>

                                    </div>
                                </Link>
                            </div>
                            <div className="card animated delay2" >
                                <Link to='/project/2'>
                                    <div className="card_content">
                                        <div className="card_img_container">
                                            <img className="img" src={bloghome}/>
                                        </div>
                                        <div className="card_text_content">
                                            <div className="card_title">
                                                <h3 className="secTextColor">Blog</h3>
                                            </div>
                                            <div className="card_desc">
                                                <p>Online store with paypal payments integration.</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="card animated delay3"> 
                                <Link to='/project/3'>
                                    <div className="card_content">
                                        <div className="card_img_container">
                                            <img className="img" src={ecomhome}/>
                                        </div>
                                        <div className="card_text_content">
                                            <div className="card_title">
                                                <h3 className="secTextColor">Compus website</h3>
                                            </div>
                                            <div className="card_desc">
                                                <p>Online store with paypal payments integration.</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>

                   </div>

                </div> 
             {/* -------------------------------------------------section 3----------------------------------------------------*/}
                <div className="section2">
                  <div className="contact">
                    <div className="contact_title">
                        <h1 className=" secTextColor">Get In Touch</h1>
                    </div>
                    <div className="contact_content">
                        <div> 
                            <h3>Email address: </h3>
                            <p >4m1nb4kh71@gmail.com</p>
                            
                        </div>
                        <div>
                        <h3 >Phone number: </h3>
                            <p >0649796930</p>
                        </div>

                    </div>
                    
                  </div>
                   
                </div>
            </div>



        );
    }

}

export default Mainpage;