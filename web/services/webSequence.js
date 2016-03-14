//Web and Application Sequence

/**
    ID = Department + number( Ex : SOEN 228 )
    Credit = Number of credits given by course
    PREREQ = The preReqs of the course (by ID)
    COREQ = The Coreqs of the course
**/
SequenceGenerator.service('WebSequence', function () {
    this.sequence = [{
            ID: "SOEN 228",
            CREDIT: 4,
            PREREQ: "",
            COREQ: "",
            NAME: "System Hardware",
            PRIORITY: 3,
            AVAILABLE: [2, 3],
            OPTION: null
                        },
        {
            ID: "SCIENCE 1",
            CREDIT: 3,
            PREREQ: "",
            COREQ: "",
            NAME: "Basic Science 1",
            PRIORITY: 1,
            AVAILABLE: [1, 2],
            OPTION: null
                        },
        {
            ID: "SCIENCE 2",
            CREDIT: 3,
            PREREQ: "",
            COREQ: "",
            NAME: "Basic Science 2",
            PRIORITY: 0.5,
            AVAILABLE: [1, 2],
            OPTION: null
                        },
        {
            ID: "GENERAL",
            CREDIT: 3,
            PREREQ: "",
            COREQ: "",
            NAME: "General Elective",
            PRIORITY: 5,
            AVAILABLE: [1, 2, 3, 4],
            OPTION: null
                        },
        {
            ID: "SOEN 287",
            CREDIT: 3,
            PREREQ: "COMP 248",
            COREQ: "",
            NAME: "Web Programming ",
            PRIORITY: 2,
            AVAILABLE: [1, 2, 4],
            OPTION: null
                        },
        {
            ID: "SOEN 321",
            CREDIT: 3,
            PREREQ: "COMP 346",
            COREQ: "",
            NAME: "Information Systems Security ",
            PRIORITY: 0,
            AVAILABLE: [1],
            OPTION: null
                        },
        {
            ID: "SOEN 331",
            CREDIT: 3,
            PREREQ: "COMP 232,COMP 249",
            COREQ: "",
            NAME: "Introduction to Formal Methods for Software Engineering",
            PRIORITY: 0,
            AVAILABLE: [2],
            OPTION: null
                        },
        {
            ID: "SOEN 341",
            CREDIT: 3,
            PREREQ: "COMP 352",
            COREQ: "0ENCS 282",
            PRECOREQ: "ENCS 272",
            NAME: "Software Process",
            PRIORITY: 17,
            AVAILABLE: [1, 2],
            OPTION: null

         }, {
            ID: "SOEN 342",
            CREDIT: 3,
            PREREQ: "SOEN 341",
            COREQ: "",
            NAME: "Software Requirements and Specifications",
            PRIORITY: 8,
            AVAILABLE: [1],
            OPTION: null
        }, {
            ID: "SOEN 343",
            CREDIT: 3,
            PREREQ: "SOEN 341",
            COREQ: "1SOEN 342",
            NAME: "Software Architecture and Design I",
            PRIORITY: 4,
            AVAILABLE: [1],
            OPTION: null
        }, {
            ID: "SOEN 344",
            CREDIT: 3,
            PREREQ: "SOEN 343",
            COREQ: "",
            NAME: "Software Architecture and Design II",
            PRIORITY: 2,
            AVAILABLE: [2],
            OPTION: null
        }, {
            ID: "SOEN 345",
            CREDIT: 3,
            PREREQ: "",
            COREQ: "1SOEN 343",
            PRECOREQ: "SOEN 341",
            NAME: "Software Testing, Verification and Quality Assurance",
            PRIORITY: 3,
            AVAILABLE: [2],
            OPTION: null
        }, {
            ID: "SOEN 357",
            CREDIT: 3,
            PREREQ: "SOEN 342",
            COREQ: "",
            NAME: "User Interface Design",
            PRIORITY: 2,
            AVAILABLE: [2],
            OPTION: null
        }, {
            ID: "SOEN 384",
            CREDIT: 3,
            PREREQ: "SOEN 341",
            COREQ: "",
            NAME: "Management, Measurement and Quality Control",
            PRIORITY: 3,
            AVAILABLE: [1],
            OPTION: null
        }, {
            ID: "SOEN 385",
            CREDIT: 3,
            PREREQ: "ENGR 213",
            COREQ: "0ENGR 233",
            PRECOREQ: "",
            NAME: "Control Systems and Applications",
            PRIORITY: -0.5,
            AVAILABLE: [2],
            OPTION: null
        }, {
            ID: "SOEN 390",
            CREDIT: 3.5,
            PREREQ: "",
            COREQ: "2SOEN 344,2SOEN 357",
            PRECOREQ: "SOEN 343,SOEN 342",
            NAME: "Software Engineering Team Design Project",
            PRIORITY: 50,
            AVAILABLE: [2],
            OPTION: null
        }, {
            ID: "SOEN 490",
            CREDIT: 0,
            PREREQ: "SOEN 390",
            COREQ: "",
            NAME: "Capstone Software Engineering Design Project I",
            PRIORITY: 100,
            AVAILABLE: [1],
            OPTION: null
        },
        {
            ID: "SOEN 4902",
            CREDIT: 4,
            PREREQ: "SOEN 490",
            COREQ: "",
            NAME: "Capstone Software Engineering Design Project II",
            PRIORITY: 100,
            AVAILABLE: [2],
            OPTION: null
        }, {
            ID: "COMP 232",
            CREDIT: 3,
            PREREQ: "",
            COREQ: "",
            NAME: "Mathematics for Computer Science",
            PRIORITY: 31,
            AVAILABLE: [1, 2, 3],
            OPTION: null
        }, {
            ID: "COMP 248",
            CREDIT: 3.5,
            PREREQ: "",
            COREQ: "",
            NAME: "Object‑Oriented Programming I",
            PRIORITY: 34,
            AVAILABLE: [1, 2, 3],
            OPTION: null
        }, {
            ID: "COMP 249",
            CREDIT: 3.5,
            PREREQ: "COMP 248",
            COREQ: "",
            NAME: "Object‑Oriented Programming II",
            PRIORITY: 29,
            AVAILABLE: [1, 2, 4],
            OPTION: null
        }, {
            ID: "COMP 335",
            CREDIT: 3,
            PREREQ: "COMP 249,COMP 232",
            COREQ: "",
            NAME: "Introduction to Theoretical Computer Science",
            PRIORITY: 2,
            AVAILABLE: [1, 2, 3],
            OPTION: 2
        }, {
            ID: "COMP 346",
            CREDIT: 4,
            PREREQ: "SOEN 228,COMP 352",
            COREQ: "",
            NAME: "Operating Systems",
            PRIORITY: 2,
            AVAILABLE: [1, 2, 4],
            OPTION: null
        }, {
            ID: "COMP 348",
            CREDIT: 3,
            PREREQ: "COMP 249",
            COREQ: "",
            NAME: "Principles of Programming Languages",
            PRIORITY: 0.5,
            AVAILABLE: [1, 2, 3],
            OPTION: null
        }, {
            ID: "COMP 352",
            CREDIT: 3,
            PREREQ: "COMP 249",
            COREQ: "0COMP 232",
            PRECOREQ: "",
            NAME: "Data Structures and Algorithms",
            PRIORITY: 25,
            AVAILABLE: [1, 2, 3],
            OPTION: null
        }, {
            ID: "ELEC 275",
            CREDIT: 3.5,
            PREREQ: "",
            COREQ: "0ENGR 213",
            PRECOREQ: "",
            NAME: "Principles of Electrical Engineering",
            PRIORITY: 0,
            AVAILABLE: [1, 2, 4],
            OPTION: null
        }, {
            ID: "ENCS 272",
            CREDIT: 0,
            PREREQ: "",
            COREQ: "",
            NAME: " Composition and Argumentation for Engineers",
            PRIORITY: 10,
            AVAILABLE: [1, 2, 3],
            OPTION: null
        }, {
            ID: "ENCS 282",
            CREDIT: 3,
            PREREQ: "ENCS 272",
            COREQ: "",
            NAME: "Technical Writing and Communication",
            PRIORITY: 19,
            AVAILABLE: [1, 2, 3, 4],
            OPTION: null
        }, {
            ID: "ENGR 201",
            CREDIT: 1.5,
            PREREQ: "",
            COREQ: "",
            NAME: "Professional Practice and Responsibility",
            PRIORITY: 21,
            AVAILABLE: [1, 2, 4],
            OPTION: null
        }, {
            ID: "ENGR 202",
            CREDIT: 1.5,
            PREREQ: "",
            COREQ: "",
            NAME: "Sustainable Development and Environmental Stewardship",
            PRIORITY: 1,
            AVAILABLE: [1, 2, 3],
            OPTION: null
        }, {
            ID: "ENGR 213",
            CREDIT: 3,
            PREREQ: "",
            COREQ: "",
            NAME: "Applied Ordinary Differential Equations",
            PRIORITY: 5,
            AVAILABLE: [1, 2, 3],
            OPTION: null
        }, {
            ID: "ENGR 233",
            CREDIT: 3,
            PREREQ: "",
            COREQ: "",
            NAME: "Applied Advanced Calculus",
            PRIORITY: 4,
            AVAILABLE: [1, 2, 3],
            OPTION: null
        }, {
            ID: "ENGR 301",
            CREDIT: 3,
            PREREQ: "",
            COREQ: "",
            NAME: "Engineering Management Principles and Economics",
            PRIORITY: -1.5,
            AVAILABLE: [1, 2, 3],
            OPTION: null
        }, {
            ID: "ENGR 371",
            CREDIT: 3,
            PREREQ: "ENGR 213,ENGR 233",
            COREQ: "",
            NAME: "Probability and Statistics in Engineering",
            PRIORITY: 1,
            AVAILABLE: [1, 2, 4],
            OPTION: null
        }, {
            ID: "ENGR 391",
            CREDIT: 3,
            PREREQ: "ENGR 213,ENGR 233,COMP 248",
            COREQ: "",
            NAME: "Numerical Methods in Engineering",
            PRIORITY: 0,
            AVAILABLE: [1, 2, 3, 4],
            OPTION: null
        }, {
            ID: "ENGR 392",
            CREDIT: 3,
            PREREQ: "ENCS 282,ENGR 201,ENGR 202",
            COREQ: "",
            NAME: "Impact of Technology on Society",
            PRIORITY: -1,
            AVAILABLE: [1, 2, 3, 4],
            OPTION: null
        },
        {
            ID: "COMP 353",
            CREDIT: 4,
            PREREQ: "COMP 232,COMP 352",
            COREQ: "",
            NAME: "Databases",
            PRIORITY: 2,
            AVAILABLE: [1, 2, 4],
            OPTION: 2
        }, {
            ID: "COMP 445",
            CREDIT: 4,
            PREREQ: "COMP 346",
            COREQ: "",
            NAME: "Data Communication and Computer Networks",
            PRIORITY: 0,
            AVAILABLE: [1, 2],
            OPTION: 2
        }, {
            ID: "COMP 479",
            CREDIT: 4,
            PREREQ: "ENGR 371,COMP 352",
            COREQ: "",
            NAME: "Information Retrieval and Web Search",
            PRIORITY: 0,
            AVAILABLE: [1],
            OPTION: 2
        },
        {
            ID: "SOEN 387",
            CREDIT: 3,
            PREREQ: "SOEN 287,SOEN 341",
            COREQ: "0COMP 353",
            PRECOREQ: "COMP 232,COMP 352",
            NAME: "Web‑Based Enterprise Application Design",
            PRIORITY: 1,
            AVAILABLE: [1],
            OPTION: 2
        },
        {
            ID: "SOEN 487",
            CREDIT: 4,
            PREREQ: "",
            COREQ: "1SOEN 387",
            PRECOREQ: "SOEN 287,SOEN 341,COMP 232,COMP 352",
            NAME: "Web Services and Applications",
            PRIORITY: 0,
            AVAILABLE: [2],
            OPTION: 2
        }

        ];

});
SequenceGenerator.filter('groupby', function () {
    return function (input, groupvalue) {
        var group = [];
        angular.forEach(input, function (value, index) {
            if (group.indexOf(value.SEMESTER) == -1) {
                group.push(value.SEMESTER);
                group.sort();
            }
        });

        return group;
    }
});