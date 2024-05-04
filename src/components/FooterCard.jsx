
export default function FooterCard({ el }) {
    return (
        <div className="flex flex-col gap-4 flex-1">
            <h3 className=" text-white text-[24px] font-bold">{el.title}</h3>
            <ul className="flex flex-col items-start gap-4">
                {
                    el.links.map(link => (
                        <li className="text-white text-lg sm:leading-[normal]">{link}</li>
                    ))
                }
            </ul>

        </div>
    )
}
