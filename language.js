const enButton = document.getElementById("en-btn");
const trButton = document.getElementById("tr-btn");

enButton.addEventListener("click", function () {

    enButton.classList.add("active");
    trButton.classList.remove("active");

    changeLanguage("en");

});


trButton.addEventListener("click", function () {

    trButton.classList.add("active");
    enButton.classList.remove("active");

    changeLanguage("tr");

});



const translations = {

    en: {
        hero: {
            hello: "HELLO, I'M",
            subtitle: "Computer Engineering Student",
            description: "I build modern applications with AI, mobile technologies and backend systems."
        },

        skills: {
            title: "SKILLS"
        },

        about: {
            title: "ABOUT ME",
            heading: "Who I Am",

            paragraph1: "I am a fourth-year Computer Engineering student at Adıyaman University. I am developing my skills in artificial intelligence, deep learning, computer vision, and mobile application development.",

            paragraph2: "As part of my academic studies, I work on deep learning-based image classification and segmentation projects and conduct research focused on the analysis of medical images.",

            paragraph3: "I have developed mobile applications using React Native and gained professional work experience through my software development internship.",

            paragraph4: "As the founder and manager of the Astrophysics and Observation Club, a member of TÜBİTAK MTKB, I organize scientific events and continue to develop my leadership, teamwork, and organizational skills.",

            paragraph5: "As an open-minded, research-oriented, and solution-focused aspiring engineer, I aim to continuously improve my academic and technical skills.",

            education: "Education",
            educationValue: "Computer Engineering",

            focus: "Focus",
            focusValue: "AI & Software Development",

            interests: "Interests",
            interestsValue: "AI · Mobile · Backend"
        },

        projects: {
            title: "PROJECTS",

            project1Title: "Brain Tumor Segmentation from MRI Images",
            project1Description: "Deep learning project for automatic brain tumor segmentation using MRI images with U-Net and MONAI.",

            project2Title: "Colon Disease Classification from Endoscopy Images",
            project2Description: "Deep learning project for classifying endoscopy images using MesNet, a custom deep learning model developed for this project, alongside state-of-the-art architectures.",

            project3Title: "Hotel Reservation Automation",
            project3Description: "Desktop hotel management system developed with C# and .NET for managing rooms, customers, and reservations.",

            project4Title: "Etkinlikler.com – Event & Ticket Platform",
            project4Description: "Biletix-inspired web platform developed with HTML and CSS for browsing events and simulating ticket booking."
        },

        contact: {
            title: "CONTACT"
        },

        nav: {
            home: "HOME",
            about: "ABOUT",
            projects: "PROJECTS",
            contact: "CONTACT",
            resume: "Resume"
        },



    },

    tr: {
        hero: {
            hello: "MERHABA, BEN",
            subtitle: "Bilgisayar Mühendisliği Öğrencisi",
            description: "Yapay zekâ, mobil teknolojiler ve backend sistemleri ile modern uygulamalar geliştiriyorum."
        },

        skills: {
            title: "YETENEKLER"
        },

        about: {
            title: "HAKKIMDA",
            heading: "Ben Kimim?",

            paragraph1: "Adıyaman Üniversitesi Bilgisayar Mühendisliği 4. sınıf öğrencisiyim. Yapay zekâ, derin öğrenme, görüntü işleme ve mobil uygulama geliştirme alanlarında kendimi geliştirmekteyim.",

            paragraph2: "Akademik çalışmalarım kapsamında derin öğrenme tabanlı görüntü sınıflandırma ve segmentasyon projeleri yürütmekte, sağlık alanındaki görüntülerin analizine yönelik araştırmalar gerçekleştirmekteyim.",

            paragraph3: "React Native kullanarak mobil uygulamalar geliştirmiş ve yazılım geliştirme stajı kapsamında profesyonel çalışma deneyimi kazanmış bulunmaktayım.",

            paragraph4: "Kurucusu ve yöneticisi olduğum TÜBİTAK MTKB üyesi Astrofizik ve Gözlem Topluluğumuz aracılığıyla bilimsel etkinlikler organize ederek liderlik, ekip çalışması ve organizasyon becerilerimi geliştirmekteyim.",

            paragraph5: "Öğrenmeye açık, araştırmacı ve çözüm odaklı bir mühendis adayı olarak akademik ve teknik yetkinliklerimi sürekli ileri taşımayı hedefliyorum.",

            education: "Eğitim",
            educationValue: "Bilgisayar Mühendisliği",

            focus: "Odak Alanı",
            focusValue: "Yapay Zekâ & Yazılım Geliştirme",

            interests: "İlgi Alanları",
            interestsValue: "Yapay Zekâ · Mobil · Backend"
        },

        projects: {
            title: "PROJELER",

            project1Title: "MR Görüntülerinden Beyin Tümörü Segmentasyonu",
            project1Description: "U-Net ve MONAI kullanılarak MR görüntülerinden otomatik beyin tümörü segmentasyonu gerçekleştiren derin öğrenme projesi.",

            project2Title: "Endoskopi Görüntülerinden Kolon Hastalığı Sınıflandırması",
            project2Description: "Bu proje için geliştirilen özel derin öğrenme modeli MesNet ve güncel mimariler kullanılarak endoskopi görüntülerinin sınıflandırıldığı derin öğrenme projesi.",

            project3Title: "Otel Rezervasyon Otomasyonu",
            project3Description: "Odaların, müşterilerin ve rezervasyonların yönetimi için C# ve .NET kullanılarak geliştirilen masaüstü otel yönetim sistemi.",

            project4Title: "Etkinlikler.com – Etkinlik ve Bilet Platformu",
            project4Description: "Etkinliklerin görüntülenmesi ve bilet rezervasyonunun simüle edilmesi amacıyla HTML ve CSS kullanılarak geliştirilen Biletix benzeri web platformu."
        },

        contact: {
            title: "İLETİŞİM"
        },

        nav: {
            home: "ANA SAYFA",
            about: "HAKKIMDA",
            projects: "PROJELER",
            contact: "İLETİŞİM",
            resume: "CV",
        },


    }

};

function changeLanguage(language) {

    const elements = document.querySelectorAll("[data-i18n]");

    elements.forEach(function (element) {

        const key = element.getAttribute("data-i18n");

        const [section, text] = key.split(".");

        element.textContent = translations[language][section][text];

    });

}
