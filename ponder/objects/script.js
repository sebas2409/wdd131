const aCourse = {
    code: 'ITM232',
    name: 'Devops',
    sections: [
        {sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
        {sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}
    ],
    enrollStudent: function (sectionNum) {
        // const sectionIndex = this.sections.findIndex(
        //     (section) => {
        //         // need to convert string to int if I want to use === to compare sectionNum to section.sectionNum. Otherwise, == will work.
        //         if (typeof sectionNum === 'string') {
        //             sectionNum = parseInt(sectionNum);
        //         }
        //         return section.sectionNum === sectionNum
        //     }
        // );
        // if (sectionIndex >= 0) {
        //     this.sections[sectionIndex].enrolled++;
        //     renderSections(this.sections);
        // }

        // this.sections.forEach(section => {
        //     if (section.sectionNum == sectionNum) {
        //         section.enrolled++;
        //         renderSections(this.sections);
        //     }
        //
        // })

        this.sections.find(section => section.sectionNum == sectionNum).enrolled++;
        renderSections(this.sections);
    }
};

function sectionTemplate(section) {
    return `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td>
      </tr>`
}

function renderSections(sections) {
    const html = sections.map(sectionTemplate);
    document.querySelector("#sections").innerHTML = html.join("");
}

renderSections(aCourse.sections);

document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    console.log(typeof sectionNum); //string
    aCourse.enrollStudent(sectionNum);
});
