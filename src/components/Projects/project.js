import { Component } from 'react';

import { withRouter } from 'react-router';
import { ecomhome,ecomestore,ecomcart,ecomcheckout } from "../../static/images"; 
import './project.css';


class Project extends Component {
  constructor(props) {
   
    super(props);
    this.state = {
      projectid:this.props.match.params.id,
      projects:[
        {
            id:1,
            title:"E-Commerce website",
            description :`This is a website that i made using django and some javascript.
                            while making it i learned a lot of back-end development concepts.
                            
                            The website allows customers to buy items by adding them tho a cart then, depending on the item's type (physical or digital)
                            customers can have it delivered to them if physical by adding delivery informations or get it in the spot if digital.
                            
                            The website also allows sellers to create a basic stores and put items in them.
                            
                            For the authentification of the users i used the Django authentification system.`,
            technologies:['Django' , 'javascript' , 'python' , 'SQLite'],
            linktogithubrepo:'github.com/4m1nb4kh71/ecom-website',
            images:{"img1":ecomhome ,'dsc1':"The website's home page where all products are listed.",
            'img2':ecomestore,'dsc2':"This is the store page where sellers can add or remove products or stores",
            'img3':ecomcart,'dsc3':'This is where all the selectd items to buy reside.',
            'img4':ecomcheckout,'dsc4':'The checkout section of the website.' },
        },

        {
            id:2,
            title:"Blog",
            description :"this is a website that i made using django and some javascript.while making int i learned a lot of back-end development concepts.",
            technologies:['Django' , 'javascript' , 'python' , 'SQLite'],
            linktogithubrepo:'github.com/4m1nb4kh71/blog',
            images:{"img1":ecomhome ,'dsc1':"The website's home page where all products are listed.",
            'img2':ecomestore,'dsc2':"This is the store page where sellers can add or remove products or stores",
            'img3':ecomcart,'dsc3':'This is where all the selectd items to buy reside.',
            'img4':ecomcheckout,'dsc4':'The checkout section of the website.' },
        },

        {
            id:3,
            title:"Pure HTML/CSS/Javascript Website",
            description :"this is a website that i made using django and some javascript.while making int i learned a lot of back-end development concepts.",
            technologies:['Javascript' , 'HTML' , 'CSS'],
            linktogithubrepo:'github.com/4m1nb4kh71/campus-website',
            images:{"img1":ecomhome ,'dsc1':"The website's home page where all products are listed.",
            'img2':ecomestore,'dsc2':"This is the store page where sellers can add or remove products or stores",
            'img3':ecomcart,'dsc3':'This is where all the selectd items to buy reside.',
            'img4':ecomcheckout,'dsc4':'The checkout section of the website.' },
        },
      ],
     
    };
  }

componentDidMount = () =>{
    document.getElementsByClassName('App').item(0).scrollTop=0;
  
}
  
injectcontent = (id) => {

    return(


        <div className="project_frame">
            <h1 className="secTextColor">{this.state.projects[id-1].title}</h1>
            <div></div>
            <div>
                <h3>Technologies Used :</h3>
                <ul>

                <small><i>{
                    this.state.projects[id-1].technologies.map((t)=>{
                       return  <li key={t}>{t}</li>
                    })

                }</i></small>

                </ul>
               

            </div>
            {/* OVERALL DESCRIPTION */}
            <p>{this.state.projects[id-1].description}</p>


            {/* img 1  and its DESCRIPTION */}
            <p ><span className="secTextColor"> -</span> {this.state.projects[id-1].images.dsc1}</p>
            <div className="img_container"><img src={this.state.projects[id-1].images.img1}/></div>
            
            {/* img 2  and its DESCRIPTION */}
            <p ><span className="secTextColor"> -</span> {this.state.projects[id-1].images.dsc2}</p>
            <div className="img_container"><img src={this.state.projects[id-1].images.img2}/></div>
            
            {/* img 3  and its DESCRIPTION */}
            <p ><span className="secTextColor"> -</span> {this.state.projects[id-1].images.dsc3}</p>
            <div className="img_container"><img src={this.state.projects[id-1].images.img3}/></div>
            {/* img 4  and its DESCRIPTION */}
            <p ><span className="secTextColor"> -</span> {this.state.projects[id-1].images.dsc4}</p>
            <div className="img_container"><img src={this.state.projects[id-1].images.img4}/></div>

        </div>
    
    
    
    );
}
render(){
    
  return (
    
    <div className="Project">
      
     
     
        {this.injectcontent(this.state.projectid)}
      
    </div>
  );

}
 
}

export default withRouter(Project);
