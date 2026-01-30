// Data source for Achievements and News
// ID: Unique identifier
// date: Display date
// title: Headline
// image: Path to image (or empty for placeholder)
// tags: Array of strings (e.g. ['Event', 'Demo'])
// description: Text description for the card view
// link: URL to detail page or external link (optional)

const newsData = [
    {
        id: 6,
        date: "2026年1月16日",
        title: "弊社代表がHBC様に取材いただきました。",
        image: "images/20260116HBC.AVIF",
        tags: ["TV取材"],
        description: "HBC様の「もうひとホリ」で最新の除雪ロボットとしてYarboを取り上げていただきました。",
        link: "https://youtu.be/UeBm6A71hUw?si=q-1-Mfhyfy-EDrDg"
    },
    {
        id: 5,
        date: "2025年12月19日",
        title: "除雪ロボットの実証実験の様子がテレビで放映いただきました！",
        image: "images/251219demosnow.webp",
        tags: ["TV取材", "新聞取材"],
        description: "TVH様、HTB様、北海道新聞様に除雪ロボット Yarbo の実証実験の様子を取材いただき、夕方と朝のニュースコーナーで取り上げていただきました。ご興味ある方は、本ページお問い合わせフォームよりご連絡ください！",
        link: "https://youtu.be/QfDL_GqTBhs?si=9rebuB0Rt5bYLP5k"
    },
    {
        id: 4,
        date: "2025年12月19日",
        title: "開北工業様と実証実験を開始いたしました！",
        image: "images/251219demoPR.webp",
        tags: ["イベント"],
        description: "厚別区の除雪業務を担当されている開北工業様と、未来の除雪の形を検証する実証実験を開始しました。今回の実証試験は、積雪環境下における除雪ロボットによる除雪作業の実用性や運用上の課題を確認し、将来的な除雪作業の省力化・安全性向上につなげることを目的として実施しております。本実証は今冬を通じて継続する予定であり、今後、得られた知見を整理し、自治体および民間事業者の皆様にとって有益な形で情報発信・ご報告ができるよう取り組んでまいります。",
        link: "#"
    },
    {
        id: 3,
        date: "2025年11月6日＆7日",
        title: "北海道ビジネス EXPOに出展いたします！",
        image: "images/2511EXPO.webp",
        tags: ["イベント", "出展情報"],
        description: "弊社販売パートナーの宮田自動車商会様のブースにて共同出展させていただきます。弊ブースにご来店お待ちしております。",
        link: "#"
    },
    {
        id: 2,
        date: "2025年6月~11月",
        title: "様々な環境下で自動芝刈りの検証を行いました。",
        image: "images/Lownmoweqyuru.webp",
        tags: ["実証実験", "顧客デモ"],
        description: "グラウンド、パチンコ店、ゴルフ場、空港敷地内など様々な環境下でデモンストレーションを行いました。芝刈り能力も高評価をいただいております。",
        link: "#"
    },
    {
        id: 1,
        date: "2025年2月",
        title: "札幌市内の大学内で除雪ロボット Yarbo の実証実験を行いました。",
        image: "images/2502snowblower.webp",
        tags: ["実証実験"],
        description: "除雪ロボット Yarboの動作や精度の計測を行いました。",
        link: "#"
    },
];
