import React from 'react';

const fakeData = [
    {
        name:'Python for Everybody',
        price:82,
        picture:'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d2j5ihb19pt1hq.cloudfront.net/sdp_page/s12n_logos/python.jpg?auto=format%2Ccompress&dpr=1&w=100&h=100&fit=fill&bg=FFF',
    },
    {
        name:'Java Programming and Software Engineering Fundamentals',
        price:45,
        picture:'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d2j5ihb19pt1hq.cloudfront.net/sdp_page/s12n_logos/Duke_JavaProgrammingIntrotoSoftware_CM195522.jpg?auto=format%2Ccompress&dpr=1&w=100&h=100&fit=fill&bg=FFF',
    },
    {
        name:'Introduction to Programming in C',
        price:44,
        picture:'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/84/6b4000ad1111e79ca09d02438dcd55/comps-square.jpg?auto=format%2Ccompress&dpr=1&w=100&h=100&fit=fill&bg=FFF',
    },
    {
        name:'Programming for Everybody (Getting Started with Python)',
        price:54,
        picture:'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/08/33f720502a11e59e72391aa537f5c9/pythonlearn_thumbnail_1x1.png?auto=format%2Ccompress&dpr=1&w=100&h=100&fit=fill&bg=FFF',
    },
    {
        name:'Data Science',
        price:78,
        picture:'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/eb/8e18e0a4f111e59ae9c776a3dd0526/jhu-logo-thumb.png?auto=format%2Ccompress&dpr=1&w=100&h=100&fit=fill&bg=FFF',
    },
    {
        name:'C for Everyone: Programming Fundamentals',
        price:47,
        picture:'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/da/bb19ee6bd54bc7926f981bac230c21/CThumbnail_PartA-01.jpg?auto=format%2Ccompress&dpr=1&w=100&h=100&fit=fill&bg=FFF',
    },
    {
        name:'Basics of Web Development & Coding',
        price:100,
        picture:'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d2j5ihb19pt1hq.cloudfront.net/sdp_page/s12n_logos/webdesign.jpg?auto=format%2Ccompress&dpr=1&w=100&h=100&fit=fill&bg=FFF',
    },
    {
        name:'HTML, CSS, and Javascript for Web Developers',
        price:35,
        picture:'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/83/e258e0532611e5a5072321239ff4d4/jhep-coursera-course4.png?auto=format%2Ccompress&dpr=1&w=100&h=100&fit=fill&bg=FFF',
    },
    {
        name:'Full-Stack Web Development with React',
        price:74,
        picture:'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/eb/cab7f07dd411e8991ff71ead974a6c/Slide1.png?auto=format%2Ccompress&dpr=1&w=100&h=100&fit=fill&bg=FFF',
    },
    {
        name:'Full Stack Web and Multiplatform Mobile App Development',
        price:110,
        picture:'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/a4/d69e204d3a11e7bd76e991b22caa52/HKUST_full-stack-banner.jpg?auto=format%2Ccompress&dpr=1&w=100&h=100&fit=fill&bg=FFF',
    },
    {
        name:'Responsive Website Development and Design',
        price:78,
        picture:'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d2j5ihb19pt1hq.cloudfront.net/sdp_page/s12n_logos/London_ResponsiveWebsite_Getty482541309.jpg?auto=format%2Ccompress&dpr=1&w=100&h=100&fit=fill&bg=FFF',
    },
    {
        name:'Web Applications for Everybody',
        price:25,
        picture:'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/88/dc5c5094d411e7b4b66f7a7a1060c7/WA4E_mainimage_coloronly2.png?auto=format%2Ccompress&dpr=1&w=100&h=100&fit=fill&bg=FFF',
    },
    {
        name:'Android App Development',
        price:89,
        picture:'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/ca/bd3c40bb0811e5ba54dbc0616c905c/AAD-settings.jpg?auto=format%2Ccompress&dpr=1&w=100&h=100&fit=fill&bg=FFF',
    },
    {
        name:'Fundamentals of Graphic Design',
        price:56,
        picture:'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/dc/1d37b0e47f11e5a403f7dee24cfcd7/01.FUND_1200-x-1200_logo.jpg?auto=format%2Ccompress&dpr=1&w=100&h=100&fit=fill&bg=FFF',
    },
    {
        name:'UI / UX Design',
        price:90,
        picture:'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/41/f404907a3011e8b427dbe925a8251e/specialization_logo_02d.jpg?auto=format%2Ccompress&dpr=1&w=100&h=100&fit=fill&bg=FFF',
    }
]

export default fakeData;