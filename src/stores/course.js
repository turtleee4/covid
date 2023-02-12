import { ref } from "vue";
import { defineStore } from "pinia";

export const useCourse = defineStore("Course", () => {
  const course = ref([
    {
        code:'คพ313',
        nameTh:'การพัฒนาโปรแกรมประยุกต์บนเว็บ',
        nameEg:'Web Application Development',
        group:'1',
    },
    {
        code:' คพ343',
        nameTh:'การวิเคราะห์และออกแบบเชิงวัตถุ',
        nameEg:'Object Oriented Analysisand Design',
        group:'1',
    },
    {
        code:'คพ252',
        nameTh:'คณิตศาสตร์สำหรับวิทยาการคอมพิวเตอร์',
        nameEg:'Mathematics for Computer Science',
        group:'1',
    },
    {
        code:'ศท242',
        nameTh:'ภาษาอังกฤษเชิงวิทยาศาสตร์และเทคโนโลยี 2',
        nameEg:'English for Science and Technology 2',
        group:'2',
    },
    {
        code:'คพ232',
        nameTh:'สถาปัตยกรรมคอมพิวเตอร์',
        nameEg:'Computer Architecture',
        group:'1',
    },
    {
        code:'ศท013',
        nameTh:'สุขภาพเพื่อการดำรงชีวิต',
        nameEg:'Health for Life',
        group:'11',
    },
    {
        code:'สต301',
        nameTh:'หลักสถิติ',
        nameEg:'Principles of Statistics',
        group:'6',
    },
  ]);
  return {course};
});
