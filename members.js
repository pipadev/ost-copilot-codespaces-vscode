function skillsMembers() {
    var members = [
        {
            name: "John Doe",
            skills: ["JavaScript", "Python", "PHP"]
        },
        {
            name: "Jane Doe",
            skills: ["JavaScript", "Python", "Ruby"]
        },
        {
            name: "Jim Doe",
            skills: ["HTML", "CSS", "JavaScript"]
        },
        {
            name: "Jill Doe",
            skills: ["JavaScript", "Python", "PHP"]
        },
        {
            name: "Jack Doe",
            skills: ["JavaScript", "Python", "Ruby"]
        }
    ];

    var skills = members.reduce(function (prev, curr) {
        curr.skills.forEach(function (skill) {
            if (prev.indexOf(skill) === -1) {
                prev.push(skill);
            }
        });
        return prev;
    }, []);

    return skills;
}