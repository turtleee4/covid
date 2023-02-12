import { ref } from "vue";
import { defineStore } from "pinia";

export const useImage = defineStore("Image", () => {
  const image = ref([
    {
        src:`https://erp.mju.ac.th/picture/information/2968c126140d4912916dcb8220cc21e9s.jpg`,
        alt:'01',
        detail:' สำนักงานฝ่ายเสนาธิการในพระองค์ สำนักพระราชวัง จังหวัดเชียงใหม่ และมหาวิทยาลัยแม่โจ้ ร่วมประชุมเตรียมความพร้อมการรับเสด็จในพิธีพระราชทานปริญญาบัตรมหาวิทยาลัยแม่โจ้ ประจำปีการศึกษา 2564-2565 (ครั้งที่ 45)',
    },
    {
        src:'https://erp.mju.ac.th/picture/information/b10a3cb20aaa4d2bba2b6109c417d126s.jpg',
        alt:'02',
        detail:'  มหาวิทยาลัยแม่โจ้ เข้าร่วมการแข่งขันกีฬามหาวิทยาลัยแห่งประเทศไทย ครั้งที่ 48 “ดอกจานบ้านเชียงเกมส์”',
    },
    {
        src:'https://erp.mju.ac.th/picture/information/f5f73ac9d39545ecace913273f936689s.jpg',
        alt:'03',
        detail:'  คณะสถาปัตย์ฯ ม.แม่โจ้ จัดกิจกรรมอบรมเชิงปฏิบัติการให้ความรู้  “สำนักงานสีเขียว”',
    },
    {
        src:'https://erp.mju.ac.th/picture/information/5f2bab5166f34fff8ad1da231371e4a0s.jpg',
        alt:'04',
        detail:' องค์การบริหารส่วนจังหวัดนครราชสีมา ศึกษาดูงาน “ระบบการทำฟาร์ม เกษตรสมัยใหม่ (4.0)”',
    },
    {
        src:'https://erp.mju.ac.th/picture/information/b391fe37b80b4780979499dc2dc6e57fs.jpg',
        alt:'05',
        detail:' อบต.คลองปาง จ.ตรัง เข้าศึกษาดูงาน อพ.สธ.-มจ.',
    },
    {
        src:'https://erp.mju.ac.th/picture/information/217499d0c12c42729ca6696f57fa8207s.jpg',
        alt:'06',
        detail:' ม.แม่โจ้ จัดพิธีทำบุญตักบาตร บำเพ็ญกุศลถวายพระพรแด่สมเด็จพระเจ้าลูกเธอ เจ้าฟ้าพัชรกิติยาภา นเรนทิราเทพยวดี กรมหลวงราชสาริณีสิริพัชร มหาวัชรราชธิดา ให้ทรงหายจากพระอาการประชวร',
    },
    {
        src:'https://erp.mju.ac.th/picture/information/69fd3559f5ee47d0a6d51ea2e999d147s.jpg',
        alt:'07',
        detail:' มหาวิทยาลัยแม่โจ้ จัดพิธีลงนามบันทึกความเข้าใจความร่วมมือทางวิชาการ กับ สถาบันวิจัยและพัฒนาพื้นที่สูง (องค์การมหาชน)',
    },
    {
        src:'https://erp.mju.ac.th/picture/information/3272a73fca684ec1920e166b4a20d289s.jpg',
        alt:'08',
        detail:' เป็นผู้แทนมหาวิทยาลัยแม่โจ้ เข้าร่วมงานในพิธีกระทำสัตย์ปฏิญาณตนต่อธงชัยเฉลิมพล ประจำปี 2566 วันกองทัพไทย',
    },
  ]);
  return {image};
});
