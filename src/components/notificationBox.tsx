import { ReactNode } from "react";

interface IProps
{
    id: string,
    bg: string,
    count: number,
}

export default (props: IProps) =>
{
    if (props.count > 0)
        return (
            <div id={props.id} className={"rounded-full -right-1 -bottom-1 absolute p-1 min-w-[18px] h-[18px] flex items-center justify-center text-white font-boldrounded-full text-xs ".concat(props.bg)}>{props.count}</div>
        );
    else
        return <></>
}