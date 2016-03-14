var WebSequence = [{
        ID: "SOEN 228",
        CREDIT: 4,
        PREREQ: "",
        COREQ: "",
        NAME: "System Hardware",
        PRIORITY: 3,
        OPTION: null
                        },
    {
        ID: "SCIENCE 1",
        CREDIT: 3,
        PREREQ: "",
        COREQ: "",
        NAME: "Basic Science 1",
        PRIORITY: 0,
        OPTION: null
                        },
    {
        ID: "SCIENCE 2",
        CREDIT: 3,
        PREREQ: "",
        COREQ: "",
        NAME: "Basic Science 2",
        PRIORITY: 0,
        OPTION: null
                        },
    {
        ID: "GENERAL",
        CREDIT: 3,
        PREREQ: "",
        COREQ: "",
        NAME: "General Elective",
        PRIORITY: 0,
        OPTION: null
                        },
    {
        ID: "SOEN 287",
        CREDIT: 3,
        PREREQ: "COMP 248",
        COREQ: "",
        NAME: "Web Programming ",
        PRIORITY: 2,
        OPTION: null
                        },
    {
        ID: "SOEN 321",
        CREDIT: 3,
        PREREQ: "COMP 346",
        COREQ: "",
        NAME: "Information Systems Security ",
        PRIORITY: 0,
        OPTION: null
                        },
    {
        ID: "SOEN 331",
        CREDIT: 3,
        PREREQ: "COMP 232,COMP 249",
        COREQ: "",
        NAME: "Introduction to Formal Methods for Software Engineering",
        PRIORITY: 0,
        OPTION: null
                        },
    {
        ID: "SOEN 341",
        CREDIT: 3,
        PREREQ: "COMP 352,ENCS 282",
        COREQ: "ENCS 282",
        NAME: "Introduction to Wikipedia and Slack",
        PRIORITY: 17,
        OPTION: null
                        },

    {
        ID: "SOEN 342",
        CREDIT: 3,
        PREREQ: "SOEN 341",
        COREQ: "",
        NAME: "Software Requirements and Specifications",
        PRIORITY: 8,
        OPTION: null
        }, {
        ID: "SOEN 343",
        CREDIT: 3,
        PREREQ: "SOEN 341,SOEN 342",
        COREQ: "SOEN 342",
        NAME: "Software Architecture and Design I",
        PRIORITY: 4,
        OPTION: null
        }, {
        ID: "SOEN 344",
        CREDIT: 3,
        PREREQ: "SOEN 343",
        COREQ: "",
        NAME: "Software Architecture and Design II",
        PRIORITY: 2,
        OPTION: null
        }, {
        ID: "SOEN 345",
        CREDIT: 3,
        PREREQ: "SOEN 343",
        COREQ: "SOEN 343",
        NAME: "Software Testing, Verification and Quality Assurance",
        PRIORITY: 0,
        OPTION: null
        }, {
        ID: "SOEN 357",
        CREDIT: 3,
        PREREQ: "SOEN 342",
        COREQ: "",
        NAME: "User Interface Design",
        PRIORITY: 2,
        OPTION: null
        }, {
        ID: "SOEN 384",
        CREDIT: 3,
        PREREQ: "SOEN 341",
        COREQ: "",
        NAME: "Management, Measurement and Quality Control",
        PRIORITY: 0,
        OPTION: null
        }, {
        ID: "SOEN 385",
        CREDIT: 3,
        PREREQ: "ENGR 213,ENGR 233",
        COREQ: "ENGR 233",
        NAME: "Control Systems and Applications",
        PRIORITY: 0,
        OPTION: null
        }, {
        ID: "SOEN 390",
        CREDIT: 3.5,
        PREREQ: "SOEN 344,SOEN 357",
        COREQ: "SOEN 344,SOEN 357",
        NAME: "Software Engineering Team Design Project",
        PRIORITY: 1,
        OPTION: null
        }, {
        ID: "SOEN 490",
        CREDIT: 4,
        PREREQ: "SOEN 390",
        COREQ: "",
        NAME: "Capstone Software Engineering Design Project I",
        PRIORITY: 100,
        OPTION: null
        },
    {
        ID: "SOEN 4902",
        CREDIT: 4,
        PREREQ: "SOEN 490",
        COREQ: "",
        NAME: "Capstone Software Engineering Design Project II",
        PRIORITY: 100,
        OPTION: null
        }, {
        ID: "COMP 232",
        CREDIT: 3,
        PREREQ: "",
        COREQ: "",
        NAME: "Mathematics for Computer Science",
        PRIORITY: 31,
        OPTION: null
        }, {
        ID: "COMP 248",
        CREDIT: 3.5,
        PREREQ: "",
        COREQ: "",
        NAME: "Object‑Oriented Programming I",
        PRIORITY: 34,
        OPTION: null
        }, {
        ID: "COMP 249",
        CREDIT: 3.5,
        PREREQ: "COMP 248",
        COREQ: "",
        NAME: "Object‑Oriented Programming II",
        PRIORITY: 29,
        OPTION: null
        }, {
        ID: "COMP 335",
        CREDIT: 3,
        PREREQ: "COMP 249,COMP 232",
        COREQ: "",
        NAME: "Introduction to Theoretical Computer Science",
        PRIORITY: 0,
        OPTION: null
        }, {
        ID: "COMP 346",
        CREDIT: 4,
        PREREQ: "SOEN 228,COMP 352",
        COREQ: "",
        NAME: "Operating Systems",
        PRIORITY: 2,
        OPTION: null
        }, {
        ID: "COMP 348",
        CREDIT: 3,
        PREREQ: "COMP 249",
        COREQ: "",
        NAME: "Principles of Programming Languages",
        PRIORITY: 0,
        OPTION: null
        }, {
        ID: "COMP 352",
        CREDIT: 3,
        PREREQ: "COMP 249,COMP 232",
        COREQ: "COMP 232",
        NAME: "Data Structures and Algorithms",
        PRIORITY: 25,
        OPTION: null
        }, {
        ID: "ELEC 275",
        CREDIT: 3.5,
        PREREQ: "ENGR 213",
        COREQ: "ENGR 213",
        NAME: "Principles of Electrical Engineering",
        PRIORITY: 0,
        OPTION: null
        }, {
        ID: "ENCS 282",
        CREDIT: 3,
        PREREQ: "ENGR 201",
        COREQ: "",
        NAME: "Technical Writing and Communication",
        PRIORITY: 19,
        OPTION: null
        }, {
        ID: "ENGR 201",
        CREDIT: 1.5,
        PREREQ: "",
        COREQ: "",
        NAME: "Professional Practice and Responsibility",
        PRIORITY: 21,
        OPTION: null
        }, {
        ID: "ENGR 202",
        CREDIT: 1.5,
        PREREQ: "",
        COREQ: "",
        NAME: "Sustainable Development and Environmental Stewardship",
        PRIORITY: 1,
        OPTION: null
        }, {
        ID: "ENGR 213",
        CREDIT: 3,
        PREREQ: "",
        COREQ: "",
        NAME: "Applied Ordinary Differential Equations",
        PRIORITY: 5,
        OPTION: null
        }, {
        ID: "ENGR 233",
        CREDIT: 3,
        PREREQ: "",
        COREQ: "",
        NAME: "Applied Advanced Calculus",
        PRIORITY: 4,
        OPTION: null
        }, {
        ID: "ENGR 301",
        CREDIT: 3,
        PREREQ: "",
        COREQ: "",
        NAME: "Engineering Management Principles and Economics",
        PRIORITY: 0,
        OPTION: null
        }, {
        ID: "ENGR 371",
        CREDIT: 3,
        PREREQ: "ENGR 213,ENGR 233",
        COREQ: "",
        NAME: "Probability and Statistics in Engineering",
        PRIORITY: 1,
        OPTION: null
        }, {
        ID: "ENGR 391",
        CREDIT: 3,
        PREREQ: "ENGR 213,ENGR 233,COMP 248",
        COREQ: "",
        NAME: "Numerical Methods in Engineering",
        PRIORITY: 0,
        OPTION: null
        }, {
        ID: "ENGR 392",
        CREDIT: 3,
        PREREQ: "ENCS 282,ENGR 201,ENGR 202",
        COREQ: "",
        NAME: "Impact of Technology on Society",
        PRIORITY: 0,
        OPTION: null
        },
    {
        ID: "COMP 353",
        CREDIT: 4,
        PREREQ: "COMP 232,COMP 352",
        COREQ: "",
        NAME: "Databases",
        PRIORITY: 2,
        OPTION: 2
        }, {
        ID: "COMP 445",
        CREDIT: 4,
        PREREQ: "COMP 346",
        COREQ: "",
        NAME: "Data Communication and Computer Networks",
        PRIORITY: 0,
        OPTION: 2
        }, {
        ID: "COMP 479",
        CREDIT: 4,
        PREREQ: "ENGR 371,COMP 352",
        COREQ: "",
        NAME: "Information Retrieval and Web Search",
        PRIORITY: 0,
        OPTION: 2
        },
    {
        ID: "SOEN 387",
        CREDIT: 3,
        PREREQ: "COMP 353,SOEN 287,SOEN 341",
        COREQ: "COMP 353",
        NAME: "Web‑Based Enterprise Application Design",
        PRIORITY: 1,
        OPTION: 2
        },
    {
        ID: "SOEN 487",
        CREDIT: 4,
        PREREQ: "SOEN 387",
        COREQ: "SOEN 387",
        NAME: "Web Services and Applications",
        PRIORITY: 0,
        OPTION: 2
        },

        ];
var GamingSequence = [{
        ID: "SOEN 228",
        CREDIT: 4,
        PREREQ: "",
        COREQ: "",
        NAME: "System Hardware",
        PRIORITY: 1,
        OPTION: null
                        },
    {
        ID: "SCIENCE 1",
        CREDIT: 3,
        PREREQ: "",
        COREQ: "",
        NAME: "Basic Science 1",
        PRIORITY: 0,
        OPTION: null
                        },
    {
        ID: "SCIENCE 2",
        CREDIT: 3,
        PREREQ: "",
        COREQ: "",
        NAME: "Basic Science 2",
        PRIORITY: 0,
        OPTION: null
                        },
    {
        ID: "GENERAL",
        CREDIT: 3,
        PREREQ: "",
        COREQ: "",
        NAME: "General Elective",
        PRIORITY: 0,
        OPTION: null
                        },
    {
        ID: "SOEN 287",
        CREDIT: 3,
        PREREQ: "COMP 248",
        COREQ: "",
        NAME: "Web Programming ",
        PRIORITY: 0,
        OPTION: null
                        },
    {
        ID: "SOEN 321",
        CREDIT: 3,
        PREREQ: "COMP 346",
        COREQ: "",
        NAME: "Information Systems Security ",
        PRIORITY: 0,
        OPTION: null
                        },
    {
        ID: "SOEN 331",
        CREDIT: 3,
        PREREQ: "COMP 232,COMP 249",
        COREQ: "",
        NAME: "Introduction to Formal Methods for Software Engineering",
        PRIORITY: 0,
        OPTION: null
                        },
    {
        ID: "SOEN 341",
        CREDIT: 3,
        PREREQ: "COMP 352,ENCS 282",
        COREQ: "ENCS 282",
        NAME: "Introduction to Wikipedia and Slack",
        PRIORITY: 15,
        OPTION: null
                        },

    {
        ID: "SOEN 342",
        CREDIT: 3,
        PREREQ: "SOEN 341",
        COREQ: "",
        NAME: "Software Requirements and Specifications",
        PRIORITY: 8,
        OPTION: null
        }, {
        ID: "SOEN 343",
        CREDIT: 3,
        PREREQ: "SOEN 341,SOEN 342",
        COREQ: "SOEN 342",
        NAME: "Software Architecture and Design I",
        PRIORITY: 4,
        OPTION: null
        }, {
        ID: "SOEN 344",
        CREDIT: 3,
        PREREQ: "SOEN 343",
        COREQ: "",
        NAME: "Software Architecture and Design II",
        PRIORITY: 2,
        OPTION: null
        }, {
        ID: "SOEN 345",
        CREDIT: 3,
        PREREQ: "SOEN 343",
        COREQ: "SOEN 343",
        NAME: "Software Testing, Verification and Quality Assurance",
        PRIORITY: 0,
        OPTION: null
        }, {
        ID: "SOEN 357",
        CREDIT: 3,
        PREREQ: "SOEN 342",
        COREQ: "",
        NAME: "User Interface Design",
        PRIORITY: 2,
        OPTION: null
        }, {
        ID: "SOEN 384",
        CREDIT: 3,
        PREREQ: "SOEN 341",
        COREQ: "",
        NAME: "Management, Measurement and Quality Control",
        PRIORITY: 0,
        OPTION: null
        }, {
        ID: "SOEN 385",
        CREDIT: 3,
        PREREQ: "ENGR 213,ENGR 233",
        COREQ: "ENGR 233",
        NAME: "Control Systems and Applications",
        PRIORITY: 0,
        OPTION: null
        }, {
        ID: "SOEN 390",
        CREDIT: 3.5,
        PREREQ: "SOEN 344,SOEN 357",
        COREQ: "SOEN 344,SOEN 357",
        NAME: "Software Engineering Team Design Project",
        PRIORITY: 1,
        OPTION: null
        }, {
        ID: "SOEN 490",
        CREDIT: 4,
        PREREQ: "SOEN 390",
        COREQ: "",
        NAME: "Capstone Software Engineering Design Project I",
        PRIORITY: 100,
        OPTION: null
        },
    {
        ID: "SOEN 4902",
        CREDIT: 4,
        PREREQ: "SOEN 490",
        COREQ: "",
        NAME: "Capstone Software Engineering Design Project II",
        PRIORITY: 100,
        OPTION: null
        }, {
        ID: "COMP 232",
        CREDIT: 3,
        PREREQ: "",
        COREQ: "",
        NAME: "Mathematics for Computer Science",
        PRIORITY: 31,
        OPTION: null
        }, {
        ID: "COMP 248",
        CREDIT: 3.5,
        PREREQ: "",
        COREQ: "",
        NAME: "Object‑Oriented Programming I",
        PRIORITY: 33,
        OPTION: null
        }, {
        ID: "COMP 249",
        CREDIT: 3.5,
        PREREQ: "COMP 248",
        COREQ: "",
        NAME: "Object‑Oriented Programming II",
        PRIORITY: 28,
        OPTION: null
        }, {
        ID: "COMP 335",
        CREDIT: 3,
        PREREQ: "COMP 249,COMP 232",
        COREQ: "",
        NAME: "Introduction to Theoretical Computer Science",
        PRIORITY: 0,
        OPTION: null
        }, {
        ID: "COMP 346",
        CREDIT: 4,
        PREREQ: "SOEN 228,COMP 352",
        COREQ: "",
        NAME: "Operating Systems",
        PRIORITY: 1,
        OPTION: null
        }, {
        ID: "COMP 348",
        CREDIT: 3,
        PREREQ: "COMP 249",
        COREQ: "",
        NAME: "Principles of Programming Languages",
        PRIORITY: 0,
        OPTION: null
        }, {
        ID: "COMP 352",
        CREDIT: 3,
        PREREQ: "COMP 249,COMP 232",
        COREQ: "COMP 232",
        NAME: "Data Structures and Algorithms",
        PRIORITY: 24,
        OPTION: null
        }, {
        ID: "ELEC 275",
        CREDIT: 3.5,
        PREREQ: "ENGR 213",
        COREQ: "ENGR 213",
        NAME: "Principles of Electrical Engineering",
        PRIORITY: 0,
        OPTION: null
        }, {
        ID: "ENCS 282",
        CREDIT: 3,
        PREREQ: "ENGR 201",
        COREQ: "",
        NAME: "Technical Writing and Communication",
        PRIORITY: 17,
        OPTION: null
        }, {
        ID: "ENGR 201",
        CREDIT: 1.5,
        PREREQ: "",
        COREQ: "",
        NAME: "Professional Practice and Responsibility",
        PRIORITY: 19,
        OPTION: null
        }, {
        ID: "ENGR 202",
        CREDIT: 1.5,
        PREREQ: "",
        COREQ: "",
        NAME: "Sustainable Development and Environmental Stewardship",
        PRIORITY: 1,
        OPTION: null
        }, {
        ID: "ENGR 213",
        CREDIT: 3,
        PREREQ: "",
        COREQ: "",
        NAME: "Applied Ordinary Differential Equations",
        PRIORITY: 6,
        OPTION: null
        }, {
        ID: "ENGR 233",
        CREDIT: 3,
        PREREQ: "",
        COREQ: "",
        NAME: "Applied Advanced Calculus",
        PRIORITY: 5,
        OPTION: null
        }, {
        ID: "ENGR 301",
        CREDIT: 3,
        PREREQ: "",
        COREQ: "",
        NAME: "Engineering Management Principles and Economics",
        PRIORITY: 0,
        OPTION: null
        }, {
        ID: "ENGR 371",
        CREDIT: 3,
        PREREQ: "ENGR 213,ENGR 233",
        COREQ: "",
        NAME: "Probability and Statistics in Engineering",
        PRIORITY: 0,
        OPTION: null
        }, {
        ID: "ENGR 391",
        CREDIT: 3,
        PREREQ: "ENGR 213,ENGR 233,COMP 248",
        COREQ: "",
        NAME: "Numerical Methods in Engineering",
        PRIORITY: 2,
        OPTION: null
        }, {
        ID: "ENGR 392",
        CREDIT: 3,
        PREREQ: "ENCS 282,ENGR 201,ENGR 202",
        COREQ: "",
        NAME: "Impact of Technology on Society",
        PRIORITY: 0,
        OPTION: null
        },
    {
        ID: "COMP 345",
        CREDIT: 4,
        PREREQ: "COMP 352",
        COREQ: "COMP 352",
        NAME: "Advanced Program Design with C++(games)",
        PRIORITY: 0,
        OPTION: 1
        }, {
        ID: "COMP 371",
        CREDIT: 4,
        PREREQ: "COMP 232,COMP 352",
        COREQ: "",
        NAME: "Computer Graphics",
        PRIORITY: 3,
        OPTION: 1
        }, {
        ID: "COMP 376",
        CREDIT: 4,
        PREREQ: "COMP 371",
        COREQ: "",
        NAME: "Introduction to Game Development",
        PRIORITY: 1,
        OPTION: 1
        }, {
        ID: "COMP 472",
        CREDIT: 4,
        PREREQ: "COMP 352",
        COREQ: "",
        NAME: "Artificial Intelligence",
        PRIORITY: 0,
        OPTION: 1
        }, {
        ID: "COMP 476",
        CREDIT: 4,
        PREREQ: "ENGR 391,COMP 376",
        COREQ: "",
        NAME: "Advanced Game Development",
        PRIORITY: 0,
        OPTION: 1
        }, {
        ID: "COMP 477",
        CREDIT: 4,
        PREREQ: "ENGR 391,COMP 371",
        COREQ: "",
        NAME: "Animation for Computer Games",
        PRIORITY: 0,
        OPTION: 1
        }

        ];
var EmbedSequence = [{
        ID: "SOEN 228",
        CREDIT: 4,
        PREREQ: "",
        COREQ: "",
        NAME: "System Hardware",
        PRIORITY: 6,
        OPTION: null
                        },
    {
        ID: "SCIENCE 1",
        CREDIT: 3,
        PREREQ: "",
        COREQ: "",
        NAME: "Basic Science 1",
        PRIORITY: 0,
        OPTION: null
                        },
    {
        ID: "SCIENCE 2",
        CREDIT: 3,
        PREREQ: "",
        COREQ: "",
        NAME: "Basic Science 2",
        PRIORITY: 0,
        OPTION: null
                        },
    {
        ID: "GENERAL",
        CREDIT: 3,
        PREREQ: "",
        COREQ: "",
        NAME: "General Elective",
        PRIORITY: 0,
        OPTION: null
                        },
    {
        ID: "SOEN 287",
        CREDIT: 3,
        PREREQ: "COMP 248",
        COREQ: "",
        NAME: "Web Programming ",
        PRIORITY: 0,
        OPTION: null
                        },
    {
        ID: "SOEN 321",
        CREDIT: 3,
        PREREQ: "COMP 346",
        COREQ: "",
        NAME: "Information Systems Security ",
        PRIORITY: 0,
        OPTION: null
                        },
    {
        ID: "SOEN 331",
        CREDIT: 3,
        PREREQ: "COMP 232,COMP 249",
        COREQ: "",
        NAME: "Introduction to Formal Methods for Software Engineering",
        PRIORITY: 0,
        OPTION: null
                        },
    {
        ID: "SOEN 341",
        CREDIT: 3,
        PREREQ: "COMP 352,ENCS 282",
        COREQ: "ENCS 282",
        NAME: "Introduction to Wikipedia and Slack",
        PRIORITY: 15,
        OPTION: null
                        },

    {
        ID: "SOEN 342",
        CREDIT: 3,
        PREREQ: "SOEN 341",
        COREQ: "",
        NAME: "Software Requirements and Specifications",
        PRIORITY: 8,
        OPTION: null
        }, {
        ID: "SOEN 343",
        CREDIT: 3,
        PREREQ: "SOEN 341,SOEN 342",
        COREQ: "SOEN 342",
        NAME: "Software Architecture and Design I",
        PRIORITY: 4,
        OPTION: null
        }, {
        ID: "SOEN 344",
        CREDIT: 3,
        PREREQ: "SOEN 343",
        COREQ: "",
        NAME: "Software Architecture and Design II",
        PRIORITY: 2,
        OPTION: null
        }, {
        ID: "SOEN 345",
        CREDIT: 3,
        PREREQ: "SOEN 343",
        COREQ: "SOEN 343",
        NAME: "Software Testing, Verification and Quality Assurance",
        PRIORITY: 0,
        OPTION: null
        }, {
        ID: "SOEN 357",
        CREDIT: 3,
        PREREQ: "SOEN 342",
        COREQ: "",
        NAME: "User Interface Design",
        PRIORITY: 2,
        OPTION: null
        }, {
        ID: "SOEN 384",
        CREDIT: 3,
        PREREQ: "SOEN 341",
        COREQ: "",
        NAME: "Management, Measurement and Quality Control",
        PRIORITY: 0,
        OPTION: null
        }, {
        ID: "SOEN 385",
        CREDIT: 3,
        PREREQ: "ENGR 213,ENGR 233",
        COREQ: "ENGR 233",
        NAME: "Control Systems and Applications",
        PRIORITY: 2,
        OPTION: null
        }, {
        ID: "SOEN 390",
        CREDIT: 3.5,
        PREREQ: "SOEN 344,SOEN 357",
        COREQ: "SOEN 344,SOEN 357",
        NAME: "Software Engineering Team Design Project",
        PRIORITY: 1,
        OPTION: null
        }, {
        ID: "SOEN 490",
        CREDIT: 4,
        PREREQ: "SOEN 390",
        COREQ: "",
        NAME: "Capstone Software Engineering Design Project I",
        PRIORITY: 100,
        OPTION: null
        },
    {
        ID: "SOEN 4902",
        CREDIT: 4,
        PREREQ: "SOEN 490",
        COREQ: "",
        NAME: "Capstone Software Engineering Design Project II",
        PRIORITY: 100,
        OPTION: null
        }, {
        ID: "COMP 232",
        CREDIT: 3,
        PREREQ: "",
        COREQ: "",
        NAME: "Mathematics for Computer Science",
        PRIORITY: 26,
        OPTION: null
        }, {
        ID: "COMP 248",
        CREDIT: 3.5,
        PREREQ: "",
        COREQ: "",
        NAME: "Object‑Oriented Programming I",
        PRIORITY: 30,
        OPTION: null
        }, {
        ID: "COMP 249",
        CREDIT: 3.5,
        PREREQ: "COMP 248",
        COREQ: "",
        NAME: "Object‑Oriented Programming II",
        PRIORITY: 27,
        OPTION: null
        }, {
        ID: "COMP 335",
        CREDIT: 3,
        PREREQ: "COMP 249,COMP 232",
        COREQ: "",
        NAME: "Introduction to Theoretical Computer Science",
        PRIORITY: 0,
        OPTION: null
        }, {
        ID: "COMP 346",
        CREDIT: 4,
        PREREQ: "SOEN 228,COMP 352",
        COREQ: "",
        NAME: "Operating Systems",
        PRIORITY: 5,
        OPTION: null
        }, {
        ID: "COMP 348",
        CREDIT: 3,
        PREREQ: "COMP 249",
        COREQ: "",
        NAME: "Principles of Programming Languages",
        PRIORITY: 0,
        OPTION: null
        }, {
        ID: "COMP 352",
        CREDIT: 3,
        PREREQ: "COMP 249,COMP 232",
        COREQ: "COMP 232",
        NAME: "Data Structures and Algorithms",
        PRIORITY: 23,
        OPTION: null
        }, {
        ID: "ELEC 275",
        CREDIT: 3.5,
        PREREQ: "ENGR 213",
        COREQ: "ENGR 213",
        NAME: "Principles of Electrical Engineering",
        PRIORITY: 0,
        OPTION: null
        }, {
        ID: "ENCS 282",
        CREDIT: 3,
        PREREQ: "ENGR 201",
        COREQ: "",
        NAME: "Technical Writing and Communication",
        PRIORITY: 17,
        OPTION: null
        }, {
        ID: "ENGR 201",
        CREDIT: 1.5,
        PREREQ: "",
        COREQ: "",
        NAME: "Professional Practice and Responsibility",
        PRIORITY: 19,
        OPTION: null
        }, {
        ID: "ENGR 202",
        CREDIT: 1.5,
        PREREQ: "",
        COREQ: "",
        NAME: "Sustainable Development and Environmental Stewardship",
        PRIORITY: 1,
        OPTION: null
        }, {
        ID: "ENGR 213",
        CREDIT: 3,
        PREREQ: "",
        COREQ: "",
        NAME: "Applied Ordinary Differential Equations",
        PRIORITY: 7,
        OPTION: null
        }, {
        ID: "ENGR 233",
        CREDIT: 3,
        PREREQ: "",
        COREQ: "",
        NAME: "Applied Advanced Calculus",
        PRIORITY: 6,
        OPTION: null
        }, {
        ID: "ENGR 301",
        CREDIT: 3,
        PREREQ: "",
        COREQ: "",
        NAME: "Engineering Management Principles and Economics",
        PRIORITY: 0,
        OPTION: null
        }, {
        ID: "ENGR 371",
        CREDIT: 3,
        PREREQ: "ENGR 213,ENGR 233",
        COREQ: "",
        NAME: "Probability and Statistics in Engineering",
        PRIORITY: 1,
        OPTION: null
        }, {
        ID: "ENGR 391",
        CREDIT: 3,
        PREREQ: "ENGR 213,ENGR 233,COMP 248",
        COREQ: "",
        NAME: "Numerical Methods in Engineering",
        PRIORITY: 0,
        OPTION: null
        }, {
        ID: "ENGR 392",
        CREDIT: 3,
        PREREQ: "ENCS 282,ENGR 201,ENGR 202",
        COREQ: "",
        NAME: "Impact of Technology on Society",
        PRIORITY: 0,
        OPTION: null
        },
    {
        ID: "AERO 480",
        CREDIT: 3.5,
        PREREQ: "SOEN 385",
        COREQ: "",
        NAME: "Flight Control Systems",
        PRIORITY: 0,
        OPTION: 3
        }, {
        ID: "AERO 482",
        CREDIT: 3,
        PREREQ: "ENGR 371,SOEN 385",
        COREQ: "",
        NAME: "Avionic Navigation Systems",
        PRIORITY: 0,
        OPTION: 3
        }, {
        ID: "COEN 320",
        CREDIT: 3,
        PREREQ: "COMP 346",
        COREQ: "",
        NAME: "Introduction to Real‑Time Systems",
        PRIORITY: 0,
        OPTION: 3
        }, {
        ID: "COMP 345",
        CREDIT: 4,
        PREREQ: "COMP 352",
        COREQ: "COMP 352",
        NAME: "Advanced Program Design with C++(embedded)",
        PRIORITY: 0,
        OPTION: 3
        }, {
        ID: "COMP 444",
        CREDIT: 4,
        PREREQ: "COMP 346",
        COREQ: "",
        NAME: "System Software Design",
        PRIORITY: 0,
        OPTION: 3
        }, {
        ID: "SOEN 422",
        CREDIT: 4,
        PREREQ: "COMP 346",
        COREQ: "",
        NAME: "Embedded Systems and Software",
        PRIORITY: 0,
        OPTION: 3
        }, {
        ID: "SOEN 423",
        CREDIT: 4,
        PREREQ: "COMP 346",
        COREQ: "",
        NAME: "Distributed Systems",
        PRIORITY: 0,
        OPTION: 3
        }

        ];