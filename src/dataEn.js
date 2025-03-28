const dataEn= {
      id:1,
      name: "Tolunay Yılmaz",
      title: "Full Stack Developer",
      contact: {
        linkedin: "https://www.linkedin.com/in/tolunay-y%C4%B1lmaz-197b10202/",
        github: "https://github.com/TolunayYilmaz",
        email: "tolunayyilmaz10@gmail.com",
        phone: "+90-531-228-3042",
        militaryService: "Done",
        drivingLicense: "Class B",
        location: "Istanbul, Turkey",
      },
      about: "Hi, I’m Tolunay. I’m a Full Stack Developer. If you are looking for a Developer who crafts solid and scalable frontend and backend products with great user experiences, let’s shake hands.",
      summary: "Full Stack Developer with 600 hours of training, including 400 hours in C# and SQL for application development and 200 hours in Unity Game Engine. Skilled in algorithms, problem-solving, and web development. Currently advancing in ASP.NET Core Web API, RESTful services, and modern frontend frameworks like React.",
      skills: [
        { name: "JavaScript", description: "A versatile programming language commonly used in web development." },
        { name: "React.Js", description: "A JavaScript library for building user interfaces, particularly for single-page applications." },
        { name: "Node.Js", description: "A runtime environment that allows JavaScript to run server-side." },
        { name: "C#", description: "A modern, object-oriented programming language widely used for developing desktop and web applications." },
        { name: "SQL", description: "A powerful language for managing relational databases efficiently." },
        { name: "ASP.NET Core", description: "A cross-platform framework for building modern web applications and APIs." }
      ],
      certifications: [
        "Game Development Expertise | Bahçeşehir University",
        "Software and Database Expertise | Wissen Akademie",
        "Cyber Security Analyst | Akbank"
      ],
      projects: [
        {
          name: "Academic Student Automation",
          tech: ["C#", "MSSQL", "Entity Framework", "WinForm"],
          description: "A desktop automation system for managing student records.",
          githubLink: "GitHub Link"
        },
        {
          name: "CV Web Application",
          tech: ["C#", "HTML", "MSSQL", "Entity Framework", "ASP.NET"],
          description: "A web application for users to create and store their resumes.",
          githubLink: "GitHub Link"
        },
        {
          name: "Hamburger Ordering Automation",
          tech: ["C#", "MSSQL", "Entity Framework", "WinForm"],
          description: "A restaurant order management system where users can place orders and track them.",
          githubLink: "GitHub Link"
        },
        {
          name: "Workintech Cookie Plugin",
          tech: ["React", "Redux", "Axios"],
          description: "A simple and customizable cookie plugin, available as an NPM package.",
          githubLink: "GitHub Link",
          liveDemo: "View Site Link"
        }
      ]
    
  
   
  };


  
  export default  dataEn;

    // useEffect(()=>{
    
  
  
    //   fetch('https://67e689e36530dbd311106640.mockapi.io/profiledata', {
    //       method: 'POST',
    //      headers: {
    //        'Content-Type': 'application/json',
    //       },
    //      body: JSON.stringify(dataTr),
    //     })
    //      .then(response => response.json())
    //      .catch(error => console.error('Error:', error));
     
    //    },[]) dataPost