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
                            <h1>Hi there ! <br/> i'm <span className="secTextColor">Amin Bakhti</span></h1>
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
                                <a href="#">Twitter</a><br/>
                                <a href="#">Youtube</a>
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
                  
                    <h1>Get In Touch</h1>
                </div>
            </div>



        );
    }

}

export default Mainpage;