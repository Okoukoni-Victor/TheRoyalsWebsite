import Link  from "next/link";
import { Icon } from "@iconify/react";

export default function FloatingWhatsApp() {
    return(
            <Link href="https://wa.me/2348000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50">
                <div className="flex items-center gap-2 bg-[#46c756] hover:bg-[#38b54a]
                text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300
                hover:scale-105">
                
                    {/* whatsapp Icon */}
                <div className="w-8 h-8 rounded-full bg-white/20
                flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
                >
                    <Icon
                    icon="mdi:whatsapp" 
                    width="20" 
                    height="20"
                     />
                </div>
                {/* text */}
                    <span className="text-sm font-medium whitespace-nowrap">
                        chat with us
                    </span>


                </div>
            </Link>
    )
}