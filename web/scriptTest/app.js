var prio = angular.module('prio', []);

prio.controller('homeController', ['$scope', function ($scope) {
$scope.courses = [{
            ID: "SOEN 228",
            CREDIT: 4,
            PREREQ: "",
            COREQ: "",
            NAME: "System Hardware",
            OPTION: null
                        },
        {
            ID: "SCIENCE 1",
            CREDIT: 3,
            PREREQ: "",
            COREQ: "",
            NAME: "Basic Science 1",
            OPTION: null
                        },
        {
            ID: "SCIENCE 2",
            CREDIT: 3,
            PREREQ: "",
            COREQ: "",
            NAME: "Basic Science 2",
            OPTION: null
                        },
        {
            ID: "GENERAL",
            CREDIT: 3,
            PREREQ: "",
            COREQ: "",
            NAME: "General Elective",
            OPTION: null
                        },
        {
            ID: "SOEN 287",
            CREDIT: 3,
            PREREQ: "COMP 248",
            COREQ: "",
            NAME: "Web Programming ",
            OPTION: null
                        },
        {
            ID: "SOEN 321",
            CREDIT: 3,
            PREREQ: "COMP 346",
            COREQ: "",
            NAME: "Information Systems Security ",
            OPTION: null
                        },
        {
            ID: "SOEN 331",
            CREDIT: 3,
            PREREQ: "COMP 232,COMP 249",
            COREQ: "",
            NAME: "Introduction to Formal Methods for Software Engineering",
            OPTION: null
                        },
        {
            ID: "SOEN 341",
            CREDIT: 3,
            PREREQ: "COMP 352,ENCS 282",
            COREQ: "ENCS 282",
            NAME: "Introduction to Wikipedia and Slack",
            OPTION: null
                        },

        {
            ID: "SOEN 342",
            CREDIT: 3,
            PREREQ: "SOEN 341",
            COREQ: "",
            NAME: "Software Requirements and Specifications",
            OPTION: null
        }, {
            ID: "SOEN 343",
            CREDIT: 3,
            PREREQ: "SOEN 341,SOEN 342",
            COREQ: "SOEN 342",
            NAME: "Software Architecture and Design I",
            OPTION: null
        }, {
            ID: "SOEN 344",
            CREDIT: 3,
            PREREQ: "SOEN 343",
            COREQ: "",
            NAME: "Software Architecture and Design II",
            OPTION: null
        }, {
            ID: "SOEN 345",
            CREDIT: 3,
            PREREQ: "SOEN 343",
            COREQ: "SOEN 343",
            NAME: "Software Testing, Verification and Quality Assurance",
            OPTION: null
        }, {
            ID: "SOEN 357",
            CREDIT: 3,
            PREREQ: "SOEN 342",
            COREQ: "",
            NAME: "User Interface Design",
            OPTION: null
        }, {
            ID: "SOEN 384",
            CREDIT: 3,
            PREREQ: "SOEN 341",
            COREQ: "",
            NAME: "Management, Measurement and Quality Control",
            OPTION: null
        }, {
            ID: "SOEN 385",
            CREDIT: 3,
            PREREQ: "ENGR 213,ENGR 233",
            COREQ: "ENGR 233",
            NAME: "Control Systems and Applications",
            OPTION: null
        }, {
            ID: "SOEN 390",
            CREDIT: 3.5,
            PREREQ: "SOEN 344,SOEN 357",
            COREQ: "SOEN 344,SOEN 357",
            NAME: "Software Engineering Team Design Project",
            OPTION: null
        }, {
            ID: "SOEN 490",
            CREDIT: 4,
            PREREQ: "SOEN 390",
            COREQ: "",
            NAME: "Capstone Software Engineering Design Project",
            OPTION: null
        }, {
            ID: "COMP 232",
            CREDIT: 3,
            PREREQ: "",
            COREQ: "",
            NAME: "Mathematics for Computer Science",
            OPTION: null
        }, {
            ID: "COMP 248",
            CREDIT: 3.5,
            PREREQ: "",
            COREQ: "",
            NAME: "Object‑Oriented Programming I",
            OPTION: null
        }, {
            ID: "COMP 249",
            CREDIT: 3.5,
            PREREQ: "COMP 248",
            COREQ: "",
            NAME: "Object‑Oriented Programming II",
            OPTION: null
        }, {
            ID: "COMP 335",
            CREDIT: 3,
            PREREQ: "COMP 249,COMP 232",
            COREQ: "",
            NAME: "Introduction to Theoretical Computer Science",
            OPTION: null
        }, {
            ID: "COMP 346",
            CREDIT: 4,
            PREREQ: "SOEN 228,COMP 352",
            COREQ: "",
            NAME: "Operating Systems",
            OPTION: null
        }, {
            ID: "COMP 348",
            CREDIT: 3,
            PREREQ: "COMP 249",
            COREQ: "",
            NAME: "Principles of Programming Languages",
            OPTION: null
        }, {
            ID: "COMP 352",
            CREDIT: 3,
            PREREQ: "COMP 249,COMP 232",
            COREQ: "COMP 232",
            NAME: "Data Structures and Algorithms",
            OPTION: null
        }, {
            ID: "ELEC 275",
            CREDIT: 3.5,
            PREREQ: "ENGR 213",
            COREQ: "ENGR 213",
            NAME: "Principles of Electrical Engineering",
            OPTION: null
        }, {
            ID: "ENCS 282",
            CREDIT: 3,
            PREREQ: "ENGR 201",
            COREQ: "",
            NAME: "Technical Writing and Communication",
            OPTION: null
        }, {
            ID: "ENGR 201",
            CREDIT: 1.5,
            PREREQ: "",
            COREQ: "",
            NAME: "Professional Practice and Responsibility",
            OPTION: null
        }, {
            ID: "ENGR 202",
            CREDIT: 1.5,
            PREREQ: "",
            COREQ: "",
            NAME: "Sustainable Development and Environmental Stewardship",
            OPTION: null
        }, {
            ID: "ENGR 213",
            CREDIT: 3,
            PREREQ: "",
            COREQ: "",
            NAME: "Applied Ordinary Differential Equations",
            OPTION: null
        }, {
            ID: "ENGR 233",
            CREDIT: 3,
            PREREQ: "",
            COREQ: "",
            NAME: "Applied Advanced Calculus",
            OPTION: null
        }, {
            ID: "ENGR 301",
            CREDIT: 3,
            PREREQ: "",
            COREQ: "",
            NAME: "Engineering Management Principles and Economics",
            OPTION: null
        }, {
            ID: "ENGR 371",
            CREDIT: 3,
            PREREQ: "ENGR 213,ENGR 233",
            COREQ: "",
            NAME: "Probability and Statistics in Engineering",
            OPTION: null
        }, {
            ID: "ENGR 391",
            CREDIT: 3,
            PREREQ: "ENGR 213,ENGR 233,COMP 248",
            COREQ: "",
            NAME: "Numerical Methods in Engineering",
            OPTION: null
        }, {
            ID: "ENGR 392",
            CREDIT: 3,
            PREREQ: "ENCS 282,ENGR 201,ENGR 202",
            COREQ: "",
            NAME: "Impact of Technology on Society",
            OPTION: null
        },

        // {
        //     ID: "COMP 345",
        //     CREDIT: 4,
        //     PREREQ: "COMP 352",
        //     COREQ: "COMP 352",
        //     NAME: "Advanced Program Design with C++(games)",
        //     OPTION: 1
        // }, {
        //     ID: "COMP 371",
        //     CREDIT: 4,
        //     PREREQ: "COMP 232,COMP 352",
        //     COREQ: "",
        //     NAME: "Computer Graphics",
        //     OPTION: 1
        // }, {
        //     ID: "COMP 376",
        //     CREDIT: 4,
        //     PREREQ: "COMP 371",
        //     COREQ: "",
        //     NAME: "Introduction to Game Development",
        //     OPTION: 1
        // }, {
        //     ID: "COMP 472",
        //     CREDIT: 4,
        //     PREREQ: "COMP 352",
        //     COREQ: "",
        //     NAME: "Artificial Intelligence",
        //     OPTION: 1
        // }, {
        //     ID: "COMP 476",
        //     CREDIT: 4,
        //     PREREQ: "ENGR 391,COMP 376",
        //     COREQ: "",
        //     NAME: "Advanced Game Development",
        //     OPTION: 1
        // }, {
        //     ID: "COMP 477",
        //     CREDIT: 4,
        //     PREREQ: "ENGR 391,COMP 371",
        //     COREQ: "",
        //     NAME: "Animation for Computer Games",
        //     OPTION: 1
        // }, 
        // {
        //     ID: "COMP 353",
        //     CREDIT: 4,
        //     PREREQ: "COMP 232,COMP 352",
        //     COREQ: "",
        //     NAME: "Databases",
        //     OPTION: 2
        // }, {
        //     ID: "COMP 445",
        //     CREDIT: 4,
        //     PREREQ: "COMP 346",
        //     COREQ: "",
        //     NAME: "Data Communication and Computer Networks",
        //     OPTION: 2
        // }, {
        //     ID: "COMP 479",
        //     CREDIT: 4,
        //     PREREQ: "ENGR 371,COMP 352",
        //     COREQ: "",
        //     NAME: "Information Retrieval and Web Search",
        //     OPTION: 2
        // }, 
        // {
        //     ID: "SOEN 387",
        //     CREDIT: 3,
        //     PREREQ: "COMP 353,SOEN 287,SOEN 341",
        //     COREQ: "COMP 353",
        //     NAME: "Web‑Based Enterprise Application Design",
        //     OPTION: 2
        // }, {
        //     ID: "SOEN 487",
        //     CREDIT: 4,
        //     PREREQ: "SOEN 387",
        //     COREQ: "SOEN 387",
        //     NAME: "Web Services and Applications",
        //     OPTION: 2
        // }, 
        {
            ID: "AERO 480",
            CREDIT: 3.5,
            PREREQ: "SOEN 385",
            COREQ: "",
            NAME: "Flight Control Systems",
            OPTION: 3
        }, {
            ID: "AERO 482",
            CREDIT: 3,
            PREREQ: "ENGR 371,SOEN 385",
            COREQ: "",
            NAME: "Avionic Navigation Systems",
            OPTION: 3
        }, {
            ID: "COEN 320",
            CREDIT: 3,
            PREREQ: "COMP 346",
            COREQ: "",
            NAME: "Introduction to Real‑Time Systems",
            OPTION: 3
        }, {
            ID: "COMP 345",
            CREDIT: 4,
            PREREQ: "COMP 352",
            COREQ: "COMP 352",
            NAME: "Advanced Program Design with C++(embedded)",
            OPTION: 3
        }, {
            ID: "COMP 444",
            CREDIT: 4,
            PREREQ: "COMP 346",
            COREQ: "",
            NAME: "System Software Design",
            OPTION: 3
        }, {
            ID: "SOEN 422",
            CREDIT: 4,
            PREREQ: "COMP 346",
            COREQ: "",
            NAME: "Embedded Systems and Software",
            OPTION: 3
        }, {
            ID: "SOEN 423",
            CREDIT: 4,
            PREREQ: "COMP 346",
            COREQ: "",
            NAME: "Distributed Systems",
            OPTION: 3
        }
        ];
        for (var i = 0; i < $scope.courses.length; i++) {
			$scope.courses[i].PRIORITY = findIt($scope.courses[i],0);
		}
		// $scope.courses[7].PRIORITY = findIt($scope.courses[7],0);
		
		function findIt (obj,sum){
			
				for (var j = 0; j < $scope.courses.length; j++) {
					var preArray = $scope.courses[j].PREREQ.split(",");
					if (preArray.indexOf(obj.ID) >= 0){
						console.log(obj.ID);
						sum = 1 +  findIt($scope.courses[j],sum);
						console.log(sum +" " + obj.ID);
						
					}
				}
				console.log("i am return with sum   "+sum +" "+ obj.ID);
				return sum;	
		}

}]);
