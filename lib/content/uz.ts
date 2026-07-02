import type { SiteContent } from "./types";

/** O'zbekcha lug'at — ru.ts (asosiy manba) bilan bir xil tuzilishda. */
export const uz: SiteContent = {
  locale: "uz",

  meta: {
    title: "Freshman Consulting — biznes jarayonlaridagi yo'qotishlarni topamiz va tuzatamiz",
    description:
      "Freshman Consulting kompaniyalar bilan ishlaydi: ish jarayonlaridagi tor joylarni topadi va bartaraf etadi — bepul auditdan tayyor yechim va uzoq muddatli hamkorlikkacha.",
    skipToContent: "Mazmunga o'tish",
  },

  brand: {
    wordmark: "Freshman",
    suffix: "CONSULTING",
    location: "Toshkent",
  },

  nav: {
    links: [
      { label: "So'nggi yangiliklar", href: "#case-studies" },
      { label: "Biz haqimizda", href: "#about" },
      { label: "Nima qilamiz", href: "#process" },
    ],
    cta: "Bog'lanish",
    langAriaLabel: "Til tanlash",
    menuOpen: "Menyuni ochish",
    menuClose: "Menyuni yopish",
  },

  hero: {
    tagline: "Biznesingiz qayerda pul yo'qotayotganini topamiz.",
    sub: "Va uni bosqichma-bosqich tuzatamiz.",
    scrollCue: "Pastga",
    unmute: "Ovozni yoqish",
    mute: "Ovozni o'chirish",
  },

  stakes: {
    label: "Nima xavf ostida",
    title: "Samarasizlik — ko'rinmas xarajat.",
    intro:
      "Qo'lda bajariladigan yumushlar, takroriy ma'lumotlar, yo'qolgan mijozlar — bular hisobotlarda ko'rinmaydi, lekin har oy daromadingizning bir qismini yeb boradi.",
    items: [
      {
        value: "40%+",
        label: "xodimlar ish haftasining kamida choragini qo'lda bajariladigan, takrorlanuvchi ishlarga sarflaydi",
        source: "Smartsheet, 2017",
      },
      {
        value: "60%",
        label: "ish vaqti «ish atrofidagi ish»ga ketadi: kelishuvlar, holat so'rash, ilovalar orasida sakrash",
        source: "Asana, Anatomy of Work, 2021",
      },
      {
        value: "1 kun",
        label: "har hafta — deyarli 20% vaqt — ichki ma'lumot va kerakli hamkasblarni qidirishga ketadi",
        source: "McKinsey Global Institute, 2012",
      },
      {
        value: "10 dan 6",
        label: "kasbda kamida 30% amallarni mavjud texnologiyalar bilan avtomatlashtirish mumkin",
        source: "McKinsey Global Institute, 2017",
      },
    ],
  },

  about: {
    label: "Biz haqimizda",
    title: "Buni tuzatsa bo'ladi. Bu — bizning ishimiz.",
    body: "Freshman Consulting biznes jarayonlarini tartibga soladi: operatsiyalaringiz aslida qanday ishlashini o'rganamiz, tor joylarni topamiz va ularni avtomatlashtirish, integratsiyalar va aniq tartib-qoidalar bilan bartaraf etamiz.",
    points: [
      {
        title: "Topamiz",
        body: "Jarayonni boshdan-oxirigacha ko'ramiz — birinchi arizadan to'lovgacha — va vaqt, pul, mijozlar qayerda yo'qolayotganini aniqlaymiz.",
      },
      {
        title: "Tuzatamiz",
        body: "Yechimni loyihalab, ishga tushiramiz: avtomatlashtirish, integratsiyalar va o'zini oqlaydigan joyda — AI.",
      },
      {
        title: "Yonda qolamiz",
        body: "Ishga tushirgach yo'qolib qolmaymiz: tizimni qo'llab-quvvatlaymiz, natijani o'lchaymiz va uni siz bilan birga rivojlantiramiz.",
      },
    ],
  },

  caseStudies: {
    label: "Keyslar",
    title: "Biz qilgan ishlar",
    rowLabels: { problem: "Muammo", built: "Yechim", result: "Natija" },
    items: [
      {
        sector: "Barbershop, Toshkent",
        problem:
          "Navbat qo'ng'iroq va yozishmalar orqali yuritilardi — administrator band, mijozlar yo'qolardi.",
        built:
          "Uchta Telegram-botdan iborat tizim: mijozlar uchun yozilish, ustalar uchun kalendar, egasi uchun boshqaruv paneli — va keshbek dasturi.",
        result:
          "Yozilish 24/7 administratorsiz ishlaydi; egasi bandlik va tushumni real vaqtda ko'radi.",
      },
      {
        sector: "O'quv markazi",
        problem:
          "Yozma ishlarni tekshirish har hafta o'qituvchilarning soatlab vaqtini olardi.",
        built: "Qo'lyozma ishlarni avtomatik tekshiruvchi AI xizmati.",
        result:
          "Tekshirish soatlardan daqiqalarga tushdi; o'qituvchilar o'qitish bilan shug'ullanadi.",
      },
      {
        sector: "Til o'rganish",
        problem:
          "O'quvchilarga mahalliy dasturga mos, sodda so'z yodlash vositasi yetishmasdi.",
        built: "Intervalli takrorlash asosidagi so'z yodlash mobil ilovasi.",
        result: "Marketing byudjetisiz 1 000+ faol foydalanuvchi.",
      },
    ],
  },

  process: {
    label: "Nima qilamiz",
    note: "To'rt qadam — tanishuvdan hamkorlikkacha.",
    steps: [
      {
        num: "01",
        title: "Bepul audit",
        body: "Operatsiyalaringizni tahlil qilamiz: arizalar qanday keladi, nimalar qo'lda bajariladi, kechikishlar qayerda to'planadi. Bepul va majburiyatsiz.",
      },
      {
        num: "02",
        title: "Hisobot va reja",
        body: "Nimani va qanday tartibda tuzatish kerakligini ko'rsatamiz: aniq yechimlar, kutilayotgan samara va narxi bilan.",
      },
      {
        num: "03",
        title: "Quramiz",
        body: "Davom etishga qaror qilsangiz — joriy etishni o'z zimmamizga olamiz: prototipdan ishga tushirishgacha.",
      },
      {
        num: "04",
        title: "Hamkorlik",
        body: "Sizning texnik tomoningiz bo'lib qolamiz: qo'llab-quvvatlash, rivojlantirish, yangi o'sish nuqtalari.",
      },
    ],
  },

  finalCta: {
    title: "Biznesingiz qayerda pul yo'qotayotganini birga topamiz.",
    sub: "Birinchi qadam — jarayonlaringizning bepul auditi.",
    cta: "Bog'lanish",
  },

  footer: {
    left: "© 2026 Freshman Consulting · Toshkent",
    right: "Biznes jarayonlarini tartibga solamiz.",
  },
};
