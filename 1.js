const myBiodata = (nama, umur) => {
    return {
        "name": nama,
        "age": umur,
        "address": "Depok",
        "hobbies": ["Music", "Programming", "Game", "Design", "Watch Movies"],
        "is_married": false,
        "list_school": [{
                "name": "SMA Bintara Depok",
                "year_in": 2010,
                "year_out": 2013,
                "major": "IPS"
            },
            {
                "name": "SMP Bintara Depok",
                "year_in": 2007,
                "year_out": 2010,
                "major": null
            },
            {
                "name": "SDN Sasak Panjang 01",
                "year_in": 2001,
                "year_out": 2007,
                "major": null
            }
        ],
        "skills": [{
                "skill_name": "Music Production",
                "level": "expert"
            },
            {
                "skill_name": "English",
                "level": "advanced"
            },
            {
                "skill_name": "Graphic Design",
                "level": "advanced"
            },
            {
                "skill_name": "HTML & CSS",
                "level": "advanced"
            },
            {
                "skill_name": "JavaScript",
                "level": "advanced"
            },
            {
                "skill_name": "Node JS",
                "level": "beginner"
            },
            {
                "skill_name": "MySQL",
                "level": "beginner"
            }
        ],
        "interest_in_coding": true
    }
};

console.log(myBiodata("Dimas Wahyu Juhair Mokodompit", 24));