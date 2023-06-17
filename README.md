# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](/ouput/dekstop_design1.jpg)

![](/ouput/dekstop_design_active.jpg)

![](/ouput/error.jpg)

![](/ouput/success_desing1.jpg)

![](/ouput/success_design_active.jpg)

![](/ouput/mobile_design.jpg)

![](/ouput/mobile_success.jpg)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Media Queries


### What I learned

In this challenge i learned the following things:
  - To create **Responsive Web Pages** using **Media Queries**.
  ```css
    @media (max-width:1000px) {
      #main {
        background-color: white;
        height: 106vh;
        box-shadow: none;
        margin: 0;
        display: block;
      }

      #container {
        flex-direction: column-reverse;
        height: 100vh;
        width: 100vw;
        border-radius: 0;
      }


      #rightdiv img {
        display: none;
      }

      #rightdiv {
        background-image: url("assets/images/illustration-sign-up-mobile.svg");
        background-repeat: no-repeat;
        background-size: cover;
        height: 100vh;
        width: 100vw;
      }


      #leftdiv {
        width: 100vw;
        height: 100vh;
      }

      #leftdiv h1 {
        font-size: 40px;
        text-align: left;
        margin-left: 30px;
      }

      #email {
        margin-top: 20px;
      }

      .btn {
        margin: 20px 0px;
      }


    }
  ```
  - The use of **JavaScript** in frontend web pages.

  - The use of **BOM** and **DOM** object modules in javascript
  ```javascript
    //Main code
    let arr = document.getElementsByClassName("btn");
    const button = Array.from(arr)[0];
    button.addEventListener('click',submit); 
  ```
  - The create and server and handle various end points using get request in **Express.js**
  ```javascript
    //endpoints
    app.get('/',(req,res)=>{
        res.render(path.join(__dirname,'/index.html'));
    })

    app.get('/success.html',(req,res)=>{
        res.render(path.join(__dirname,'/success.html'));
    })
  ```  


### Continued development

Things i am looking to focus upon in future are:
  - Getting better at making responsive websites
  - Learing a frontend framework like **React js**
  - Exploring more about **Express Js** and learning more about requests.
  - Learing how **API** and **Servers** work.


## Author

- Website - [Sarthak Yadav](https://www.linkedin.com/in/sarthak-yadav-51a708260/)
- Frontend Mentor - [@sarthakyadav25](https://www.frontendmentor.io/profile/sarthakyadav25)
- Twitter - [@sxrthxk](https://twitter.com/sxrthxk)

