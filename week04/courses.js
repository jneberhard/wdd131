// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        { sectionNum: 1, roomNum: "STC 353", enrolled: 26, days: "TTH", instructor: "Bro T", },
        { sectionNum: 2, roomNum: "STC 347", enrolled: 28, days: "TTH", instructor: "Sis A", },
    ],

    enrollStudent: function (sectionNum) {
        const sectionIndex = this.sections.findIndex(
            (section) => section.sectionNum == sectionNum
        );
        if (sectionNum >= 0) {
            this.section[sectionIndex].enrolled++;
            renderSections(this.sections);
        }
    },

    dropStudent: function (sectionNum) {
        const sectionIndex = this.sections.findIndex(
            (section) => section.sectionNum == sectionNum
        );
        if (sectionNum >= 0) {
            this.section[sectionIndex].enrolled--;
            renderSections(this.sections)
        }
        /*   other way to write enrollStudent and dropStudent
    changeEnrollment: function (sectionNum, add = true) {
        const sectionIndex = this.sections.findIndex(
            (section) => section.sectionNum == sectionNum
    );
        if (sectionIndex >= 0) {
        if (add) {
            this.sections[sectionIndex].enrolled++;
        } else {
            this.sections[sectionIndex].enrolled--;
        }
        renderSections(this.sections);
    }
  } 
        */
    },
};

function setCourseInfo(course) {
    const courseName = document.querySelector("#courseName");
    const courseCode = document.querySelector("#courseCode");
    courseName.textContent = course.name;
    courseCode.textContent = course.code;
}

function renderSelections(sections) {
    const html = sections.map(
        (section) => `<tr>
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td></tr>`
    );
    document.querySelector("#sections").innerHTML = html.join("");
}

document.querySelector("enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectionNum);
});

document.querySelector("dropStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.dropStudent(sectionNum);
});



setCourseInfo(aCourse);
renderSections(aCourse.sections);

