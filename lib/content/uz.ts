import type { SiteContent } from "./types";

/** O'zbekcha lug'at — ru.ts (asosiy manba) bilan bir xil tuzilishda. */
export const uz: SiteContent = {
  locale: "uz",

  meta: {
    title: "Freshman Consulting — biznes jarayonlaridagi yo'qotishlarni topamiz va bartaraf etamiz",
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
      { label: "Keyslar", href: "#case-studies" },
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
        body: "Jarayonni boshidan oxirigacha ko'ramiz — birinchi arizadan to'lovgacha — va vaqt, pul, mijozlar qayerda yo'qolayotganini aniqlaymiz.",
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

  difference: {
    label: "Nega biz",
    title: "Big4 emas. Frilanser emas. Maxsus loyihalar jamoasi.",
    positioning:
      "Biznesga moliyalashtirish jalb qilish, investitsiyalarni tuzilmalash, operatsiyalarni avtomatlashtirish va Markaziy Osiyoda strategik loyihalarni amalga oshirishda yordam beramiz: g'oyadan ishlaydigan tizimgacha.",
    items: [
      {
        versus: "Big4",
        body: "Xuddi shunday qat'iy yondashuv, lekin partnyorlar va juniorlardan iborat ortiqcha bo'g'inlarsiz. Siz bilan loyihani bevosita qiladigan odamlar ishlaydi: muddat qisqaroq, narx bir necha barobar past.",
      },
      {
        versus: "Mahalliy konsultantlar",
        body: "Xalqaro standartlar: moliyaviy modellashtirish, DFI va eksport-kredit agentliklariga chiqish, banklar va investorlar tushunadigan hujjatlar.",
      },
      {
        versus: "Frilanserlar",
        body: "Topshirib yo'qolib qolmaymiz. Natija uchun javob beramiz: quramiz, joriy etamiz va qo'llab-quvvatlashda qolamiz.",
      },
    ],
  },

  // TODO(owner): quyidagi qiymatlar qoralama — e'lon qilishdan oldin tasdiqlash kerak.
  credentials: {
    label: "Raqamlar",
    title: "Konsaltingda raqamlarga qaraladi. Mana bizniki.",
    items: [
      { value: "$10M+", label: "maslahat berilgan loyihalar qiymati" },
      { value: "20+", label: "moliyalashtirish mandati" },
      { value: "10+", label: "qurilgan va joriy etilgan tizim" },
      { value: "3", label: "ishlayotgan davlatlarimiz" },
    ],
  },

  // TODO(owner): tayyor bo'lganda haqiqiy mijoz logotiplariga almashtirish.
  clients: {
    label: "Bizga ishonishadi",
    names: [
      "Barbershop · Toshkent",
      "O'quv markazi · Toshkent",
      "Til platformasi · 1 000+ foydalanuvchi",
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
          "O'quvchilarga mahalliy o'quv dasturiga mos, sodda so'z yodlash vositasi yetishmasdi.",
        built: "Intervalli takrorlash asosidagi so'z yodlash mobil ilovasi.",
        result: "Marketing byudjetisiz 1 000+ faol foydalanuvchi.",
      },
    ],
  },

  guides: {
    label: "Qo'llanmalar",
    title: "Murakkabni sodda qilamiz. Bepul.",
    intro:
      "O'zbekistonda loyihalarni moliyalashtirish va amalga oshirish bo'yicha amaliy materiallar. Haqiqiy bitimlar tajribasidan yozamiz.",
    comingSoon: "Tez orada",
    items: [
      {
        title: "O'zbekistonda loyihaviy moliyalashtirishni qanday jalb qilish mumkin",
        blurb: "Bosqichma-bosqich: moliyaviy modeldan birinchi transhgacha.",
      },
      {
        title: "Sinosure qoplamasi bilan moliyalashtirish bo'yicha qo'llanma",
        blurb: "Xitoy eksport sug'urtasi qanday ishlaydi va qaysi loyihalarga mos keladi.",
      },
      {
        title: "EPC xaridlaridagi risklar",
        blurb: "Qurilish to'xtab qolmasligi uchun imzodan oldin shartnomada nimani tekshirish kerak.",
      },
      {
        title: "IFC yoki tijorat banklari",
        blurb: "Kapitalga ikki yo'l taqqoslanadi: narx, muddat, talablar.",
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

  // TODO(owner): tarjimai hol matnlarini aniqlashtirish.
  team: {
    label: "Jamoa",
    title: "Siz bilan kim ishlaydi",
    intro: "Har bir a'zosi loyihadagi o'z qismi uchun shaxsan javob beradigan kichik jamoa.",
    members: [
      {
        name: "Valera Arakelyan",
        role: "Partnyor · Strategiya va yo'nalish",
        bio: "Yo'nalishni belgilaydi: loyihalar strategiyasi, hamkorliklar, kompaniya o'sishi.",
      },
      {
        name: "Said Abdullayev",
        role: "Partnyor · Korporativ moliya",
        bio: "Moliyalashtirish jalb qilish, EKA va DFI bilan ishlash, bitimlarni tuzilmalash.",
      },
      {
        name: "Abdulhamid Nuriddinov",
        role: "Partnyor · Texnologiya va avtomatlashtirish",
        bio: "Tizimlarni loyihalaydi va quradi: jarayonlarni avtomatlashtirish, integratsiyalar, AI yechimlari.",
      },
      {
        name: "Samandar Norboev",
        role: "Partnyor · Texnologiya va avtomatlashtirish",
        bio: "Tizimlarni loyihalaydi va quradi: jarayonlarni avtomatlashtirish, integratsiyalar, AI yechimlari.",
      },
    ],
  },

  faq: {
    label: "FAQ",
    title: "Ko'p so'raladigan savollar",
    items: [
      {
        q: "Ish nimadan boshlanadi?",
        a: "Bepul auditdan. Jarayonlaringiz yoki loyihangizni tahlil qilamiz, pul qayerda yo'qolayotganini ko'rsatamiz va reja taklif qilamiz. Majburiyatsiz.",
      },
      {
        q: "Big4 va frilanserlardan nimangiz bilan farq qilasiz?",
        a: "Big4'dan: xuddi shu qat'iylikda tezlik va narx bilan. Frilanserlardan: natija uchun javobgarlik bilan. Quramiz, joriy etamiz va qo'llab-quvvatlashda qolamiz.",
      },
      {
        q: "Qanday loyihalar bilan ishlaysiz?",
        a: "Moliyalashtirish jalb qilish, investitsiyalarni tuzilmalash, strategik loyihalar va operatsiyalarni avtomatlashtirish. O'zbekiston va Markaziy Osiyo.",
      },
      {
        q: "To'lovni qanday olasiz?",
        a: "Bosqichning qat'iy narxi yoki reteyner. Hajm aniq bo'lgach, auditdan keyin kelishamiz. Yashirin soatlar yo'q.",
      },
      {
        q: "Faqat Toshkentda ishlaysizmi?",
        a: "Yo'q. Bazamiz Toshkentda, lekin butun Markaziy Osiyo bo'ylab ishlaymiz. Muloqotning katta qismi onlayn o'tadi.",
      },
      {
        q: "Loyiha qancha vaqt oladi?",
        a: "Audit: bir haftagacha. Keyingisi ko'lamga bog'liq. Dastlabki yechimlar odatda 2–6 haftada ishlay boshlaydi.",
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
