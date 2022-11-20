import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface IProps
{
    link: string,
    icon: ReactNode,
    title: string,
    subject: string
}

export default (props: IProps) =>
{
    return <Link to={props.link} className="py-3 hover:bg-slate-100 h-full border-l last:border-r border-slate-200 pl-5 items-center grid grid-cols-[1fr_4fr] grid-rows-2">
        <div className="row-span-2 text-4xl pr-3">
            {props.icon}
        </div>
        <div>
            {props.title}
        </div>
        <div className="text-xs font-thin">
            {props.subject}
        </div>
    </Link>;
}