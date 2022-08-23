export interface FAQObject {
    Q: string;
    A: String;
}

const FAQS: FAQObject[] = [
    {
        Q: "What does LOREM mean?",
        A: "‘Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts, for example, in order to give an impression of the finished document. The text is intentionally unintelligible so that the viewer is not distracted by the content. The language is not real Latin and even the first word ‘Lorem’ does not exist. It is said that the lorem ipsum text has been common among typesetters since the 16th century. (Source: Wikipedia.com).",
    },
    {
        Q: "Where can I subscribe to your newsletter?",
        A: "We often send out our newsletter with news and great offers. We will never disclose your data to third parties and you can unsubscribe from the newsletter at any time. Subscribe here to our newsletter.",
    },
    {
        Q: "Do you accept orders via Phone or E-mail?",
        A: "No, we are an online shop and we do not take orders via Phone, E-mail or Social Media.",
    },
];

const text: string =
    "Do you have a question about your subscription, a recent order, products, shipping or you want to suggest a new magazine ? Here you can find some helpful answers to frequently asked questions(FAQ).";

export interface Tdata {
    name: string;
    email: string;
    issueType: string;
    description: string;
    remarks: {
        remark: string;
        date: string;
    }[];
    create: string;
    isActive: boolean;
}

const data: Tdata[] = [
    {
        name: "THE",
        email: "ME@gmail",
        issueType: "ME",
        description: "SJVSBVHBHBVHBSVBHVSBJIS",
        remarks: [
            {
                remark: "NJVHSVHVBHSB",
                date: new Date().toLocaleDateString(),
            },
            {
                remark: "sdduvusbuvh",
                date: new Date().toLocaleDateString(),
            },

            {
                remark: "ifiubau",
                date: new Date().toLocaleDateString(),
            },

            {
                remark: "NJVHSVHiwhd8wgy7fgyuwbVBHSB",
                date: new Date().toLocaleDateString(),
            },
            {
                remark: "NJVHSVHiosnvuihuVBHSB",
                date: new Date().toLocaleDateString(),
            },
            {
                remark: "iwjifhub",
                date: new Date().toLocaleDateString(),
            },
        ],
        create: new Date().toLocaleDateString(),
        isActive: true,
    },
    {
        name: "heheh",
        email: "ME@gmail",
        issueType: "ME",
        description: "SJVSBVHBHBVHBSVBHVSBJIS",
        remarks: [
            {
                remark: "NJVHSVHVBHSB",
                date: new Date().toLocaleDateString(),
            },
            {
                remark: "sdduvusbuvh",
                date: new Date().toLocaleDateString(),
            },

            {
                remark: "ifiubau",
                date: new Date().toLocaleDateString(),
            },

            {
                remark: "NJVHSVHiwhd8wgy7fgyuwbVBHSB",
                date: new Date().toLocaleDateString(),
            },
            {
                remark: "NJVHSVHiosnvuihuVBHSB",
                date: new Date().toLocaleDateString(),
            },
            {
                remark: "iwjifhub",
                date: new Date().toLocaleDateString(),
            },
        ],
        create: new Date().toLocaleDateString(),
        isActive: true,
    },

    {
        name: "nsivijo",
        email: "ME@gmail",
        issueType: "ME",
        description: "SJVSBVHBHBVHBSVBHVSBJIS",
        remarks: [
            {
                remark: "NJVHSVHVBHSB",
                date: new Date().toLocaleDateString(),
            },
            {
                remark: "sdduvusbuvh",
                date: new Date().toLocaleDateString(),
            },

            {
                remark: "ifiubau",
                date: new Date().toLocaleDateString(),
            },

            {
                remark: "NJVHSVHiwhd8wgy7fgyuwbVBHSB",
                date: new Date().toLocaleDateString(),
            },
            {
                remark: "NJVHSVHiosnvuihuVBHSB",
                date: new Date().toLocaleDateString(),
            },
            {
                remark: "iwjifhub",
                date: new Date().toLocaleDateString(),
            },
        ],
        create: new Date().toLocaleDateString(),
        isActive: true,
    },
    {
        name: "NP",
        email: "ME@gmail",
        issueType: "ME",
        description: "SJVSBVHBHBVHBSVBHVSBJIS",
        remarks: [
            {
                remark: "NJVHSVHVBHSB",
                date: new Date().toLocaleDateString(),
            },
            {
                remark: "sdduvusbuvh",
                date: new Date().toLocaleDateString(),
            },

            {
                remark: "ifiubau",
                date: new Date().toLocaleDateString(),
            },

            {
                remark: "NJVHSVHiwhd8wgy7fgyuwbVBHSB",
                date: new Date().toLocaleDateString(),
            },
            {
                remark: "NJVHSVHiosnvuihuVBHSB",
                date: new Date().toLocaleDateString(),
            },
            {
                remark: "iwjifhub",
                date: new Date().toLocaleDateString(),
            },
        ],
        create: new Date().toLocaleDateString(),
        isActive: true,
    },
    {
        name: "THE",
        email: "ME@gmail",
        issueType: "ME",
        description: "SJVSBVHBHBVHBSVBHVSBJIS",
        remarks: [
            {
                remark: "NJVHSVHVBHSB",
                date: new Date().toLocaleDateString(),
            },
            {
                remark: "sdduvusbuvh",
                date: new Date().toLocaleDateString(),
            },

            {
                remark: "ifiubau",
                date: new Date().toLocaleDateString(),
            },

            {
                remark: "NJVHSVHiwhd8wgy7fgyuwbVBHSB",
                date: new Date().toLocaleDateString(),
            },
            {
                remark: "NJVHSVHiosnvuihuVBHSB",
                date: new Date().toLocaleDateString(),
            },
            {
                remark: "iwjifhub",
                date: new Date().toLocaleDateString(),
            },
        ],
        create: new Date().toLocaleDateString(),
        isActive: true,
    },
    {
        name: "heheh",
        email: "ME@gmail",
        issueType: "ME",
        description: "SJVSBVHBHBVHBSVBHVSBJIS",
        remarks: [
            {
                remark: "NJVHSVHVBHSB",
                date: new Date().toLocaleDateString(),
            },
            {
                remark: "sdduvusbuvh",
                date: new Date().toLocaleDateString(),
            },

            {
                remark: "ifiubau",
                date: new Date().toLocaleDateString(),
            },

            {
                remark: "NJVHSVHiwhd8wgy7fgyuwbVBHSB",
                date: new Date().toLocaleDateString(),
            },
            {
                remark: "NJVHSVHiosnvuihuVBHSB",
                date: new Date().toLocaleDateString(),
            },
            {
                remark: "iwjifhub",
                date: new Date().toLocaleDateString(),
            },
        ],
        create: new Date().toLocaleDateString(),
        isActive: true,
    },

    {
        name: "nsivijo",
        email: "ME@gmail",
        issueType: "ME",
        description: "SJVSBVHBHBVHBSVBHVSBJIS",
        remarks: [
            {
                remark: "NJVHSVHVBHSB",
                date: new Date().toLocaleDateString(),
            },
            {
                remark: "sdduvusbuvh",
                date: new Date().toLocaleDateString(),
            },

            {
                remark: "ifiubau",
                date: new Date().toLocaleDateString(),
            },

            {
                remark: "NJVHSVHiwhd8wgy7fgyuwbVBHSB",
                date: new Date().toLocaleDateString(),
            },
            {
                remark: "NJVHSVHiosnvuihuVBHSB",
                date: new Date().toLocaleDateString(),
            },
            {
                remark: "iwjifhub",
                date: new Date().toLocaleDateString(),
            },
        ],
        create: new Date().toLocaleDateString(),
        isActive: true,
    },
    {
        name: "NP",
        email: "ME@gmail",
        issueType: "ME",
        description: "SJVSBVHBHBVHBSVBHVSBJIS",
        remarks: [
            {
                remark: "NJVHSVHVBHSB",
                date: new Date().toLocaleDateString(),
            },
            {
                remark: "sdduvusbuvh",
                date: new Date().toLocaleDateString(),
            },

            {
                remark: "ifiubau",
                date: new Date().toLocaleDateString(),
            },

            {
                remark: "NJVHSVHiwhd8wgy7fgyuwbVBHSB",
                date: new Date().toLocaleDateString(),
            },
            {
                remark: "NJVHSVHiosnvuihuVBHSB",
                date: new Date().toLocaleDateString(),
            },
            {
                remark: "iwjifhub",
                date: new Date().toLocaleDateString(),
            },
        ],
        create: new Date().toLocaleDateString(),
        isActive: true,
    },
    {
        name: "THE",
        email: "ME@gmail",
        issueType: "ME",
        description: "SJVSBVHBHBVHBSVBHVSBJIS",
        remarks: [
            {
                remark: "NJVHSVHVBHSB",
                date: new Date().toLocaleDateString(),
            },
            {
                remark: "sdduvusbuvh",
                date: new Date().toLocaleDateString(),
            },

            {
                remark: "ifiubau",
                date: new Date().toLocaleDateString(),
            },

            {
                remark: "NJVHSVHiwhd8wgy7fgyuwbVBHSB",
                date: new Date().toLocaleDateString(),
            },
            {
                remark: "NJVHSVHiosnvuihuVBHSB",
                date: new Date().toLocaleDateString(),
            },
            {
                remark: "iwjifhub",
                date: new Date().toLocaleDateString(),
            },
        ],
        create: new Date().toLocaleDateString(),
        isActive: true,
    },
    {
        name: "heheh",
        email: "ME@gmail",
        issueType: "ME",
        description: "SJVSBVHBHBVHBSVBHVSBJIS",
        remarks: [
            {
                remark: "NJVHSVHVBHSB",
                date: new Date().toLocaleDateString(),
            },
            {
                remark: "sdduvusbuvh",
                date: new Date().toLocaleDateString(),
            },

            {
                remark: "ifiubau",
                date: new Date().toLocaleDateString(),
            },

            {
                remark: "NJVHSVHiwhd8wgy7fgyuwbVBHSB",
                date: new Date().toLocaleDateString(),
            },
            {
                remark: "NJVHSVHiosnvuihuVBHSB",
                date: new Date().toLocaleDateString(),
            },
            {
                remark: "iwjifhub",
                date: new Date().toLocaleDateString(),
            },
        ],
        create: new Date().toLocaleDateString(),
        isActive: true,
    },

    {
        name: "nsivijo",
        email: "ME@gmail",
        issueType: "ME",
        description: "SJVSBVHBHBVHBSVBHVSBJIS",
        remarks: [
            {
                remark: "NJVHSVHVBHSB",
                date: new Date().toLocaleDateString(),
            },
            {
                remark: "sdduvusbuvh",
                date: new Date().toLocaleDateString(),
            },

            {
                remark: "ifiubau",
                date: new Date().toLocaleDateString(),
            },

            {
                remark: "NJVHSVHiwhd8wgy7fgyuwbVBHSB",
                date: new Date().toLocaleDateString(),
            },
            {
                remark: "NJVHSVHiosnvuihuVBHSB",
                date: new Date().toLocaleDateString(),
            },
            {
                remark: "iwjifhub",
                date: new Date().toLocaleDateString(),
            },
        ],
        create: new Date().toLocaleDateString(),
        isActive: true,
    },
    {
        name: "NP",
        email: "ME@gmail",
        issueType: "ME",
        description: "SJVSBVHBHBVHBSVBHVSBJIS",
        remarks: [
            {
                remark: "NJVHSVHVBHSB",
                date: new Date().toLocaleDateString(),
            },
            {
                remark: "sdduvusbuvh",
                date: new Date().toLocaleDateString(),
            },

            {
                remark: "ifiubau",
                date: new Date().toLocaleDateString(),
            },

            {
                remark: "NJVHSVHiwhd8wgy7fgyuwbVBHSB",
                date: new Date().toLocaleDateString(),
            },
            {
                remark: "NJVHSVHiosnvuihuVBHSB",
                date: new Date().toLocaleDateString(),
            },
            {
                remark: "iwjifhub",
                date: new Date().toLocaleDateString(),
            },
        ],
        create: new Date().toLocaleDateString(),
        isActive: true,
    },
    {
        name: "THE",
        email: "ME@gmail",
        issueType: "ME",
        description: "SJVSBVHBHBVHBSVBHVSBJIS",
        remarks: [
            {
                remark: "NJVHSVHVBHSB",
                date: new Date().toLocaleDateString(),
            },
            {
                remark: "sdduvusbuvh",
                date: new Date().toLocaleDateString(),
            },

            {
                remark: "ifiubau",
                date: new Date().toLocaleDateString(),
            },

            {
                remark: "NJVHSVHiwhd8wgy7fgyuwbVBHSB",
                date: new Date().toLocaleDateString(),
            },
            {
                remark: "NJVHSVHiosnvuihuVBHSB",
                date: new Date().toLocaleDateString(),
            },
            {
                remark: "iwjifhub",
                date: new Date().toLocaleDateString(),
            },
        ],
        create: new Date().toLocaleDateString(),
        isActive: true,
    },
    {
        name: "heheh",
        email: "ME@gmail",
        issueType: "ME",
        description: "SJVSBVHBHBVHBSVBHVSBJIS",
        remarks: [
            {
                remark: "NJVHSVHVBHSB",
                date: new Date().toLocaleDateString(),
            },
            {
                remark: "sdduvusbuvh",
                date: new Date().toLocaleDateString(),
            },

            {
                remark: "ifiubau",
                date: new Date().toLocaleDateString(),
            },

            {
                remark: "NJVHSVHiwhd8wgy7fgyuwbVBHSB",
                date: new Date().toLocaleDateString(),
            },
            {
                remark: "NJVHSVHiosnvuihuVBHSB",
                date: new Date().toLocaleDateString(),
            },
            {
                remark: "iwjifhub",
                date: new Date().toLocaleDateString(),
            },
        ],
        create: new Date().toLocaleDateString(),
        isActive: true,
    },

    {
        name: "nsivijo",
        email: "ME@gmail",
        issueType: "ME",
        description: "SJVSBVHBHBVHBSVBHVSBJIS",
        remarks: [
            {
                remark: "NJVHSVHVBHSB",
                date: new Date().toLocaleDateString(),
            },
            {
                remark: "sdduvusbuvh",
                date: new Date().toLocaleDateString(),
            },

            {
                remark: "ifiubau",
                date: new Date().toLocaleDateString(),
            },

            {
                remark: "NJVHSVHiwhd8wgy7fgyuwbVBHSB",
                date: new Date().toLocaleDateString(),
            },
            {
                remark: "NJVHSVHiosnvuihuVBHSB",
                date: new Date().toLocaleDateString(),
            },
            {
                remark: "iwjifhub",
                date: new Date().toLocaleDateString(),
            },
        ],
        create: new Date().toLocaleDateString(),
        isActive: true,
    },
    {
        name: "NP",
        email: "ME@gmail",
        issueType: "ME",
        description: "SJVSBVHBHBVHBSVBHVSBJIS",
        remarks: [
            {
                remark: "NJVHSVHVBHSB",
                date: new Date().toLocaleDateString(),
            },
            {
                remark: "sdduvusbuvh",
                date: new Date().toLocaleDateString(),
            },

            {
                remark: "ifiubau",
                date: new Date().toLocaleDateString(),
            },

            {
                remark: "NJVHSVHiwhd8wgy7fgyuwbVBHSB",
                date: new Date().toLocaleDateString(),
            },
            {
                remark: "NJVHSVHiosnvuihuVBHSB",
                date: new Date().toLocaleDateString(),
            },
            {
                remark: "iwjifhub",
                date: new Date().toLocaleDateString(),
            },
        ],
        create: new Date().toLocaleDateString(),
        isActive: true,
    },
    {
        name: "THE",
        email: "ME@gmail",
        issueType: "ME",
        description: "SJVSBVHBHBVHBSVBHVSBJIS",
        remarks: [
            {
                remark: "NJVHSVHVBHSB",
                date: new Date().toLocaleDateString(),
            },
            {
                remark: "sdduvusbuvh",
                date: new Date().toLocaleDateString(),
            },

            {
                remark: "ifiubau",
                date: new Date().toLocaleDateString(),
            },

            {
                remark: "NJVHSVHiwhd8wgy7fgyuwbVBHSB",
                date: new Date().toLocaleDateString(),
            },
            {
                remark: "NJVHSVHiosnvuihuVBHSB",
                date: new Date().toLocaleDateString(),
            },
            {
                remark: "iwjifhub",
                date: new Date().toLocaleDateString(),
            },
        ],
        create: new Date().toLocaleDateString(),
        isActive: true,
    },
    {
        name: "heheh",
        email: "ME@gmail",
        issueType: "ME",
        description: "SJVSBVHBHBVHBSVBHVSBJIS",
        remarks: [
            {
                remark: "NJVHSVHVBHSB",
                date: new Date().toLocaleDateString(),
            },
            {
                remark: "sdduvusbuvh",
                date: new Date().toLocaleDateString(),
            },

            {
                remark: "ifiubau",
                date: new Date().toLocaleDateString(),
            },

            {
                remark: "NJVHSVHiwhd8wgy7fgyuwbVBHSB",
                date: new Date().toLocaleDateString(),
            },
            {
                remark: "NJVHSVHiosnvuihuVBHSB",
                date: new Date().toLocaleDateString(),
            },
            {
                remark: "iwjifhub",
                date: new Date().toLocaleDateString(),
            },
        ],
        create: new Date().toLocaleDateString(),
        isActive: true,
    },

    {
        name: "nsivijo",
        email: "ME@gmail",
        issueType: "ME",
        description: "SJVSBVHBHBVHBSVBHVSBJIS",
        remarks: [
            {
                remark: "NJVHSVHVBHSB",
                date: new Date().toLocaleDateString(),
            },
            {
                remark: "sdduvusbuvh",
                date: new Date().toLocaleDateString(),
            },

            {
                remark: "ifiubau",
                date: new Date().toLocaleDateString(),
            },

            {
                remark: "NJVHSVHiwhd8wgy7fgyuwbVBHSB",
                date: new Date().toLocaleDateString(),
            },
            {
                remark: "NJVHSVHiosnvuihuVBHSB",
                date: new Date().toLocaleDateString(),
            },
            {
                remark: "iwjifhub",
                date: new Date().toLocaleDateString(),
            },
        ],
        create: new Date().toLocaleDateString(),
        isActive: true,
    },
    {
        name: "NP",
        email: "ME@gmail",
        issueType: "ME",
        description: "SJVSBVHBHBVHBSVBHVSBJIS",
        remarks: [
            {
                remark: "NJVHSVHVBHSB",
                date: new Date().toLocaleDateString(),
            },
            {
                remark: "sdduvusbuvh",
                date: new Date().toLocaleDateString(),
            },

            {
                remark: "ifiubau",
                date: new Date().toLocaleDateString(),
            },

            {
                remark: "NJVHSVHiwhd8wgy7fgyuwbVBHSB",
                date: new Date().toLocaleDateString(),
            },
            {
                remark: "NJVHSVHiosnvuihuVBHSB",
                date: new Date().toLocaleDateString(),
            },
            {
                remark: "iwjifhub",
                date: new Date().toLocaleDateString(),
            },
        ],
        create: new Date().toLocaleDateString(),
        isActive: true,
    },
    {
        name: "THE",
        email: "ME@gmail",
        issueType: "ME",
        description: "SJVSBVHBHBVHBSVBHVSBJIS",
        remarks: [
            {
                remark: "NJVHSVHVBHSB",
                date: new Date().toLocaleDateString(),
            },
            {
                remark: "sdduvusbuvh",
                date: new Date().toLocaleDateString(),
            },

            {
                remark: "ifiubau",
                date: new Date().toLocaleDateString(),
            },

            {
                remark: "NJVHSVHiwhd8wgy7fgyuwbVBHSB",
                date: new Date().toLocaleDateString(),
            },
            {
                remark: "NJVHSVHiosnvuihuVBHSB",
                date: new Date().toLocaleDateString(),
            },
            {
                remark: "iwjifhub",
                date: new Date().toLocaleDateString(),
            },
        ],
        create: new Date().toLocaleDateString(),
        isActive: true,
    },
    {
        name: "heheh",
        email: "ME@gmail",
        issueType: "ME",
        description: "SJVSBVHBHBVHBSVBHVSBJIS",
        remarks: [
            {
                remark: "NJVHSVHVBHSB",
                date: new Date().toLocaleDateString(),
            },
            {
                remark: "sdduvusbuvh",
                date: new Date().toLocaleDateString(),
            },

            {
                remark: "ifiubau",
                date: new Date().toLocaleDateString(),
            },

            {
                remark: "NJVHSVHiwhd8wgy7fgyuwbVBHSB",
                date: new Date().toLocaleDateString(),
            },
            {
                remark: "NJVHSVHiosnvuihuVBHSB",
                date: new Date().toLocaleDateString(),
            },
            {
                remark: "iwjifhub",
                date: new Date().toLocaleDateString(),
            },
        ],
        create: new Date().toLocaleDateString(),
        isActive: true,
    },

    {
        name: "nsivijo",
        email: "ME@gmail",
        issueType: "ME",
        description: "SJVSBVHBHBVHBSVBHVSBJIS",
        remarks: [
            {
                remark: "NJVHSVHVBHSB",
                date: new Date().toLocaleDateString(),
            },
            {
                remark: "sdduvusbuvh",
                date: new Date().toLocaleDateString(),
            },

            {
                remark: "ifiubau",
                date: new Date().toLocaleDateString(),
            },

            {
                remark: "NJVHSVHiwhd8wgy7fgyuwbVBHSB",
                date: new Date().toLocaleDateString(),
            },
            {
                remark: "NJVHSVHiosnvuihuVBHSB",
                date: new Date().toLocaleDateString(),
            },
            {
                remark: "iwjifhub",
                date: new Date().toLocaleDateString(),
            },
        ],
        create: new Date().toLocaleDateString(),
        isActive: true,
    },
    {
        name: "NP",
        email: "ME@gmail",
        issueType: "ME",
        description: "SJVSBVHBHBVHBSVBHVSBJIS",
        remarks: [
            {
                remark: "NJVHSVHVBHSB",
                date: new Date().toLocaleDateString(),
            },
            {
                remark: "sdduvusbuvh",
                date: new Date().toLocaleDateString(),
            },

            {
                remark: "ifiubau",
                date: new Date().toLocaleDateString(),
            },

            {
                remark: "NJVHSVHiwhd8wgy7fgyuwbVBHSB",
                date: new Date().toLocaleDateString(),
            },
            {
                remark: "NJVHSVHiosnvuihuVBHSB",
                date: new Date().toLocaleDateString(),
            },
            {
                remark: "iwjifhub",
                date: new Date().toLocaleDateString(),
            },
        ],
        create: new Date().toLocaleDateString(),
        isActive: true,
    },
];

export { FAQS, text, data };
