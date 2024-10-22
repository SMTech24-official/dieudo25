import { useState } from "react"
import { motion } from "framer-motion"
import axaPartner from '@/assets/axa_partner1-removebg-preview.png'
import swissPartner from '@/assets/swiss_life_partner2-removebg-preview.png'
import zurichPartner from '@/assets/zurich.png'
import DerendingarPartner from '@/assets/Derendinger-partner3-removebg-preview.png'
import bpPartner from '@/assets/bp-logo-partner5-removebg-preview.png'
import Michelin from '@/assets/michelin.png'
import goodYear from '@/assets/goodyear.png'
import bridgePartner from '@/assets/bridge.png'
import shellPartner from '@/assets/shell.png'
import Image, { StaticImageData } from "next/image"

type Partner = {
    name: string
    logo: StaticImageData
    description: string
}

type Category = {
    name: string
    partners: Partner[]
}

const categories: Category[] = [
    {
        name: "Insurance",
        partners: [
            {
                name: "AXA Switzerland",
                logo: axaPartner,
                description: "A leading Swiss insurer providing comprehensive vehicle insurance, including liability and accident coverage.",
            },
            {
                name: "Swiss Life",
                logo: swissPartner,
                description: "Known for life and pension plans, Swiss Life also offers vehicle protection insurance for individuals and businesses.",
            },
            {
                name: "Zurich Insurance Group",
                logo: zurichPartner,
                description: "Zurich offers a wide range of motor insurance products tailored for Swiss customers, including third-party and full coverage plans.",
            },
        ],
    },
    {
        name: "Parts",
        partners: [
            {
                name: "Derendinger AG",
                logo: DerendingarPartner,
                description: "Specializing in car parts and accessories, Derendinger provides reliable automotive solutions to garages.",
            },
        ],
    },
    {
        name: "Tires",
        partners: [
            {
                name: "Michelin",
                logo: Michelin,
                description: "Leading tire manufacturer renowned for durable, energy-efficient tires with advanced technology for superior performance.",
            },
            {
                name: "Goodyear",
                logo: goodYear,
                description: "A globally recognized brand, Goodyear offers innovative tires designed for safety, longevity, and diverse driving conditions.",
            },
            {
                name: "Bridgestone",
                logo: bridgePartner,
                description: "Known for cutting-edge tire technology, Bridgestone delivers high-performance tires for vehicles of all types, ensuring safety and reliability.",
            },
        ],
    }
    ,
    {
        name: "Oil & Lubricants",
        partners: [
            {
                name: "BP Switzerland",
                logo: bpPartner,
                description: "BP provides a range of fuels and lubricants designed for efficient and eco-friendly vehicle performance.",
            },
            {
                name: "Shell Switzerland",
                logo: shellPartner,
                description: "Shell offers premium fuels and lubricants to enhance vehicle performance and longevity, available at their nationwide stations.",
            },
        ],
    },
]

export default function PartnerCategories() {
    const [selectedCategory, setSelectedCategory] = useState(categories[0])

    return (
        <section className="">
            <div className=" h-screen md:h-[500px] lg:h-[400px]">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                        <h3 className="text-xl font-semibold mb-4">Categories</h3>
                        <nav className="space-y-2">
                            {categories.map((category) => (
                                <button
                                    key={category.name}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`w-full text-left px-4 py-2 rounded-md transition-colors duration-200 ${selectedCategory.name === category.name
                                        ? "bg-secondary text-white"
                                        : "bg-white text-gray-700 hover:bg-gray-100"
                                        }`}
                                >
                                    {category.name}
                                </button>
                            ))}
                        </nav>
                    </div>
                    <div className="md:col-span-2">
                        <h3 className="text-xl font-semibold mb-4">{selectedCategory.name} Partners</h3>
                        <div className="space-y-6">
                            {selectedCategory.partners.map((partner) => (
                                <PartnerCard key={partner.name} partner={partner} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function PartnerCard({ partner }: { partner: Partner }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className=" rounded-lg shadow-md flex items-center p-5 group"
        >
            <Image src={partner.logo} alt={`${partner.name} logo`} className="w-24 h-10 object-contain z-20" />
            <div className="z-20">
                <h4 className="text-lg font-semibold">{partner.name}</h4>
                <p className="text-sm text-gray-600">{partner.description}</p>
            </div>
            <span className="absolute inset-0 bg-[#eff2fd] transition-all origin-top-left duration-300 ease-in-out scale-0 group-hover:scale-100 rounded-lg z-0"></span>

        </motion.div>
    )
}